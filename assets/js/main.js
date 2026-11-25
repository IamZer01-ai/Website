(() => {
  "use strict";
  const data = window.portfolioData;
  const text = value => String(value ?? "");
  const escapeHTML = value => text(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  const safeURL = value => {
    const raw = text(value).trim();
    if (!raw || raw === "#") return "";
    try {
      const url = new URL(raw, window.location.href);
      return ["https:", "http:", "mailto:"].includes(url.protocol) ? raw : "";
    } catch (_) { return ""; }
  };
  const externalLink = (value, label, className = "button button-small") => {
    const url = safeURL(value);
    return url ? '<a class="' + className + '" href="' + escapeHTML(url) + '" target="_blank" rel="noopener noreferrer">' + escapeHTML(label) + ' ↗</a>' : "";
  };
  const empty = message => '<p class="empty-state">' + escapeHTML(message) + '</p>';
  const card = (title, subtitle, body, footer = "") =>
    '<article class="info-card"><p class="eyebrow">' + escapeHTML(subtitle) + '</p><h2>' + escapeHTML(title) + '</h2>' + body + footer + '</article>';
  const render = () => {
    if (!data || !data.site) return;
    const site = data.site;
    document.querySelectorAll("[data-site-name]").forEach(el => el.textContent = site.name || "Portfolio");
    document.querySelectorAll("[data-site-full-name]").forEach(el => el.textContent = site.fullName || site.name || "");
    document.querySelectorAll("[data-site-role]").forEach(el => el.textContent = site.role || "");
    document.querySelectorAll("[data-site-description]").forEach(el => el.textContent = site.description || "");
    document.querySelectorAll("[data-about-intro]").forEach(el => el.textContent = data.about?.intro || "");
    document.querySelectorAll("[data-about-summary]").forEach(el => el.textContent = data.about?.summary || "");
    document.querySelectorAll("[data-about-interests]").forEach(el => el.innerHTML = (data.about?.interests || []).map(item => "<li>" + escapeHTML(item) + "</li>").join(""));
    document.querySelectorAll("[data-site-email]").forEach(el => {
      const email = text(site.email).trim();
      if (email) { el.textContent = email; el.href = "mailto:" + email; } else el.closest(".contact-detail")?.remove();
    });
    document.querySelectorAll("[data-site-location]").forEach(el => {
      if (site.location) el.textContent = site.location; else el.closest(".contact-detail")?.remove();
    });
    document.querySelectorAll("[data-social]").forEach(el => {
      const url = safeURL(site[el.dataset.social]);
      if (url) el.href = url; else el.closest(".contact-detail")?.remove() || el.remove();
    });
    document.querySelectorAll("[data-resume-link]").forEach(el => {
      const url = safeURL(site.resumePath);
      if (url) el.href = url; else el.remove();
    });
    document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

    const skills = data.skills || {};
    document.querySelectorAll("[data-skills]").forEach(el => {
      const groups = Object.entries(skills);
      el.innerHTML = groups.length ? groups.map(([group, items]) =>
        '<article class="skill-group"><h3>' + escapeHTML(group) + '</h3><ul>' +
        items.map(item => '<li>' + escapeHTML(item) + '</li>').join("") +
        '</ul></article>').join("") : empty("Skills will be added here.");
    });

    const projects = Array.isArray(data.projects) ? data.projects : [];
    const projectCard = project => {
      const points = Array.isArray(project.highlights) ? '<ul class="project-highlights">' + project.highlights.map(point => '<li>' + escapeHTML(point) + '</li>').join("") + '</ul>' : "";
      const tags = Array.isArray(project.technologies) ? '<div class="tag-list">' + project.technologies.map(item => '<span class="tag">' + escapeHTML(item) + '</span>').join("") + '</div>' : "";
      return '<article class="project-card"><div class="project-card-top"><span>' + escapeHTML(project.category || project.status || "Project") + '</span><span>' + escapeHTML(project.dates || "") + '</span></div><h3>' + escapeHTML(project.name) + '</h3><p>' + escapeHTML(project.description) + '</p>' + points + tags + '<div class="card-actions">' + externalLink(project.github, "Source code") + externalLink(project.demo, "Live demo") + '</div></article>';
    };
    document.querySelectorAll("[data-projects]").forEach(el => el.innerHTML = projects.length ? projects.map(projectCard).join("") : empty("Project details will be published here."));
    document.querySelectorAll("[data-featured-projects]").forEach(el => el.innerHTML = projects.length ? projects.slice(0, 3).map(projectCard).join("") : empty("Project details will be published here."));

    const experience = Array.isArray(data.experience) ? data.experience : [];
    document.querySelectorAll("[data-experience]").forEach(el => el.innerHTML = experience.length ? experience.map(item =>
      '<article class="timeline-item"><span class="timeline-marker" aria-hidden="true"></span><p class="eyebrow">' + escapeHTML(item.type) + ' · ' + escapeHTML(item.dates) + '</p><h2>' + escapeHTML(item.role) + '</h2><p class="timeline-meta"><strong>' + escapeHTML(item.organization) + '</strong> · ' + escapeHTML(item.location) + '</p><ul>' + item.highlights.map(point => '<li>' + escapeHTML(point) + '</li>').join("") + '</ul></article>'
    ).join("") : empty("Experience details will be added here."));

    const education = Array.isArray(data.education) ? data.education : [];
    document.querySelectorAll("[data-education]").forEach(el => el.innerHTML = education.length ? education.map(item =>
      '<article class="timeline-item"><span class="timeline-marker" aria-hidden="true"></span><p class="eyebrow">' + escapeHTML(item.dates) + '</p><h2>' + escapeHTML(item.degree) + '</h2><p><strong>' + escapeHTML(item.institution) + '</strong></p><p class="muted">' + escapeHTML(item.location || "") + '</p></article>'
    ).join("") : empty("Education details will be added here."));

    const simpleLists = [
      ["[data-certifications]", data.certifications, "No certifications have been added yet. Add verified credentials in assets/js/data.js."],
      ["[data-labs]", data.labs, "Lab write-ups will appear here when they are ready to publish."],
      ["[data-blog]", data.blog, "Articles and technical notes will appear here."]
    ];
    simpleLists.forEach(([selector, items, message]) => document.querySelectorAll(selector).forEach(el => {
      el.innerHTML = items && items.length ? items.map(item => card(item.title || item.name, item.date || item.category || "", '<p>' + escapeHTML(item.description || "") + '</p>', externalLink(item.url, "Read more"))).join("") : empty(message);
    }));
    document.querySelectorAll("[data-languages]").forEach(el => el.textContent = (data.languages || []).join(" · "));

    const note = document.getElementById("myNoteBox");
    const noteStatus = document.getElementById("noteStatus");
    if (note) {
      try { note.value = localStorage.getItem("portfolio-note") || ""; }
      catch (_) { if (noteStatus) noteStatus.textContent = "Local storage is unavailable in this browser."; }
      note.addEventListener("input", () => {
        try { localStorage.setItem("portfolio-note", note.value); if (noteStatus) noteStatus.textContent = "Saved on this device."; }
        catch (_) { if (noteStatus) noteStatus.textContent = "Could not save locally in this browser."; }
      });
    }
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render); else render();
})();