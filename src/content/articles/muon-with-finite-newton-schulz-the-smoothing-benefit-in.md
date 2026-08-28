---
title: "Muon with Finite Newton-Schulz: The Smoothing Benefit in Nonsmooth Nonconvex Optimization"
dek: "arXiv:2608.26288v1 Announce Type: new Abstract: Muon has emerged as a strong optimizer for the matrix-valued parameters in large language model pretraining, approximately orthogonalizing its momentum with a few..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-28
featured: false
gradient: grad-4
---

arXiv:2608.26288v1 Announce Type: new Abstract: Muon has emerged as a strong optimizer for the matrix-valued parameters in large language model pretraining, approximately orthogonalizing its momentum with a few Newton-Schulz iterations. Existing theory either replaces this iteration with the exact polar factor it approximates, or treats its finite depth as an approximation error, and thus the iteration Muon actually runs can only hurt the guarantees. We show that finite Newton-Schulz can instead be beneficial for nonsmooth nonconvex optimization. To this end, we analyze Muon through the online-to-nonconvex conversion, which views the update rule as an online learner and converts its regret bound into a stationarity guarantee. The finite Newton-Schulz iteration smooths the discontinuous polar map into a Lipschitz map of the singular values, and Muon with finite Newton-Schulz can be regarded as an online learner with a smoothed spectral potential. This smoothing is exactly what the conversion needs: we prove that a Newton-Schulz depth growing only logarithmically in the target accuracy suffices for convergence to stationary points in nonsmooth nonconvex optimization, whereas Muon with the exact-polar update may fail to converge. The resulting sample complexity bounds match the best-known guarantees for nonsmooth nonconvex optimization and are optimal for smooth nonconvex optimization up to problem-dependent factors. The argument extends beyond Newton-Schulz to general spectral maps with the same smoothing property.

---

*Source: [arXiv](https://arxiv.org/abs/2608.26288)*
