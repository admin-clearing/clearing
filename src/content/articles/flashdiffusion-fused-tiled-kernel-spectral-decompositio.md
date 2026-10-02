---
title: "FlashDiffusion: Fused Tiled Kernel Spectral Decomposition"
dek: "arXiv:2609.38198v1 Announce Type: new Abstract: Diffusion maps, and kernel methods more generally, provide an interpretable nonlinear spectral representation basis for geometric learning. In the geometric limit, small..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-02
featured: false
gradient: grad-4
---

arXiv:2609.38198v1 Announce Type: new Abstract: Diffusion maps, and kernel methods more generally, provide an interpretable nonlinear spectral representation basis for geometric learning. In the geometric limit, small bandwidth, these matrices tend to be high rank and thus require materializing dense Gaussian kernels requires $O(N^2)$ memory. We introduce FlashDiffusion, a matrix-free method that evaluates dense Gaussian kernel blocks in fused GPU tiles and couples the eigensolver to an empirical $\beta$-flow that selects the finite-sample resolution scale. A continuation over sample size and bandwidth warm-starts increasingly expensive spectral solves from coarser resolutions.

---

*Source: [arXiv](https://arxiv.org/abs/2609.38198)*
