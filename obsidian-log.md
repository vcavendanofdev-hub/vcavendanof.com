# Obsidian Sync Log — Sitio Web Victor Avendaño

Append-only. See `obsidian-sync.md` in this same folder for the cadence and format rules before adding an entry. Most recent entry last. This log exists so Victor's Obsidian vault (`[[Projects/Sitio Web Victor Avendano]]` in Vivica) can sync from a short pointer list instead of re-reading this repo's full history each time.

---

## 2026-07-08 — baseline entry (vault sync catch-up)

**What changed:** This is a baseline, not a real work entry — written the same day this log file was created, to mark where the vault's own sync is caught up to as of now. Everything before this line has already been read and reflected in the vault directly (production deploy 2026-07-03, professional email setup, and the post-launch audit roadmap `roadmap-mejoras-sitio.md` added 2026-07-07 with its confirmed WhatsApp-number-change decision, not yet applied to the live site).

**Relevant files:** N/A (baseline)

**Vault should know:** As of commit `f7c88ff` (2026-07-07 19:01, "Create roadmap-mejoras-sitio.md"), the vault's [[Projects/Sitio Web Victor Avendano]] note is current, including the still-unresolved GitHub push 403 (2 local commits pending push as of that commit). Any future entry in this log should start from work done *after* that commit.

---

## 2026-10-14 15:47

**What changed:** Applied Roadmap Fase 1's confirmed WhatsApp number change: `+57 305 721 8436` → `+57 313 407 5212`. Single-source fix in `siteMeta` (both components already consumed it, no hardcoded duplicates found). Verified in dev server (hub footer, `/project-manager` and `/es/project-manager` contact cards) and in a clean `npm run build` (new number present in all 16 built pages, old number gone from `dist/`). Not committed or deployed — awaiting Victor's go-ahead per standing instruction.

**Relevant files:** `src/i18n/config.ts` (uncommitted working-tree change, not yet a commit)

**Vault should know:** Roadmap Fase 1's WhatsApp item (previously flagged in agent-blackboard.md as unresolved as of the 07/10/2026 vault sync) is now implemented in the source tree but still pending commit/push/deploy. The rest of Fase 1 (email consistency decision, hardcode audit, redeploy) is still open.

---

## 2026-10-14 16:00

**What changed:** Victor revised both contact values from the prior entry: WhatsApp number corrected to `+57 321 905 2343` (the number given at 15:47, `+57 321 2343`, was 3 digits short of a valid Colombian mobile number — flagged and corrected via follow-up from Victor). Contact email switched from `melethestel@gmail.com` to `info@vavendano.com`, resolving the open decision noted in Fase 1 item 2. Updated `siteMeta` plus the two hardcoded JSON-LD `founder.email` refs in `index.astro`/`es/index.astro` that the roadmap had flagged as needing a matching update. Verified in dev server (footer, mailto link, wa.me link, JSON-LD on hub page) and in `npm run build` (old email/numbers absent from all 16 built pages, new values present). Not committed, pushed, or deployed.

**Relevant files:** `src/i18n/config.ts`, `src/pages/index.astro`, `src/pages/es/index.astro` (uncommitted)

**Vault should know:** Fase 1's two main items (WhatsApp number, email consistency) are both now implemented in source, pending commit/deploy. Still unverified per the roadmap's own acceptance note: whether Gmail "Send As" is configured for `info@vavendano.com` so Victor can actually reply from that address — worth confirming before relying on it live.
