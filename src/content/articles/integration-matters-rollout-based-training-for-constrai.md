---
title: "Integration Matters: Rollout-Based Training for Constrained Diffusion Models"
dek: "arXiv:2607.14398v1 Announce Type: new Abstract: Constrained generative models aim to produce samples that satisfy complex feasibility constraints while remaining faithful to the data distribution. Existing constrained..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-07-18
featured: false
gradient: grad-4
---

arXiv:2607.14398v1 Announce Type: new Abstract: Constrained generative models aim to produce samples that satisfy complex feasibility constraints while remaining faithful to the data distribution. Existing constrained generation methods typically enforce constraints either through training-time optimization or sampling-time correction. Training-time optimization approaches optimize on states induced by the training distribution, which can differ substantially from those encountered during sampling. Sampling-time correction methods instead modify the sampling process at inference, introducing distribution shift and requiring expensive tuning, particularly for few-step sampling. We propose a fine-tuning framework that incorporates constraint guidance obtained through online rollout into the training process, which aligns training with sampling by differentiating through the fixed noise schedule used to numerically integrate the denoising process. This exposes the model to violations that arise along the denoising trajectory and aligns diffusion learning with the sampling process. Experiments across multiple tasks show that our method improves constraint satisfaction while maintaining competitive sampling quality compared to prior methods.

---

*Source: [arXiv](https://arxiv.org/abs/2607.14398)*
