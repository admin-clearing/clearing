---
title: "AdaRoPE: Not All Attention Heads Should Rotate and Scale Equally"
dek: "arXiv:2607.19363v1 Announce Type: new Abstract: Rotary Position Embedding (RoPE) is widely adopted in Transformers to encode positional information, yet standard implementations enforce a uniform frequency schedule and..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-07-23
featured: false
gradient: grad-4
---

arXiv:2607.19363v1 Announce Type: new Abstract: Rotary Position Embedding (RoPE) is widely adopted in Transformers to encode positional information, yet standard implementations enforce a uniform frequency schedule and scaling across all attention heads. Using simplified retrieval tasks and length generalization scenarios, we show -- both empirically and theoretically -- that heads with different functional roles require distinct frequency ranges and attention scaling factors to operate effectively. Ignoring this structure leads to suboptimal utilization of embedding dimensions and degraded performance, particularly under long-context settings. To address these limitations, we propose AdaRoPE, which equips each attention head with learnable rotation frequencies and attention scaling factors. Pretrained LLMs with AdaRoPE consistently outperform existing RoPE variants, including partial RoPE and NoPE baselines. For context extension, we further show that uniform frequency and attention scaling, used in methods such as YaRN, are suboptimal. By applying head-specific scaling, AdaRoPE enables better context extension while better preserving short-context performance in both the extrapolation setting and the long-context continued pretraining setting. These results highlight the importance of optimizing rotary position embedding at the level of individual attention heads.

---

*Source: [arXiv](https://arxiv.org/abs/2607.19363)*
