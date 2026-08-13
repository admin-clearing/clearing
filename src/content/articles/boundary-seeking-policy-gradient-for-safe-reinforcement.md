---
title: "Boundary-Seeking Policy Gradient for Safe Reinforcement Learning"
dek: "arXiv:2608.10204v1 Announce Type: new Abstract: Safe reinforcement learning maximizes reward subject to safety constraints. For Constrained Markov Decision Processes, the linear-programming view over occupancy measures..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-12
featured: false
gradient: grad-4
---

arXiv:2608.10204v1 Announce Type: new Abstract: Safe reinforcement learning maximizes reward subject to safety constraints. For Constrained Markov Decision Processes, the linear-programming view over occupancy measures implies that whenever the constraint is active at optimality, the optimal policy lies exactly on the constraint boundary, yet standard gradient-based methods do not exploit this structure and often settle in the feasible interior. We introduce Boundary-Seeking Policy Gradient (BSPG), a first-order method whose update combines a tangential component that improves reward while preserving cost to first order with a signed, residual-driven normal component that regulates the policy toward the active boundary from either side; the combined direction admits an algebraic Lagrangian form with an induced coefficient and no learned dual variable. Under exact gradients and stated regularity conditions, the constraint residual converges to zero from either side with a finite-horizon $O(1/\sqrt{T})$ bound, the tangential component is a reward-ascent direction on the boundary, and any convergent parameter sequence is stationary on the active constraint set, satisfying the KKT conditions when the limit is also a local maximizer over the feasible set. This complements existing analyses, which certify feasibility but do not characterize the constraint value at convergence. On a standard Safety-Gymnasium navigation task, BSPG attains higher reward while tracking the boundary more tightly than the compared baselines.

---

*Source: [arXiv](https://arxiv.org/abs/2608.10204)*
