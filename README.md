# faner217.github.io

Personal academic website of Yifan Li, built with React + Vite.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
```

## Editing content

All text lives in `src/data/site.js` (profile, news, publications, projects, CV, contact).
Images are in `public/images/`, PDFs in `public/assets/pdf/`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to the `gh-pages` branch (GitHub Pages source).
