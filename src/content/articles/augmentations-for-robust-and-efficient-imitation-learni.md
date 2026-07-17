---
title: "Augmentations for Robust and Efficient Imitation Learning in Streamed Video Games"
dek: "arXiv:2607.14200v1 Announce Type: new Abstract: Imitation learning is an appealing way to scale game-playing agents to complex 3D environments by training policies to map visual observations to actions from human..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-07-17
featured: false
gradient: grad-4
---

arXiv:2607.14200v1 Announce Type: new Abstract: Imitation learning is an appealing way to scale game-playing agents to complex 3D environments by training policies to map visual observations to actions from human demonstrations. However, these demonstrations are expensive to collect and modern game-playing is often done through streaming in which network delay and compression introduce spatiotemporally correlated visual artifacts that can cause a covariance shift at test time. To address these challenges, we propose streaming augmentations that mimic four types of artifacts commonly encountered during streaming with low-bandwidth network connection: pixelated blocks and scrubs, global blur, and ghosting. We instantiate our approach on top of predictive inverse dynamics models (PIDM), which combine future-state conditioning with an inverse dynamics policy in a learned latent space, and evaluate the impact of our augmentations across three tasks in modern 3D video games. Under stable streaming conditions, agents trained with spatiotemporal augmentations achieve up to 41% higher evaluation performance compared to agents trained without augmentations under an identical data budget. When network lag is introduced, agents trained with augmentations degrade by only 7.45% vs 49.82% of the original performance for agents trained only with the original data. These results clearly indicate that spatiotemporal augmentations tailored for the streaming setting are a simple yet powerful tool to train robust and efficient game-playing agents.

---

*Source: [arXiv](https://arxiv.org/abs/2607.14200)*
