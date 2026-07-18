Flat, hairline-divided card used in three contexts: the homepage ventures grid, the pipeline row, and the coaching quad.

```jsx
<Card kind="venture" label="01 / PORTAL" title="Naja Portal" description="The operating system..." meta="Live · Base / Pro / Custom" href="/portal/" />
<Card kind="pipe" label="Concept" title="Corner hospitality stand" description="A fast, friendly stop..." />
<Card kind="coach" label="Sales" title="When do you bring sales in?" description="Timing your first hire..." />
```

Cards are laid out edge-to-edge in a grid/row with a 1px `var(--border-on-dark)` gap between them (the gap IS the border — no per-card border). No rounded corners, no drop shadow. Venture cards get corner registration marks (`.reg-corners`) and darken slightly on hover.
