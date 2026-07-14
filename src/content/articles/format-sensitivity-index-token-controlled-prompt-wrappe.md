---
title: "Format Sensitivity Index: Token-Controlled Prompt Wrapper Robustness and Schema Compliance in LLM Benchmarking"
dek: "arXiv:2607.09665v1 Announce Type: new Abstract: Prompt wrappers often differ only in formatting, yet they can change model scores enough to flip leaderboard conclusions. We study this variance under a token-controlled..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-07-14
featured: false
gradient: grad-4
---

arXiv:2607.09665v1 Announce Type: new Abstract: Prompt wrappers often differ only in formatting, yet they can change model scores enough to flip leaderboard conclusions. We study this variance under a token-controlled protocol and introduce two complementary metrics: the Format Sensitivity Index (FSI), the accuracy range induced by wrapper choice, and the Parseability Sensitivity Index (PSI), the corresponding range in answer parseability. Across 140,000 OpenRouter generations spanning 7 QA tasks, 5 wrapper families, and 4 instruct models from 7B to 72B parameters, we find that mean FSI varies by over 30x across models and is largely explained by compliance failures. A fixed-effects regression shows that parseability remains a strong predictor of accuracy even after controlling for task, model, and wrapper. We argue that reporting accuracy without wrapper variance and compliance is statistically fragile, and we give practical recommendations for both benchmarking and structured-output deployments.

---

*Source: [arXiv](https://arxiv.org/abs/2607.09665)*
