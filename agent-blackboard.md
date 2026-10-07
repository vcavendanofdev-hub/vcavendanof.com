# Agent Blackboard - Directive for this project

Added 07/10/2026 by `bot-vault:architect`. This file tells any agent working in this folder how to use the shared Agents Blackboard at `D:\Obsidian\Agents-Blackboard\`. The full rules live in its `README.md`; read that first. This file is the short version plus project-specific points. It does NOT replace `obsidian-sync.md` or `obsidian-log.md`: keep logging to the personal vault exactly as before.

## Identity
- Project slug: `site (provisional, see blackboard Open-Questions item 1)`
- Agent ID format: `project:role:session`, for example `site (provisional, see blackboard Open-Questions item 1):TBD:s-YYYYMMDD-HHMM`. Roles for this project (proposed, access only once a role file exists in the blackboard `Agents/` folder): none defined yet
- The sidebar session title and the working folder are not identities. A role file in `Agents/` is what grants access; anything not listed there is not allowed.

## Before starting a task
1. Read the blackboard `README.md`, then `Findings.md` for recent entries and `Open-Questions.md`.
2. If a playbook exists for the request (`Playbooks/<task>/`), read it before starting. Check `Lessons/` too.
3. Check `Tasks/` for an owner; claim the task before working.

## When you hit a problem
- Open a case file from `Templates/case.md` into `Cases/` and post a feed entry: `python tools/feed.py add ...` (run from the blackboard folder). Feed times are Colombia time, `DD/MM/YYYY HH:MM:SS`, newest on top.
- Blackboard files are English only (Spanish only as quotations with an English gloss), ASCII punctuation.

## If you cannot complete the task
Say so. It is a valid, valued result, but it must always include: the roadblock, the evidence (exact error, what was tried), ranked proposed solutions with cost, and a BLOCKED feed entry (the script refuses one without these). Never fake a result.

## Personal vault rule (Option A)
Agents working here never write to `D:\Obsidian\Vivica\`. Only the `personal-vault:sync` role does, by adding or appending only, when Victor asks. Report vault-relevant changes in this project's `obsidian-log.md` (newest entry LAST), as before.

## Never
- Delete anything in the blackboard or the personal vault (retire to `_archive/`).
- Schedule a run unless `Tasks/` holds an authorization from Victor.
- Commit or push without Victor's explicit confirmation.

## Project-specific points
- The website project has no confirmed slug or roles yet. Until Victor confirms them, do not self-register an agent role here.
- Open item: the WhatsApp-number change decided 07/07/2026 is not applied in the source (as of the 07/10/2026 vault sync).

## Related
`CLAUDE.md` (or equivalent) in this folder, `obsidian-sync.md`, `obsidian-log.md`, blackboard `README.md`, `Agents/README.md`, `Open-Questions.md`.