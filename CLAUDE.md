# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running Locally

No build step — this is a zero-dependency static site. Open `index.html` with a local server:

- **VS Code**: Install the Live Server extension, right-click `index.html` → "Open with Live Server" (runs at `http://127.0.0.1:5500`)
- **Python fallback**: `python -m http.server 5500`

## Architecture

Pure HTML/CSS/JS — no framework, no bundler, no package manager.

```
rachel-portfolio/
├── index.html                  ← Homepage (hero, works grid, about)
├── css/
│   ├── style.css               ← Design tokens + all shared styles
│   └── project-page.css        ← Styles used only on project detail pages
├── js/
│   ├── main.js                 ← Nav scroll effect, clock, fade-in observer
│   └── components.js           ← Nav/footer HTML templates (reference only — inlined per page)
├── pages/
│   ├── works.html              ← Full works grid
│   ├── playground.html         ← Masonry sketch gallery
│   └── *.html                  ← Project detail pages (all share the same structure)
└── images/                     ← All image assets
```

## Design System

All design tokens are CSS custom properties defined at the top of `css/style.css`:

| Token | Value | Use |
|---|---|---|
| `--bg` / `--bg1` / `--bg2` | `#0b0b09` / `#111110` / `#17170f` | Page, card, image backgrounds |
| `--fg` / `--fg2` / `--fg3` | `#e4dfd2` / `#8a8578` / `#4d4b46` | Primary, muted, label text |
| `--gold` / `--gold2` | `#c8a86b` / `#e0c88a` | Accent color |
| `--serif` | Palatino Linotype → Georgia | Body/display font |
| `--mono` | Courier New | Monospace |

## Key Patterns

**Fade-in animations** — add `.fi` to any element; optionally `.d1` / `.d2` / `.d3` for 80/160/240ms stagger. Use `.hero-instant` on hero elements to animate immediately without waiting for scroll.

**Adding a project page** — copy an existing page from `pages/` (e.g. `the-cold-ones.html`), update the title/metadata/images, and add a card to both `index.html` and `pages/works.html`.

**Nav and footer** — `components.js` holds reference template strings but each page has nav/footer inlined directly (not dynamically injected).

**Responsive** — single breakpoint at 720px; desktop-first. Playground masonry is 3 → 2 → 1 column; project/works grids are 2 → 1 column.
