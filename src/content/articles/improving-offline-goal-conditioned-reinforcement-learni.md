---
title: "Improving Offline Goal-Conditioned Reinforcement Learning via Selective Reward Stimulation"
dek: "arXiv:2609.19414v1 Announce Type: new Abstract: Goal-conditioned reinforcement learning aims to learn policies that reach specified goals, but remains challenging in offline settings with sparse rewards and long-horizon..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-18
featured: false
gradient: grad-4
---

arXiv:2609.19414v1 Announce Type: new Abstract: Goal-conditioned reinforcement learning aims to learn policies that reach specified goals, but remains challenging in offline settings with sparse rewards and long-horizon dependencies. In such settings, goal-completion information can be temporally distant from the early decisions that enable success, while offline value estimation introduces additional error. We study this issue from a reward-propagation perspective and show, in a stylized delayed-goal setting, how goal-directed value separation can become small relative to local estimation error. Motivated by this analysis, we propose Reward Stimulation Implicit Q-Learning (RSIQL), a simple non-hierarchical method that introduces additional reward signals at progress-making intermediate states in offline trajectories. RSIQL uses an auxiliary goal-conditioned value function to identify intermediate states estimated to make progress toward the goal and applies reward stimulation to provide less-delayed training supervision. Unlike hierarchical methods, RSIQL does not learn a separate high-level subgoal policy. Experiments on D4RL goal-reaching benchmarks and OGBench show that RSIQL improves over goal-conditioned IQL on average and achieves performance competitive with hierarchical offline goal-conditioned methods, while retaining a simple flat policy structure.

---

*Source: [arXiv](https://arxiv.org/abs/2609.19414)*
