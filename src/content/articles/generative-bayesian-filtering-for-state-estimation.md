---
title: "Generative Bayesian Filtering for State Estimation"
dek: "arXiv:2607.20521v1 Announce Type: new Abstract: The state of a dynamic system evolves over time, switching among several latent modes that govern its observable behavior. Filtering methods infer the latent state from..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-07-24
featured: false
gradient: grad-4
---

arXiv:2607.20521v1 Announce Type: new Abstract: The state of a dynamic system evolves over time, switching among several latent modes that govern its observable behavior. Filtering methods infer the latent state from observations. Classical filtering approaches, including Kalman filters, typically rely on simple observation models, such as linear-Gaussian models, that are incapable of characterizing the increasingly nonlinear and heterogeneous patterns in high-dimensional sensor signals. To tackle the challenge, we propose Generative Bayesian Filtering (GBF), a filtering framework that replaces restrictive observation models with pretrained conditional generative models parametrized by conditional variational autoencoders (CVAE). For online inference, GBF performs a Bayesian prediction-update recursion in which the measurement update is formulated as a posterior sampling problem that combines the dynamical prior with the CVAE-induced likelihood. The resulting filtering problem is then transformed into a score-based sampling problem, which naturally inherits the flexibility from generative models and the uncertainty quantification capabilities from ensembling. Experiments on synthetic datasets and real-world applications involving manufacturing system monitoring and arrhythmia diagnosis demonstrate that GBF improves state estimation accuracy and robustness relative to baseline approaches.

---

*Source: [arXiv](https://arxiv.org/abs/2607.20521)*
