---
title: "FlashSinkhorn 2: Block-Sparse Entropic Optimal Transport"
dek: "arXiv:2610.02395v1 Announce Type: new Abstract: Streaming GPU solvers for entropic optimal transport (EOT), such as FlashSinkhorn, avoid storing the dense kernel but still evaluate all $n\\times m$ point pairs in every..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-05
featured: false
gradient: grad-4
---

arXiv:2610.02395v1 Announce Type: new Abstract: Streaming GPU solvers for entropic optimal transport (EOT), such as FlashSinkhorn, avoid storing the dense kernel but still evaluate all $n\times m$ point pairs in every Sinkhorn iteration. We present \textbf{FlashSinkhorn~2} (FS2), a solver for squared-Euclidean cost on low-dimensional point clouds that solves large discrete EOT problems to a prescribed marginal residual on a single GPU by coupling two stages. A coarse stage solves on cell centroids, lifts the potentials to every point and, when a sampled marginal check rejects the lift, continues on the centroids, replacing most point-level updates. A block-sparse fine stage then removes the centroid error that coarse updates cannot. Its Morton-ordered blocks support screening and fused tensor-core execution, and a threshold set by the block masses bounds each omitted tile's contribution to every row and column. On synthetic benchmarks, FS2 reaches the target residual on all 32 problems and GeomLoss multiscale on 10. On one A100, FS2 solves discrete EOT between two $1.34\times10^8$-particle measures from a cosmological $N$-body simulation, at an entropic blur equal to the mean interparticle distance, to an all-particle marginal residual below 0.01 in under 2.5 hours. To our knowledge, it is the largest discrete EOT problem solved to this accuracy within hours. For reproducibility, we release an open-source implementation at https://github.com/ot-triton-lab/flash-sinkhorn

---

*Source: [arXiv](https://arxiv.org/abs/2610.02395)*
