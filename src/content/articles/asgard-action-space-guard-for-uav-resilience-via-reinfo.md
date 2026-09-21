---
title: "ASGARD: Action-Space Guard for UAV Resilience via Reinforcement Learning"
dek: "arXiv:2609.20982v1 Announce Type: new Abstract: Reinforcement learning (RL) controllers have been recently adopted for Unmanned Aerial Vehicles (UAV) navigation and control. However, they are susceptible to action-space..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-21
featured: false
gradient: grad-4
---

arXiv:2609.20982v1 Announce Type: new Abstract: Reinforcement learning (RL) controllers have been recently adopted for Unmanned Aerial Vehicles (UAV) navigation and control. However, they are susceptible to action-space attacks that overwrite the action commands after the policy generates them and before the actuators execute them. While most existing defenses target attacks on the policy's inputs, those addressing action-space attacks retrain the policy at training time and are not resilient to corrupted actions at runtime. We propose ASGARD, a two-phase teacher-student pipeline for making RL-based UAV control resilient to action-space attacks. In the teacher phase, an encoder combines the UAV's physical state with action-attack-related privileged information to produce an action-attack-aware latent that trains the RL control policy and a monitor that outputs corrected action commands to the actuators. In the student phase, both the encoder and the monitor are trained via supervised learning from their teacher counterparts to run on-board using only the UAV's physical state history. We evaluate ASGARD across attack scenarios targeting different action commands on UAV. We find that ASGARD is resilient to action-space attacks and completes the missions despite the attack. We further find that ASGARD generalizes to unseen attacks and remains resilient against stealthy attacks.

---

*Source: [arXiv](https://arxiv.org/abs/2609.20982)*
