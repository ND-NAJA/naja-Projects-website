# Naja Projects Design System

Naja Projects is a venture studio running four things under one roof: **Portal** (a
business operating-system platform), **Coaching** (one-on-one founder coaching),
**Build** (real-estate / timber-frame project development), and an early-stage
**Pipeline** of smaller ventures. The tagline across the site: *"We draft the plan.
Then we build the company."* / *"Drawn & built, not just planned."*

This design system is built from the company's live marketing website (the only
product surface with source available at build time).

## Sources

- GitHub: [`ND-NAJA/naja-Projects-website`](https://github.com/ND-NAJA/naja-Projects-website) — full site source (HTML/CSS/JS, no framework). Explore it further for more detail on copy, structure, and edge cases than is captured here.
- Uploaded brand files: `Naja_Projects_transparant.png`, `Naja_Projects_blauwe_achtergrond.png`, `Naja_Projects_witte_achtergrond.png` (full logo lockup, 3 background variants).

No Figma file or app codebase was provided, so this system covers the marketing
site only — no mobile app or Portal product UI could be recreated (that platform's
own interface wasn't in scope of the attached repo).

## Content fundamentals

- **Voice**: direct, confident, a little terse — short declarative sentences, no hedging. "We draft the plan. Then we build the company." "You don't need another course. You need a second opinion."
- **Person**: mixes second person ("Book a coaching call", "you're stuck at") with first-person-plural studio voice ("We source land, structure the financing, and build").
- **Casing**: sentence case in headlines and body copy; UPPERCASE only for mono/label text (eyebrows, nav CTA, footer, card meta lines) — this is a hard rule, not decorative.
- **Emoji**: none, anywhere.
- **Numbers as labels**: ventures are numbered "01 / PORTAL", "02 / COACHING" etc. — a recurring device, like drawing-sheet references.
- **Tone per venture**: Portal = practical/operational ("operating system", "in sync"); Coaching = conversational/direct ("you don't need another course"); Build = matter-of-fact, construction-literal ("plot to keys", "wind- and water-tight"); Pipeline = tentative/early ("still taking shape", "details to follow").
- **CTAs are specific, not generic**: "Book a coaching call", "Talk to Naja Build", "See the pipeline" — never plain "Learn more" or "Submit".
- **Vibe**: an architecture/blueprint studio, not a SaaS startup — "drafting", "plans", registration marks, grid backgrounds all reinforce this.

## Visual foundations

- **Palette**: deep navy (`#053770` bg → `#0A4386`/`#0E4C97` panels) as the dominant surface; one warm accent, burnt orange `#E96015` (hover `#F2874B`), used sparingly for CTAs, emphasis words, and card highlights; a cool blue (`#6FA3D6`/`#9CC2E8`) for links, nav active state and hairline accents. White/paper (`#FFFFFF`/`#EEF2F7`) is used only as an alternating "detail" section background (Portal, Build) — never for the whole page.
- **Type**: Space Grotesk (display/headlines/buttons, weight 600–700, tight -0.01em tracking), IBM Plex Sans (body, 400/500/600 + italic), IBM Plex Mono (all-caps labels, eyebrows, nav CTA, card meta — 0.04em tracking). Three families, each with one clear job — never mixed within a text role.
- **Spacing**: generous vertical rhythm — sections run 80–130px of padding, hero sections 175–195px top. A small integer-px scale (8/10/14/18/22/26/32/40) governs micro-spacing; 60/80/120 govern section rhythm.
- **Backgrounds**: flat color only — no photography, no illustration, no gradients except the single micro-gradient hover token on the accept button. The recurring background texture is a **faint 40px blueprint grid** (`.grid-bg`) behind hero and CTA sections — the strongest visual signature of the brand.
- **Cards/panels**: flat, **no rounded corners** (radius token is effectively 2px / square), **no drop shadows**. Multi-card grids (ventures, pipeline, coaching quad) butt edge-to-edge with a 1px hairline gap acting as the border — the gap *is* the border. "reg-corners" registration marks (small L-shaped corner ticks, like technical-drawing alignment marks) decorate the primary venture cards — another blueprint/drafting motif.
- **Buttons**: primary = solid orange, no radius, lifts 2px on hover (no color change). Ghost = outlined, brightens border + text on hover. No press/active-state scale or shadow.
- **Hover states**: subtle — panel backgrounds step one shade lighter (`bg-panel` → `bg-panel-2`), links/borders shift from dim blue to bright blue or white. No shadows, no scaling except the primary button's lift.
- **Motion**: minimal — a single scroll-reveal fade+18px-rise per section (`.reveal`, ease, ~700ms), mobile-nav slide, and the cookie banner's fade+slide-in. Respects `prefers-reduced-motion`. No bounce, no parallax.
- **Borders**: hairline (1–1.5px), low-opacity blue or navy-line — never heavy or colorful.
- **Transparency/blur**: none used for glass/blur effects; only used at very low opacity (3–25%) for subtle backgrounds inside callout boxes and dividers on paper panels.
- **Corner radii**: effectively square throughout (2px token) — a deliberate contrast to the "rounded card, soft SaaS" look.
- **Imagery**: none in the current site — every screen is typography + flat color + the blueprint grid. If/when photography is introduced, cool-toned and architectural would fit the current visual language best.

## Iconography

The current site uses **no icon system at all** — no icon font, no SVG icon set, no PNG icons, no emoji, no unicode glyphs as icons. The only non-photographic marks are: the hamburger menu (three plain CSS bars), a mono `→` arrow-as-text-glyph in feature lists, and the logo mark itself. If icons are needed going forward (e.g. for a future Portal product UI), a stroke-based set like Lucide (CDN) would match the line-based, technical-drawing feel of the registration-mark motif — this is a suggested substitution, not something present in the source.

## Brand assets

- `assets/logo-full-transparent.png`, `logo-full-navy-bg.png`, `logo-full-white-bg.png` — full "NAJA / PROJECTS" lockup (as supplied by the user).
- `assets/logo-icon-navy.png`, `logo-icon-transparent.png` — square icon mark (from the site repo), used at 44–80px in the nav.
- `favicon.ico` — from the site repo.

## Fonts

All three families (Space Grotesk, IBM Plex Sans, IBM Plex Mono) are loaded live from Google Fonts (`tokens/fonts.css`) — matching the source site's own approach. No local font files were supplied or needed.

## Components

Located under `components/<group>/`, each with `Name.jsx` + `Name.d.ts` + `Name.prompt.md`:

- **Buttons**: `Button` (primary / ghost / outline)
- **Cards**: `Card` (venture / pipe / coach variants)
- **Content**: `CalloutBox`, `FeatureList`, `TierTable`, `ContactList`
- **Navigation**: `Nav`, `PageHero`, `Footer`
- **Feedback**: `CookieBanner`

### Intentional additions

None of the above were invented beyond the site's own patterns — every component maps directly to a CSS class/pattern already in `css/style.css` (`.venture-card`/`.pipe-card`/`.coach-item` → `Card`; `.btn-primary`/`.btn-ghost` → `Button`; `.tier-row` → `TierTable`; `.callout-box` → `CalloutBox`; `.feature-list` → `FeatureList`; `.contact-list` → `ContactList`; `.cookie-banner` → `CookieBanner`; `.page-hero`/`.hero` → `PageHero`).

## UI kits

- `ui_kits/website/` — interactive click-through recreation of all six site screens (Home, Portal, Coaching, Build, Pipeline, Contact), routed client-side, with the persistent Nav/Footer/CookieBanner.

## Index

```
tokens/          colors.css, typography.css, spacing.css, fonts.css, base.css
styles.css       root stylesheet (@imports only)
components/      buttons/, cards/, content/, navigation/, feedback/
guidelines/      color, type, spacing and brand specimen cards
ui_kits/website/ interactive site recreation
assets/          logos, favicon
thumbnail.html   project tile
SKILL.md         portable Agent Skill version of this system
```

## Caveats — please help me iterate

- **No product UI, only the marketing site.** Portal, Coaching, Build and Pipeline are all described by marketing copy — none of their actual in-app screens were available to recreate. If you can attach the Portal app's codebase or a Figma file, I can build real product screens next.
- Fonts are pulled live from Google Fonts (matching the source site) — say the word if you'd rather self-host them.
- The nav's mobile hamburger behavior is simplified in the component (always shows the horizontal link row) — happy to build the real collapsing mobile nav as an interactive state if useful.
