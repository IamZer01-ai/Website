(() => {
  const data = window.portfolioData;
  const site = data.site;
  const $ = selector => document.querySelector(selector);
  const esc = value => String(value ?? '').replace(/[&<>\"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', "'": '&#039;' }[char]));
  const isSafeExternalUrl = url => /^(https?:\/\/|mailto:)/i.test(String(url ?? '').trim());
  const link = (url, label, className = 'button button-small') => isSafeExternalUrl(url) ? `<a class="${className}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${label} ↗</a>` : '';

  document.querySelectorAll('[data-site-name]').forEach(el => el.textContent = site.name);
  document.querySelectorAll('[data-site-role]').forEach(el => el.textContent = site.role);
  document.querySelectorAll('[data-site-description]').forEach(el => el.textContent = site.description);
  document.querySelectorAll('[data-site-email]').forEach(el => { if (site.email) { el.textContent = site.email; el.href = `mailto:${site.email}`; } else el.closest('.contact-detail')?.remove(); });
  document.querySelectorAll('[data-site-location]').forEach(el => { if (site.location) el.textContent = site.location; else el.closest('.contact-detail')?.remove(); });
  document.querySelectorAll('[data-social="github"]').forEach(el => { if (site.github) { el.href = site.github; } else el.closest('.contact-detail')?.remove() || el.remove(); });
  document.querySelectorAll('[data-social="linkedin"]').forEach(el => { if (site.linkedin) { el.href = site.linkedin; } else el.closest('.contact-detail')?.remove() || el.remove(); });

  function projectCard(project) {
    return `<article class="project-card"><div class="project-card-top"><span class="eyebrow">${esc(project.status)}</span><span class="project-number">${String(data.projects.indexOf(project) + 1).padStart(2, '0')}</span></div><h3>${esc(project.name)}</h3><p>${esc(project.description)}</p><p class="muted">${esc(project.concept)}</p><div class="tag-list">${project.technologies.map(item => `<span class="tag">${esc(item)}</span>`).join('')}</div><details class="project-details"><summary>Details</summary><p>${esc(project.concept)}</p></details><div class="card-actions">${link(project.github, 'GitHub')}${link(project.demo, 'Live demo')}</div></article>`;
  }
  document.querySelectorAll('[data-projects]').forEach(el => { const items = data.projects; el.innerHTML = items.length ? items.map(projectCard).join('') : '<p class="empty-state">Projects will be added here.</p>'; });
  document.querySelectorAll('[data-featured-projects]').forEach(el => el.innerHTML = data.projects.slice(0, 3).map(projectCard).join(''));

  function skillGroup([category, skills]) { return `<article class="skill-group"><h3>${esc(category)}</h3><ul>${skills.map(([name, level]) => `<li><span>${esc(name)}</span><span class="skill-level">${esc(level)}</span></li>`).join('')}</ul></article>`; }
  document.querySelectorAll('[data-skills]').forEach(el => el.innerHTML = Object.entries(data.skills).map(skillGroup).join(''));

  document.querySelectorAll('[data-certifications]').forEach(el => { el.innerHTML = data.certifications.length ? data.certifications.map(cert => `<article class="info-card"><h3>${esc(cert.name)}</h3><p>${esc(cert.issuer)}${cert.date ? ` · ${esc(cert.date)}` : ''}</p>${link(cert.url, 'View credential', 'text-link')}</article>`).join('') : '<p class="empty-state">Certifications will be added here.</p>'; });
  document.querySelectorAll('[data-education]').forEach(el => el.innerHTML = data.education.map(item => `<article class="timeline-item"><span class="timeline-marker"></span><div><h3>${esc(item.degree)}</h3><p>${esc(item.institution || 'Institution to be added')}${item.date ? ` · ${esc(item.date)}` : ''}</p>${item.details ? `<p class="muted">${esc(item.details)}</p>` : ''}</div></article>`).join(''));
  document.querySelectorAll('[data-labs]').forEach(el => { el.innerHTML = data.labs.length ? data.labs.map(lab => `<article class="info-card"><span class="eyebrow">${esc(lab.category)}</span><h3>${esc(lab.name)}</h3><p>${esc(lab.platform)} · ${esc(lab.difficulty || 'Difficulty to be added')}</p><p class="muted">${esc(lab.status || 'Status to be added')}</p>${link(lab.writeup, 'Read write-up', 'text-link')}</article>`).join('') : '<p class="empty-state">Practice logs will be added here.</p>'; });
  document.querySelectorAll('[data-blog]').forEach(el => { el.innerHTML = data.blog.length ? data.blog.map(post => `<article class="info-card"><span class="eyebrow">${esc(post.category)} · ${esc(post.date)}</span><h3>${esc(post.title)}</h3><p>${esc(post.description)}</p>${link(post.url, 'Read article', 'text-link')}</article>`).join('') : '<p class="empty-state">No articles published yet.</p>'; });

  const resume = document.querySelector('[data-resume]');
  if (resume && site.resumePath && !site.resumePath.includes('..')) { fetch(site.resumePath, { method: 'HEAD' }).then(response => { if (response.ok) resume.innerHTML = `<a class="button" href="${esc(site.resumePath)}" download>Download resume</a><a class="button button-secondary" href="${esc(site.resumePath)}" target="_blank" rel="noopener noreferrer">View resume</a>`; }).catch(() => {}); }
  const year = new Date().getFullYear(); document.querySelectorAll('[data-year]').forEach(el => el.textContent = year);
})();
