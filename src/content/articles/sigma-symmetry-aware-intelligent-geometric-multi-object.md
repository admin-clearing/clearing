---
title: "SIGMA: Symmetry-aware, Intelligent, Geometric, Multi-objective Adaptive Control for Robust, Dependable Traffic Managemen"
dek: "arXiv:2608.18263v1 Announce Type: new Abstract: Traffic signal control is a complex sequential decision-making problem requiring real-time adaptation and trade-offs among throughput, delay fairness, signal stability,..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-20
featured: false
gradient: grad-4
---

arXiv:2608.18263v1 Announce Type: new Abstract: Traffic signal control is a complex sequential decision-making problem requiring real-time adaptation and trade-offs among throughput, delay fairness, signal stability, and emergency vehicle priority. Existing RL methods often fix objectives, ignore dynamic priority changes, and fail to generalize across geometrically similar intersections.We propose SIGMA (Symmetry-aware, Intelligent, Geometric, Multi-objective Adaptive traffic control), an RL framework enhanced with a large language model (LLM) for adaptive objective tuning and orientation-invariant learning. SIGMA converts natural-language emergency commands into priority vectors for a multi-objective actor-critic controller, avoiding manual reward engineering. Rotational augmentation improves transferability across four-way intersections, while offline-to-online learning ensures stable initialization and gradual adaptation to changing traffic.We define reliability properties covering emergency service levels, graceful degradation under LLM failures, and demand sensitivity, validated via bootstrap statistics. Evaluated in SUMO on four Kolkata-based urban intersections against fixed-time, actuated, and DQN controllers, SIGMA reduces average/emergency waiting times and queue lengths, and boosts throughput. Ablation studies confirm robustness to component failures and geometric rotations. Overall, SIGMA offers a reliable, language-guided, multi-objective traffic control system with statistical reliability assurance.

---

*Source: [arXiv](https://arxiv.org/abs/2608.18263)*
