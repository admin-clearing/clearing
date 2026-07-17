---
title: "Branching Policy Optimization: Sandbox-Native Language Agent Reinforcement Learning"
dek: "arXiv:2607.14171v1 Announce Type: new Abstract: Reinforcement learning has emerged as the dominant paradigm for training large language model (LLM) agents that interact with executable sandboxes. State-of-the-art..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-07-17
featured: false
gradient: grad-4
---

arXiv:2607.14171v1 Announce Type: new Abstract: Reinforcement learning has emerged as the dominant paradigm for training large language model (LLM) agents that interact with executable sandboxes. State-of-the-art algorithms such as PPO, RLOO, and GRPO inherit their rollout topology from RLHF: for each prompt, N independent trajectories are sampled from the initial state, and an advantage is computed by subtracting a group baseline. This design ignores a defining property of agent sandboxes. They are deterministic, snapshottable, and resumable from any intermediate state. We argue that this property enables a fundamentally different rollout topology: rather than N independent trees of depth T, one can construct a single tree of N leaves whose siblings share prefixes, and therefore share variance. We instantiate this idea as Branching Policy Optimization (BPO), a sandbox-native RL algorithm that (i) adaptively snapshots the sandbox at high-entropy decision points along a backbone trajectory, (ii) forks K alternative actions per branch point and rolls out each to termination, and (iii) computes per-step advantages from sibling returns rather than from independent prompts. We prove this estimator is unbiased and has strictly lower variance than the trajectory-level baseline, with the reduction equal to the prefix-explained portion of return variance. On WebShop, ALFWorld, and SWE-bench Verified with Qwen2.5-7B and Llama-3.1-8B backbones, BPO improves success by 3.6--6.1 absolute points over GRPO and RLOO at matched compute, halves gradient-norm variance, and matches the best baseline using 38% fewer policy updates.

---

*Source: [arXiv](https://arxiv.org/abs/2607.14171)*
