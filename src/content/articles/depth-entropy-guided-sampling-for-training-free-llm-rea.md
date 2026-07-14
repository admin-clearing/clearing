---
title: "Depth-Entropy Guided Sampling for Training-Free LLM Reasoning"
dek: "arXiv:2607.09693v1 Announce Type: new Abstract: Reinforcement learning (RL) has become the dominant paradigm for improving the reasoning capabilities of large language models, but it requires expensive training, curated..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-14
featured: false
gradient: grad-4
---

arXiv:2607.09693v1 Announce Type: new Abstract: Reinforcement learning (RL) has become the dominant paradigm for improving the reasoning capabilities of large language models, but it requires expensive training, curated data, and reward signals. Recent work shows that sampling from sharpened base-model distributions at test time recovers much of the RL gain, yet existing methods rely solely on output-layer likelihoods and ignore the transformer's internal forward-pass dynamics. We introduce Depth-Entropy Guided Sampling (DEGS), a training-free, test-time method that exploits layer-wise entropy collapse as an intrinsic quality signal. We observe that stronger reasoners -- including RL-posttrained variants -- exhibit a distinctive "late collapse": logit-lens decoded entropy stays elevated until deeper layers before converging. We define a per-sequence collapse depth $D(\mathbf{x})$ and a joint objective $\pi(\mathbf{x}) \propto p(\mathbf{x})^\alpha \exp(\beta D(\mathbf{x}))$ that combines sequence likelihood with this depth-entropy structure, instantiated inside an MCMC power-sampling framework (DEGS-MCMC). Across three open-weight models and four reasoning benchmarks, this near-chance per-candidate signal compounds over the sampling trajectory into state-of-the-art training-free accuracy, with gains largest out of domain and on the harder splits -- exactly where likelihood alone falls short -- at single-digit-percent wall-clock overhead. DEGS narrowly trails an in-house GRPO reference on the math splits GRPO was trained for, yet surpasses it out of domain on GPQA for all three models, without any training, reward model, or labeled data.

---

*Source: [arXiv](https://arxiv.org/abs/2607.09693)*
