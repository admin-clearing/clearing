---
title: "Learning Discrete Riemannian Metrics for Physical Fields with Cochain-Frame Equivarianc"
dek: "arXiv:2608.14556v1 Announce Type: new Abstract: Physical fields on meshes require a separation between topology and geometry: conservation laws are topological and should be exact, while geometry, material response, and..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-18
featured: false
gradient: grad-4
---

arXiv:2608.14556v1 Announce Type: new Abstract: Physical fields on meshes require a separation between topology and geometry: conservation laws are topological and should be exact, while geometry, material response, and anisotropic coupling must be learned from data. Existing neural surrogates often mix these roles inside unconstrained message passing. We introduce Riemannian Hodge Message Passing (RHMP), which turns this separation into an architectural principle. RHMP fixes the cellular coboundaries ($d_k$) determined by oriented incidence and learns symmetric positive-definite cochain metrics ($H_k$) for geometry-dependent propagation. Treating $H_k$ as the learned metric motivates cochain-frame equivariance: physical propagation should be invariant to orthogonal changes of the hidden cochain feature basis. RHMP implements this principle with metric-weighted Hodge blocks ($d_k^\top H_{k+1}d_k$), yielding exact cochain-complex identities ($d_{k+1}d_k=0$), nonnegative Hodge energies, positive-semidefinite operators, and exact Abelian curvature invariance. Across seven physical benchmarks spanning fluids, electromagnetism, gauge fields, and variable-mesh CFD, RHMP achieves the best overall performance, with the largest gains when topology, learned geometry, and field structure interact.

---

*Source: [arXiv](https://arxiv.org/abs/2608.14556)*
