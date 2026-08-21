# eliseoruizlife
Eliseo Ruiz Nowell Portfolio Website

A repo for my own website at https://nathanielrn.github.io/eliseoruizlife/! I completed the Udemy CSS course https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3/learn/v4/overview
and wanted to put my new skills to use! If you have any comments please add them as issues here and I will answer right away!

Thanks for visiting!

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
