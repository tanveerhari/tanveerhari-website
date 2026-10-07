# tanveerhari.com

The personal website of Tanveer Singh: software architect and writer, co-founder and CTO of [Mviaso](https://mviaso.com).

*Big ideas shouldn't need big studios.*

The site has two sides. **The Architect** covers projects, essays on architecture and building with AI, and technical series. **The Writer** covers essays, a memoir written one chapter at a time, and poems in English, Hindustani and Punjabi (the Hindustani and Punjabi ones are in Gurmukhi).

Live at **[tanveerhari.com](https://tanveerhari.com)**.

## How it's built

Plain HTML, CSS and a little JavaScript. There is no framework, no build step, no cookies and no tracking. Pages make no requests to any other site.

- **Fonts:** Fraunces, Newsreader, JetBrains Mono and Noto Serif Gurmukhi, served from `assets/fonts/` (SIL Open Font License 1.1), not from Google Fonts.
- **Themes:** light and dark, following the visitor's system setting.
- **Diagrams:** inline SVG styled by the stylesheet, so they follow the theme.
- **JavaScript** (`assets/site.js`) does three small things:
  - shows the name in Gurmukhi (ਤਨਵੀਰ ਸਿੰਘ) when you hover over or tap the logo;
  - runs the filter tabs on Projects and Writing;
  - copies the email address;
  - shows a small privacy notice (no cookies, no tracking) until it is closed, remembered in local storage only.

## Layout

```
index.html            Home: the Architect and the Writer
about.html            Biography, a life in chapters, recommendations
projects.html         Professional, open-source and hobby projects
work-with-me.html     How I can help
privacy.html          Privacy and cookies
other-stuff.html      Stories and poems
writing/              Essays, architecture pieces and technical series
poems/                One page per poem, plus an index
stories/              Memoir chapters
assets/               style.css, site.js, mark.svg, og-image.png, icons
404.html              Not-found page (GitHub Pages serves it automatically)
sitemap.xml           Every page, for search engines
robots.txt            Allows all crawlers and points to the sitemap
feed.xml              RSS feed of the writing
CNAME                 Custom domain for GitHub Pages
```

## SEO

- Every page has a unique title and description, a canonical URL, Open Graph and Twitter card tags with a shared preview image (`assets/og-image.png`), and structured data (JSON-LD): Person and WebSite on the home page, ProfilePage on About, BlogPosting for essays, CreativeWork for poems, and breadcrumbs.
- Article dates in the structured data are the drafted dates shown on the page.
- After going live: add the site to Google Search Console and Bing Webmaster Tools, submit `https://tanveerhari.com/sitemap.xml`, and link the site from LinkedIn and GitHub.

## Run it locally

Any static server works. For example:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

The site is a folder of static files, so it can be hosted anywhere that serves HTML: GitHub Pages, Netlify, Cloudflare Pages, or a plain web server. On GitHub Pages:

1. Go to **Settings, then Pages**.
2. Choose **Deploy from a branch**, then the `main` branch and the `/ (root)` folder.
3. Add `tanveerhari.com` as the custom domain.

## Licence

This repository holds two kinds of material, under different terms.

- **Code** (the HTML structure, CSS and JavaScript) is released under the [MIT Licence](LICENSE). Reuse it freely.
- **Content** (essays, technical articles, stories, poems, diagrams, and the name and mark) is © 2026 Tanveer Singh, all rights reserved. Quoting short passages with credit and a link is welcome. For anything more, please ask first.
- **Recommendations** on the About page belong to the people who wrote them, and are reproduced from LinkedIn.

## Contact

- Email: tanveerhari@gmail.com
- [LinkedIn](https://www.linkedin.com/in/tanveer-singh-6367a295/)
- [GitHub](https://github.com/tanveerhari)
