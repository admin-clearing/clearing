---
title: "Diminishing Returns of Data in Sparse Autoencoders: Functional Behavior does not Guarantee Feature Reproducibility"
dek: "arXiv:2610.20680v1 Announce Type: new Abstract: Sparse autoencoders (SAEs) are typically trained on hundreds of millions to billions of activation tokens, yet little work has tested whether this scale is necessary. We..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-10-16
featured: false
gradient: grad-4
---

arXiv:2610.20680v1 Announce Type: new Abstract: Sparse autoencoders (SAEs) are typically trained on hundreds of millions to billions of activation tokens, yet little work has tested whether this scale is necessary. We study how much activation data SAEs need by training four SAE architectures on three language models with budgets ranging from 5M tokens to a 500M-token reference. We measure two notions of convergence: functional behavior on standard evaluations and one-to-one reproducibility of learned features. Functional data requirements are strongly metric-dependent: reconstruction often approaches the full-data reference at substantially smaller budgets, whereas feature reproducibility continues to improve with data. For Gemma-2-2B BatchTopK, the fraction of strictly matched features rises from 2\% at 5M tokens to 29\% at 50M. Data selection also matters: random sampling better preserves the original activation distribution and generally favors reconstruction, whereas diversity-based sampling frequently improves AutoInterp. A theoretical analysis separates statistical consistency of subsampled training from the stronger identifiability and optimization conditions required for one-to-one feature recovery. Our results show that SAE training can often be made far more data-efficient when budgets are matched to the goal, and feature-level claims are backed by explicit reproducibility checks, paving the way toward cheaper and more reliable SAE research.

---

*Source: [arXiv](https://arxiv.org/abs/2610.20680)*
