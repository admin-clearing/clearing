---
title: "CC-AOS: Cost- and Horizon-Conditioned Amortized Backward Induction for Finite-Horizon Optimal Stopping"
dek: "arXiv:2607.22774v1 Announce Type: new Abstract: Finite-horizon optimal stopping is a central problem in early time-series classification, where a system must decide at each sequence prefix whether the expected benefit..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-28
featured: false
gradient: grad-4
---

arXiv:2607.22774v1 Announce Type: new Abstract: Finite-horizon optimal stopping is a central problem in early time-series classification, where a system must decide at each sequence prefix whether the expected benefit of another observation justifies its acquisition cost. Existing data-driven backward-induction methods typically solve each cost-horizon operating point separately, so changing operating conditions requires repeated optimization and separate model stacks, making continuous cost adaptation and multi-horizon deployment inefficient. We propose CC-AOS (Cost- and Horizon-Conditioned Amortized Optimal Stopping), a structured amortized solver for a family of finite-horizon stopping problems with continuous costs and multiple horizons. CC-AOS learns a shared continuation-value model conditioned on the current state, absolute time, remaining horizon, and acquisition cost through joint amortized fitted backward induction. We establish that the exact value and continuation functions are nondecreasing, concave, and horizon-dependently Lipschitz in cost, encode these properties in the model architecture, and derive residual-based bounds on value and policy errors. Experiments on controlled Gaussian and time-varying non-Gaussian processes and the FordA engine-noise time-series benchmark compare CC-AOS with representative per-operating-point backward-induction solvers and tuned static stopping rules. At six unseen FordA cost-horizon pairs, one CC-AOS checkpoint achieved a lower terminal-risk-plus-sampling-cost objective than independently fitted Convex Function Learning at all six pairs, with an average reduction of 15.75 percent, while matching the tuned static thresholds on average.

---

*Source: [arXiv](https://arxiv.org/abs/2607.22774)*
