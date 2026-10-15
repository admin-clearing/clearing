---
title: "Loss Curvature as a Sampling-Free Proxy for Memorization in Diffusion Models"
dek: "arXiv:2610.19042v1 Announce Type: new Abstract: Understanding the mechanism behind why diffusion models memorize their training data remains an open question in generative modeling. In this paper, we examine this..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-15
featured: false
gradient: grad-4
---

arXiv:2610.19042v1 Announce Type: new Abstract: Understanding the mechanism behind why diffusion models memorize their training data remains an open question in generative modeling. In this paper, we examine this question from two perspectives: (a) the model-level perspective concerning the onset of memorization in a model during training, and (b) the sample-level perspective concerning the proclivity of an individual sample to be memorized by a given model. We show that the so-called input loss curvature, or the Frobenius norm of the Hessian of the diffusion model's training loss, is an effective metric for quantifying both perspectives on memorization. In particular, we empirically demonstrate that input curvatures averaged across training and validation samples can identify when a model is likely to start regurgitating its training data when tracked over training time. However, this metric is not sufficient for measuring an individual sample's likelihood of being memorized. To address this perspective, we introduce a counterfactual definition of memorization in diffusion models, extending the analogous notion from supervised learning proposed by [Feldman, 2019]. We prove that this counterfactual memorization is controlled by the input curvature of the leave-one-out model, thus establishing a direct theoretical link between a sample's local loss landscape and its generation likelihood. We validate our derived bounds through several empirical experiments and show that input-dependent curvature provides a proxy for memorization.

---

*Source: [arXiv](https://arxiv.org/abs/2610.19042)*
