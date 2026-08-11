---
title: "Flowing Through States: Neural ODE Regularization for Reinforcement Learning"
dek: "arXiv:2608.06595v1 Announce Type: new Abstract: Neural networks applied to sequential decision-making tasks typically rely on latent representations of environment states. While environment dynamics dictate how semantic..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-10
featured: false
gradient: grad-4
---

arXiv:2608.06595v1 Announce Type: new Abstract: Neural networks applied to sequential decision-making tasks typically rely on latent representations of environment states. While environment dynamics dictate how semantic states evolve, the corresponding latent transitions are usually left implicit, creating a potential misalignment between the two. We propose to model latent dynamics explicitly by drawing an analogy between Markov decision process (MDP) trajectories and ordinary differential equation (ODE) flows: in both cases, the current state fully determines its successors. Building on this view, we introduce a neural ODE-based regularization method that enforces latent embeddings to follow consistent ODE flows, thereby aligning representation learning with environment dynamics. Although broadly applicable to deep learning agents, we demonstrate its effectiveness in reinforcement learning by integrating it into Actor-Critic algorithms. Our approach yields major performance gains across various standard Atari benchmarks for A2C and gridworld environments for PPO.

---

*Source: [arXiv](https://arxiv.org/abs/2608.06595)*
