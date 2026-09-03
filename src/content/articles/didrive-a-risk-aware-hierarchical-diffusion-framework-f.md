---
title: "DiDrive: A Risk-Aware Hierarchical Diffusion Framework for Safe Offline Reinforcement Learning in Autonomous Driving"
dek: "arXiv:2609.01609v1 Announce Type: new Abstract: While diffusion models effectively capture multimodal behavioral priors for autonomous driving, offline reinforcement learning (RL) policies remain susceptible to..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-03
featured: false
gradient: grad-4
---

arXiv:2609.01609v1 Announce Type: new Abstract: While diffusion models effectively capture multimodal behavioral priors for autonomous driving, offline reinforcement learning (RL) policies remain susceptible to distribution shift, heavy-tailed risk signals, out-of-distribution (OOD) action generation, and high-dimensional state redundancy. To address these challenges, we propose DiDrive, a distribution-guided offline diffusion framework featuring two synergistic components: the Risk-Aware Hierarchical Diffusion (RHDif) architecture and the 3DICE policy optimization paradigm. In the state space, RHDif utilizes a low-level risk-gated encoder and a high-level contextual modulator to filter environmental redundancy and focus on safety-critical threats. In the action space, 3DICE mitigates OOD overestimation and gradient oscillation through in-sample calibrated guidance, spatiotemporal optimization, and ensemble-based candidate ranking. Evaluations on the CARLA benchmark demonstrate DiDrive's superiority over baselines like IQL, CQL, and Diffusion-QL, particularly in complex, high-density traffic scenarios with 60 vehicles, where it achieves an 85% success rate and a 4295.68 average reward, providing a robust pathway for safe autonomous driving decision-making.

---

*Source: [arXiv](https://arxiv.org/abs/2609.01609)*
