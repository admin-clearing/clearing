---
title: "EnJoi: Ensemble Joint Score Filter for Generative Data Assimilation"
dek: "arXiv:2609.35944v1 Announce Type: new Abstract: Data Assimilation (DA) aims to recover the full state of a dynamical system that is only partially observed. A solution is to use Score-based models to generate physically..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-01
featured: false
gradient: grad-4
---

arXiv:2609.35944v1 Announce Type: new Abstract: Data Assimilation (DA) aims to recover the full state of a dynamical system that is only partially observed. A solution is to use Score-based models to generate physically consistent trajectories that agree with the observations. These Autoregressive Diffusion models are trained by conditioning on the previous state; however, they do not take into account the uncertainty of their past predictions. We propose a new diffusion-based assimilation algorithm that dynamically balances the confidence in the current state and the new observations. Crucially, we choose to learn the distribution of the joint state containing both the past and future. This allows us to use a modified version of En4DVar, a classical DA algorithm that relies on the covariance of an ensemble of particles. Experiments on fluid and traffic flow simulations show improved reconstruction performance, especially in situations where observations are sparse and non-homogeneous.

---

*Source: [arXiv](https://arxiv.org/abs/2609.35944)*
