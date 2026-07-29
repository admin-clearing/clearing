---
title: "HOBA: Hierarchical On-Policy Bidding Agents for Adaptive Online Advertising"
dek: "arXiv:2607.24779v1 Announce Type: new Abstract: Online advertising bidding systems typically deploy multiple offline-trained expert models (e.g., PID controllers, model predictive control, offline RL policies) but face..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-07-29
featured: false
gradient: grad-4
---

arXiv:2607.24779v1 Announce Type: new Abstract: Online advertising bidding systems typically deploy multiple offline-trained expert models (e.g., PID controllers, model predictive control, offline RL policies) but face two critical limitations: lack of online adaptability to non-stationary auction markets, and reliance on costly manual tuning of hyperparameters such as bid bounds and budget pacing constraints. We propose HOBA (Hierarchical On-policy Bidding Agents), a hierarchical reinforcement learning framework that decouples strategic reasoning, model selection, and bid execution across three time scales. At the high level, a large language model infers hyperparameters from contextual signals through a Think-Act-Observe-Reflect loop with historical experience retrieval. At the mid level, a SARSA agent dynamically selects among expert models, incorporating causal adjustment to eliminate selection bias. At the low level, a dynamic expert pool (PID, MPC, IQL, Decision Transformer) executes bids under high-level constraints. This design confines online learning to discrete expert selection rather than continuous bid optimization, significantly reducing exploration risk while maintaining adaptability. Experiments on the AuctionNet benchmark and a large-scale A/B test demonstrate consistent improvements over state-of-the-art baselines. In a large-scale online deployment, HOBA delivered substantial business value, achieving a +3.6\% increase in target cost, proving the effectiveness of our hierarchical multi-agent bidding paradigm.

---

*Source: [arXiv](https://arxiv.org/abs/2607.24779)*
