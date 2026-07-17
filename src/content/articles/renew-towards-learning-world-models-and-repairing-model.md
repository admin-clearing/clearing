---
title: "RENEW: Towards Learning World Models and Repairing Model Exploitation from Preferences"
dek: "arXiv:2607.14180v1 Announce Type: new Abstract: World models are widely used in offline reinforcement learning (RL) to improve sample efficiency and generate experience beyond a fixed dataset. However, they are..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-17
featured: false
gradient: grad-4
---

arXiv:2607.14180v1 Announce Type: new Abstract: World models are widely used in offline reinforcement learning (RL) to improve sample efficiency and generate experience beyond a fixed dataset. However, they are vulnerable to model exploitation where data coverage is thin. Prior work addresses this either by collecting more expert demonstrations, which is often expensive, unsafe, or unavailable, or by conservative algorithms that avoid uncertain regions, which limits generalization. We propose instead to repair exploitation directly using human preferences over imagined rollouts, leveraging the strong intuitive physics that allows humans to easily spot egregious dynamics hallucinations. We formalize this as Dynamics Learning from Human Feedback (DLHF), a Bradley-Terry preference loss over trajectory log-likelihoods under a learned dynamics model. Unfortunately, naive DLHF is sample inefficient, so we introduce RENEW, which uses epistemic uncertainty to focus finetuning where the model is most exploitable. We evaluate on several Jumanji and classic control environments and find that while naive DLHF requires an outsize preference budget, RENEW makes the framework practical by improving sample efficiency, limiting catastrophic forgetting, and reducing exploitation in pretrained world models. Taken together, our results provide initial evidence that preferences can supervise world model dynamics directly, offering a new approach to addressing exploitation in offline model-based RL.

---

*Source: [arXiv](https://arxiv.org/abs/2607.14180)*
