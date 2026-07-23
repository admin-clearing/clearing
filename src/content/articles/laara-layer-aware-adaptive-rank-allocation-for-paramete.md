---
title: "LAARA: Layer-Aware Adaptive Rank Allocation for Parameter-Efficient Fine-Tuning"
dek: "arXiv:2607.19391v1 Announce Type: new Abstract: Low-Rank Adaptation is widely used for parameter-efficient fine-tuning, yet existing methods typically assign the same adapter rank to every transformer layer despite..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-07-23
featured: false
gradient: grad-4
---

arXiv:2607.19391v1 Announce Type: new Abstract: Low-Rank Adaptation is widely used for parameter-efficient fine-tuning, yet existing methods typically assign the same adapter rank to every transformer layer despite their heterogeneous adaptation requirements. In this work, we show theoretically and empirically that uniform rank allocation is fundamentally suboptimal. Motivated by this observation, we propose LAARA (Layer Aware Adaptive Rank Allocation framework), a search-free framework that dynamically allocates ranks using lightweight diagonal Fisher estimates computed during training. LAARA combines projection-wise normalization, logarithmic compression, blended adapter importance estimation, and a vote-to-change dampening mechanism to produce stable and efficient rank adaptation. Experiments on GLUE and MathInstruct benchmark demonstrate that LAARA consistently matches or outperforms popular state of the art approaches such as LoRA, AdaLoRA, DyLoRA, and Bitfit while using significantly fewer trainable parameters. Our results show that Fisher-guided rank allocation provides a principled and effective foundation for adaptive parameter-efficient fine-tuning. The code is publicly available at: https://anonymous.4open.science/r/LAARA-D305/LAARA.py

---

*Source: [arXiv](https://arxiv.org/abs/2607.19391)*
