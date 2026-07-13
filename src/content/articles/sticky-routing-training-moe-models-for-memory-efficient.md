---
title: "Sticky Routing: Training MoE Models for Memory-Efficient Inference"
dek: "arXiv:2607.08780v1 Announce Type: new Abstract: Mixture-of-Experts (MoE) models activate only a sparse subset of experts per token, yet consecutive tokens frequently activate different experts -- causing constant weight..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-07-13
featured: false
gradient: grad-4
---

arXiv:2607.08780v1 Announce Type: new Abstract: Mixture-of-Experts (MoE) models activate only a sparse subset of experts per token, yet consecutive tokens frequently activate different experts -- causing constant weight swapping between slow storage and fast memory on edge devices. Existing remedies are either system-level (caching heuristics) or post-hoc (router fine-tuning), leaving the root cause unchanged during pretraining. We propose StickyMoE, a differentiable routing consistency loss that penalises abrupt expert switches between adjacent tokens, encouraging the router to maintain the same expert assignment across semantically coherent spans. StickyMoE requires no architectural changes, adds a single hyperparameter lambda, and unlike post-hoc methods, allows expert representations and routing decisions to co-adapt from the first training step. Experiments on small-scale MoE language models show that StickyMoE reduces the expert switch rate by up to 60% with less than 4% perplexity degradation, Pareto-dominating post-hoc fine-tuning on the quality-locality frontier. Routing temporal locality is most efficiently instilled at training time.

---

*Source: [arXiv](https://arxiv.org/abs/2607.08780)*
