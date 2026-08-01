# Barcawil — Site Source

Static site, no build step required.

## Structure
```
index.html      Markup
styles.css      All styles
script.js       Year stamp, Music dropdown, subscribe form handler
images/hero.png Hero photo
```

## Run locally
Just open `index.html` in a browser, or serve the folder:
```
npx serve .
```

## Deploy

**Vercel**
1. Push this folder to a GitHub repo.
2. Import the repo in Vercel — no framework/build settings needed (leave build command empty, output directory `.`).

**GitHub Pages**
1. Push to a repo, enable Pages in Settings → Pages, source = root of `main` branch.

## To update later
- Swap `images/hero.png` for a new photo (keep the filename or update the `<img src>` in `index.html`).
- Once the visualizer video is live, update the "Video" link `href` in both nav blocks of `index.html` (currently pointing at the YouTube channel).
- Platform links (Spotify, Apple Music, YouTube, Beatport, Instagram, TikTok) are in the `#stream` and `#connect` sections of `index.html`.
