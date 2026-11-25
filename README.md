# Sai Jayanth — Cybersecurity Portfolio

A static, multi-page portfolio built with plain HTML, CSS, and JavaScript. It works with GitHub Pages and does not need a build step or backend.

## Quick start

Run a local static server from the repository root:

```bash
python3 -m http.server 4173
```

Open http://localhost:4173.

To run the browser tests:

```bash
npm install
npx playwright install chromium
npm test
```

## Where to edit things

The project is intentionally separated so future changes stay simple:

| What you want to change | File |
| --- | --- |
| Name, headline, bio, email, social links, location | `assets/js/data.js` → `site` and `about` |
| Experience and internship entries | `assets/js/data.js` → `experience` |
| Skills and tools | `assets/js/data.js` → `skills` |
| Projects and project descriptions | `assets/js/data.js` → `projects` |
| Education | `assets/js/data.js` → `education` |
| Certifications, labs, blog posts, languages | matching arrays in `assets/js/data.js` |
| Page structure, headings, sections, navigation | individual `*.html` files |
| Colors, fonts, base layout, spacing | `assets/css/style.css` |
| Cards, navigation, timeline, buttons | `assets/css/components.css` |
| Mobile layout and reduced-motion rules | `assets/css/responsive.css` |
| Content rendering and safe link handling | `assets/js/main.js` |
| Theme toggle | `assets/js/theme.js` |
| Mobile navigation behavior | `assets/js/navigation.js` |
| Automated browser checks | `tests/portfolio.spec.js` |

## Adding a project

Add another object to the `projects` array in `assets/js/data.js`. Keep the same fields as the existing entries: `name`, `category`, `dates`, `description`, `highlights`, `technologies`, `status`, `github`, and `demo`. Leave links as empty strings until you have real public URLs.

## Adding a certification, lab, or article

Add an object to the relevant array (`certifications`, `labs`, or `blog`). Each card can use `title` or `name`, `date` or `category`, `description`, and `url`. Do not list credentials or achievements that have not been earned or verified.

## Resume link

To show a resume link, place a PDF in the repository (for example `assets/resume/sai-jayanth-resume.pdf`) and set `site.resumePath` in `assets/js/data.js` to that relative path. The resume action stays hidden while the path is empty.

## Design and code organization

- HTML pages are separate and contain page-specific structure.
- CSS is split into base styles, reusable components, and responsive rules.
- JavaScript is split into content data, rendering, theme behavior, and navigation behavior.
- The site uses no framework, bundler, or external runtime dependency.
- User-provided content is HTML-escaped before rendering. External links are limited to HTTP(S) and mailto URLs and use `noopener noreferrer`.

## Deployment

Publish the repository root with GitHub Pages. The canonical public site URL used by the sitemap is:

https://iamzer01-ai.github.io/Website/

Update `robots.txt` and `sitemap.xml` if the site URL changes.
