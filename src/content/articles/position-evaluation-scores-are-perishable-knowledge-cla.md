---
title: "Position: Evaluation Scores Are Perishable Knowledge Claims"
dek: "arXiv:2607.26191v1 Announce Type: new Abstract: Evaluation methodologies for language models increasingly combine multiple signals, from automated metrics and LLM-as-judge ratings to human assessments and benchmark..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-07-31
featured: false
gradient: grad-4
---

arXiv:2607.26191v1 Announce Type: new Abstract: Evaluation methodologies for language models increasingly combine multiple signals, from automated metrics and LLM-as-judge ratings to human assessments and benchmark suite results. When these signals are aggregated via averaging, evaluation confidence can then substantially exceed the reliability of the weakest signal: a phenomenon we call trust inflation in evaluation. We argue that evaluation scores should be treated as epistemic claims with three properties: formality (human evaluation provides stronger evidence than an automated metric), scope (a benchmark result applies to the tested distribution, not universally), and validity windows (benchmark results expire as contamination accumulates and distributions shift). Several converging research traditions (chain-of-thought analysis, possibilistic logic, and algebraic theory) establish weakest-link aggregation as the conservative endpoint of a parameterized operator family controlled by a single pessimism parameter. Drawing on those traditions, and on concrete lessons from building an evaluation harness for agentic AI, we propose that evaluation results carry explicit metadata (formality tier, scope declaration, and expiration date) to make their epistemic status transparent. We illustrate the cost of mean aggregation on the public HELM leaderboard: across 54 frontier models on ten scenarios, the top-five models ranked by mean score and by weakest-link are completely disjoint.

---

*Source: [arXiv](https://arxiv.org/abs/2607.26191)*
