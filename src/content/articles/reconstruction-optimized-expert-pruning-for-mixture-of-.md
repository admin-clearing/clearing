---
title: "Reconstruction-Optimized Expert Pruning for Mixture-of-Experts Language Models"
dek: "arXiv:2610.27123v1 Announce Type: new Abstract: Mixture-of-Experts (MoE) models reduce computation through sparse expert activation, but deployment still requires storing a large number of expert parameters. We study..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-10-21
featured: false
gradient: grad-4
---

arXiv:2610.27123v1 Announce Type: new Abstract: Mixture-of-Experts (MoE) models reduce computation through sparse expert activation, but deployment still requires storing a large number of expert parameters. We study post-training expert pruning using task-domain calibration data as a subset-selection problem: given a pretrained MoE layer, select a fixed number of experts that best reconstruct its original output. Exact subset search is combinatorial and becomes intractable for modern MoE models with many experts per layer. We develop OptEP, a scalable continuous relaxation that directly optimizes differentiable expert-selection variables, followed by a lightweight reconstruction-based update of the retained expert weights. Across multiple MoE architectures and tasks spanning mathematical reasoning and code generation, our approach improves over the strongest existing expert-pruning baselines, with absolute accuracy gains of up to 15.05% on Qwen3-30B-A3B, 14.55% on Qwen3-235B-A22B, 11.06% on GLM-4.5-Air, and 16.20% on Mixtral-8x7B. The improvements are particularly pronounced under aggressive pruning, demonstrating that reconstruction-driven expert selection and weight adaptation can preserve substantially more of the original model's performance while reducing the number of retained experts.

---

*Source: [arXiv](https://arxiv.org/abs/2610.27123)*
