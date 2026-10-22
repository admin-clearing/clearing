---
title: "TxnQA: Benchmarking Analytical Reasoning and Evidence Grounding over Transaction Event Sequences"
dek: "arXiv:2610.27256v1 Announce Type: new Abstract: Analyzing merchant transaction histories requires dynamic temporal filtering, entity resolution, and aggregation over irregular event streams--operations poorly captured..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-10-22
featured: false
gradient: grad-4
---

arXiv:2610.27256v1 Announce Type: new Abstract: Analyzing merchant transaction histories requires dynamic temporal filtering, entity resolution, and aggregation over irregular event streams--operations poorly captured by static tabular or time-series forecasting benchmarks. We introduce TxnQA, an analytical QA benchmark comprising 27 task families (81 templates) alongside a 5-scenario fraud-risk reasoning suite that evaluates both verdicts and supporting evidence over synthetic, privacy-mitigated transaction data. Ground-truth answers are computed programmatically, and model performance is decomposed into format-following rate (FFR), conditional content accuracy (CA), and end-to-end correctness (E2E). Evaluating prompted proprietary baselines and six LoRA-adapted open-weight models shows that adaptation reliably enforces output schemas but leaves arithmetic bottlenecks: Gemma-4-31B-IT and Qwen3-8B attain E2E scores of 0.867 and 0.816, whereas evaluated MoE checkpoints reach only 0.632-0.713. Furthermore, on the 500-instance fraud suite, verdict accuracy frequently exceeds 80%, yet joint accuracy (requiring exact evidence attribution) collapses to at most ~23%. These findings identify schema compliance, semantic calculation, and evidence attribution as three distinct bottlenecks in transaction-sequence QA.

---

*Source: [arXiv](https://arxiv.org/abs/2610.27256)*
