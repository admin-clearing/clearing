---
title: "Routing Is Not Enough: Diagnosing Intra-Adapter Subspace Contention in MoE+LoRA Fine-Tuning"
dek: "arXiv:2609.03150v1 Announce Type: new Abstract: Multi-domain fine-tuning often combines MoE routing with LoRA, assuming that token-level routing separates domain-specific updates. We test this assumption in MoE+LoRA..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-09-04
featured: false
gradient: grad-4
---

arXiv:2609.03150v1 Announce Type: new Abstract: Multi-domain fine-tuning often combines MoE routing with LoRA, assuming that token-level routing separates domain-specific updates. We test this assumption in MoE+LoRA using Python code paired with biomedical text and mathematical reasoning. Although these domains show near-disjoint expert routing, adding biomedical data substantially increases code perplexity, indicating that routing separation alone may not prevent negative transfer. To localize the failure, we introduce Jaccard routing overlap and adapter-gradient cosine similarity, which measure expert sharing and update compatibility, respectively. These diagnostics indicate that interference arises mostly from nearly orthogonal domain gradients competing within the same low-rank adapter subspace. We address this issue with SpawnLoRA, which dynamically adds gated sub-adapters inside MoE experts when adapter-level contention is detected, while keeping the router fixed. We evaluate SpawnLoRA on Phi-tiny-MoE-instruct and OLMoE-1B-7B across multiple mixture settings and find that it effectively reduces negative transfer compared with standard and rank-adaptive LoRA. These results demonstrate that structural separation inside experts provides benefits beyond routing or rank expansion alone.

---

*Source: [arXiv](https://arxiv.org/abs/2609.03150)*
