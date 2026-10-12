(function () {
  'use strict';

  const root = document.documentElement;
  const body = document.body;
  const searchInput = document.getElementById('siteSearch');
  const searchResults = document.getElementById('searchResults');
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const sidebarClose = document.getElementById('sidebarClose');
  const mobileScrim = document.getElementById('mobileScrim');
  const themeToggle = document.getElementById('themeToggle');
  const progress = document.getElementById('readingProgress');
  const searchIndex = Array.isArray(window.MANUAL_SEARCH_INDEX) ? window.MANUAL_SEARCH_INDEX.map((document) => ({
    ...document,
    foldedTitle: fold(document.title),
    foldedSection: fold(document.section),
    foldedText: fold(document.text),
  })) : [];

  function fold(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }
  function escapeHtml(value) {
    return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function closeSearch() {
    if (!searchResults || !searchInput) return;
    searchResults.hidden = true;
    searchInput.setAttribute('aria-expanded', 'false');
  }
  function showSearch() {
    if (!searchResults || !searchInput) return;
    searchResults.hidden = false;
    searchInput.setAttribute('aria-expanded', 'true');
  }
  function excerptFor(document, tokens) {
    const source = document.text || '';
    const foldedSource = document.foldedText || fold(source);
    const positions = tokens.map((token) => foldedSource.indexOf(token)).filter((position) => position >= 0);
    const at = positions.length ? Math.min(...positions) : 0;
    const start = Math.max(0, at - 66);
    const end = Math.min(source.length, start + 175);
    return `${start > 0 ? '…' : ''}${source.slice(start, end)}${end < source.length ? '…' : ''}`;
  }
  function renderSearch() {
    if (!searchInput || !searchResults) return;
    const query = fold(searchInput.value).trim();
    if (query.length < 2) {
      searchResults.innerHTML = '<p class="search-hint">Escribe al menos dos letras para buscar.</p>';
      showSearch();
      return;
    }
    const tokens = query.split(/\s+/).filter(Boolean);
    const matches = searchIndex.map((document) => {
      const title = document.foldedTitle;
      const section = document.foldedSection;
      const text = document.foldedText;
      const allMatch = tokens.every((token) => title.includes(token) || section.includes(token) || text.includes(token));
      if (!allMatch) return null;
      const titleScore = tokens.reduce((score, token) => score + (title.includes(token) ? 4 : 0), 0);
      const sectionScore = tokens.reduce((score, token) => score + (section.includes(token) ? 2 : 0), 0);
      const textScore = tokens.reduce((score, token) => score + (text.includes(token) ? 1 : 0), 0);
      return { document, score: titleScore + sectionScore + textScore };
    }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, 8);

    if (!matches.length) {
      searchResults.innerHTML = `<p class="search-empty">No encontré coincidencias para <strong>${escapeHtml(searchInput.value.trim())}</strong>.</p>`;
      showSearch();
      return;
    }
    searchResults.innerHTML = `<p class="search-hint">${matches.length} resultado${matches.length === 1 ? '' : 's'} · usa ↑ ↓ y Enter</p>${matches.map(({ document }) => `<a class="search-result" role="option" href="${escapeHtml(document.href)}"><small>${escapeHtml(document.section)}${document.number ? ` · Capítulo ${document.number}` : ''}</small><strong>${escapeHtml(document.title)}</strong><span>${escapeHtml(excerptFor(document, tokens))}</span></a>`).join('')}`;
    showSearch();
  }

  if (searchInput && searchResults) {
    searchInput.setAttribute('aria-controls', 'searchResults');
    searchInput.setAttribute('aria-expanded', 'false');
    searchInput.addEventListener('focus', () => { if (searchInput.value.trim().length >= 2) renderSearch(); });
    searchInput.addEventListener('input', renderSearch);
    searchInput.addEventListener('keydown', (event) => {
      const options = [...searchResults.querySelectorAll('.search-result')];
      const current = options.indexOf(document.activeElement);
      if (event.key === 'Escape') { closeSearch(); searchInput.blur(); }
      if (event.key === 'ArrowDown' && options.length) { event.preventDefault(); options[Math.min(current + 1, options.length - 1)].focus(); }
      if (event.key === 'Enter' && options.length) { event.preventDefault(); options[0].click(); }
    });
    searchResults.addEventListener('keydown', (event) => {
      const options = [...searchResults.querySelectorAll('.search-result')];
      const current = options.indexOf(document.activeElement);
      if (event.key === 'ArrowDown' && options.length) { event.preventDefault(); options[Math.min(current + 1, options.length - 1)].focus(); }
      if (event.key === 'ArrowUp') { event.preventDefault(); if (current <= 0) searchInput.focus(); else options[current - 1].focus(); }
      if (event.key === 'Escape') { closeSearch(); searchInput.focus(); }
    });
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.search-box')) closeSearch();
    });
    document.addEventListener('keydown', (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault(); searchInput.focus(); searchInput.select();
      }
    });
  }

  function setNavigation(open) {
    body.classList.toggle('nav-open', open);
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Cerrar navegación' : 'Abrir navegación');
    }
    if (open && sidebarClose) sidebarClose.focus();
    if (!open && menuToggle) menuToggle.focus();
  }
  if (menuToggle) menuToggle.addEventListener('click', () => setNavigation(!body.classList.contains('nav-open')));
  if (sidebarClose) sidebarClose.addEventListener('click', () => setNavigation(false));
  if (mobileScrim) mobileScrim.addEventListener('click', () => setNavigation(false));
  if (sidebar) sidebar.addEventListener('click', (event) => {
    if (event.target.closest('a') && window.matchMedia && window.matchMedia('(max-width: 850px)').matches) body.classList.remove('nav-open');
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && body.classList.contains('nav-open')) setNavigation(false);
  });

  let savedTheme = 'dark';
  try { savedTheme = localStorage.getItem('manual-theme') || 'dark'; } catch (_) { /* file:// storage can be unavailable */ }
  function applyTheme(theme) {
    const next = theme === 'light' ? 'light' : 'dark';
    root.dataset.theme = next;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', next === 'dark' ? '#171f1d' : '#f1eee5');
  }
  applyTheme(savedTheme);
  if (themeToggle) themeToggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('manual-theme', next); } catch (_) { /* theme still changes for this page */ }
  });

  function updateProgress() {
    if (!progress) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
    progress.style.width = `${ratio * 100}%`;
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  const tocLinks = [...document.querySelectorAll('.contents-panel a[href^="#"]')];
  if ('IntersectionObserver' in window && tocLinks.length) {
    const linkById = new Map(tocLinks.map((link) => [decodeURIComponent(link.hash.slice(1)), link]));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        tocLinks.forEach((link) => link.classList.remove('is-current'));
        const link = linkById.get(entry.target.id);
        if (link) link.classList.add('is-current');
      }
    }, { rootMargin: '-15% 0px -72% 0px' });
    linkById.forEach((_, id) => { const heading = document.getElementById(id); if (heading) observer.observe(heading); });
  }
})();
