/**
 * MAIN INJECTION SCRIPT
 * Takes data from data.js and builds the HTML elements on the page.
 */
(() => {
  const data = window.portfolioData;
  const site = data.site;
  
  // Helper functions
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
  const isSafeExternalUrl = url => /^(https?:\/\/|mailto:)/i.test(String(url ?? '').trim());
  const link = (url, label, className = 'button button-small') => isSafeExternalUrl(url) ? `<a class="${className}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${label} ↗</a>` : '';

  // Inject Site Wide Text
  document.querySelectorAll('[data-site-name]').forEach(el => el.textContent = site.name);
  document.querySelectorAll('[data-site-role]').forEach(el => el.textContent = site.role);
  document.querySelectorAll('[data-site-description]').forEach(el => el.textContent = site.description);
  
  // Handle Contact Links
  document.querySelectorAll('[data-site-email]').forEach(el => { 
    if (site.email) { el.textContent = site.email; el.href = `mailto:${site.email}`; } else el.closest('.contact-detail')?.remove(); 
  });
  document.querySelectorAll('[data-site-location]').forEach(el => { 
    if (site.location) el.textContent = site.location; else el.closest('.contact-detail')?.remove(); 
  });
  document.querySelectorAll('[data-social="github"]').forEach(el => { 
    if (site.github) el.href = site.github; else (el.closest('.contact-detail')?.remove() || el.remove()); 
  });
  document.querySelectorAll('[data-social="linkedin"]').forEach(el => { 
    if (site.linkedin) el.href = site.linkedin; else (el.closest('.contact-detail')?.remove() || el.remove()); 
  });

  // Build Project Cards
  function projectCard(project) {
    return `
      <article class="project-card">
        <div class="project-card-top">
          <span class="eyebrow">${esc(project.status)}</span>
          <span class="project-number">${String(data.projects.indexOf(project) + 1).padStart(2, '0')}</span>
        </div>
        <h3>${esc(project.name)}</h3>
        <p>${esc(project.description)}</p>
        <p class="muted">${esc(project.concept)}</p>
        <div class="tag-list">
          ${project.technologies.map(item => `<span class="tag">${esc(item)}</span>`).join('')}
        </div>
        <div class="card-actions" style="margin-top: auto; padding-top: 1.5rem;">
          ${link(project.github, 'GitHub')}
          ${link(project.demo, 'Live demo')}
        </div>
      </article>
    `;
  }

  // Inject Projects
  document.querySelectorAll('[data-projects]').forEach(el => { 
    const items = data.projects; 
    el.innerHTML = items.length ? items.map(projectCard).join('') : '<p class="empty-state">Projects will be added here.</p>'; 
  });
  document.querySelectorAll('[data-featured-projects]').forEach(el => {
    el.innerHTML = data.projects.slice(0, 3).map(projectCard).join('');
  });

  // Build & Inject Skill Groups
  function skillGroup([category, skills]) { 
    return `
      <article class="skill-group">
        <h3>${esc(category)}</h3>
        <ul>
          ${skills.map(([name, level]) => `
            <li><span>${esc(name)}</span><span class="skill-level">${esc(level)}</span></li>
          `).join('')}
        </ul>
      </article>
    `; 
  }
  document.querySelectorAll('[data-skills]').forEach(el => {
    el.innerHTML = Object.entries(data.skills).map(skillGroup).join('');
  });

  // Handle Dynamic Year in Footer
  const year = new Date().getFullYear(); 
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = year);
// --- Custom Animated Cursor Logic ---
  const cursorDot = document.querySelector('[data-cursor-dot]');
  const cursorOutline = document.querySelector('[data-cursor-outline]');

  // Only run if the cursor elements exist on the page
  if (cursorDot && cursorOutline) {
    window.addEventListener('mousemove', function (e) {
      const posX = e.clientX;
      const posY = e.clientY;

      // The inner dot follows the mouse instantly
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      // The outer outline follows with a smooth, trailing animation
      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { 
        duration: 500,        // Speed of the trail (lower is faster)
        fill: "forwards"      // Keeps the circle at the final position
      });
    });
  }
})();