# Dhaniel Ramdath — Portfolio (React + Vite)

A React rewrite of the portfolio site, structured as small, easy-to-edit components.

## Structure

```
src/
  components/
    Nav.jsx          nav bar
    Hero.jsx         headline + headshot
    About.jsx        bio + stats
    Experience.jsx   work history (edit the `records` array to update)
    Projects.jsx     project cards (edit the `projects` array)
    Skills.jsx       skill pills (edit the `groups` array)
    Credentials.jsx  education + certs (edit the `certs` array)
    Contact.jsx      contact CTA
    Footer.jsx
  assets/headshot.jpg
  index.css          all site styles
  App.jsx            assembles the page
  main.jsx           React entry point
```

To update content, edit the relevant array in the component file — no HTML editing needed.

## Local development

```bash
npm install
npm run dev        # starts local dev server, usually http://localhost:5173
npm run build       # builds production files into /dist
```

## Deploying to GitHub Pages

### Option A — GitHub Actions (recommended, auto-deploys on every push)

1. Push this project to a GitHub repo.
2. In `vite.config.js`, set `base`:
   - Project site (`username.github.io/repo-name`) → `base: '/repo-name/'`
   - User site (repo named exactly `username.github.io`) → `base: '/'`
3. In the repo, go to **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main`. The included workflow (`.github/workflows/deploy.yml`) builds the app and deploys it automatically. Your site will be live at the URL shown in the Pages settings after the workflow finishes (check the **Actions** tab for progress).

### Option B — gh-pages package (manual deploy from your machine)

1. Set the correct `base` in `vite.config.js` as above.
2. Add to `package.json` scripts: `"deploy": "npm run build && gh-pages -d dist"`
   (the `gh-pages` package is already installed as a dev dependency)
3. Run `npm run deploy`. This pushes the built site to a `gh-pages` branch.
4. In **Settings → Pages**, set Source to **Deploy from a branch**, branch `gh-pages`, folder `/ (root)`.

## Notes

- No client-side routing is used, so there's no GitHub Pages routing workaround needed.
- The headshot is bundled from `src/assets/headshot.jpg` — replace that file to update the photo.
