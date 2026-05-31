# Rachel Ben Ari — Portfolio

A fast, zero-dependency static portfolio site built to replace the Framer template.

## Project Structure

```
rachel-portfolio/
├── index.html              ← Homepage
├── css/
│   ├── style.css           ← Shared styles & design tokens
│   └── project-page.css    ← Styles for project detail pages
├── js/
│   ├── main.js             ← Nav scroll, clock, fade-in
│   └── components.js       ← (reference, not used directly)
└── pages/
    ├── works.html
    ├── playground.html
    ├── the-cold-ones.html
    ├── necronomichive.html
    ├── little-nightmares.html
    └── crime-scene.html
```

## Running Locally in VS Code

1. Open the `rachel-portfolio/` folder in VS Code
2. Install the **Live Server** extension (by Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**
4. Site opens at `http://127.0.0.1:5500` — auto-reloads on save

## Deploying for Free (Student Budget)

### Option A — GitHub Pages (recommended)
1. Create a GitHub account at github.com
2. New repo → name it `portfolio` (or your username)
3. Push this folder: `git init && git add . && git commit -m "init" && git push`
4. Settings → Pages → Branch: main → Save
5. Live at `https://yourusername.github.io/portfolio`

### Option B — Netlify Drop (fastest, 30 seconds)
1. Go to **netlify.com/drop**
2. Drag the entire `rachel-portfolio/` folder onto the page
3. Done — you get a live URL instantly
4. Free custom domain support

### Option C — Cloudflare Pages
1. cloudflare.com → Pages → Connect to Git
2. Select your GitHub repo
3. Build command: (leave blank — static site)
4. Deploy

All three are **completely free** for static sites.

## Swapping Your Own Images

All images currently load from Framer's CDN. To use your own:
1. Put images in a new `images/` folder
2. Replace `https://framerusercontent.com/images/...` URLs with `../images/yourfile.jpg`
3. Compress images with **Squoosh** (squoosh.app) before uploading — aim for < 300KB per image

## To Add More Projects

1. Duplicate any file in `pages/` (e.g. copy `the-cold-ones.html`)
2. Update the title, meta row, overview text, and image `src` values
3. Add a new card to `index.html` and `pages/works.html`
4. Update the `proj-nav` prev/next links

## Colors (CSS Custom Properties)

| Variable | Value | Use |
|---|---|---|
| `--bg` | `#0b0b09` | Page background |
| `--bg1` | `#111110` | Cards, hero right |
| `--fg` | `#e4dfd2` | Primary text |
| `--fg2` | `#8a8578` | Italic/muted text |
| `--fg3` | `#4d4b46` | Labels, metadata |
| `--gold` | `#c8a86b` | Accent, highlights |
| `--gold2` | `#e0c88a` | Italic hero name |

All defined in `css/style.css` under `:root`.
