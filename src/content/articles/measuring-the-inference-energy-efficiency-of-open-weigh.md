---
title: "Measuring the Inference Energy Efficiency of Open-Weight LLMs across Benchmarks, Reasoning Modes, and Hardware"
dek: "arXiv:2610.14389v1 Announce Type: new Abstract: Benchmark scores tell us what an LLM can do, but not how much energy is required to deliver that capability. We directly measure this trade-off for 86 open-weight model..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-10-15
featured: false
gradient: grad-4
---

arXiv:2610.14389v1 Announce Type: new Abstract: Benchmark scores tell us what an LLM can do, but not how much energy is required to deliver that capability. We directly measure this trade-off for 86 open-weight model checkpoints, evaluated on seven benchmarks and six hardware platforms ranging from a consumer GPU to an eight-GPU server. We find large differences in energy efficiency even among models with similar capability. Most configurations lie away from the score--energy Pareto frontier: they use a median of 2.6--4.8$\times$ more energy than another configuration that scores at least as well, with differences reaching 27$\times$. Reasoning can improve capability, but enabling thinking increases energy by about 3.7$\times$ on average, and the benefit depends strongly on the model family and output budget. Generated-token count is also an imperfect proxy for energy, misordering 18--24\% of model pairs. In contrast, FP8 reduces energy by roughly a quarter with little change in score, while changing hardware largely rescales energy without changing the relative ranking of models. These results show that capability alone gives an incomplete picture of efficiency. We argue that benchmark scores should be reported together with measured energy consumption under a specified serving regime and output budget.

---

*Source: [arXiv](https://arxiv.org/abs/2610.14389)*
