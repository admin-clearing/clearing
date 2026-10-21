---
title: "Exploration via Activation-Space Steering for Reinforcement Learning with Verifiable Rewards"
dek: "arXiv:2610.27012v1 Announce Type: new Abstract: Reinforcement learning with verifiable rewards (RLVR) trains a language model by sampling responses, scoring them with an automatic verifier, and updating the policy from..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-21
featured: false
gradient: grad-4
---

arXiv:2610.27012v1 Announce Type: new Abstract: Reinforcement learning with verifiable rewards (RLVR) trains a language model by sampling responses, scoring them with an automatic verifier, and updating the policy from the resulting rewards. The policy therefore receives direct learning signals only from trajectories that appear in its rollouts. Yet repeated sampling from the same policy can concentrate on similar reasoning paths, leaving useful alternatives unexplored under a fixed rollout budget. We introduce Activation-Space Exploration (ASE), an online method for diversifying training rollouts. By clustering activation differences between correct and incorrect responses to the same problem, ASE builds a structured bank of latent exploration vectors. Different vectors are then applied to subsequent rollouts to explore alternative reasoning paths. On Qwen3-1.7B-Base and Qwen3-8B-Base trained on DAPO-Math-17k, ASE improves average Mean@8 across six mathematical reasoning benchmarks over GRPO by 4.87 and 1.87 percentage points, respectively, under the same rollout budget.

---

*Source: [arXiv](https://arxiv.org/abs/2610.27012)*
