# Naja Projects — Website

Marketing site for Naja Projects, a venture studio running four things:
**Portal** (business platform), **Coaching**, **Build** (project development), and
an early-stage **Pipeline** of smaller ventures.

## File structure

```
naja-projects-website/
├── index.html              Home page
├── portal/index.html        Naja Portal (the business platform)
├── coaching/index.html       Naja Coaching
├── build/index.html          Naja Build (project development)
├── pipeline/index.html        Early-stage ventures
├── contact/index.html         Contact page (mailto links, no backend)
├── privacy/index.html         Cookies & privacy explainer (linked from the cookie banner)
├── css/
│   └── style.css              Shared stylesheet for all pages
├── js/
│   └── script.js               Shared script (scroll reveal + mobile nav)
├── assets/
│   ├── logo-icon-navy.png        Square logo mark, navy background (used in nav)
│   ├── logo-icon-transparent.png  Square logo mark, transparent background
│   ├── logo-full-navy-bg.png      Full lockup, navy background (as supplied)
│   ├── logo-full-transparent.png  Full lockup, transparent background (as supplied)
│   ├── favicon-32.png / favicon-16.png / apple-touch-icon.png
├── favicon.ico
└── README.md                  This file
```

Every page is a standalone HTML file that links to the same `/css/style.css`
and `/js/script.js`, so there's no build step — it's plain HTML/CSS/JS.

### Clean URLs (no `.html`)

Each section lives in its own folder as `index.html` (e.g. `portal/index.html`),
so visiting `/portal/` serves that page directly — no `.html` in the address
bar. This works out of the box on GitHub Pages with no extra configuration.
All internal links use root-relative paths (starting with `/`), so they work
correctly whether you're on the home page or three folders deep.

## Brand colors

Pulled directly from the supplied logo files:

| Token | Hex | Used for |
|---|---|---|
| Navy (`--bg` / `--bg-panel`) | `#051D3D` / `#0A2C56` | Backgrounds, header, footer |
| Orange (`--gold`) | `#E96015` | Primary buttons, accents |
| White (`--paper`) | `#FFFFFF` | Light section backgrounds |

## Running it locally

Serve the folder with any static server so the clean-URL folders resolve
correctly, e.g.:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`. (Opening `index.html` directly by
double-clicking will work for the home page, but the `/portal/`-style links
need an actual server to resolve properly.)

## Deploying on GitHub Pages

1. Create a new GitHub repository called `naja-projects-website` (or your
   preferred name).
2. Push all files in this folder to the repository root — keep the folder
   structure exactly as-is (`css/`, `js/`, `assets/`, and the section folders
   at the top level).
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`,
   pick the `main` branch and `/ (root)` folder, then **Save**.
5. GitHub will publish the site at:
   `https://<your-username>.github.io/naja-projects-website/`
   (it can take a minute or two the first time).

If you're using a custom domain (e.g. `naja-projects.com`), set it under
**Settings → Pages → Custom domain** — this creates a `CNAME` file at the
repo root automatically. Don't delete that file.

## Contact form

The Contact page currently uses plain `mailto:` links (no backend, no
third-party service) — clicking a contact link opens the visitor's own
email client with the address pre-filled.

## Cookie consent & analytics

Every page shows a small cookie-consent popup (bottom-right corner) the first
time someone visits, asking whether they're OK with analytics cookies. It's
handled entirely in `js/script.js` and `css/style.css` — no HTML was duplicated
across pages for it.

- **Accept** → sets `localStorage['naja_cookie_consent'] = 'accepted'` and
  loads Google Analytics.
- **Decline** → sets it to `'declined'` and nothing else happens — no
  analytics script loads.
- Choice is remembered (via `localStorage`), so the banner won't show again
  until it's cleared.
- Every page footer has a **"Cookie settings"** link that clears the stored
  choice and re-opens the banner, so visitors can change their mind later.
- `/privacy/` is a short plain-language page explaining what's collected,
  linked from the banner and the footer.

### Turning on Google Analytics

Analytics is wired up but **inactive by default** — it only activates once you
plug in a real Measurement ID. In `js/script.js`, find:

```js
function loadAnalytics() {
  var GA_MEASUREMENT_ID = 'G-XXXXXXX';
```

Replace `'G-XXXXXXX'` with your actual GA4 Measurement ID (from
analytics.google.com → Admin → Data Streams). Until you do, the function
exits early and nothing loads — even for visitors who click Accept.

## Things to double check before launch

- **Email addresses**: `hello@`, `coaching@`, and `build@naja-projects.com`
  in `contact/index.html` are placeholders — swap them for your real inboxes.
- **Domain**: replace any references to `naja-projects.com` if your actual
  domain is different.
