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

---

## 2026-10-14 16:15

**What changed:** Victor committed and pushed the Fase 1 contact-info changes (GitHub Desktop, his own flow). Deployed to production: pulled in Cloud Shell, `npm run build`, `gcloud compute scp --recurse dist/* vcavendanof_dev@victoravendano-web:/var/www/victoravendano/dist/ --zone=us-central1-a` (first attempt hit `Permission denied (publickey)`, a plain SSH-key-propagation delay in Cloud Shell — retry of the same command succeeded, no key regeneration needed). Verified live on `https://vavendano.com` and `https://vavendano.com/es/project-manager`: footer and WhatsApp contact card both show the new email and number, `wa.me` link resolves to `573219052343`. Victor confirmed separately that Gmail "Send As" for `info@vavendano.com` was already configured, so that roadmap risk is closed too.

**Relevant files:** `src/i18n/config.ts`, `src/pages/index.astro`, `src/pages/es/index.astro` — commit pushed to `main` on GitHub (`vcavendanofdev-hub/vcavendanof.com`), deployed to `victoravendano-web` VM.

**Vault should know:** Roadmap Fase 1 is now fully closed and live in production: WhatsApp `+57 321 905 2343`, email `info@vavendano.com`, both verified on the live site in EN and ES. Still open from Fase 1's original scope: confirming no other hardcoded contact refs exist beyond the ones already found and fixed (none were), and the final rebuild/redeploy QA pass from the roadmap's acceptance criterion — now done. Fase 1 can be marked complete in `roadmap-mejoras-sitio.md` when Victor next reviews it.

---

## 2026-10-14 21:40

**What changed:** Design, accessibility, SEO and content review of the live site (10 pages, EN/ES, desktop and 375 px) cross-checked against the personal vault and the blackboard. Victor answered 12 open questions in chat and the findings were turned into an executable plan. `roadmap-mejoras-sitio.md` Fase 1 is now ticked (final values: +57 321 905 2343, info@vavendano.com). No site code changed in this entry; `deploy/deploy.sh`, `DEPLOY.md` and this log are still uncommitted.

**Relevant files:** `roadmap-correcciones-2026-10.md` (new, the plan), `roadmap-mejoras-sitio.md` (Fase 1 ticked and pointer added).

**Vault should know:**
- Findings, in order of severity: footer tagline unreadable (1.31:1 contrast); brand terracota fails WCAG AA on buttons and eyebrows (4.03:1 and 3.7:1); Ecoproyectos period shown as "2015 – 2023" (PM) and "2018 – 2023" (VA), both wrong; hero CTAs not equal weight; canonical/hreflang URLs 301-redirect; 404 is the default nginx page; Spanish pages have English titles; no og:image; no HSTS/CSP. Performance is not a problem (12 KB HTML, 6 KB CSS, no JS). No Lighthouse score was obtained (PageSpeed API returned 429).
- Decisions recorded by Victor on 14/10/2026 (full table in `roadmap-correcciones-2026-10.md`, section 0): Ecoproyectos shown as Sep 2016 - Jan 2018 plus the approved consulting line; the ARQ AI-filter figure is published; the Procinal/NEC project is anonymized; availability statement approved (Bogota UTC-5, any time zone, weekends included); all 37 certifications published, grouped and collapsible; four extra services added to the VA page; hero stays 50/50 with equal-weight CTAs; no fincrime service page; self-hosting Inter and Fraunces approved; `cv_avendano.pdf` to be removed from the public repo tree (it stays in git history).
- Execution order: Phase A (accuracy + accessibility, no new copy) ships first; Phase B (content) after Victor reviews the appendix copy; Phase C (SEO/infra, includes VM nginx steps) third. Dependency: professional photo from the 15/10/2026 session unlocks the final og:image and the old roadmap's Fase 4.
- Not recorded here on purpose: nothing about third parties or financial figures.

---

## 2026-10-14 23:55

