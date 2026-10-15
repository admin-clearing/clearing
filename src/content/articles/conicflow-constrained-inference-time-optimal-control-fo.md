---
title: "ConicFlow: constrained Inference-time optimal control for flow matching models"
dek: "arXiv:2610.14307v1 Announce Type: new Abstract: We propose ConicFlow, which frames constrained sampling from a flow matching model at inference time as an optimal control problem that balances deviation from the..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-10-15
featured: false
gradient: grad-4
---

arXiv:2610.14307v1 Announce Type: new Abstract: We propose ConicFlow, which frames constrained sampling from a flow matching model at inference time as an optimal control problem that balances deviation from the pretrained trajectory against reward, subject to hard terminal constraints. We discretize this problem and adapt receding-horizon control, optimizing only a short window of the trajectory at each step for computational tractability. We address the resulting sequence of receding-horizon subproblems with a receding-horizon primal-dual algorithm. Its dual multipliers capture the difficulty of satisfying each constraint and are refined throughout sampling, steering generation toward feasible final samples. We further propose a terminal-estimate variant that avoids accumulating local truncation errors by evaluating the reward and constraints at the predicted terminal point rather than at the end of the current horizon. Under standard regularity assumptions, we establish finite-horizon guarantees on suboptimality. Under convex-affine structure, we derive a sharper bound that scales linearly with omitted horizon length, and we show that the terminal-estimate variant is provably tighter when the flow dynamics change slowly. Experiments in both low- and high-dimensional settings with a recent large-scale flow matching model show that ConicFlow achieves high reward and strong constraint satisfaction while deviating less from the pretrained flow than recent baselines.

---

*Source: [arXiv](https://arxiv.org/abs/2610.14307)*
