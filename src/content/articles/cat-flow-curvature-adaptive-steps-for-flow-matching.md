---
title: "CAT-Flow: Curvature-Adaptive sTeps for Flow Matching"
dek: "arXiv:2609.01746v1 Announce Type: new Abstract: Flow Matching has emerged as a leading framework for generative modeling, powering state-of-the-art systems such as FLUX and Stable Diffusion 3.5. However, the iterative..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-09-03
featured: false
gradient: grad-4
---

arXiv:2609.01746v1 Announce Type: new Abstract: Flow Matching has emerged as a leading framework for generative modeling, powering state-of-the-art systems such as FLUX and Stable Diffusion 3.5. However, the iterative nature of its ODE-based sampling process creates a fundamental efficiency bottleneck: the quality of generated samples is highly sensitive to the choice of step-sizes, and current models typically require 20 to 30 steps for good quality. In this work, we propose two lightweight, training-free algorithms, CAT-OV and CAT-OT that adapt step-sizes at inference time based on a novel connection between Flow Matching sampling and gradient flow. Our algorithms are computed efficiently by not requiring additional neural function evaluations. Specifically, CAT-OT estimates curvature over time via a finite-difference approximation of the time-derivative of the vector field, while CAT-OV approximates curvature over the state space via a gradient of the vector field. Under suitable conditions, both methods have truncation error bounds of constant order. Empirically, CAT-OV and CAT-OT outperform existing step-size heuristics in image quality metrics across four text- to-image Flow Matching models, reducing the number of generation steps required to reach comparable quality by up to 40%.

---

*Source: [arXiv](https://arxiv.org/abs/2609.01746)*
