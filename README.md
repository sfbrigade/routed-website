# RoutED Website


## Installation

A `.env` file containing the following values must be added to the root directory:

- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ACCESS_TOKEN`

These values enable the `gatsby-source-contentful` plugin to access the page data stored on Contentful.  The same keys and values need to be provided as secrets in the GitHub repo.


## Publishing to GitHub Pages

The [publish.yml](https://github.com/sfbrigade/routed-website/blob/main/.github/workflows/publish.yml) GitHub Action is set up to build the Gatsby site on every commit to `main`, and then push the static files to GitHub Pages.  This action is also triggered whenever a change to the Contentful site is published.
