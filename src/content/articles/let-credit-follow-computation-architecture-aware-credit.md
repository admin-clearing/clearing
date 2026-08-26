---
title: "Let Credit Follow Computation: Architecture-Aware Credit Transport for Large Language Model Reinforcement Learning"
dek: "arXiv:2608.21501v1 Announce Type: new Abstract: Credit assignment in large-language-model reinforcement learning (LLM RL) can be separated into three objects: evidence about success, a transport operator that converts..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-08-25
featured: false
gradient: grad-4
---

arXiv:2608.21501v1 Announce Type: new Abstract: Credit assignment in large-language-model reinforcement learning (LLM RL) can be separated into three objects: evidence about success, a transport operator that converts this evidence into token-level advantages, and an update geometry that turns advantages into policy changes. Recent work has greatly improved evidence, sampling, and update geometry, but the transport operator is usually architecture-agnostic. Fixed-discount GAE applies a stationary geometric kernel along token time; group-relative methods broadcast an outcome statistic across an entire response. Neither operator represents the trajectory-specific computation used by the Transformer policy itself. We introduce computation-conditioned credit transport (CCT), a general framework in which a detached statistic of the behavior policy's internal computation parameterizes the causal kernel that transports downstream value through a rollout. Our concrete algorithm, CompPO, maps native attention concentration to a bounded per-token retention gate, uses the gate in both the one-step bootstrap and a path-dependent generalized-advantage trace (Comp-GAE), and co-designs a transport-aligned critic (TAC) that reuses the actor's hidden states and routing information without a second same-scale Transformer. The task reward and clipped PPO policy objective remain unchanged; a constant gate recovers fixed-coefficient GAE. Across five Qwen3-4B seeds, CompPO reaches 61.4% final held-out accuracy (95% CI [60.8,62.0]) versus 53.8% [52.9,54.7] for tuned GRPO. Neither Comp-GAE with a standard critic (55.2%) nor TAC with a fixed gate (56.4%) matches the full model (interaction +2.4 [1.9,2.9]). Shuffle and position controls confirm trajectory-specific alignment; CompPO is stable in 

---

*Source: [arXiv](https://arxiv.org/abs/2608.21501)*
