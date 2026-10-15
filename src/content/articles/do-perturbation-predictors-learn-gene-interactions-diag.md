---
title: "Do Perturbation Predictors Learn Gene Interactions? Diagnosing Extrapolation in Agentic Screening"
dek: "arXiv:2610.18880v1 Announce Type: new Abstract: High-throughput perturbation screens increasingly use machine-learning models to predict the effects of gene combinations that were never measured. A difficult case arises..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-15
featured: false
gradient: grad-4
---

arXiv:2610.18880v1 Announce Type: new Abstract: High-throughput perturbation screens increasingly use machine-learning models to predict the effects of gene combinations that were never measured. A difficult case arises when both genes in a test pair were seen individually during training, but their combination was not. In this setting, standard OOD methods often fail because neither gene appears unfamiliar on its own. We therefore compare each model prediction with a simple additive prediction obtained by summing the two observed single-gene effects. The difference between them, which we call additive disagreement (AD), measures how much extra interaction effect the model introduces for an unseen combination. Across eight prediction methods and three Perturb-seq datasets, specialised neural predictors do not consistently outperform this simple additive baseline. More importantly, predictions with larger deviations from the additive baseline tend to have larger errors. Conventional output-based and embedding-based confidence signals are inconsistent across datasets and models, whereas AD remains informative across all evaluated compositional settings. We further study how this signal can guide decisions in an agentic perturbation-screening workflow. The code is available at https://github.com/zygao930/OOD.

---

*Source: [arXiv](https://arxiv.org/abs/2610.18880)*
