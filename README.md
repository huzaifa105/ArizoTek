# ArizoTek — Business Website

Official website for **ArizoTek** (*IT Automation for Small to Mid-Size Businesses*), built with React, TypeScript, and Tailwind CSS and configured for static hosting on GitHub Pages.

## Pages Included

- **Home (`/#/`)**: Hero section with interactive workflow diagram, 4 core services overview, About Us, Why Choose ArizoTek, 4-step How We Work process, and final CTA.
- **Services (`/#/services`)**: Detailed breakdown of AI Automation Solutions, Business Process Automation, AI Chatbots & Virtual Assistants, and Workflow Integration & Automation, plus Our Approach.
- **Contact Us (`/#/contact`)**: Editable contact placeholders and a validated inquiry form ready for Formspree or another static form backend.

## Updating Contact Details & Form Endpoint

All editable business placeholders and static form settings live in `src/config/siteConfig.ts`:

1. **Contact Information**: Update `CONTACT_INFO` (`emailPlaceholder`, `phonePlaceholder`, `locationPlaceholder`) with your real email address, phone number, and business location.
2. **Social Links**: Update `SOCIAL_LINKS` with your live profile URLs and set `isConfigured: true`.
3. **Contact Form (Formspree)**:
   - Create a form at [https://formspree.io/](https://formspree.io/).
   - Set `FORMSPREE_ENDPOINT` in `src/config/siteConfig.ts` to your Formspree endpoint URL (e.g. `"https://formspree.io/f/your_form_id"`).
   - While `FORMSPREE_ENDPOINT` is empty, the form validates fields accurately and displays a clear configuration notice instead of falsely reporting submission.

## Local Development

```bash
npm install
npm run dev
```

## Building & Deploying to GitHub Pages

This project uses:
- `HashRouter` (`react-router-dom`) so direct visits and page refreshes never return 404 errors on GitHub Pages.
- `base: './'` in `vite.config.ts` so all compiled assets and `/public/assets/aistudio/image_d534bb24.png` resolve cleanly on both custom domains and `https://<username>.github.io/<repo>/` subpaths.

### Build Static Production Files

```bash
npm run build
```

The static production bundle is output to the `dist/` directory.

### Deploy to GitHub Pages

Option A — **GitHub Actions (Recommended)**:
1. Push this repository to GitHub.
2. In your GitHub repository, open **Settings → Pages** and set **Source** to **GitHub Actions** (or **Deploy from a branch** if publishing `dist/` to `gh-pages`).
3. Run `npm install` and `npm run build` in your workflow and upload the `./dist` directory using `actions/upload-pages-artifact` and `actions/deploy-pages`.

Option B — **Manual `gh-pages` branch**:
```bash
npm run build
npx gh-pages -d dist
```
