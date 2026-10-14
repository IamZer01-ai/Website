(() => {
  const safeText = value => String(value ?? '');
  const escapeHTML = value => safeText(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeURL = value => {
    const url = safeText(value).trim();
    if (!url || url === '#') return '';
    try { const parsed = new URL(url, window.location.href); return ['https:','http:','mailto:'].includes(parsed.protocol) ? url : ''; } catch (_) { return ''; }
  };
  const externalLink = (url, label, cls = 'button button-small') => {
    const safe = safeURL(url);
    return safe ? '<a class="' + cls + '" href="' + escapeHTML(safe) + '" target="_blank" rel="noopener noreferrer">' + label + ' ↗</a>' : '';
  };
  const init = () => {
    const data = window.portfolioData;
    if (!data || !data.site) {
      document.querySelectorAll('[data-featured-projects],[data-projects],[data-skills]').forEach(el => { el.innerHTML = '<p class="empty-state">Content could not load. Please refresh and try again.</p>'; });
      return;
    }
    const site = data.site;
    document.querySelectorAll('[data-site-name]').forEach(el => el.textContent = site.name || 'Jai');
    document.querySelectorAll('[data-site-role]').forEach(el => el.textContent = site.role || 'Cybersecurity Professional');
    document.querySelectorAll('[data-site-description]').forEach(el => el.textContent = site.description || '');
    document.querySelectorAll('[data-site-email]').forEach(el => {
      const email = safeText(site.email).trim();
      if (email) { el.textContent = email; el.href = 'mailto:' + email; }
      else el.closest('.contact-detail')?.remove();
    });
    document.querySelectorAll('[data-site-location]').forEach(el => { if (site.location) el.textContent = site.location; else el.closest('.contact-detail')?.remove(); });
    document.querySelectorAll('[data-social="github"]').forEach(el => { const url = safeURL(site.github); if (url) el.href = url; else el.remove(); });
    document.querySelectorAll('[data-social="linkedin"]').forEach(el => { const url = safeURL(site.linkedin); if (url) el.href = url; else el.remove(); });
    const projects = Array.isArray(data.projects) ? data.projects : [];
    const projectCard = (project, index) => '<article class="project-card"><div class="project-card-top"><span>' + escapeHTML(project.status || 'Project') + '</span><span class="project-number">' + String(index + 1).padStart(2,'0') + '</span></div><h3>' + escapeHTML(project.name) + '</h3><p>' + escapeHTML(project.description) + '</p><p class="muted">' + escapeHTML(project.concept) + '</p><div class="tag-list">' + (Array.isArray(project.technologies) ? project.technologies : []).map(item => '<span class="tag">' + escapeHTML(item) + '</span>').join('') + '</div><div class="card-actions">' + externalLink(project.github, 'GitHub') + externalLink(project.demo, 'Live demo') + '</div></article>';
    document.querySelectorAll('[data-projects]').forEach(el => { el.innerHTML = projects.length ? projects.map(projectCard).join('') : '<p class="empty-state">Projects will be added here.</p>'; });
    document.querySelectorAll('[data-featured-projects]').forEach(el => { el.innerHTML = projects.length ? projects.slice(0,3).map(projectCard).join('') : '<p class="empty-state">Projects will be added here.</p>'; });
    const skills = data.skills && typeof data.skills === 'object' ? data.skills : {};
    document.querySelectorAll('[data-skills]').forEach(el => {
      const groups = Object.entries(skills);
      el.innerHTML = groups.length ? groups.map(([category, items]) => '<article class="skill-group"><h3>' + escapeHTML(category) + '</h3><ul>' + items.map(item => '<li><span>' + escapeHTML(item[0]) + '</span><span class="skill-level">' + escapeHTML(item[1]) + '</span></li>').join('') + '</ul></article>').join('') : '<p class="empty-state">Skills will be added here.</p>';
    });
    document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
    const note = document.getElementById('myNoteBox');
    const noteStatus = document.getElementById('noteStatus');
    if (note) {
      try { note.value = localStorage.getItem('portfolio-note') || ''; } catch (_) { if (noteStatus) noteStatus.textContent = 'Local storage is unavailable in this browser.'; }
      note.addEventListener('input', () => {
        try { localStorage.setItem('portfolio-note', note.value); if (noteStatus) noteStatus.textContent = 'Saved on this device.'; }
        catch (_) { if (noteStatus) noteStatus.textContent = 'Could not save locally in this browser.'; }
      });
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();