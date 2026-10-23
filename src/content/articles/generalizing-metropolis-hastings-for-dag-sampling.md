---
title: "Generalizing Metropolis-Hastings for DAG Sampling"
dek: "arXiv:2610.30291v1 Announce Type: new Abstract: A fundamental challenge in Bayesian network structure learning lies in efficiently approximating the posterior distribution of directed acyclic graphs (DAGs). For large,..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-23
featured: false
gradient: grad-4
---

arXiv:2610.30291v1 Announce Type: new Abstract: A fundamental challenge in Bayesian network structure learning lies in efficiently approximating the posterior distribution of directed acyclic graphs (DAGs). For large, high-dimensional datasets, the task remains beyond the capabilities of current methods. This work advances Markov chain Monte Carlo algorithms by introducing novel moves that simultaneously resample the parents for multiple nodes of the DAG. At the core of these moves is duet sampling, a new generalization of the Metropolis-Hastings algorithm that selects two proposal distributions from a pool at each iteration. One is used for generating a candidate state of the Markov chain and another for evaluating the return to the current state; both are ingredients of an appropriately crafted acceptance criterion. Pairing different proposal distributions provides additional freedom and enables constructing Markov chains that mix more efficiently than their basic Metropolis-Hastings counterparts, at no additional computational cost. Experiments show that our new moves, both individually and in combination, outperform the previous state of the art, which relies on a more restrictive pool of moves. This advantage persists even when letting the previous methods leverage duet sampling to enhance their performance.

---

*Source: [arXiv](https://arxiv.org/abs/2610.30291)*
