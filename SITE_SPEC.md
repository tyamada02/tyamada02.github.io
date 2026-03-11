# Site Specification

## 1. Purpose

Build a public-facing personal website for a researcher.

The site should:

- present identity and affiliation clearly
- summarize research themes
- provide a stable place to link publications and CV
- offer a controlled public contact point

The site should not depend on a database or server-side application logic.

## 2. Hosting and deployment policy

- Source control: private GitHub repository
- Hosting platform: Cloudflare Pages
- Production branch: `main`
- Preview deployments: disabled initially
- Default public URL: `<project-name>.pages.dev`
- Custom domain: optional and can be added later

## 3. Development workflow

1. Develop locally in this directory.
2. Preview changes locally.
3. Commit to git.
4. Push to the private GitHub repository.
5. Cloudflare Pages deploys the `main` branch to production.

Operational rules:

- Do not push incomplete drafts to production.
- Keep unpublished notes and source material outside the build output.
- Treat every file included in the final site as public.

## 4. Privacy and publication policy

Default to publishing only professional information.

Recommended to publish:

- name
- affiliation
- research interests
- publications
- presentations
- grants or awards, if desired
- CV
- professional contact method
- links to ORCID, Google Scholar, institutional page, GitHub

Recommended to avoid by default:

- personal phone number
- detailed home or private address
- private email address
- birth date
- unnecessary personal biography details
- unpublished manuscripts
- internal notes
- student or collaborator private information

## 5. Initial site structure

The first release should stay small.

Language policy:

- first release: English-first
- important identity fields such as name and affiliation may include Japanese alongside English
- keep the structure simple enough that a fuller bilingual version can still be added later if needed

### Required pages

- `Home`: short introduction, affiliation, key links
- `Profile`: biography, background, positions
- `Research`: research areas and current themes
- `Publications`: papers, talks, preprints if intentionally public
- `CV`: initially a placeholder page if final content is not ready
- `Contact`: initially a placeholder page if final content is not ready

### Optional pages

- `News`
- `Teaching`
- `Projects`
- `Software`

## 6. Content decisions to make before implementation

- site title in English, with selective Japanese for key identity fields
- whether to include a portrait photo
- whether to include a downloadable CV PDF
- whether to include preprints
- whether to include a news section
- whether to include teaching information
- whether to use a custom domain

## 7. Technical direction

Use a static site.

Initial preference:

- plain HTML/CSS/JavaScript, or
- a lightweight static site generator if content grows

Current update model:

- stable page structure in HTML
- frequently updated records such as publications and awards in `data/*.json`
- client-side loading from static JSON files

Avoid unnecessary complexity in the first version.

Navigation and placeholder policy:

- planned pages should have real routes, not dummy `#` links
- if a page is not ready, publish a minimal page stating that details will be added later
- placeholder pages should not imply that contact details or files are public before they are finalized

Initial contact policy:

- if contact information is added early, use affiliation and professional email only
- do not include personal phone number or private address

## 8. Release rule

The first public release is ready when:

- the core pages exist
- the content has been checked for privacy
- links are valid
- contact information is intentional
- production deployment is connected to Cloudflare Pages
