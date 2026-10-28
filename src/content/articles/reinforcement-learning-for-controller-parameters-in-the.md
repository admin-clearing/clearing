---
title: "Reinforcement Learning for Controller Parameters in the Auto-Bidding System at Pinterest"
dek: "arXiv:2610.33248v1 Announce Type: new Abstract: Auto-bidding systems in online advertising must balance competing objectives-maximizing budget delivery while minimizing cost per action-across heterogeneous campaigns..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-10-28
featured: false
gradient: grad-4
---

arXiv:2610.33248v1 Announce Type: new Abstract: Auto-bidding systems in online advertising must balance competing objectives-maximizing budget delivery while minimizing cost per action-across heterogeneous campaigns under non-stationary market conditions. This trade-off evolves over campaign lifespans: early on, cost optimization dominates when budgets roll over; near deadlines, budget delivery becomes urgent. While PID controllers are widely used in production for their stability and interpretability, fixed tunings cannot adapt to diverse campaigns and shifting traffic patterns. We present RLBP (Reinforcement Learning for Bidding Parameters), a hybrid architecture deployed at Pinterest that uses RL as a meta-controller to select campaign-specific PID parameters daily while retaining PID for high-frequency bid adjustments. RLBP trains a multi-head Q-network using a relative-lift reward formulation normalized against the production baseline, and performs inference-time fusion that adapts the cost-delivery trade-off to campaign states without retraining. Through online A/B testing at Pinterest, RLBP achieves a statistically significant reduction in effective cost-per-click (eCPC) with no revenue degradation, and two months of post-rollout measurements against a holdout also show consistent cost reductions. These results demonstrate that meta-controller RL can successfully augment production control systems at scale.

---

*Source: [arXiv](https://arxiv.org/abs/2610.33248)*
