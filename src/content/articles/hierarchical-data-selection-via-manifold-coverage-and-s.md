---
title: "Hierarchical Data Selection via Manifold Coverage and Sparse Feature Coverage in LLM Post-training"
dek: "arXiv:2608.16927v1 Announce Type: new Abstract: As supervised fine-tuning data continues to scale, selecting high-value subsets from large candidate pools is crucial for reducing training cost and improving model..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-19
featured: false
gradient: grad-4
---

arXiv:2608.16927v1 Announce Type: new Abstract: As supervised fine-tuning data continues to scale, selecting high-value subsets from large candidate pools is crucial for reducing training cost and improving model performance. Existing methods often measure diversity directly in the original embedding space, where geometric metrics entangle dominant semantic directions, fine-grained supervision differences, and local noise. We address this limitation by formulating data selection as a coarse-to-fine hierarchical coverage problem and propose MASS. MASS learns low-dimensional principal manifold coordinates with a dense autoencoder for coarse semantic grouping, and then performs quality-aware sparse feature coverage within each group using a TopK sparse autoencoder. Experiments on Vision Flan and LLaVA-CoT show that MASS consistently outperforms strong data selection baselines across multiple budgets, and in several settings matches or surpasses full data training with only a small subset of data.

---

*Source: [arXiv](https://arxiv.org/abs/2608.16927)*
