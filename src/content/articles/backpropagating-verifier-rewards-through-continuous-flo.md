---
title: "Backpropagating Verifier Rewards Through Continuous Flow Language Models"
dek: "arXiv:2610.19080v1 Announce Type: new Abstract: Reinforcement learning (RL) has substantially improved the reasoning of autoregressive and discrete-diffusion language models. Language models that generate continuous..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-15
featured: false
gradient: grad-4
---

arXiv:2610.19080v1 Announce Type: new Abstract: Reinforcement learning (RL) has substantially improved the reasoning of autoregressive and discrete-diffusion language models. Language models that generate continuous token embeddings are emerging as a strong alternative, but RL post-training for them remains understudied. We propose \method{}, a post-training framework for continuous flow language models. Such a model denoises token embeddings over multiple steps and decodes them into discrete tokens only at the last step. To obtain pathwise gradients, which backpropagate through continuous actions and have much lower variance than REINFORCE, we introduce a critic that estimates the value of intermediate token embeddings, bypassing the non-differentiable decoding step. The critic must also keep track of the value function as the policy changes; to this end, we design a critic that predicts a value from every token representation and improves policy optimization. Across four reasoning tasks, \method{} reliably improves a continuous flow language model through RL post-training and outperforms baseline methods of the same type.

---

*Source: [arXiv](https://arxiv.org/abs/2610.19080)*
