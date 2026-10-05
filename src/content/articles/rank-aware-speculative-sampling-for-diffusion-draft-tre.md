---
title: "Rank-Aware Speculative Sampling for Diffusion Draft Trees"
dek: "arXiv:2610.02251v1 Announce Type: new Abstract: Speculative sampling accelerates diffusion generation by verifying inexpensive draft states in parallel while preserving the target law. Recent tree-based methods allocate..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-05
featured: false
gradient: grad-4
---

arXiv:2610.02251v1 Announce Type: new Abstract: Speculative sampling accelerates diffusion generation by verifying inexpensive draft states in parallel while preserving the target law. Recent tree-based methods allocate the parallel compute budget more effectively than single-chain drafts, as demonstrated by Diffusion Greedy Rejection Sampling (D-GRS). D-GRS generates $K$ conditionally independent candidates per node, and sequentially tests them in their generation order. Yet the sampled candidates admit an informative ranking without additional target-model evaluations. To exploit this, we introduce Rank-Aware Speculative Sampling (RASS), a verification rule for speculative draft trees based on rank-aware list coupling. RASS orders draft candidates along the proposal-target mean displacement and samples a rank with weights optimized to minimize total variation between the selected-proposal and target laws. Finally, the selected candidate is maximally coupled with the target, with residual correction ensuring exact sampling for any choice of rank weights. We evaluate RASS on a Gaussian-mixture target, unconditional pixel-space generation on FFHQ, conditional generation on CIFAR-10, and latent diffusion with Stable Diffusion 3.5 using COCO2014 prompts. Measured by the ratio of standard to speculative sampling's target-model evaluation counts, RASS improves on D-GRS across the evaluated settings, with gains reaching approximately 20% on CIFAR-10 at matched compute budgets.

---

*Source: [arXiv](https://arxiv.org/abs/2610.02251)*
