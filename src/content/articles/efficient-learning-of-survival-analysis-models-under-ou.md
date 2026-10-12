---
title: "Efficient Learning of Survival Analysis Models Under Outcome-Dependent Truncation and Censoring"
dek: "arXiv:2610.12538v1 Announce Type: new Abstract: Modern machine learning models are typically trained on data assumed to be representative of the predictive tasks the model will face in the future, but practical datasets..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-10-12
featured: false
gradient: grad-4
---

arXiv:2610.12538v1 Announce Type: new Abstract: Modern machine learning models are typically trained on data assumed to be representative of the predictive tasks the model will face in the future, but practical datasets violate this assumption. We focus on outcome-dependent truncation in which an observation appears in the training data depending on its label. Our work connects two largely distinct literatures: efficient learning under truncation and survival analysis. Existing methods for truncated survival analysis do not characterize the optimization landscape and instead rely on iterative procedures such as expectation maximization. We address this gap and prove that Cox regression can be efficiently learned under truncated and right-censored data using first-order optimization when the baseline hazard is known (despite nonconvexity). In contrast, when the baseline hazard is learned jointly, we construct identifiable and correctly specified models whose negative log-likelihood contains strict suboptimal local minima. On experiments with four survival datasets, we show that accounting for truncation reduces the prediction bias induced by naive Cox regression and extends to neural networks. We also show orders of magnitude speedups compared to standard expectation maximization.

---

*Source: [arXiv](https://arxiv.org/abs/2610.12538)*
