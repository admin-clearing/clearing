---
title: "Robust Peak-cost Constrained Reinforcement Learning"
dek: "arXiv:2607.15457v1 Announce Type: new Abstract: We study robust peak-cost constrained reinforcement learning (RP-CRL), where the objective is to maximize expected reward while controlling the maximum cost encountered..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-07-20
featured: false
gradient: grad-4
---

arXiv:2607.15457v1 Announce Type: new Abstract: We study robust peak-cost constrained reinforcement learning (RP-CRL), where the objective is to maximize expected reward while controlling the maximum cost encountered along a trajectory. This setting is motivated by safety-critical applications in which a single large violation can be catastrophic and therefore cannot be adequately captured by the standard CMDP framework based on expected cumulative cost. Existing reachability-constrained RL methods adopt Lagrangian-based approaches, yet the underlying duality properties of peak-cost constrained MDPs remain unclear. We show that, unlike standard CMDPs, peak-cost constrained MDPs may not admit zero duality gap. We further consider a robust formulation to address simulator-to-real-world mismatch in the transition dynamics. To solve this problem, we develop a surrogate optimization framework and a robust value estimation method based on integral probability metrics. We prove that, with appropriate hyperparameter choices, the surrogate solution attains the same robust reward value as the original problem while violating the constraint by at most epsilon. Experiments show that the proposed method effectively enforces safety under dynamics perturbations while retaining strong reward performance.

---

*Source: [arXiv](https://arxiv.org/abs/2607.15457)*
