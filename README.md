# Protein Per Gram

A mobile-first React website for plant-powered protein bowls around Pashan, Pune.

## Run locally

```sh
npm install
npm run dev
```

## Build and deploy

The site is configured for the `rushikeshbharad.github.io/protein-per-gram` GitHub Pages project URL. Build the production site with:

```sh
npm run build
```

To publish the `dist` directory to the `gh-pages` branch, run:

```sh
npm run deploy
```

In the repository settings, enable GitHub Pages and select the `gh-pages` branch with the root folder as the publishing source. The build creates a `404.html` fallback so direct visits to `/gym` and `/contact` continue to load the React routes.
