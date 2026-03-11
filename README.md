# Research Website Project

This directory is the working area for a public personal researcher website.

## Current decision

- Hosting: Cloudflare Pages
- Source repository: private GitHub repository
- Public site: production deployment only
- Preview deployments: disabled at first
- Custom domain: optional, to be decided later
- Language policy: English-first
- Important identity fields such as name and affiliation may include Japanese alongside English

## Working policy

- Development is done locally.
- Changes are reviewed locally before pushing to GitHub.
- Only the `main` branch is used for production deployment.
- Draft content should stay out of production builds.
- Sensitive or unnecessary personal information is not published by default.
- Pages without final content should still have valid URLs.
- Avoid dead links such as `#` for planned pages.

## Current structure

The current site includes these pages:

- Home
- Profile
- Research
- Publications
- CV
- Contact

Detailed publishing and content rules are documented in `SITE_SPEC.md`.
Editing guidance is documented in `EDITING_GUIDE.md`.
Frequently updated items such as publications and awards are stored in `data/*.json`.

## Local preview

You can preview the site locally with a simple static file server, for example:

- `python3 -m http.server 8000`

Then open `http://localhost:8000/`.

Note:

- The JSON-driven sections require a local web server such as `Live Server` or `python3 -m http.server`.
- Opening the HTML files directly with `file://` will not load `data/*.json`.
