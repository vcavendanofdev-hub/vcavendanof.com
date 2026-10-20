---
title: "Who Signs Off on AI Work? A Review Rule That Scales With the Risk"
description: "AI can draft, sort and summarize, but a person has to own the result. How to decide how much human review each task needs, and what a sign-off should record."
pubDate: 2026-10-20
category: "Operations"
lang: "en"
translationKey: "ai-work-sign-off"
---

In my last post I ended on one line: low-volume, high-risk work gets the strongest model plus a named person who owns the result. A reader could fairly ask what "owns" means in practice. Reading every output line by line is not it, because nobody keeps that up. Signing without reading is not it either.

This post is my answer: a review rule that gets lighter or heavier depending on what a mistake costs.

**The short version:** AI does the first pass, a named person owns the final one, and the amount of checking depends on the risk of the task, not on how good the draft looks.

## Why "someone will review it" is not a plan

The research on automation is older than generative AI, and it is not flattering. Parasuraman and Manzey's 2010 review in *Human Factors* describes automation bias and complacency: people monitor automated output less than they should, and they follow it even when it is wrong. Per the abstract, this happens to novices and experts, and training or instructions alone do not prevent it. It gets worse when the person has other tasks competing for their attention, which describes most of a working day.

The EU AI Act names the same problem. For high-risk systems, Article 14 requires that the people overseeing the system can stay aware of the tendency to rely too much on its output, and that they can decide not to use it, or set its output aside or reverse it. Most of what a small team does with AI is not "high-risk" in the legal sense, so this is not a compliance claim about your invoices. It is a useful description of what a real review needs: attention, the right to say no, and a way to undo.

So "a person looks at it" is a weak control. A better one says who, how closely, and what they record.

## Three levels of review

I sort tasks by the cost of a wrong answer, the same first question as in the model post. In practice that gives three levels.

1. **Spot check.** Low cost if wrong, high volume. Sorting incoming requests, tagging, first-draft replies to routine questions. A person reads a sample, not everything, and the sample is chosen before looking at the results.
2. **Review before it leaves.** Medium cost. Client emails, reports, meeting summaries, anything with a number or a date in it. A person reads all of it, and checks the facts against the source, not against the draft.
3. **Sign-off with a name.** High cost: money, contracts, compliance, anything hard to undo. The AI output is an input. A named person with the authority to decide reads the source, makes the decision, and records it.

The level is attached to the task type, decided in advance, not chosen on the day by whoever is in a hurry.

## What I carried over from regulated work

Two parts of my background shaped this. At a fintech with more than two million users, I worked case queues under a 24-hour response standard. The useful lesson was that a queue is not one risk level. Most cases are routine, a few are not, and the system works when the routine ones move fast through templates and the risky ones go up an escalation path to someone with the authority to decide. AI fits the routine part. It does not replace the escalation.

At Bogotá's district government (UAERMV), I designed document retention frameworks, and there the point was traceability: an auditor must be able to see what was kept, why, and who approved it. I wrote about both in [automating workflows without losing control](/blog/automating-workflows-without-losing-control). The same habit applies here. If an AI-assisted decision cannot be traced to a person and a reason, it is not a controlled process, however good the output was.

I am describing a method here, not claiming a measured result. I have no before-and-after numbers to publish, and I would rather say so than invent them.

## What a sign-off should record

A sign-off that leaves no trace is only a feeling. Keep five lines, in whatever tool your team already uses:

1. **What the AI produced**, and which tool or model did it.
2. **What the person checked**, and against which source.
3. **What they changed or rejected.** This is the most useful line over time, because it shows where the tool is weak.
4. **Who approved it**, by name and role, and when.
5. **The review level** that applied, so a later reader can see whether the level was right.

None of these lines needs to be long. A sentence each is enough, and a template makes it quick. If the model choice is part of the record, it connects directly to [which model fits the task](/blog/which-model-fits-the-task).

## Making the review real

A few habits keep the review from becoming a rubber stamp:

- **Check against the source, not against the draft.** A fluent draft makes errors feel correct.
- **Rotate the sample.** If the same person always reviews the same type of output, attention drops.
- **Give the reviewer permission to reject.** If rejecting means rewriting everything under deadline, people stop rejecting. The Article 14 idea of being able to set the output aside applies to a team of three too.
- **Log the misses.** When an error gets through, record which level it passed and whether the level was wrong.
- **Re-check the levels** when the tool changes. A new model is a new set of failure modes.

## A checklist you can copy

- Is every recurring AI task assigned a review level?
- Was the level chosen by the cost of a wrong answer, not by how the draft reads?
- For level 2 and 3, is the check made against the source?
- Is there a named person with authority for level 3?
- Are the five sign-off lines recorded somewhere findable?
- Can the reviewer reject without being punished for the delay?
- When did you last review whether the levels still fit?

## The takeaway

AI moves the work of a first draft off your desk. It does not move the responsibility. Decide in advance how closely each type of task gets checked, name who owns the result, and keep a short record. This is general operating practice, not legal advice: if your work falls under a regulation for AI systems, read the regulation or ask someone qualified.

If you want help setting this up for your own team, see how I approach [executive support and AI-assisted workflows](/virtual-assistant), or [message me](/contact) with the list of tasks you want to start with.

## What I read

- Parasuraman and Manzey, [Complacency and Bias in Human Use of Automation: An Attentional Integration](https://pmc.ncbi.nlm.nih.gov/articles/PMC3240751), *Human Factors* 52(3), 2010. I read the abstract and summaries, not every study it reviews.
- European Union, Regulation (EU) 2024/1689 (AI Act), Article 14 on human oversight, via the [European Commission AI Act Service Desk](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-14). Points 14(4)(b), (d) and (e).
- NIST, [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework); the page lists the Generative AI Profile (NIST AI 600-1) as released on 26 July 2024. I did not read the profile's own text.
