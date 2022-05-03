# Gatsby Test

## Uses

- Gatsby for SSG
- Theme-UI for styling
- MDX/React for page markup
- [Contentful](https://www.contentful.com/) as a headless CMS


## Working

- [X] Building and deploying with GitHub actions
- [X] Basic nav in header/footer
- [X] Expandable FAQs
- [X] Fake team images/names
- [X] Placeholder images
- [X] Highlighting current page in header
- [X] Title for each page isn't getting set


## Not working/started

- [ ] Any real styling
- [ ] User guide layouts
- [ ] Mobile support
- [ ] Doesn't deploy with `GITHUB_TOKEN` for some reason


## Installation

A `.env` file containing the following values must be added in the root directory:

- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ACCESS_TOKEN`

These values enable the `gatsby-source-contentful` plugin to access the page data stored on Contentful.  The same keys and values need to be provided as secrets in the GitHub repo.
