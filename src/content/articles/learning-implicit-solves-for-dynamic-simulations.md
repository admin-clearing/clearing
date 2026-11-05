---
title: "Learning Implicit Solves for Dynamic Simulations"
dek: "arXiv:2611.05439v1 Announce Type: new Abstract: High-fidelity simulation of dynamical systems is central to scientific discovery and engineering design, yet remains computationally demanding. Here we introduce the..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-11-05
featured: false
gradient: grad-4
---

arXiv:2611.05439v1 Announce Type: new Abstract: High-fidelity simulation of dynamical systems is central to scientific discovery and engineering design, yet remains computationally demanding. Here we introduce the Implicit Neural Operator Solver (INOS), which learns the implicit solve and encodes a time integrator. INOS pretrains a neural operator from static equilibrium solutions and reuses it within Newmark-$\beta$ integration. At each time increment, the integrator forms an effective equilibrium problem, the pretrained neural operator infers the next-step solution field, and the Newmark relations advance the dynamic state. Numerical examples in linear and nonlinear elastodynamics demonstrate accurate full-field predictions without dynamic trajectory supervision. Comparative results show that INOS, evaluated zero-shot, achieves higher predictive accuracy than neural solver baselines trained on dynamic simulations. In addition, INOS delivers over 4,600$\times$ speedup in nonlinear simulations over sequential classical finite-element solvers. INOS natively accommodates changes in dynamic conditions and enables reuse of the pretrained operator across spatial and temporal discretizations. Further evaluation demonstrates a stable million-step rollout. These findings establish INOS as a reusable neural implicit solver for accurate, efficient, and robust dynamic modeling.

---

*Source: [arXiv](https://arxiv.org/abs/2611.05439)*
