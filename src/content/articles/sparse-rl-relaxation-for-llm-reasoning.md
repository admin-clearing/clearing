---
title: "Sparse RL Relaxation for LLM Reasoning"
dek: "arXiv:2610.27220v1 Announce Type: new Abstract: Recent work has explored continuous representations in place of discrete tokens during Chain-of-Thought (CoT) reasoning, often referred to as soft CoT. This is motivated..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-22
featured: false
gradient: grad-4
---

arXiv:2610.27220v1 Announce Type: new Abstract: Recent work has explored continuous representations in place of discrete tokens during Chain-of-Thought (CoT) reasoning, often referred to as soft CoT. This is motivated by the idea that a mixture of token embeddings can represent a superposition of multiple reasoning possibilities within a single step. However, it remains challenging to train large language models to realize this potential. Existing work has explored reinforcement learning (RL)-style training for soft CoT. However, these approaches treat soft tokens as actions in a Markov decision process rather than as differentiable intermediate computation steps. Thus, they do not propagate gradients across the soft tokens and miss out on the signal of how the choice of one soft token affects the next. In this paper, we propose a sparse relaxation method for RL (called SpaRLax), which leverages the differentiability of soft-CoT reasoning over time steps and makes training more stable and effective. We adopt an entmax sparsity method that adaptively determines the degree of softness, which truncates long-tail noise at confident steps while retaining multiple plausible candidates when uncertain. Across nine reasoning benchmarks, our method achieves the highest average performance compared with baseline methods. Further analyses validate the effective use of soft-token superposition in our approach, and also demonstrate the contribution of adaptive sparsity in our approach.

---

*Source: [arXiv](https://arxiv.org/abs/2610.27220)*