**What changed:** Phase A of `roadmap-correcciones-2026-10.md` implemented in the working tree (A1-A7). Not committed, not deployed. Ecoproyectos period corrected to Sep 2016 - Jan 2018 on both service pages in EN and ES; footer tagline readable again; brand terracotta now meets WCAG AA (primary button, eyebrows, skip link, blog accent text use `--color-accent-dark`; new `--color-accent-deep` for hover); hero CTAs equal weight (PM terracotta, VA navy); role line added under the hero H1 (new `hero.roleLine` field in `types.ts`, `en.ts`, `es.ts`); duplicate "Contact" link removed from the header nav; header and footer tap targets raised to 44 px; mobile header breakpoint 760 -> 880 px.

**Relevant files:** `src/styles/global.css`, `src/components/Header.astro`, `src/components/Footer.astro`, `src/content/site/{en,es,types}.ts`, `src/pages/index.astro`, `src/pages/es/index.astro`, `src/pages/blog/{index,[slug]}.astro`, `src/pages/es/blog/{index,[slug]}.astro`.

**Vault should know:** Measured locally across the 10 routes (EN/ES) at 320, 375, 768 and 881+ px: 0 contrast failures (was 5 on the hub alone), 0 horizontal overflow, 0 tap targets under 44 px from 375 px up, mobile header 221 -> 102 px. The live site still shows the old state until Victor commits, pushes and deploys. Next: Victor reviews the copy appendix of the roadmap (Phase B), then Phase C (includes two nginx steps on the VM).

---

## 2026-10-15 00:30

**What changed:** Victor approved all Phase B copy of `roadmap-correcciones-2026-10.md` (mid-session, in chat). Phase C implemented in the working tree, not committed or deployed: branded bilingual 404 page (`src/pages/404.astro`, noindex, not in the sitemap); Spanish titles and card descriptors; `og:image`/`twitter:image` with `summary_large_image` and `theme-color` in `BaseLayout.astro`, plus provisional typographic cards `public/og-en.png` and `og-es.png` (1200x630, replaced when the professional photo exists); JSON-LD `Service` on both service pages and `ContactPage` on contact in EN and ES (`src/lib/schema.ts`); Inter and Fraunces self-hosted in `public/fonts/` (96 KB total, OFL) replacing the Google Fonts import; nginx template and `deploy/security-headers.conf` (HSTS, CSP, Permissions-Policy, `server_tokens off`, no-redirect `try_files`); runbook section in `DEPLOY.md`.

**Relevant files:** `src/pages/404.astro`, `src/lib/schema.ts`, `src/layouts/BaseLayout.astro`, `src/styles/global.css`, `src/content/site/{en,es,types}.ts`, `src/pages/{project-manager,virtual-assistant,contact}.astro` and the `es/` mirrors, `public/fonts/*`, `public/og-*.png`, `deploy/nginx.conf`, `deploy/security-headers.conf`, `DEPLOY.md`.

**Vault should know:** Verified locally: 17 pages build, zero third-party requests, 8 valid JSON-LD blocks, 11 routes with 0 contrast/tap-target/overflow problems. Still open: (1) commit, push and deploy; (2) two VM-side nginx steps (trailing-slash fix, security headers) that Victor runs in Cloud Shell from the `DEPLOY.md` runbook, only after the site deploy because the CSP needs the self-hosted fonts; (3) Lighthouse scores via PageSpeed Insights, which Victor runs in the browser; (4) Phase B implementation (copy approved).

---

## 2026-10-15 00:45

**What changed:** Phase B of `roadmap-correcciones-2026-10.md` implemented in the working tree (B1-B6), using the copy Victor approved. Not committed or deployed. PM page: Ecoproyectos entry rewritten (team of 10, anonymized multi-city rollout with a formal change order, Sep 2016 - Jan 2018), the approved consultant line added, ARQ AI first-pass filter added. Hub: stats 6 -> 8 (10 people led, 90%+ less manual review; 2 columns on mobile), the Jugger and still-active-organizations sentence, and a new `#credentials` section with 37 certifications in 4 collapsible groups plus 2 education entries (data in `src/content/site/credentials.ts`, component `CertificationGroups.astro`). VA page: tools list expanded and retitled "Tools I work with", the 20-30 KYC calls a day, a new "Also available" block (translation, travel and events, document management, reporting). Availability line (Bogota UTC-5, any time zone, weekends included) on the contact page and in both engagement-model intros. PM page links to the credentials section.

