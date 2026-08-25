---
title: "There Is No Neutral Harness: Modern LLM Leaderboards Are Manufactured by Config-Fragile Items"
dek: "arXiv:2608.21382v1 Announce Type: new Abstract: Multiple-choice benchmarks fix the questions and the correct answers, but not the harness: the order of the options, the wording of the prompt, and whether a language..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-25
featured: false
gradient: grad-4
---

arXiv:2608.21382v1 Announce Type: new Abstract: Multiple-choice benchmarks fix the questions and the correct answers, but not the harness: the order of the options, the wording of the prompt, and whether a language model's answer is read from generated text or from per-option likelihoods. Work on this harness sensitivity reports it as aggregate score variance, leaving unexamined which items the variance falls on and whether they are the items that separate one model from the next. We treat the evaluation harness of large language models (LLMs) as an independent variable and resolve its effect to single items. We introduce the \textit{fragility grid}: 12 open-weight instruction-tuned LLMs from 4 families answer the same 3{,}679 items from 4 benchmarks (ARC, HellaSwag, MMLU, TruthfulQA) under 26 equally defensible harness configurations, recording one correctness bit for every model, item, and configuration. The comparison is matched, since the items, the weights, and the greedy decoding stay fixed while only the harness varies. Under the grid a model's score is a band rather than a point: gemma4-31b scores between 31 and 89 percent depending only on the harness. Three results follow. On the items that two adjacent models both answer stably the pair is tied, and config-fragile items carry 95.7 percent of a pair's gap on average. Four of the 12 models reach rank one under some configuration, so the harness selects the winner. Item discrimination, the property that benchmark-compression methods maximize, correlates with fragility at 0.28 (95 percent CI 0.25 to 0.30), so compression keeps the fragile items rather than removing them. The scoring choice, not the option order that protocols usually fix, is the load-bearing axis. We release the per-item records and the analysis 

---

*Source: [arXiv](https://arxiv.org/abs/2608.21382)*
