---
title: "Frustratingly Simple Black-Box Adaptation of Language Models via Logit Bias"
dek: "arXiv:2607.22837v1 Announce Type: new Abstract: Many organizations aim to adapt language models for internal use, both to improve performance on domain-specific tasks and to address privacy concerns around sensitive..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-07-29
featured: false
gradient: grad-4
---

arXiv:2607.22837v1 Announce Type: new Abstract: Many organizations aim to adapt language models for internal use, both to improve performance on domain-specific tasks and to address privacy concerns around sensitive data. However, such adaptation remains non-trivial: it often requires operationally challenging fine-tuning of open-source models or ad hoc prompt optimization. We study a minimal alternative based on a simple API-level control: allowing users to bias the model's logits with a user-defined vector. We develop a black-box method for learning a single context-independent logit-bias vector, added at every decoding step, without modifying model weights or requiring gradients. Starting from a KL-regularized reinforcement learning (RL) objective, we characterize when such a fixed logit-bias vector can approximate the optimal prefix-dependent correction and derive a closed-form inverse-propensity estimator from rollouts, rewards, and token probabilities. Empirically, this simple decoding-time intervention improves over base models on mathematical and reasoning benchmarks while using far fewer trainable parameters than conventional fine-tuning. Our results suggest that learned logit bias is a lightweight mechanism for adapting language models under minimal access requirements.

---

*Source: [arXiv](https://arxiv.org/abs/2607.22837)*
