#!/usr/bin/env bash
# Manual deploy flow (roadmap Fase 8): build locally, sync dist/ to the GCP VM.
#
# First-time setup:
#   1. Fill in VM_HOST (static external IP or the domain once DNS is live) and VM_USER below,
#      or export them as environment variables before running this script.
#   2. Make sure your SSH public key is added to the VM (gcloud compute instances add-metadata,
#      or via the GCP Console > Compute Engine > VM instance > Edit > SSH Keys).
#   3. chmod +x deploy/deploy.sh
#
# Usage: ./deploy/deploy.sh

set -euo pipefail

VM_HOST="${VM_HOST:-CHANGE_ME.vavendano.com}"
VM_USER="${VM_USER:-victor}"
REMOTE_PATH="${REMOTE_PATH:-/var/www/victoravendano/dist}"

echo "==> Building static site..."
npm run build

echo "==> Syncing dist/ to ${VM_USER}@${VM_HOST}:${REMOTE_PATH} ..."
rsync -avz --delete ./dist/ "${VM_USER}@${VM_HOST}:${REMOTE_PATH}/"

echo "==> Reloading Nginx on the VM..."
ssh "${VM_USER}@${VM_HOST}" "sudo nginx -t && sudo systemctl reload nginx"

echo "==> Deploy complete: https://vavendano.com"
