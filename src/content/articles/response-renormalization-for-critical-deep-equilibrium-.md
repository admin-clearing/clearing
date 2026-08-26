---
title: "Response Renormalization for Critical Deep Equilibrium Models"
dek: "arXiv:2608.23725v1 Announce Type: new Abstract: Deep Equilibrium Models (DEQs) compute predictions from a hidden representation unchanged by the model update. Training through this equilibrium uses implicit..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-26
featured: false
gradient: grad-4
---

arXiv:2608.23725v1 Announce Type: new Abstract: Deep Equilibrium Models (DEQs) compute predictions from a hidden representation unchanged by the model update. Training through this equilibrium uses implicit differentiation and requires solving an adjoint system built from the residual Jacobian. If this Jacobian is nearly singular along loss-sensitive directions, small perturbations can be strongly amplified in the adjoint response, producing large, highly sensitive gradients that can make optimization unreliable. We introduce Response Renormalization, a backward-pass framework that lifts selected near-pole denominators while leaving unlifted response channels unchanged. Collective Mode Response Renormalization (CMR) applies this correction in a low-dimensional critical subspace, while Phi-adaptive CMR computes a bounded response mass from a positive susceptibility rule. We derive dense and matrix-free collective formulations, distinguish exact gradients of a modified frozen-anchor residual from backward-response surrogates, and extend the construction to Structured Implicit Layers and Vector Attractors (SILVA). Across 23 multiphysics families spanning partial differential equations, three-dimensional fields, operator maps, complex geometries, and particle systems, CMR and Phi-CMR yield test errors no more than five percent higher than those from models trained with exact implicit differentiation in more than 98% of static and 95% of transient family-seed comparisons. Solver-index experiments show convergence toward the static adjoint, while physical-time rollouts retain predictive fidelity under the evaluated conditions. These results demonstrate that selective response renormalization can control near-critical adjoint amplification without globally damping well-conditi

---

*Source: [arXiv](https://arxiv.org/abs/2608.23725)*
