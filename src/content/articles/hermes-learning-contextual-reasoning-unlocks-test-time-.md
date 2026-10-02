---
title: "Hermes: Learning Contextual Reasoning Unlocks Test-Time Scaling"
dek: "arXiv:2609.38332v1 Announce Type: new Abstract: Test-time scaling improves model performance by allocating additional compute during inference. Using this compute effectively across multiple context windows requires..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-10-02
featured: false
gradient: grad-4
---

arXiv:2609.38332v1 Announce Type: new Abstract: Test-time scaling improves model performance by allocating additional compute during inference. Using this compute effectively across multiple context windows requires deciding how to allocate fresh contexts and what information to carry between them. We call a model's ability to make these decisions contextual reasoning. Existing approaches largely prescribe these decisions through their harness; we instead shift them to the model. We introduce 1) Hermes, a family of simple, configurable harnesses that progressively varies model control over context allocation and reuse, and 2) Hermes-Learn, a two-stage framework for learning these capabilities. We find that capable models can exploit this flexibility to scale with additional inference-time compute, while smaller open-source models initially struggle to do so. Training with Hermes-Learn closes this gap, inducing adaptive contextual reasoning strategies that vary with both the problem and the progress of reasoning. These gains generalize across benchmarks and models, extrapolate beyond the inference-time compute seen during training, and transfer to complementary test-time scaling methods beyond Hermes.

---

*Source: [arXiv](https://arxiv.org/abs/2609.38332)*
