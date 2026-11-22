# Oniora Export Co. — Website

A clean, responsive, single-page website for **Oniora Export Co.**, an international agricultural exporter based in Gangapur, Maharashtra, India. 

The site features interactive product variety popups, direct quote pre-filling, animated performance counters, and integrated email lead capture. Built with standard vanilla web technologies—no build tools, heavy frameworks, or paid server infrastructure required.

---

## 📁 Repository Structure

```
oniora-exports/
├── index.html       # Primary HTML structure & product modal templates
├── styles.css       # Visual styles, color system, typography & animations
├── script.js        # Mobile navigation, modal controls, stats counter & Web3Forms handling
├── README.md        # Project documentation
└── images/          # Image assets
    ├── logo.png
    ├── favicon.png
    ├── sambhaji-nagar-red-onion.jpg
    ├── fresh-grapes.jpg
    ├── fresh-pomegranates.jpg
    └── fresh-green-chillies.jpg
```

---

## 🚀 Key Features

* **Interactive Product Catalog:** 4 primary export categories (**Fresh Onions**, **Fresh Grapes**, **Fresh Pomegranates**, and **Fresh Green Chillies**) with click-to-view popups displaying specific export grades, size standards, and packaging options.
* **One-Click Quote Pre-Fill:** Direct **"Request Quote for This"** triggers inside product modal popups auto-fill the form's `Grade needed` field and scroll directly to the contact section.
* **Working Lead Form:** Powered by **Web3Forms** (AJAX submission) to deliver incoming buyer quotes directly to `onioraexports@gmail.com` without redirecting the user off-site.
* **Responsive & Accessible:** Fully mobile-friendly layout with keyboard accessibility (Escape to close modals, Enter/Space key triggers on cards, screen reader labels).

---

## 🛠️ How to Deploy Updates via GitHub

This site is hosted live on **GitHub Pages** with custom domain mapping to `www.onioraexports.com`.

### To push updates:
1. Open your repository at `https://github.com/ssarode1410/oniora-exports/`.
2. Upload or update the modified files (`index.html`, `script.js`, `styles.css`, or images in `images/`).
3. Commit your changes to the `main` branch.
4. GitHub Pages will automatically rebuild and deploy your updates within 1–2 minutes.
5. Hard-refresh your browser (`Ctrl + Shift + R` or `Cmd + Shift + R`) to clear cached assets.

---

## 📝 Customization Quick Reference

* **Contact & Form Email:** Update the Web3Forms `access_key` in `index.html` or adjust phone (`+91 73877 82271`) and email (`onioraexports@gmail.com`) fields in `index.html` and `script.js`.
* **Product Catalog:** Modify variety names, sizing specs, or packing options directly inside the `PRODUCT_CATALOG` object in `script.js`.
* **Product Images:** Ensure images in `images/` maintain a consistent **4:3 aspect ratio** (e.g., `800 × 600 px`) under **150–250 KB** per file for optimal loading speed.

---

## 🌐 Live URL & Domain Setup

* **Custom Domain:** [https://www.onioraexports.com](https://www.onioraexports.com)
* **GitHub Pages Default:** [https://ssarode1410.github.io/oniora-exports/](https://ssarode1410.github.io/oniora-exports/)
* **DNS Settings:** Pointing to GitHub Pages A-records (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) with CNAME for `www`.