**Relevant files:** `src/content/site/{en,es,types,credentials}.ts`, `src/components/{CertificationGroups,ServicePageBody,StatGrid}.astro`, `src/pages/{index,contact}.astro` and the `es/` mirrors.

**Vault should know:** Verified locally: 17 pages build, 37 certifications and 2 education entries render in EN and ES, 22 audits (11 routes at 320 and 375 px, collapsibles expanded) with 0 contrast, tap-target or overflow problems. Items written from the roadmap's Phase B description and not asked as separate questions: the two education lines, the Jugger 2018 sentence, and using "Virtual Assistant" in the role line while the meta description still says "Executive Assistant". Nothing is live until Victor commits, pushes and deploys; Phases A, B and C can ship together.

---

## 2026-10-15 01:40

**What changed:** First research-based blog post drafted for review, EN and ES, not committed or deployed: `src/content/blog/en/will-ai-replace-your-va-or-pm.md` and `src/content/blog/es/reemplazara-la-ia-a-tu-asistente-virtual-o-pm.md` (translationKey `will-ai-replace-va-pm`). It draws on ten sources reviewed in this session; eight are quoted (WEF Future of Jobs 2025, Gartner 2019 via ITPro, Upwork Research Institute, Brynjolfsson/Li/Raymond, Noy/Zhang, Dell'Acqua et al. via Mollick, Microsoft/LinkedIn Work Trend Index 2024, HBR 2023). McKinsey 2023 and ASAP 2025 were reviewed but not quoted (original unreachable; numbers behind a membership). Also fixed a latent date bug: blog dates were formatted in the build machine's timezone, so a UTC-5 build showed the previous day; the four blog pages now format in UTC.

**Relevant files:** the two post files above; `src/pages/blog/{index,[slug]}.astro` and `src/pages/es/blog/{index,[slug]}.astro` (timeZone: 'UTC').

**Vault should know:** The post uses only facts already approved for the site (ARQ first-pass filter, 90%+ less unnecessary manual review). Pending Victor's review before commit. The blog already had three posts from June 2026; this one is the first of the evidence-based direction and partly overlaps "How AI Is Changing the Project Manager Role" (experience-based).

---

## 2026-10-15 02:10

**What changed:** Phases A, B, C and the first blog post are live in production. Victor committed and pushed (commits `74e637b`, `1a02f70`, `61ad319`, on top of `92d7ce5`), pulled in Cloud Shell and ran `./deploy/deploy.sh` (first real use of the corrected script; 19 pages copied, nginx test passed). Then, step by step on the VM: created `/etc/nginx/snippets/security-headers.conf`, backed up the live config as `victoravendano.bak-2026-10-15`, patched it in place with `sed` (no-redirect `try_files`, `server_tokens off`, include of the snippet in the server and static-asset blocks, removed three duplicated headers), `nginx -t`, reload. `cv_avendano.pdf` is no longer tracked.

**Relevant files:** whole repo; VM files `/etc/nginx/sites-available/victoravendano`, `/etc/nginx/snippets/security-headers.conf`.

**Vault should know:** Verified on production after the reload: HSTS (max-age 31536000), strict CSP, nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy present on page, CSS, font, image and 404; no `301` on any of 11 routes; fonts load under the CSP with no third-party requests; branded 404 returns 404. Open: Lighthouse scores (PageSpeed API rate-limited; Victor to run it in the browser), the VM reports "System restart required" and 18 security updates pending, the live nginx file differs from the repo template (certbot-managed; the template documents this), the professional photo (roadmap Fase 4, replaces the provisional `og:image`), and the "Executive Assistant" vs "Virtual Assistant" wording in the hub meta description.

---

## 2026-10-15 02:50

**What changed:** VM `victoravendano-web` patched and rebooted, step by step from Cloud Shell. Disk snapshot `victoravendano-web-pre-updates-2026-10-15` taken first (rollback point). 37 packages upgraded with `apt-get upgrade` (simulated first: 0 removals; `open-vm-tools` held back and irrelevant on GCE), existing config files kept. Pre-reboot checks passed (`nginx -t`, `sshd -t`, new kernel and initrd present, services enabled). Reboot took about 1-2 minutes; the site answered HTTP 200 with all security headers intact.

**Relevant files:** none in the repo (VM-only operation).

**Vault should know:** VM now runs kernel 6.8.0-1070-gcp after 104 days of uptime; no reboot pending; nginx, ssh and `certbot.timer` all active after the reboot. Unattended upgrades had been installing kernels for months without ever rebooting, so a reboot is needed periodically. Still on 22.04 LTS (24.04 offered, deliberately not done). Disk 68% of 9.6 GB, of which about 1 GB is the systemd journal and /var/lib is 3.6 GB (not yet investigated). The snapshot can be deleted after a few stable days.

---

## 2026-10-15 03:05

**What changed:** Roadmap Fase 2 (SEO tecnico) closed with evidence. Victor ran PageSpeed Insights on production: mobile and desktop both 100/100/100/100 (Performance, Accessibility, Best Practices, SEO) and "Agentic Browsing" 2/2; desktop FCP 0.2 s, LCP 0.4 s, TBT 0 ms, CLS 0, Speed Index 0.3 s. Hreflang verified by a direct check on production: 9 EN/ES pairs, all self-referencing and reciprocal, x-default and canonical consistent, no redirects, correct `lang`. `roadmap-mejoras-sitio.md` Fase 2 items ticked (og:image, JSON-LD, hreflang, Lighthouse); `roadmap-correcciones-2026-10.md` C8 ticked.

**Relevant files:** `roadmap-mejoras-sitio.md`, `roadmap-correcciones-2026-10.md`.

**Vault should know:** Only informational, unscored insights remain on mobile (render-blocking 2.9 KiB stylesheet, est. 110 ms; one-hop critical chain of 63 ms). Left as is on purpose: inlining it would trade away the 30-day immutable cache for a gain that does not move the score. Lighthouse's 10 "manual check" items (tab order, focus visibility, etc.) were not automatically verifiable and are the remaining accessibility follow-up. Fases 3 (conversion copy), 4 (photo) and 5 (DKIM, deploy.sh done, git push resolved) remain.

---

## 2026-10-15 00:55

**What changed:** At Victor's instruction the personal vault and the Agents Blackboard were updated with the website's state (project note, daily log, index; blackboard decisions, a `site-deploy` playbook, two lessons, a needs-Victor note, the hand-off task closed). Everything pending across the website repo, both vaults and the PAS repo was committed and pushed in the same step.

**Relevant files:** this repo: `obsidian-log.md`, `roadmap-correcciones-2026-10.md`, `roadmap-mejoras-sitio.md`.

**Vault should know:** nothing further; the vault-side record is the project note UPDATE 2026-10-15 and `Logs/log-2026-10-15.md`.

---

## 2026-10-15 01:15

**What changed:** No site code changed. Victor ruled, in chat, that the source CV stays OUT of the repo tree (final) and that the website shows only the latest Ecoproyectos role (already the case). The session's blackboard role `site:maintenance` was created and approved (`Agents/site--maintenance.md`); the local, git-ignored `agent-blackboard.md` was updated to match.

**Relevant files:** none in this repo besides this log (the role and rulings live on the blackboard).

**Vault should know:** at the next sync, append a correction to the website project note and the index: the CV file is removed from the public repo tree (final, commit `61ad319`), and the site shows only the latest Ecoproyectos role. The earlier "CV stays public" lines are superseded. Open question for Victor, asked in chat: wording "Executive" vs "Virtual Assistant", next priorities, photo, VM extras.

---

## 2026-10-15 01:20

**What changed:** No site code changed. Victor answered the open website questions in chat. Queued, not started: use "Virtual Assistant" everywhere (hub meta description and VA page title still say "Executive"); keyboard and focus accessibility pass; photo in the hero and social card (he has the photo on 16/10/2026); Phase 3 audience copy; cross-link the two AI blog posts; BlogPosting JSON-LD; read-only look at the VM's `/var/lib`. Snapshot kept until the VM tidy-up is done. DKIM for info@vavendano.com is undecided: Gmail "Send mail as" alias, SMTP server not yet known.

**Relevant files:** none in this repo (queue and rulings are on the blackboard).

**Vault should know:** nothing starts until Victor says so; the queue is `Tasks/2026-10-15_0100_site-queue.md` on the blackboard.
