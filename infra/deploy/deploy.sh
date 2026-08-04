#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 || ! "$1" =~ ^[0-9a-f]{40}$ ]]; then
  echo "Usage: deploy-ohar-name <40-character-commit-sha>" >&2
  exit 2
fi

GITHUB_SHA="$1"
DEPLOY_ROOT=/var/www/ohar.name
DEPLOY_PATH="$DEPLOY_ROOT/current"
RELEASE_PATH="$DEPLOY_ROOT/releases/$GITHUB_SHA"
UPLOAD_PATH=/tmp/ohar.name-deploy
NGINX_CONFIG=/etc/nginx/sites-available/ohar.name
NGINX_BACKUP="$NGINX_CONFIG.deploy-backup"

test -s "$UPLOAD_PATH/site.tar.gz"
test -s "$UPLOAD_PATH/ohar.name.conf"

mkdir -p "$RELEASE_PATH"
tar -xzf "$UPLOAD_PATH/site.tar.gz" -C "$RELEASE_PATH"
test -s "$RELEASE_PATH/index.html"

cp -a "$NGINX_CONFIG" "$NGINX_BACKUP"
install -m 0644 "$UPLOAD_PATH/ohar.name.conf" "$NGINX_CONFIG"
if ! nginx -t; then
  cp -a "$NGINX_BACKUP" "$NGINX_CONFIG"
  nginx -t
  exit 1
fi

if [[ -d "$DEPLOY_PATH" && ! -L "$DEPLOY_PATH" ]]; then
  mv "$DEPLOY_PATH" "$DEPLOY_ROOT/current.backup.$(date +%Y%m%d%H%M%S)"
fi
ln -sfn "$RELEASE_PATH" "$DEPLOY_PATH.tmp"
mv -Tf "$DEPLOY_PATH.tmp" "$DEPLOY_PATH"
systemctl reload nginx
rm -rf "$UPLOAD_PATH"

printf 'Deployed %s\n' "$GITHUB_SHA"
