# Naja Projects — Website

Marketing site for Naja Projects, a venture studio running four things:
**Portal** (business platform), **Coaching**, **Build** (project development), and
an early-stage **Pipeline** of smaller ventures.

## File structure

```
naja-projects-website/
├── index.html          Home page
├── portal.html          Naja Portal (the business platform)
├── coaching.html         Naja Coaching
├── build.html            Naja Build (project development)
├── pipeline.html          Early-stage ventures
├── contact.html          Contact page (mailto links, no backend)
├── css/
│   └── style.css         Shared stylesheet for all pages
├── js/
│   └── script.js         Shared script (scroll reveal + mobile nav)
└── README.md              This file
```

Every page is a standalone HTML file that links to the same `css/style.css`
and `js/script.js`, so there's no build step — it's plain HTML/CSS/JS.

## Running it locally

Just open `index.html` in a browser, or serve the folder with any static
server, e.g.:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploying on GitHub Pages

1. Create a new GitHub repository called `naja-projects-website` (or your
   preferred name).
2. Push all files in this folder to the repository root — keep the folder
   structure exactly as-is (`css/`, `js/`, and the `.html` files at the top
   level).
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`,
   pick the `main` branch and `/ (root)` folder, then **Save**.
5. GitHub will publish the site at:
   `https://<your-username>.github.io/naja-projects-website/`
   (it can take a minute or two the first time).

If you'd rather use a custom domain, add a `CNAME` file at the repo root
containing your domain, and set up the DNS records GitHub's Pages docs
describe.

## Contact form

The Contact page currently uses plain `mailto:` links (no backend, no
third-party service) — clicking a contact link opens the visitor's own
email client with the address pre-filled. If you later want a real
in-page form that emails you without opening the visitor's mail app,
a service like Formspree can be dropped into `contact.html` — just say
the word.

## Things to double check before launch

- **Email addresses**: `hello@`, `coaching@`, and `build@naja-projects.com`
  in `contact.html` are placeholders — swap them for your real inboxes.
- **Domain**: replace any references to `naja-projects.com` if your actual
  domain is different.
- **Favicon**: no favicon is included yet — drop a `favicon.ico` (or `.svg`)
  in the root and link it from each page's `<head>` if you'd like one.
