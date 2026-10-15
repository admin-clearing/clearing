---
title: "How Inner Optimizers Shape Replica Scaling"
dek: "arXiv:2610.19064v1 Announce Type: new Abstract: Training large language models (LLMs) across geographically distributed and poorly interconnected compute pools or data centers has become a topic of significant interest...."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-15
featured: false
gradient: grad-4
---

arXiv:2610.19064v1 Announce Type: new Abstract: Training large language models (LLMs) across geographically distributed and poorly interconnected compute pools or data centers has become a topic of significant interest. This has led to increased study of local optimization methods such as DiLoco for LLMs, especially those that use local (or inner) adaptive or preconditioned optimizers, which are critical for high-performance LLM training. However, a central challenge remains: it is well known that increasing the number of model replicas (replica scaling) while fixing the total training budget leads to monotonically decreasing performance. Existing work has empirically demonstrated that the choice of inner optimizer (Muon v.s. AdamW) can significantly improve this trend, but offers only limited explanation of the performance difference. In this work, we consider a range of inner-optimizers and identify two important factors that impact replica scaling: (1) the covariance structure of the pseudo-gradients and (2) the impact of batch size on the pseudogradient's noise scale. Based on these insights, we theoretically and empirically demonstrate that whitening-based pre-conditioning is a powerful inner-optimizer desideratum. Our empirical evaluation extends the results to reveal that whitening-based inner-optimizers achieve strong replica scaling (for 8-96 replicas), with performance relative to DP improving as parameters and data are scaled.

---

*Source: [arXiv](https://arxiv.org/abs/2610.19064)*
