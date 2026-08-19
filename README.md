# Jai Portfolio

A production-ready, static personal portfolio for Jai, focused on cybersecurity, ethical hacking, security research, Linux, Python, and security tooling.

## Features

- Responsive multi-page HTML5 site compatible with GitHub Pages
- Centralized editable content configuration
- Light/dark theme with localStorage and system preference support
- Accessible mobile navigation, skip link, focus states, and reduced-motion support
- Data-driven projects, skills, certifications, education, labs, and blog sections
- Graceful empty states for optional content and resume files
- Static-site security hardening with CSP, safe external URL validation, and `security.txt`

## Technology

Vanilla HTML, CSS, and JavaScript. No build step or backend is required.

## Structure

- `index.html`, `about.html`, `projects.html`, `certifications.html`, `education.html`, `labs.html`, `blog.html`, `contact.html`, `404.html`
- `assets/js/data.js`: all personal content and editable entries
- `assets/js/main.js`: shared rendering and content binding
- `assets/js/theme.js`: theme persistence and system preference
- `assets/js/navigation.js`: mobile menu behavior
- `assets/css/`: base tokens, components, and responsive rules
- `assets/resume/`: optional `Jai-Resume.pdf`

## Local development

In GitHub Codespaces, the static server starts automatically after the container starts and port `8000` is forwarded to the browser. The startup command is defined in `.devcontainer/devcontainer.json` and uses `scripts/start-server.sh`.

To start it manually, use:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`.

The launcher is idempotent, so running it again will not create a second server on the same port. Set `PORT=8080` to use a different port.

## Customization

Edit `assets/js/data.js` to add your email, GitHub, LinkedIn, location, resume path, projects, certifications, labs, and blog posts. Empty links are hidden automatically. Add a real PDF at `assets/resume/Jai-Resume.pdf` to enable resume actions. Update the empty canonical URL, Open Graph metadata, `robots.txt`, and `sitemap.xml` once a domain is chosen.

Change the palette and layout tokens in `assets/css/style.css`; component rules live in `assets/css/components.css` and mobile rules in `assets/css/responsive.css`.

## Security

The homepage includes a restrictive same-origin Content Security Policy and referrer policy. Dynamic external links only allow `https:` and `mailto:` schemes, use `noopener noreferrer`, and all configured display values are HTML-escaped before rendering. Report security issues through `.well-known/security.txt` after replacing its placeholder contact address.

## GitHub Pages

Publish the repository root with GitHub Pages using the default static deployment option. No build command is needed. Relative asset paths work from repository pages and custom domains.
