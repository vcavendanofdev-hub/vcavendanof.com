---
title: "Which Model Is Better? Wrong Question. Which Model Fits This Task?"
description: "Articles ranking AI model A against model B skip the real decision. How to match a model to a task by risk, volume and data, and where a local model helps with cost and privacy."
pubDate: 2026-10-18
category: "AI & Productivity"
lang: "en"
translationKey: "choosing-the-right-model"
---

Every few weeks there is a new article announcing that model A beats model B. I read them, and then I notice what they don't help me with: deciding how to handle the task on my desk.

The comparison answers a question about models in general. Your question is about one task, one set of documents and one person who has to stand behind the result. Those are not the same question, and the gap between them is where money, time and privacy get lost.

**The short version:** choose the model per task, not per team or per year. Three things decide it: what happens if the answer is wrong, how often the task runs, and what data it touches.

## Why the ranking doesn't transfer

A leaderboard averages a model over many tasks, and none of them is yours. A model that wins on average can lose on your invoices, your meeting notes or your Spanish-language correspondence, and a cheaper one can match it there.

The providers say this themselves. Anthropic's guide to choosing a model tells you to build tests specific to your use case, run your actual prompts and data, and calls a good evaluation set the most important step. OpenAI's model selection guide gives the same advice in other words: start with a strong option, then keep the lightest setting that meets your quality bar. Neither tells you to pick whatever tops a chart.

Those guides also show that "the model" is not one choice. Within a single vendor there are tiers and settings that trade speed and cost against depth. So the real decision is smaller and more useful: for this task, how much capability do I need, and how much am I paying for the rest?

## Three questions per task

Take a normal week for an assistant or a project manager and list the tasks. For each one, ask:

1. **What does a wrong answer cost?** A mislabeled email costs a minute. A misread clause in a contract change can cost a budget.
2. **How often does it run?** A task done twice a month can use the strongest model without anyone noticing the bill. A task done thousands of times cannot.
3. **What data does it touch?** Public text is one thing. Names, account details and internal documents are another.

Here is how that sorts out. Sorting a shared inbox into categories is low risk, high volume and often full of personal details: a small model, possibly one running on your own machine, is usually enough, with a person spot-checking. Drafting a stakeholder update from meeting notes is medium risk and low volume, so a stronger model is fine as long as someone reads the draft before it leaves. Reviewing a change to a contract is high risk: the strongest model you can use is a second pair of eyes, never the decision.

## Where the savings come from

Cost follows volume, and volume is mostly easy work. FrugalGPT, a 2023 study, tested cascades in which a cheap model answers first and only hard questions move up to a stronger one. The authors report matching the best single model's results with cost reductions of up to 98% on their benchmarks. A 2024 paper, RouteLLM, trained routers to choose between a strong and a weak model for each request and reports cost cuts of more than 2x in some cases without a loss in quality. Those are research settings, and your mix of tasks will not behave the same way.

Be careful with the lesson, too. Anthropic's own tests of combining models found it paid off in some setups and cost accuracy or money in others, and they tell readers to measure on their own workload. Routing is not free: someone has to decide what counts as easy, and test that the cheap path holds up.

A 2025 position paper by a group at NVIDIA argues that small language models are enough for many of the narrow, repeated steps inside automated workflows, and that mixed systems make sense when you need general conversation. It is an argument, open to critique, but it points the same way.

## What a local model does for you

Running a model on your own computer changes two things. There is no per-token fee, so a high-volume task costs electricity and hardware rather than a meter. And the text can stay on your machine: Ollama's documentation says local use stays on your computer and that Ollama doesn't see your prompts. The UK data protection regulator, the ICO, lists on-device inference among the ways to limit how much personal data leaves your hands, next to the broader principle of using only the data a purpose needs.

The cost side has limits. The model has to fit in your graphics memory or run slowly on the processor, so what you can run depends on your hardware, and small models are weaker on hard reasoning. "No fee per token" also isn't "free": you pay in setup time and in your own attention.

## What a local model does not guarantee

I'd be careful with the phrase "local means private." It means the model doesn't send your text to its maker, and that is all it means.

Ollama's server listens only on the local machine by default, but the documentation also describes how to open it to the network. The moment you do, access control is your job. The OWASP list of the ten biggest risks for LLM applications includes sensitive information disclosure and supply chain, and both apply to a model you download and run yourself: the weights and tools come from somewhere, and what the model can read, it can repeat. Local also moves the work of updating and securing the setup to you.

So the privacy question has two halves. Where does the text go, and who can reach the machine and the outputs? NIST's AI Risk Management Framework, and its generative AI profile published in 2024, treat this as a matter of governing and mapping the risk for each use, not of picking a tool once.

## What I would do with your week

If you asked me to look at how your team uses AI, I would not start by choosing a model. I'd list the tasks and sort them by the three questions. High-volume work with personal data goes first on the list for a small or local model with spot checks. Low-volume, high-risk work gets the strongest model plus a named person who owns the result. In between, I'd test two options on a sample of real documents and keep the cheaper one if the output holds.

That is the same habit I described in [Will AI Replace Your VA or Your PM?](/blog/will-ai-replace-your-va-or-pm): the tool takes the first pass and a person owns the final version. The model choice only decides which tool does the first pass. For the project manager's side of it, there is [How AI Is Changing the Project Manager Role](/blog/how-ai-is-changing-the-project-manager-role). If you want to walk through your own list, [message me](/contact).

## What I read

Provider guidance and research, each linked below. I did not use benchmark rankings.

- Anthropic, [Choosing the right model](https://platform.claude.com/docs/en/about-claude/models/choosing-a-model) and [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- OpenAI, [Model selection](https://developers.openai.com/api/docs/guides/model-selection)
- Chen, Zaharia and Zou, [FrugalGPT: How to Use Large Language Models While Reducing Cost and Improving Performance](https://arxiv.org/abs/2305.05176) (2023)
- Ong and colleagues, [RouteLLM: Learning to Route LLMs with Preference Data](https://arxiv.org/abs/2406.18665) (2024)
- Belcak and colleagues, [Small Language Models are the Future of Agentic AI](https://arxiv.org/abs/2506.02153) (2025)
- Ollama, [FAQ](https://docs.ollama.com/faq)
- UK Information Commissioner's Office, [How should we assess security and data minimisation in AI?](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/how-should-we-assess-security-and-data-minimisation-in-ai/)
- OWASP, [Top 10 for LLM Applications 2025](https://genai.owasp.org/llm-top-10/)
- NIST, [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)

The numbers come from the papers' abstracts; I have not re-run any of the studies. I could not open NIST's generative AI profile itself as text, so I cite only the framework page and its dates.
