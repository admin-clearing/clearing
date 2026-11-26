---
title: "REI: Learning Ideation from Repository Evolution"
dek: "arXiv:2611.33183v1 Announce Type: new Abstract: As AI systems become increasingly capable of executing and evaluating experiments, ideation is emerging as a bottleneck in automated scientific and engineering iteration...."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-11-26
featured: false
gradient: grad-4
---

arXiv:2611.33183v1 Announce Type: new Abstract: As AI systems become increasingly capable of executing and evaluating experiments, ideation is emerging as a bottleneck in automated scientific and engineering iteration. In many real-world domains, useful ideas are sparse and their validation is costly, making direct online exploration inefficient. We observe that repository evolution provides a scalable source of reusable technical experience: code changes record concrete technical hypotheses, while subsequent revisions, adoption, and reuse provide signals about their utility. Based on this observation, we propose REI, a Repository Evolution-driven Ideation framework that learns reusable ideation policies from repository evolution, injecting domain-specific technical experience into model parameters and reducing reliance on costly trial-and-error. We further identify a hidden failure mode in quality-driven ideation optimization: semantic diversity collapse. Although generated ideas can remain lexically diverse, they increasingly concentrate in a small number of dominant method families, limiting cross-task generalization and long-tail exploration. To address this problem, we introduce Semantic Prior Optimization and Debiasing (SPOD), a diversity-preserving alignment mechanism that makes method identity explicit, corrects category-level reward bias, and limits redundant accumulation within the same method family while retaining strong representatives. Experiments on public benchmarks and a real-world industrial setting demonstrate improvements in ideation quality, method diversity, cross-task generalization, and long-tail exploration.

---

*Source: [arXiv](https://arxiv.org/abs/2611.33183)*
