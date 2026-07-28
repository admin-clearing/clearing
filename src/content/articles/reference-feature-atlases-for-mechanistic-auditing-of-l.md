---
title: "Reference Feature Atlases for Mechanistic Auditing of Language Models"
dek: "arXiv:2607.22570v1 Announce Type: new Abstract: Auditing a new language model usually means relearning and reinterpreting its internal features from scratch. We propose a reference feature atlas: a sparse feature..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-07-28
featured: false
gradient: grad-4
---

arXiv:2607.22570v1 Announce Type: new Abstract: Auditing a new language model usually means relearning and reinterpreting its internal features from scratch. We propose a reference feature atlas: a sparse feature library trained once on a reference panel and reused for new targets, which attach by fitting only a linear decoder. This yields two complementary views. The atlas channel reads the target on already interpreted panel features, providing a stable coordinate system across models. The residual channel learns features only from what the atlas fails to reconstruct, making "outside the reference panel" an explicit audit signal. We train leave-one-out atlases over five 7-9B instruction-tuned models and audit held-out Mistral and Qwen targets. On three controlled LoRA hidden objectives injected into both targets, the residual channel makes the planted mechanism perfectly controllable at runtime while matched controls stay unaffected and recovers the planted objective as the top-ranked latent across both targets; on Mistral, where the per-target SAE and pairwise crosscoder baselines are retrained for a head-to-head benchmark, both baselines fail to do so. On Qwen-2.5, the same channel additionally reveals a panel-relative political-framing cluster; steering it shifts the audited framing metrics while out-of-domain controls remain unchanged.

---

*Source: [arXiv](https://arxiv.org/abs/2607.22570)*
