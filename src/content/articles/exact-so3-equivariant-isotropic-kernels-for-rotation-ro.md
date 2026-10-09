---
title: "Exact SO(3)-Equivariant Isotropic Kernels for Rotation-Robust Neural Dynamics"
dek: "arXiv:2610.10626v1 Announce Type: new Abstract: Neural surrogates for vector-valued partial differential equations can fit training data yet change their predictions when the same physical state is expressed in a..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-09
featured: false
gradient: grad-4
---

arXiv:2610.10626v1 Announce Type: new Abstract: Neural surrogates for vector-valued partial differential equations can fit training data yet change their predictions when the same physical state is expressed in a rotated coordinate frame. We study this failure on three-dimensional Navier--Stokes dynamics observed at irregularly placed points. We introduce the Invariant-Conditioned Isotropic Kernel Neural Operator (IKNO), a compact graph model that builds local interactions from scalar quantities unchanged by rotation and vector directions that rotate with the data. Consequently, rotating the positions and velocities rotates the predicted velocity change in exactly the same way. On a held-out test set fixed after model design, training unconstrained graph models on randomly rotated examples reduces but does not eliminate their coordinate dependence. In contrast, IKNO is consistent to numerical precision, matches the forecasting accuracy of a general rotation-aware Tensor Field Network with $5.6$ times fewer parameters, and outperforms a parameter-matched graph simulator. These results show that a compact, PDE-specialized model can remove coordinate dependence without sacrificing forecasting accuracy.

---

*Source: [arXiv](https://arxiv.org/abs/2610.10626)*
