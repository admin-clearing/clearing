---
title: "SteinGate: Tail-Sensitive Safe Reinforcement Learning via Stein Discrepancy"
dek: "arXiv:2607.13175v1 Announce Type: new Abstract: Safe reinforcement learning typically enforces safety by bounding expected cumulative costs, a criterion that often fails to detect rare but catastrophic tail events. To..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-07-16
featured: false
gradient: grad-4
---

arXiv:2607.13175v1 Announce Type: new Abstract: Safe reinforcement learning typically enforces safety by bounding expected cumulative costs, a criterion that often fails to detect rare but catastrophic tail events. To overcome these limitations, this paper introduces SteinGate, a boundary-aware distributional safety certificate that replaces fragile tail fitting with a robust consistency check using Kernelized Stein Discrepancy while accounting for boundary atoms induced by clipped costs. SteinGate evaluates whether observed policy rollout costs remain consistent with a safe reference distribution, providing a non-parametric safety certificate. This certificate is used to dynamically adapt the learning regime: favoring reward-improving policy updates when rollouts remain consistent with the safe reference and switching to recovery behavior when the cost tail deviates. Experiments on continuous-control benchmarks demonstrate that SteinGate significantly reduces both the frequency and severity of constraint violations during training while maintaining competitive returns relative to state-of-the-art baselines.

---

*Source: [arXiv](https://arxiv.org/abs/2607.13175)*
