---
title: "Task-Phase-Conditioned Expert Routing Is Not a Reliable Proxy for Quantization Sensitivity in MoE FFN Tensors"
dek: "arXiv:2610.20826v1 Announce Type: new Abstract: We investigate whether per-layer, per-task-phase (prompt/reasoning/response) expert-routing statistics in a Mixture-of-Experts (MoE) language model can guide layer-wise..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-10-16
featured: false
gradient: grad-4
---

arXiv:2610.20826v1 Announce Type: new Abstract: We investigate whether per-layer, per-task-phase (prompt/reasoning/response) expert-routing statistics in a Mixture-of-Experts (MoE) language model can guide layer-wise mixed-precision quantization of routed-expert FFN tensors (down/gate and up). To attain layerwise routing statistics, we build a routing-capture and profiling pipeline for Qwen-3.6-35B-A3B in ik_llama.cpp, derive a composite sensitivity score from routing entropy/decisiveness, coefficient of variation (CV), Jaccard/phase-fragility, and top-1 expert strength, and use coordinate descent to tune a layer allocation that respects a fixed average bits-per-weight budget. Notably, the profiling pipeline is applicable to standard top-k MoE architectures. Across independent experimental conditions (about 4.0 bpw flat, about 2.7 bpw steep, and about 2.7 bpw random allocation as a control), reallocation fails to outperform the uniform baseline within each quality tier. In the flat regime, reallocation is statistically neutral (z about 0.9). For the steep tier, the random reallocation performs within 1 SE of the routing-guided reallocation at the same tier, indicating a structural loss at this quality rung caused by mandatory downgrades and Kullback-Leibler Divergence (KLD) tail injection. This aggressive-budget condition shows a decisive loss (z greater than 4 SE) replicated across three independent weight vectors. We argue that the deeper issue is that routing-behavior statistics are an unvalidated proxy for true per-layer quantization cost.

---

*Source: [arXiv](https://arxiv.org/abs/2610.20826)*
