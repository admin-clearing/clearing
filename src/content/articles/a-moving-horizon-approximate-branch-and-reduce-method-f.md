---
title: "A Moving-Horizon Approximate Branch-and-Reduce Method for Deep Classification Trees"
dek: "arXiv:2609.38194v1 Announce Type: new Abstract: Despite the importance for interpretability, decision trees face severe scalability challenges. Existing global optimal methods are often limited by binary feature..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-02
featured: false
gradient: grad-4
---

arXiv:2609.38194v1 Announce Type: new Abstract: Despite the importance for interpretability, decision trees face severe scalability challenges. Existing global optimal methods are often limited by binary feature selection and shallow tree depths, whereas traditional heuristic approaches frequently sacrifice predictive accuracy. To overcome these limitations, this paper proposes a moving-horizon approximate branch-and-reduce method to train near-optimal deep classification trees on large-scale datasets with continuous features. Built on a hierarchical root-subtree optimization framework, the method solves the root-level problem via branch-and-reduce while approximating the induced subtree problem using greedy heuristics. Although the underlying framework is capable of guaranteeing global optimality, the approximation, which functions as a lookahead rollout in a reinforcement learning context, significantly boosts efficiency for deeper structures. A low-cost moving-horizon strategy is then employed to iteratively refine model accuracy. Extensive numerical results demonstrate that our method exceeds the testing accuracy of existing heuristic baselines while offering significantly greater scalability, in terms of both dataset size and tree depth, than global optimal solvers.

---

*Source: [arXiv](https://arxiv.org/abs/2609.38194)*
