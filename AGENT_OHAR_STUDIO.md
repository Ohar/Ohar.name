# Agent Instructions: ohar-studio

## Project

`ohar-studio` is the standalone portfolio/showcase site for Ohar Studio.
The public domain is:

- `https://ohar-studio.ru/`

The related personal site `ohar.name` redirects `/portfolio` and `/portfolio/` to `https://ohar-studio.ru/`.

## Agent Role

You are responsible for keeping `ohar-studio` deployable, fast, and boring in production.
Prefer small, reviewable changes. Keep deployment configuration versioned in the repo when possible.

Before changing deployment behavior:

- inspect the existing GitHub Actions workflow
- inspect any nginx config under `infra/nginx`
- preserve existing server paths, certificate paths, and release layout unless the user explicitly asks to migrate them
- never replace a live config with an invented fresh config when an existing one is available

## Deployment Model

Use the same deployment style as `Ohar.name` unless the `ohar-studio` repo says otherwise:

- build static assets in CI
- archive the build output
- upload the archive to the production server over SSH
- unpack into a SHA-named release directory
- atomically update the `current` symlink
- install the versioned nginx vhost config
- run `nginx -t`
- reload nginx only after the config test passes

Expected production layout:

```text
/var/www/ohar-studio.ru/current
/var/www/ohar-studio.ru/releases/<commit-sha>
```

Expected nginx config target:

```text
/etc/nginx/sites-available/ohar-studio.ru
/etc/nginx/sites-enabled/ohar-studio.ru
```

## Deployment Credentials

Do not commit real credentials, passwords, private keys, `.env` files, or copied GitHub secret values.
Deployment credentials must live in GitHub Actions secrets.

Required secrets:

- `DEPLOY_HOST`: production server hostname or IP
- `DEPLOY_USER`: SSH username used by GitHub Actions
- `DEPLOY_PASSWORD`: SSH password used by `sshpass`

Optional secret if the repo supports overriding it:

- `DEPLOY_PATH`: production `current` symlink path, normally `/var/www/ohar-studio.ru/current`

If a credential is missing, stop and report the missing secret name. Do not guess it.

## GitHub Actions Requirements

The deploy workflow should:

- run on pushes to the production branch, normally `master`
- support `workflow_dispatch`
- validate that required deployment secrets are non-empty
- normalize secrets by stripping CR/LF characters
- install dependencies with the package manager already used by the repo
- run the project build
- run available tests or smoke checks before deployment
- install `sshpass` only inside CI
- trust the deployment host with `ssh-keyscan`
- upload both the build archive and nginx config
- run `nginx -t` before `systemctl reload nginx`

Use a concurrency group such as `deploy-production` so two deploys cannot race.

## Nginx Requirements

The nginx vhost should be stored in the repo, preferably:

```text
infra/nginx/ohar-studio.ru.conf
```

Use HTTPS with HTTP/2:

```nginx
listen 443 ssl;
listen [::]:443 ssl;
http2 on;
```

Expected certificate paths:

```nginx
ssl_certificate /etc/letsencrypt/live/ohar-studio.ru/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/ohar-studio.ru/privkey.pem;
include /etc/letsencrypt/options-ssl-nginx.conf;
ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
```

Redirect HTTP to HTTPS. Redirect `www.ohar-studio.ru` to `ohar-studio.ru` unless the user asks otherwise.

For static sites, use:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

For immutable assets, add long-lived cache headers only to hashed/static assets.

## Release Checklist

Before committing:

- inspect `git status -sb`
- inspect the diff
- run the relevant local checks if available
- do not stage unrelated files

For releases:

- use `npm version patch` when the user asks for a patch release
- push both the branch and the created tag
- verify the workflow started or explain if GitHub tooling is unavailable locally

After deployment:

- check `https://ohar-studio.ru/`
- check expected redirects with `curl -I`
- if nginx rejects the config, fix the versioned nginx config and redeploy

## Safety Rules

- Never print or commit secret values.
- Never use `git reset --hard` or destructive git commands unless explicitly requested.
- Never overwrite server nginx config by invention; modify the existing repo config or retrieve the live config first.
- Keep deployment changes narrow and reversible.
- If server host keys changed, report the exact SSH warning and stop for user confirmation before bypassing host verification.
