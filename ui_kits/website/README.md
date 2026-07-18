# Naja Projects Website UI Kit

Interactive click-through recreation of the Naja Projects marketing site (source: `ND-NAJA/naja-Projects-website`).

- `index.html` — mounts `App`, a tiny client-side router over six screens (Home, Tech, Coaching, Build, Pipeline, Contact), plus the persistent Nav/Footer/CookieBanner.
- `Screens1.jsx` — Home, Tech, and the shared `CtaSection`.
- `Screens2.jsx` — Coaching, Build, Pipeline, Contact.

Click any nav link or in-page CTA to navigate between screens. The cookie banner opens after ~600ms and can be reopened via the footer's "Cookie settings" link, matching the real site's behavior (no backend — Accept/Decline just dismiss it here).
