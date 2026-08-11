---
title: "Finite Constant Frontiers and Auditable Regret Certificates for Average-Reward Reinforcement Learning"
dek: "arXiv:2608.07725v1 Announce Type: new Abstract: Average-reward reinforcement-learning regret is known up to logarithmic factors, but the numerical content of published guarantees is difficult to compare because..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-11
featured: false
gradient: grad-4
---

arXiv:2608.07725v1 Announce Type: new Abstract: Average-reward reinforcement-learning regret is known up to logarithmic factors, but the numerical content of published guarantees is difficult to compare because probability mode, structural parameter, logarithmic normalization, prior information, and planning assumptions differ. We introduce a constant-aware comparison protocol and derive an explicit finite lower certificate for communicating MDPs. The construction is a binary tree of two-state blocks; its proof uses exact trajectory-level Bernoulli KL divergence and keeps action budget, diameter, occupancy, navigation cost, and terminal bias explicit. A common closed-form envelope improves the published coefficient $0.015$ across a finite frontier: $0.0200$ in a moderate regime and up to $0.0291$ under stronger action, diameter, and horizon conditions, a $94\%$ increase. The limiting coefficient is $\frac1{32}\sqrt{(A-3)/A}$. For upper bounds, we give an auditable composition rule for a span-constrained optimistic learner, but do not claim a coefficient while adaptive directional-variance and planning certificates remain open. We also formalize valid expectation conversion and constant comparability. Controlled diagnostics test diameter dependence, bonus-by-width interactions, span misspecification, and the finite lower certificate on its exact family.

---

*Source: [arXiv](https://arxiv.org/abs/2608.07725)*
