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

  // ---------- Idiomas (solo web; en la app .web-only lo oculta) ----------
  // La página se traduce en el sitio mismo con el traductor de Google, que se carga
  // solo cuando el visitante elige otro idioma. Su interfaz queda oculta (site.css):
  // se ve el selector y la barra propios. El idioma elegido se recuerda entre páginas
  // (localStorage "manual-lang" + cookie "googtrans" que el traductor lee al cargar).
  const isApp = root.classList.contains('is-app');
  const LANG_KEY = 'manual-lang';
  const langToggle = document.getElementById('langToggle');
  const langMenu = document.getElementById('langMenu');
  const langClose = document.getElementById('langClose');
  const langFilter = document.getElementById('langFilter');
  const langEmpty = document.getElementById('langEmpty');
  const langCode = document.getElementById('langCode');
  const langOptions = [...document.querySelectorAll('.lang-option')];
  const translateBar = document.getElementById('translateBar');
  const optionFor = (code) => langOptions.find((option) => option.dataset.lang === code);
  const nameFor = (code) => {
    const option = optionFor(code);
    return option ? option.querySelector('.lang-name').textContent : code;
  };
  function readLang() {
    let code = 'es';
    try { code = localStorage.getItem(LANG_KEY) || 'es'; } catch (_) { /* sin almacenamiento */ }
    return optionFor(code) ? code : 'es';
  }
  function storeLang(code) {
    try {
      if (code === 'es') localStorage.removeItem(LANG_KEY);
      else localStorage.setItem(LANG_KEY, code);
    } catch (_) { /* el idioma vale solo para esta página */ }
  }
  function setTranslateCookie(code) {
    const expired = 'expires=Thu, 01 Jan 1970 00:00:00 GMT';
    const host = location.hostname;
    for (const domain of ['', `; domain=${host}`, `; domain=.${host}`]) document.cookie = `googtrans=; ${expired}; path=/${domain}`;
    if (code !== 'es') document.cookie = `googtrans=/es/${code}; path=/; SameSite=Lax`;
  }
  function markCurrent(code) {
    langOptions.forEach((option) => {
      if (option.dataset.lang === code) option.setAttribute('aria-current', 'true');
      else option.removeAttribute('aria-current');
    });
    if (langCode) langCode.textContent = code.split('-')[0].toUpperCase();
  }
  function showBar(code, state) {
    if (!translateBar) return;
    if (!code || code === 'es') {
      translateBar.hidden = true;
      body.classList.remove('has-translate-bar');
      return;
    }
    translateBar.querySelectorAll('.tb-lang').forEach((node) => {
      node.textContent = nameFor(code);
      const dir = optionFor(code) && optionFor(code).querySelector('.lang-name').getAttribute('dir');
      if (dir) node.setAttribute('dir', dir); else node.removeAttribute('dir');
    });
    translateBar.dataset.state = state;
    translateBar.hidden = false;
    body.classList.add('has-translate-bar');
  }

  let widgetPromise = null;
  function loadTranslator() {
    if (widgetPromise) return widgetPromise;
    widgetPromise = new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('timeout')), 15000);
      window.manualTranslateInit = () => {
        try {
          new window.google.translate.TranslateElement({ pageLanguage: 'es', autoDisplay: false }, 'googleTranslateHost');
          clearTimeout(timer);
          resolve();
        } catch (error) {
          clearTimeout(timer);
          reject(error);
        }
      };
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=manualTranslateInit';
      script.async = true;
      script.onerror = () => { clearTimeout(timer); reject(new Error('network')); };
      document.head.appendChild(script);
    });
    widgetPromise.catch(() => { widgetPromise = null; });
    return widgetPromise;
  }
  const isTranslated = () => /\btranslated-(?:ltr|rtl)\b/.test(root.className);
  function waitFor(test, timeout) {
    return new Promise((resolve) => {
      const start = Date.now();
      (function poll() {
        const value = test();
        if (value) return resolve(value);
        if (Date.now() - start > timeout) return resolve(null);
        setTimeout(poll, 150);
      })();
    });
  }

  let activeLang = 'es';
  const headingNode = document.querySelector('.prose h1, .hero h1');
  const originalHeading = headingNode ? headingNode.textContent : '';
  async function applyLanguage(code) {
    if (isApp || !optionFor(code)) return;
    setLangMenu(false);
    if (code === 'es') {
      const wasTranslated = activeLang !== 'es' || isTranslated();
      activeLang = 'es';
      storeLang('es');
      setTranslateCookie('es');
      markCurrent('es');
      showBar(null);
      if (wasTranslated) location.reload(); // vuelve al texto original sin rastros del traductor
      return;
    }
    activeLang = code;
    storeLang(code);
    setTranslateCookie(code);
    markCurrent(code);
    showBar(code, 'loading');
    try {
      await loadTranslator();
      const combo = await waitFor(() => {
        const select = document.querySelector('.goog-te-combo');
        return select && select.options.length > 1 ? select : null;
      }, 10000);
      if (combo && combo.value !== code) {
        combo.value = code;
        combo.dispatchEvent(new Event('change', { bubbles: true }));
      }
      // "Listo" cuando el título principal ya cambió (el traductor avanza por partes);
      // si el título coincide en ambas lenguas, basta con unos segundos de margen.
      const heading = document.querySelector('.prose h1, .hero h1');
      const started = await waitFor(() => isTranslated(), 15000);
      const done = started && (await waitFor(() => !heading || heading.textContent !== originalHeading || null, 6000), true);
      if (activeLang !== code) return; // el visitante eligió otro idioma mientras tanto
      showBar(code, done ? 'done' : 'error');
    } catch (_) {
      if (activeLang === code) showBar(code, 'error');
    }
  }

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
      if (!langMenu.hidden && !event.target.closest('.lang-picker, .lang-hint, .translate-bar')) setLangMenu(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !langMenu.hidden) setLangMenu(false, { focusToggle: true });
    });
    langOptions.forEach((option) => option.addEventListener('click', () => applyLanguage(option.dataset.lang)));
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
  if (translateBar) {
    document.getElementById('translateChange').addEventListener('click', (event) => { event.stopPropagation(); setLangMenu(true); });
    document.getElementById('translateOriginal').addEventListener('click', () => applyLanguage('es'));
    document.getElementById('translateRetry').addEventListener('click', () => applyLanguage(activeLang));
  }

  const savedLang = isApp ? 'es' : readLang();
  markCurrent(savedLang);
  if (savedLang !== 'es') applyLanguage(savedLang);

  // Aviso discreto si el navegador prefiere otro idioma disponible (una vez descartado, no vuelve).
  const langHint = document.getElementById('langHint');
  if (langHint && !isApp && savedLang === 'es' && langOptions.length) {
    let dismissed = false;
    try { dismissed = localStorage.getItem('manual-lang-hint') === 'off'; } catch (_) { /* sin almacenamiento */ }
    const available = new Set(langOptions.map((option) => option.dataset.lang));
    const aliases = { he: 'iw', fil: 'tl' };
    const matchLang = (tag) => {
      const [base, region] = String(tag || '').toLowerCase().split('-');
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
    if (target && !dismissed) {
      const go = document.getElementById('langHintLink');
      go.textContent = `${nameFor(target)} →`;
      go.lang = optionFor(target).lang;
      const dir = optionFor(target).querySelector('.lang-name').getAttribute('dir');
      if (dir) go.dir = dir;
      go.setAttribute('aria-label', `${nameFor(target)} · ${optionFor(target).querySelector('small').textContent}`);
      langHint.hidden = false;
      const dismiss = () => {
        langHint.hidden = true;
        try { localStorage.setItem('manual-lang-hint', 'off'); } catch (_) { /* sin almacenamiento */ }
      };
      go.addEventListener('click', () => { dismiss(); applyLanguage(target); });
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
