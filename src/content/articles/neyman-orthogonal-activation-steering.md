---
title: "Neyman Orthogonal Activation Steering"
dek: "arXiv:2610.33217v1 Announce Type: new Abstract: Activation steering is a popular approach for shifting LLM output toward a desired behavior, and increasingly for generating realistic synthetic data. The standard recipe..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-28
featured: false
gradient: grad-4
---

arXiv:2610.33217v1 Announce Type: new Abstract: Activation steering is a popular approach for shifting LLM output toward a desired behavior, and increasingly for generating realistic synthetic data. The standard recipe estimates a steering direction by contrasting LLM activations on prompts with and without a target concept, such as truthfulness. In this paper, we separate the estimand (the steering direction these methods target) from the estimator used to recover it, two notions the literature often conflates. We frame nearly all existing methods as plug-in estimators of the average gradient of an outcome regression, with the binary contrastive label fixed as the outcome. Using this framing, we can immediately incorporate flexible modeling approaches and extend existing methods to allow for continuous outcomes such as log-probabilities or oracle ratings. Flexible ML models that fit the outcome well, however, might not estimate the gradient well, which motivates estimators that target the gradient directly. Drawing on the debiased machine learning literature, we develop a complementary estimator built on the Stein score, the Riesz representer of the gradient functional. Combining the two routes gives an orthogonalized estimator with classical double-robustness properties. We illustrate the framework on activation steering applied to a number of benchmark datasets.

---

*Source: [arXiv](https://arxiv.org/abs/2610.33217)*
