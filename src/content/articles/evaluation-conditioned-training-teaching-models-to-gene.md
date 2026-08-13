---
title: "Evaluation-Conditioned Training: Teaching Models to Generalize to Stronger Oversight Regimes"
dek: "arXiv:2608.10209v1 Announce Type: new Abstract: Feedback signals used to train Large Language Models (LLMs) are the primary driver of their behavior and our main lever for instilling alignment with human values and..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-12
featured: false
gradient: grad-4
---

arXiv:2608.10209v1 Announce Type: new Abstract: Feedback signals used to train Large Language Models (LLMs) are the primary driver of their behavior and our main lever for instilling alignment with human values and objectives. However, a key limitation of current post-training methods is the inability of human annotators and automated reward functions to faithfully capture the feedback we would like to give. We introduce Evaluation-Conditioned Training (ECT), a post-training framework that uses natural language to condition each training sample on the fidelity of the feedback we provide and then elicits the desired behavior by conditioning the LLM on a high-fidelity monitor in deployment. ECT is aimed at improving performance under imperfect feedback and works as an add-on to existing algorithms such as SFT and PPO. We first provide a conceptual framework for ECT and discuss its potential to address persistent sources of reward mis-specification. Then we motivate ECT in the context of the eliciting latent knowledge (ELK) problem. Finally, we evaluate ECT on two proof-of-concept experiments: increasing even-handedness in news article generation and reducing sycophancy on an arithmetic task. In each setting, we utilize imperfect feedback, rewarding bias and agreement with the user, respectively. In both settings, ECT improves the targeted behavior relative to direct training.

---

*Source: [arXiv](https://arxiv.org/abs/2608.10209)*
