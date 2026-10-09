---
title: "D-SLR: The Disjoint Row-Sparse plus Low-Rank Decomposition"
dek: "arXiv:2610.10636v1 Announce Type: new Abstract: Compressing a matrix for reconstruction still defaults to the truncated SVD, approximating the data with a single low-rank structure. It is common to reduce the residual..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-09
featured: false
gradient: grad-4
---

arXiv:2610.10636v1 Announce Type: new Abstract: Compressing a matrix for reconstruction still defaults to the truncated SVD, approximating the data with a single low-rank structure. It is common to reduce the residual further by adding an overlapping row-sparse component, but methods that solve this joint problem often require iterative solvers and tuning of regularization parameters. We propose the Disjoint Row-Sparse plus Low-Rank (D-SLR) decomposition, a closed-form drop-in for the truncated SVD that improves or exactly matches it. D-SLR restricts rows to either being stored verbatim or approximated by the low-rank fit, never both. Under squared error this restriction costs nothing: the joint optimum is attainable disjointly with fewer parameters at every non-trivial rank and stored row count (shape). With zero stored rows D-SLR reduces to the truncated SVD, so it never does worse at equal cost. The algorithm scores the entire error-versus-parameters tradeoff, and the solution is chosen afterwards by a supplied error target or parameter count, or by a selection rule. The grid and solution together cost three SVDs, with no tuning or regularization. We derive an assumption-free, a-posteriori lower bound on the error at every shape, giving each solution a computable certificate on the potential gain of any other choice of rank and stored rows. Experiments on synthetic and real data (LLM embedding tables, network traffic, hyperspectral images) confirm the gains and quantify the certificate.

---

*Source: [arXiv](https://arxiv.org/abs/2610.10636)*
