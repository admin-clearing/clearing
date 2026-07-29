---
title: "FMOPF: Latent Flow Matching with Constraint-Aware Interaction Priors for AC Optimal Power Flow"
dek: "arXiv:2607.22788v1 Announce Type: new Abstract: AC optimal power flow determines the minimum-cost generation dispatch under nonlinear power balance constraints and is solved thousands of times daily in electricity..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-29
featured: false
gradient: grad-4
---

arXiv:2607.22788v1 Announce Type: new Abstract: AC optimal power flow determines the minimum-cost generation dispatch under nonlinear power balance constraints and is solved thousands of times daily in electricity market operations. Learning a direct mapping from load conditions to OPF solutions can accelerate this computation, yet with deepening renewable penetration, a single optimal dispatch is no longer sufficient. Operators require a characterization of the distribution of feasible near-optimal solutions for risk quantification, sensitivity analysis, and multi-objective trade-off assessment. Supervised neural networks provide fast point predictions but cannot capture this conditional distribution. Diffusion-based generative models can sample diverse solutions in principle, yet existing methods operating in the raw state space exhibit degraded solution quality and fail to scale beyond medium-sized systems. We identify the root cause as the conflation of two distinct tasks within a single model. Compressing the high-dimensional OPF solution manifold is one task, and learning the conditional mapping from loads to that manifold is another. This paper presents FMOPF, a framework that resolves this conflation by decoupling compression from generation through latent flow matching and by explicitly modeling load-state coupling through a Constraint-Aware Interaction Prior Network. Experiments on four IEEE test systems demonstrate that FMOPF provides the most effective Newton-Raphson warm starts, achieves the lowest tail risk among generative methods, and is the first such method to scale to systems with several hundred buses while preserving full feasibility. Ablation studies confirm that the latent generation pipeline is a necessary condition for physical feasibility and t

---

*Source: [arXiv](https://arxiv.org/abs/2607.22788)*
