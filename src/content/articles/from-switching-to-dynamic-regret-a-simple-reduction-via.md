---
title: "From Switching to Dynamic Regret: A Simple Reduction via Unbiased Random Sequences"
dek: "arXiv:2609.20968v1 Announce Type: new Abstract: In non-stationary online learning, dynamic regret has attracted increasing attention as a measure of how well an online learner performs against a time-varying comparator..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-21
featured: false
gradient: grad-4
---

arXiv:2609.20968v1 Announce Type: new Abstract: In non-stationary online learning, dynamic regret has attracted increasing attention as a measure of how well an online learner performs against a time-varying comparator sequence. Despite considerable advances, attaining optimal bounds for strongly convex and exp-concave losses often involves intricate analysis. In this paper, we present a \textit{simple} framework that reduces dynamic regret minimization to switching regret minimization. As a result, we can derive dynamic regret bounds by using off-the-shelf algorithms with switching regret guarantees. The key idea of our reduction is to construct, for \textit{any} comparator sequence, an auxiliary random sequence that is unbiased at each round, with the controlled variance and a manageable number of switches. Combining this construction with suitable surrogate losses, we can decompose dynamic regret into the expected switching regret against the random sequence and its controlled variance. Theoretically, for strongly convex and exp-concave losses, we establish the $\widetilde{O}(T^{1/3}P_T^{2/3})$ dynamic regret bounds, where $T$ denotes the time horizon and $P_T$ denotes the path-length of the comparator sequence. Moreover, for general convex losses, the same reduction also recovers the $O(\sqrt{T(1+P_T)})$ dynamic regret bound. Notably, all our findings match the minimax optimal results for these three types of losses, highlighting the versatility of our proposed framework.

---

*Source: [arXiv](https://arxiv.org/abs/2609.20968)*
