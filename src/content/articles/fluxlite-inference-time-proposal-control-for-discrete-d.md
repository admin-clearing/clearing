---
title: "FluxLite: Inference-Time Proposal Control for Discrete Diffusion Models"
dek: "arXiv:2609.35947v1 Announce Type: new Abstract: Many inference-time tasks for pretrained discrete diffusion models and diffusion language models reduce to drawing samples from a tilted version of the pretrained..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-10-01
featured: false
gradient: grad-4
---

arXiv:2609.35947v1 Announce Type: new Abstract: Many inference-time tasks for pretrained discrete diffusion models and diffusion language models reduce to drawing samples from a tilted version of the pretrained distribution. Feynman-Kac sequential Monte Carlo (SMC) makes this correction exact in principle, but its prescribed weights routinely degenerate when the proposal dynamics are misaligned with the tilt, capping the practical gains from additional particles. We introduce FluxLite, a lightweight, training-free proposal-control framework for discrete diffusion. On the sparse directed graph of pretrained reverse rates, any sparse jump-rate perturbation can be exactly compensated by a $q_t$-weighted graph-divergence term in the Feynman-Kac potential; the target path is therefore preserved while the residual reweighting variance becomes a local convex objective. We instantiate this principle as two practical samplers: a one-hop local reallocation rule (HEU) and a small nonnegative quadratic program over pretrained-rate bases (D-VCG). We further prove population stability under the standard score-entropy training loss, identifying a tilted-path coverage factor that governs robustness to score error, together with finite-particle convergence for a fixed controlled Feynman-Kac recursion. Empirically, FluxLite improves over standard Feynman-Kac SMC baselines by up to two orders of magnitude in terminal KL on an analytically tractable finite-state CTMC benchmark, and reduces row-correlation MSE on 2D Ising sampling by 5-7x in geometric mean and up to 55x at peak.

---

*Source: [arXiv](https://arxiv.org/abs/2609.35947)*
