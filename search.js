(() => {
  const index = window.siteSearchIndex || [];
  const input = document.querySelector('.site-search-input');
  const panel = document.querySelector('.site-search-results');
  if (!input || !panel) return;

  const script = document.currentScript;
  const siteRoot = script && script.src ? script.src.replace(/search\.js(?:\?.*)?$/, '') : '../';

  document.body.appendChild(panel);

  const normalise = value => (value || '').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();

  function positionPanel(){
    if (panel.hidden) return;
    const rect = input.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const width = Math.min(430, Math.max(330, rect.width + 70), viewportWidth - 24);
    const left = Math.max(12, Math.min(rect.right - width, viewportWidth - width - 12));
    panel.style.width = width + 'px';
    panel.style.left = left + 'px';
    panel.style.top = (rect.bottom + 8) + 'px';
  }

  function closeResults(){
    panel.hidden = true;
    panel.innerHTML = '';
    input.setAttribute('aria-expanded','false');
  }

  function openResult(item){
    window.location.href = siteRoot + item.url;
  }

  function render(query){
    const q = normalise(query);
    if (!q){
      closeResults();
      return;
    }

    const terms = q.split(/\s+/).filter(Boolean);
    const matches = index.map(item => {
      const title = normalise(item.title);
      const tags = normalise((item.tags || []).join(' '));
      const summary = normalise(item.summary);
      const type = normalise(item.type);
      const haystack = [title,tags,summary,type].join(' ');
      if (!terms.every(term => haystack.includes(term))) return null;

      let score = 0;
      terms.forEach(term => {
        if (title.includes(term)) score += 6;
        if (tags.includes(term)) score += 4;
        if (type.includes(term)) score += 2;
        if (summary.includes(term)) score += 1;
      });
      return {item,score};
    }).filter(Boolean).sort((a,b) => b.score-a.score || a.item.title.localeCompare(b.item.title)).slice(0,8);

    panel.innerHTML = '';
    if (!matches.length){
      panel.innerHTML = '<div class="search-empty">No matching pages found.</div>';
    } else {
      matches.forEach(({item}) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'search-result';
        const tagPreview = (item.tags || []).slice(0,3).map(tag => '<span>'+tag+'</span>').join('');
        button.innerHTML =
          '<strong>'+item.title+'</strong>'+
          '<small>'+item.type+'</small>'+
          '<p>'+item.summary+'</p>'+
          '<div class="search-result-tags">'+tagPreview+'</div>';
        button.addEventListener('click', () => openResult(item));
        panel.appendChild(button);
      });
    }

    panel.hidden = false;
    input.setAttribute('aria-expanded','true');
    positionPanel();
  }

  function renderPageTags(){
    const sidebar = document.querySelector('.issue-side');
    if (!sidebar) return;

    const currentPath = window.location.pathname.replace(/\/+$/, '');
    const currentItem = index.find(item => {
      const itemPath = new URL(item.url, siteRoot).pathname.replace(/\/+$/, '');
      return itemPath === currentPath;
    });

    const existing = sidebar.querySelector('.tag-panel');
    const existingDivider = existing && existing.previousElementSibling && existing.previousElementSibling.classList.contains('sidebar-divider')
      ? existing.previousElementSibling
      : null;

    if (!currentItem || !currentItem.tags || !currentItem.tags.length){
      if (existing) existing.remove();
      if (existingDivider) existingDivider.remove();
      return;
    }

    if (existing) existing.remove();
    if (existingDivider) existingDivider.remove();

    const divider = document.createElement('div');
    divider.className = 'sidebar-divider';

    const details = document.createElement('details');
    details.className = 'tag-panel';

    const summary = document.createElement('summary');
    summary.innerHTML = 'Page Tags <span>Click to view</span>';

    const list = document.createElement('div');
    list.className = 'tag-list';

    currentItem.tags.forEach(tag => {
      const chip = document.createElement('span');
      chip.className = 'tag-chip';
      chip.textContent = tag;
      list.appendChild(chip);
    });

    details.append(summary, list);
    sidebar.append(divider, details);
  }

  renderPageTags();

  input.addEventListener('input', event => render(event.target.value));
  input.addEventListener('focus', () => {
    if (input.value.trim()) render(input.value);
  });
  input.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeResults();
    if (event.key === 'Enter'){
      const first = panel.querySelector('.search-result');
      if (first) first.click();
    }
  });

  window.addEventListener('resize', positionPanel);
  window.addEventListener('scroll', positionPanel, {passive:true});

  document.addEventListener('click', event => {
    if (!event.target.closest('.site-search') && !panel.contains(event.target)) closeResults();
  });
})();