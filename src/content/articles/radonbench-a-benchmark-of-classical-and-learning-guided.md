---
title: "RadonBench: A Benchmark of Classical and Learning-Guided Search Techniques for Problems in Combinatorial Geometry"
dek: "arXiv:2610.33259v1 Announce Type: new Abstract: Classical optimization and learning-guided search offer complementary approaches to open problems in discrete mathematics, but their outputs are difficult to compare when..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-28
featured: false
gradient: grad-4
---

arXiv:2610.33259v1 Announce Type: new Abstract: Classical optimization and learning-guided search offer complementary approaches to open problems in discrete mathematics, but their outputs are difficult to compare when search spaces, validity checks, and stopping rules differ. We present \emph{RadonBench}, a benchmark for constructing maximum-cardinality Radon-free lattice configurations: finite subsets of $\mathbb{Z}^d$ admitting no integral Radon partition. It remains open whether Radon-free configurations with $11$ points in $\mathbb{Z}^3$ or $21$ points in $\mathbb{Z}^4$ are possible. If they exist, they would improve the corresponding lower bounds on the integer Radon numbers. We compare exhaustive extension, greedy local search, PatternBoost, AlphaZero, and AlphaEvolve. All outputs use one success predicate: a convex target-sized configuration succeeds exactly when its number of integral Radon points is zero. PatternBoost and AlphaZero construct verified Radon-free configurations of sizes $10$ and $20$, one point short of the respective targets; AlphaZero's best convex target terminals have two integral Radon points in both dimensions. Exhaustive extension over fixed seeds and declared finite search boxes likewise reaches a minimum of two integral Radon points. Greedy local search and AlphaEvolve each produce target-sized near misses with one integral Radon point. No audited run reaches zero. These results establish reproducible near-miss baselines over explicitly scoped search domains.

---

*Source: [arXiv](https://arxiv.org/abs/2610.33259)*
