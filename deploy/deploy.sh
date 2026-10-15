#!/usr/bin/env bash
# Manual deploy flow (roadmap Fase 8): build, then copy dist/ to the GCP VM via gcloud.
#
# Uses `gcloud compute scp`/`ssh`, not plain scp/rsync, so it works out of the box from
# Cloud Shell (already authenticated as vcavendanof_dev) or from any machine with the
# gcloud CLI installed and `gcloud auth login` done against this project
# (project-a4523983-cfaf-4e24-a2c) — no separate SSH key setup needed.
#
# Note: `gcloud compute scp` copies/overwrites files but does not delete remote files that
# no longer exist locally (unlike rsync --delete). If a page is ever removed from the site,
# clean up its stale file on the VM by hand.
#
# Usage: ./deploy/deploy.sh

set -euo pipefail

VM_NAME="${VM_NAME:-victoravendano-web}"
VM_USER="${VM_USER:-vcavendanof_dev}"
ZONE="${ZONE:-us-central1-a}"
REMOTE_PATH="${REMOTE_PATH:-/var/www/victoravendano/dist}"

echo "==> Building static site..."
npm run build

echo "==> Copying dist/ to ${VM_USER}@${VM_NAME}:${REMOTE_PATH} (zone ${ZONE})..."
gcloud compute scp --recurse dist/* "${VM_USER}@${VM_NAME}:${REMOTE_PATH}/" --zone="${ZONE}"

echo "==> Reloading Nginx on the VM..."
gcloud compute ssh "${VM_NAME}" --zone="${ZONE}" --command="sudo nginx -t && sudo systemctl reload nginx"

echo "==> Deploy complete: https://vavendano.com"
