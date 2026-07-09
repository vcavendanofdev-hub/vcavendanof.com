# Obsidian Vault Sync — Directive

## Purpose

This project feeds Victor's Obsidian second-brain vault ("Vivica", at `D:\Obsidian\Vivica\Vivica\`, specifically [[Projects/Sitio Web Victor Avendano]] there). The vault does **not** re-read this repo's full `git log` and every roadmap file from scratch on each sync — that's slow and expensive, and it's how sync gaps happened for this project's sibling repos on 2026-07-06 and 2026-07-08 (the vault fell badly behind real same-day progress more than once). Instead, the vault reads `obsidian-log.md` in this repo's root: a lightweight, append-only pointer log that names what changed and where, without restating it. Keeping that log current is what makes vault syncs fast and cheap instead of requiring archaeology every time.

## Cadence

- **Default: daily.** At the end of any session where real work happened (commits, real decisions, deploys, contact-info changes, audit findings), append an entry to `obsidian-log.md` before ending the session.
- **Fallback: weekly.** If a day (or several) passed with no entry, catch up on the **first interaction of the following Monday** (or the first session of the new week, if Monday itself has no session) — read `git log` back to the date of the last logged entry and append one consolidated entry covering the gap. Never let more than one week of real work go unlogged.
- Skip logging for sessions with no real change (pure exploration, reading, planning that didn't land in a commit or a confirmed decision).

## What to log — and what not to

Point at sources of truth inside this repo. Do not restate them.

**Log:**
- Date/time of the entry
- One or two sentence summary of what changed
- The specific files/commits touched (paths + commit hashes) — enough for the vault-side agent to know exactly what to re-read, not a copy of the content
- Anything the vault specifically needs to know: a deploy, a contact-info change (email/WhatsApp), a confirmed business decision, a roadmap phase closed, a real bug/SEO gap found or fixed

**Do not log:**
- Full file contents or full commit diffs
- Anything already fully described in this repo's own `roadmap.md`, `roadmap-mejoras-sitio.md`, or `README.md` — link to the file, don't duplicate it
- Routine/no-op sessions

## Format

Append-only, most recent entry **last** (matches this vault's own `Logs/YYYY-MM-DD.md` convention). Suggested entry shape:

```
## YYYY-MM-DD HH:MM
**What changed:** one or two sentences.
**Relevant files:** `path/to/file1`, `path/to/file2` (commit `abc1234` if applicable)
**Vault should know:** the specific fact(s) worth updating in the vault note — status changes, new decisions, new blockers, milestones.
```

## Who's responsible

Whichever agent or tool is working in this repo (Claude Code, a human directly) appends to `obsidian-log.md` before ending a work session with real changes. This is this repo's own responsibility — the vault should not have to reconstruct it after the fact.

## Related

- `obsidian-log.md` — the actual log this directive governs, same folder
- `roadmap.md` and `roadmap-mejoras-sitio.md` — this repo's planning documents; either should point back to this file and to `obsidian-log.md` as part of the session routine
- Vault note: `[[Projects/Sitio Web Victor Avendano]]` in the Vivica vault
