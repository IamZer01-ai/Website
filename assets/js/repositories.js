(() => {
  "use strict";
  const data = window.portfolioData;
  const target = document.querySelector("[data-repositories]");
  if (!target || !data) return;

  const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));

  const safeURL = value => {
    try {
      const url = new URL(String(value ?? ""));
      return ["https:", "http:"].includes(url.protocol) ? url.href : "";
    } catch (_) {
      return "";
    }
  };

  const items = Array.isArray(data.repositories) ? data.repositories : [];
  if (!items.length) {
    target.innerHTML = '<p class="empty-state">Public repository details will appear here.</p>';
    return;
  }

  target.innerHTML = items.map(item => {
    const highlights = Array.isArray(item.highlights)
      ? '<ul class="project-highlights">' + item.highlights.map(point => '<li>' + escapeHTML(point) + '</li>').join("") + '</ul>'
      : "";
    const technologies = Array.isArray(item.technologies)
      ? '<div class="tag-list">' + item.technologies.map(tag => '<span class="tag">' + escapeHTML(tag) + '</span>').join("") + '</div>'
      : "";
    const url = safeURL(item.url);
    const link = url
      ? '<div class="card-actions"><a class="button button-small" href="' + escapeHTML(url) + '" target="_blank" rel="noopener noreferrer">View repository ↗</a></div>'
      : "";
    return '<article class="project-card"><div class="project-card-top"><span>' + escapeHTML(item.category || "Repository") + '</span><span>' + escapeHTML(item.status || "") + '</span></div><h3>' + escapeHTML(item.name) + '</h3><p>' + escapeHTML(item.description) + '</p>' + highlights + technologies + link + '</article>';
  }).join("");
})();