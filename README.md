# Oniora Export Co. — Website

A complete, self-contained website for a premium onion export business based in Nashik, Maharashtra. No build tools, frameworks, or paid services required.

## Files
- `index.html` — all page content and structure
- `styles.css` — all visual design (colors, type, layout, animation)
- `script.js` — mobile menu, scroll animations, animated stats, quote-form handling

## Updating your existing GitHub Pages site
You already have this live at `https://ssarode1410.github.io/oniora-exports/`. To push this update:

1. Open your `oniora-exports` repository on GitHub.
2. Click into `index.html` → the pencil (edit) icon → select all → paste in the new content from this file → **Commit changes**.
3. Do the same for `styles.css` and `script.js` if you're replacing those too (they're mostly unchanged, but re-uploading keeps everything in sync).
4. GitHub Pages rebuilds automatically within a minute or two — no extra step needed.

## What to customize before launch
- **Contact details**: phone number and email (`contact@onioraexports.com`) in the `#contact` section and footer are placeholders — update with your real ones.
- **Stats**: tonnage, countries served, on-time rate in the hero strip and `#about` ledger are placeholders — replace with your real figures.
- **Quote form**: `script.js` only shows a confirmation message in the browser — it does **not** send an email yet. Connect it to a form service (e.g. Formspree, Getform) or your own backend to actually receive submissions.
- **Varieties & grades**: the `#industries` section lists common Indian onion varieties/grades — adjust to match exactly what you export.
- **Ports & markets**: the hero map and footer currently show JNPT/Nashik as origin and Dubai, Colombo, Chattogram, and Port Klang as destinations — update if your actual shipping lanes differ.

## Domain
Once you've purchased `onioraexports.com`, follow the custom domain steps in GitHub Pages settings (Settings → Pages → Custom domain) to point it here.
