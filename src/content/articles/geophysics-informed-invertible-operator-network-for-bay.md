---
title: "Geophysics-informed invertible operator network for Bayesian geophysical inversion"
dek: "arXiv:2611.33178v1 Announce Type: new Abstract: Geophysical inverse problems are inherently ill-posed because of sparse observations and measurement noise. Classical sampling-based Bayesian inference methods, such as..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-11-26
featured: false
gradient: grad-4
---

arXiv:2611.33178v1 Announce Type: new Abstract: Geophysical inverse problems are inherently ill-posed because of sparse observations and measurement noise. Classical sampling-based Bayesian inference methods, such as Markov chain Monte Carlo (MCMC), are computationally prohibitive because they require many forward simulations. Data-driven machine-learning methods often struggle to produce physically consistent solutions when training data are limited. To address these issues, we propose a geophysics-informed invertible operator network (GI-ION) that integrates an invertible neural network (INN) within a deep operator-learning framework for efficient Bayesian geophysical inversion. The INN serves as the branch network and transforms the model parameters into branch coefficients that represent the forward solution and a latent variable that captures uncertainty in the inverse problem. By learning the forward operator and enforcing statistical independence between the branch coefficients and the latent variable, GI-ION enables efficient sampling from a learned conditional approximation, even with sparse boundary observations. We validated GI-ION on three representative cases: 1D surface-wave dispersion and travel-time tomography for a 2D synthetic random-field model and a seismic-slice model. Numerical experiments demonstrate robust performance across diverse problem settings and efficient conditional sampling.

---

*Source: [arXiv](https://arxiv.org/abs/2611.33178)*
