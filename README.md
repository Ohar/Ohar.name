# ohar.name

Sources of [ohar.name](https://ohar.name), built with Next.js and exported as a
static site.

## Development

Requires Node.js 20.9 or newer and Yarn 1.22.

```sh
yarn install
yarn dev
```

The development server runs at `http://localhost:3000`.

## Production build

```sh
yarn build
yarn test:i18n
yarn test:cv-pdf
```

Next.js writes the deployable site to `out`. The PDF test requires Chrome or
Chromium and verifies that both CV languages fit on one A4 page.

## Deployment

Pushes to `master` run `.github/workflows/deploy.yml`. GitHub Actions builds and
tests the site, uploads `out`, atomically switches the active release, validates
the nginx configuration, and reloads nginx.

The workflow expects `DEPLOY_HOST`, `DEPLOY_USER`, and `DEPLOY_PASSWORD` secrets.
