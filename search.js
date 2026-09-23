(() => {
  const index = window.siteSearchIndex || [];
  const input = document.querySelector('.site-search-input');
  const panel = document.querySelector('.site-search-results');
  if (!input || !panel) return;

  const script = document.currentScript;
  const siteRoot = script && script.src ? script.src.replace(/search\.js(?:\?.*)?$/, '') : '../';

  const normalise = value => (value || '').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();

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
  }

  input.addEventListener('input', event => render(event.target.value));
  input.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeResults();
    if (event.key === 'Enter'){
      const first = panel.querySelector('.search-result');
      if (first) first.click();
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-search')) closeResults();
  });
})();