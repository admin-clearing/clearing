---
title: "Beyond \"AI Helps Humans\": Decision-Targeted Evaluation Design for Human-Agent Teams in the Agentic Era"
dek: "arXiv:2609.05527v1 Announce Type: new Abstract: Wherever a coding agent works under engineer supervision, or a clinical model assists a radiologist, the deployment question is whether to keep the human-AI workflow or..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-10
featured: false
gradient: grad-4
---

arXiv:2609.05527v1 Announce Type: new Abstract: Wherever a coding agent works under engineer supervision, or a clinical model assists a radiologist, the deployment question is whether to keep the human-AI workflow or replace it with the human alone or the agent alone. The human-AI workflow is worth keeping only if it beats both of those alternatives. Yet once it is deployed, neither alternative outcome is observed: recovering one means replaying the task under that alternative, and every replay costs expert time or compute. Under a fixed replay budget, the design question is therefore which tasks should be more likely to receive a human-only replay, and which an agent-only replay. Existing methods do not directly target this decision. Agent benchmarks do not choose which missing baseline to measure, variance-based sampling ignores which of the two comparisons is closer to failing, and Bayesian information methods focus on learning model parameters instead of making the deployment decision. We propose TEAM-Design, a rule that gives every task two replay probabilities, one per baseline. It raises a probability where the missing baseline outcome is hard to predict from what is already known about the task and where that comparison is harder to establish, and lowers it where replay is expensive. We prove that the rule solves this budgeted design problem, and that drawing the replays at random from recorded probabilities still controls the chance of wrongly declaring that the workflow beats both. We reanalyze 6 clinical settings, where no human-AI workflow beats both alternatives, and a coding benchmark, where one does, then evaluate TEAM-Design on synthetic designs and on a semi-synthetic design built from a real chest X-ray reader study. TEAM-Design works best when one of 

---

*Source: [arXiv](https://arxiv.org/abs/2609.05527)*
