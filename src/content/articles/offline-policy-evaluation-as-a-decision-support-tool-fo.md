---
title: "Offline Policy Evaluation as a decision support tool for designing Adaptive Experiments"
dek: "arXiv:2609.30273v1 Announce Type: new Abstract: We investigate how historical data from fixed randomized experiments (A/B tests) can be used to inform the deployment of adaptive experiments based on contextual bandits...."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-29
featured: false
gradient: grad-4
---

arXiv:2609.30273v1 Announce Type: new Abstract: We investigate how historical data from fixed randomized experiments (A/B tests) can be used to inform the deployment of adaptive experiments based on contextual bandits. Given data collected under a static allocation, our goal is to assess which adaptive policies, if any, would have outperformed the original design and under what conditions. To this end, we combine off-policy evaluation (OPE) with a controlled warm-start simulation. From logged A/B test data exhibiting heterogeneous treatment effects, we estimate nuisance components and use doubly robust estimators to rank a portfolio of pre-specified adaptive and non-adaptive policies. When ground truth is available, we then deploy the same offline-trained policies in a simulator that reuses the exact data-generating reward probabilities, providing a safe, ground-truth-anchored environment to study the offline-to-online transition under warm starting. Using synthetic randomized controlled trials with known heterogeneity structures and an oracle policy, our results indicate that adaptive, context-aware policies improve upon fixed allocations when meaningful heterogeneity is present, while providing little benefit in its absence. We reinforce our findings on standard open benchmarks (Hillstrom, Criteo Uplift, and LaLonde), reinterpreted through a policy-value and regret perspective. Overall, our results provide a practical methodology for deciding when adaptive experimentation is worth deploying and how to select among competing adaptive policies using existing A/B test data.

---

*Source: [arXiv](https://arxiv.org/abs/2609.30273)*
