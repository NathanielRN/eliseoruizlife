# eliseoruizlife
Eliseo Ruiz Nowell Portfolio Website

A repo for my own website at https://nathanielrn.github.io/eliseoruizlife/! I completed the Udemy CSS course https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3/learn/v4/overview
and wanted to put my new skills to use! If you have any comments please add them as issues here and I will answer right away!

Thanks for visiting!

## Structure

The site is a single hand-written page with no build step:

- `index.html` — all content
- `resources/css/site.css` — the whole design system (tokens, layout, responsive,
  reduced-motion and print rules)
- `resources/javascript/site.js` — sticky-header state, mobile navigation,
  scroll reveals, active-section highlighting (vanilla, no dependencies)
- `resources/images/`, `resources/favicons/`, `resumes/pdfs/` — assets

Preview it by opening `index.html` directly, or with
`python3 -m http.server` from the repo root.

The older jQuery/animate.css/ionicons stack (`resources/css/style.css`,
`queries.css`, `grid.css`, `resources/javascript/script.js`, `vendors/`) is no
longer referenced by `index.html` and can be deleted once nothing else needs it.

## Hosting

GitHub Pages serves this site from the root of the `master` branch. Pushing to
`master` publishes the site; the stale `gh-pages` branch (last updated in 2018)
is no longer used.

Asset paths are relative so that the site works under the
`/eliseoruizlife/` subpath of `nathanielrn.github.io`.

### Re-adding the www.eliseoruiz.life custom domain

The domain registration lapsed, so the custom domain was removed. To bring it
back:

1. Register `eliseoruiz.life` again.
2. At the registrar, add DNS records:
   - `CNAME` for `www` -> `nathanielrn.github.io`
   - Apex `A` records for `eliseoruiz.life` -> `185.199.108.153`,
     `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     (or `ALIAS`/`ANAME` -> `nathanielrn.github.io`)
3. Set the custom domain in Settings -> Pages (this recreates the `CNAME` file),
   then enable "Enforce HTTPS" once the certificate is issued.
4. Change the root-relative-safe paths back only if desired; the current
   relative paths work under both the custom domain and the github.io subpath.
