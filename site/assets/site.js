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
  // Dentro de la app Android (WebView local) se ocultan los elementos solo-web, como la descarga del APK.
  if (/ManualInversionApp\//.test(navigator.userAgent)) root.classList.add('is-app');
  // En pantallas angostas el texto guía largo del buscador se corta: se usa uno breve.
  if (searchInput && window.matchMedia) {
    const narrow = window.matchMedia('(max-width: 520px)');
    const fullPlaceholder = searchInput.getAttribute('placeholder');
    const setPlaceholder = () => searchInput.setAttribute('placeholder', narrow.matches ? 'Buscar…' : fullPlaceholder);
    setPlaceholder();
    if (narrow.addEventListener) narrow.addEventListener('change', setPlaceholder);
  }
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
    if (meta) meta.setAttribute('content', next === 'dark' ? '#111917' : '#f4f1e9');
  }
  applyTheme(savedTheme);
  if (themeToggle) themeToggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('manual-theme', next); } catch (_) { /* theme still changes for this page */ }
  });

  // ---------- Selector de idioma (solo web; en la app .web-only lo oculta) ----------
  const isApp = root.classList.contains('is-app');
  const langToggle = document.getElementById('langToggle');
  const langMenu = document.getElementById('langMenu');
  const langClose = document.getElementById('langClose');
  const langFilter = document.getElementById('langFilter');
  const langEmpty = document.getElementById('langEmpty');
  const langOptions = [...document.querySelectorAll('.lang-option')];
  // Dentro del proxy de Google la página vive en *.translate.goog y el idioma va en _x_tr_tl.
  const proxied = /\.translate\.goog$/i.test(location.hostname);
  let currentLang = 'es';
  try { if (proxied) currentLang = new URLSearchParams(location.search).get('_x_tr_tl') || 'es'; } catch (_) { /* URL sin parámetros */ }
  langOptions.forEach((option) => {
    if (option.dataset.lang.toLowerCase() === currentLang.toLowerCase()) option.setAttribute('aria-current', 'true');
  });
  const langCode = document.getElementById('langCode');
  if (langCode) langCode.textContent = currentLang.split('-')[0].toUpperCase();

  function setLangMenu(open, { focusToggle = false } = {}) {
    if (!langMenu || !langToggle) return;
    langMenu.hidden = !open;
    langToggle.setAttribute('aria-expanded', String(open));
    if (open) {
      closeSearch();
      // En pantallas táctiles no se abre el teclado sin que la persona lo pida.
      if (langFilter && window.matchMedia && window.matchMedia('(hover: hover)').matches) langFilter.focus();
    } else if (focusToggle) {
      langToggle.focus();
    }
  }
  if (langToggle && langMenu) {
    langToggle.addEventListener('click', (event) => { event.stopPropagation(); setLangMenu(langMenu.hidden); });
    if (langClose) langClose.addEventListener('click', () => setLangMenu(false, { focusToggle: true }));
    document.addEventListener('click', (event) => {
      if (!langMenu.hidden && !event.target.closest('.lang-picker') && !event.target.closest('.lang-hint')) setLangMenu(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !langMenu.hidden) setLangMenu(false, { focusToggle: true });
    });
  }
  if (langFilter) {
    langFilter.addEventListener('input', () => {
      const query = fold(langFilter.value).trim();
      let visible = 0;
      document.querySelectorAll('.lang-group').forEach((group) => {
        let groupVisible = 0;
        group.querySelectorAll('li').forEach((item) => {
          const option = item.querySelector('.lang-option');
          const match = !query || (option && option.dataset.search.includes(query));
          item.hidden = !match;
          if (match) groupVisible += 1;
        });
        group.hidden = groupVisible === 0;
        visible += groupVisible;
      });
      if (langEmpty) langEmpty.hidden = visible > 0;
    });
  }

  // Aviso discreto si el navegador prefiere otro idioma disponible (una vez descartado, no vuelve).
  const langHint = document.getElementById('langHint');
  if (langHint && !isApp && !proxied && langOptions.length) {
    let dismissed = false;
    try { dismissed = localStorage.getItem('manual-lang-hint') === 'off'; } catch (_) { /* sin almacenamiento */ }
    const available = new Set(langOptions.map((option) => option.dataset.lang));
    const aliases = { he: 'iw', fil: 'tl', zh: 'zh-CN' };
    const matchLang = (tag) => {
      const lower = String(tag || '').toLowerCase();
      const [base, region] = lower.split('-');
      if (!base) return null;
      if (base === 'zh') return ['tw', 'hk', 'mo', 'hant'].includes(region) ? 'zh-TW' : 'zh-CN';
      const code = aliases[base] || base;
      return available.has(code) ? code : null;
    };
    const preferred = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
    let target = null;
    for (const tag of preferred) {
      const code = matchLang(tag);
      if (code) { target = code === 'es' ? null : code; break; }
    }
    const option = target && langOptions.find((item) => item.dataset.lang === target);
    if (option && !dismissed) {
      const link = document.getElementById('langHintLink');
      link.href = option.href;
      link.textContent = `${option.querySelector('.lang-name').textContent} →`;
      link.lang = option.lang;
      const nameDir = option.querySelector('.lang-name').getAttribute('dir');
      if (nameDir) link.dir = nameDir;
      link.setAttribute('aria-label', `${option.querySelector('.lang-name').textContent} · ${option.querySelector('small').textContent}`);
      langHint.hidden = false;
      const dismiss = () => {
        langHint.hidden = true;
        try { localStorage.setItem('manual-lang-hint', 'off'); } catch (_) { /* sin almacenamiento */ }
      };
      document.getElementById('langHintClose').addEventListener('click', dismiss);
      document.getElementById('langHintMore').addEventListener('click', (event) => {
        event.stopPropagation();
        dismiss();
        setLangMenu(true);
      });
    }
  }

  function updateProgress() {
    if (!progress) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
    progress.style.width = `${ratio * 100}%`;
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  // Tablas anchas: aviso "Desliza" y difuminado en el borde solo cuando no entran en pantalla.
  const tableWraps = [...document.querySelectorAll('.table-wrap')];
  function updateTable(wrap) {
    const overflow = wrap.scrollWidth > wrap.clientWidth + 2;
    wrap.classList.toggle('has-overflow', overflow);
    wrap.classList.toggle('at-start', wrap.scrollLeft <= 2);
    wrap.classList.toggle('at-end', !overflow || wrap.scrollLeft + wrap.clientWidth >= wrap.scrollWidth - 2);
  }
  tableWraps.forEach((wrap) => {
    updateTable(wrap);
    wrap.addEventListener('scroll', () => updateTable(wrap), { passive: true });
  });
  let resizeFrame = 0;
  window.addEventListener('resize', () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => tableWraps.forEach(updateTable));
  });

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
