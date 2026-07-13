---
title: "Director: Accelerating Distributed MoE Serving via Online Proactive Expert Placement"
dek: "arXiv:2607.08782v1 Announce Type: new Abstract: Expert parallelism has become the prevailing paradigm to serve Mixture-of-Experts (MoE) models. Its efficiency depends on the communication and computation latencies of..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-07-13
featured: false
gradient: grad-4
---

arXiv:2607.08782v1 Announce Type: new Abstract: Expert parallelism has become the prevailing paradigm to serve Mixture-of-Experts (MoE) models. Its efficiency depends on the communication and computation latencies of the GPUs, which are linked to the placement of experts in the GPUs. Existing works for optimizing expert placement focus on leveraging past requests' expert activation patterns. However, they demonstrate deficiencies facing diverse and rapidly changing request patterns, calling for an online, proactive approach. Implementing such an approach requires addressing several challenges: the uncertainty associated with incoming requests' expert activation, the cost of expert migration, and the NP-hard complexity in optimization. Therefore, we present Director, a new distributed MoE serving system that minimizes end-to-end latency via prediction-driven, online expert placement. Director uses either a lightweight cascaded predictor or a low-bit quantized replica for expert activation patterns of incoming requests. An online migration module then enacts the changes with near-zero downtime by executing migrations in compute-bound phases, keeping disruption bounded. At its core, a relaxation-based expert placement optimizer operates under capacity constraints, runs in polynomial time, and achieves a $(1+\epsilon)$ approximation ratio. Finally, we implement a prototype and demonstrate, through extensive experiments, a reduction in end-to-end latency of $11\sim55\%$ for popular MoE models (e.g., Mistral, DeepSeek and Qwen) compared to existing work.

---

*Source: [arXiv](https://arxiv.org/abs/2607.08782)*
