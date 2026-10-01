---
title: "ROSS: Relearning from Self-Generated Rollouts through Selective Supervision"
dek: "arXiv:2609.35954v1 Announce Type: new Abstract: Large language model post-training generates self-generated rollouts through reinforcement learning and on-policy distillation, yet this experience is often treated as..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-01
featured: false
gradient: grad-4
---

arXiv:2609.35954v1 Announce Type: new Abstract: Large language model post-training generates self-generated rollouts through reinforcement learning and on-policy distillation, yet this experience is often treated as stale once the policy advances. Historical rollouts can remain compatible with a later policy while preserving behaviors that the policy no longer expresses reliably. However, they may also contain mistakes, abandoned attempts, and redundant actions that should not be imitated, motivating finer-grained selective supervision. We introduce ROSS (Relearning from Self-Generated Rollouts through Selective Supervision), which preserves the full historical trajectory as context while applying loss only to selected model-generated continuations. Across domain-specific reinforcement learning, multi-teacher on-policy distillation, and agentic reinforcement learning, ROSS consistently improves upstream checkpoints and outperforms baselines across mathematics, code generation, instruction following, and software engineering. On Qwen3.6-35B-A3B, ROSS improves the six-benchmark MOPD average from 58.40% to 62.20% and SWE-bench Verified from 64.20% to 68.40%. These results show that self-rollout training leaves behind reusable behavioral experience that can yield further gains through offline supervised fine-tuning (SFT), without additional policy rollouts.

---

*Source: [arXiv](https://arxiv.org/abs/2609.35954)*
