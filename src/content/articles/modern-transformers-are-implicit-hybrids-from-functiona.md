---
title: "Modern Transformers Are Implicit Hybrids: From Functional Differentiation to Principled Hybrid Architecture Design"
dek: "arXiv:2609.02986v1 Announce Type: new Abstract: Hybrid architectures combining Full Attention (FA) and Linear Attention (LA) are increasingly prominent, yet their allocation remains heuristic. We seek an..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-04
featured: false
gradient: grad-4
---

arXiv:2609.02986v1 Announce Type: new Abstract: Hybrid architectures combining Full Attention (FA) and Linear Attention (LA) are increasingly prominent, yet their allocation remains heuristic. We seek an evidence-grounded basis in head-level functional organization learned by RoPE-based Transformers. Behavioral probes do not yield a complete taxonomy, so we propose two intervention metrics: RoPE Frequency Importance Score (RFIS), measuring how each frequency affects a head's attention distribution, and RoPE Positional Dependence (RPD), isolating dependence on rotary positional modulation. On Qwen3-series models and Llama3.1, RFIS suggests and RPD verifies a complete taxonomy of retrieval and positional heads separated by a salient mid-low-frequency band. Controlled Transformers show that this boundary follows the training-length positional scale; we term it the Global Positional Band (GPBand). The analysis suggests a potential cause of zero-shot length-extrapolation failure and yields two principles: positional modeling should operate only locally, with global access through position-independent retrieval; and both functions should be assigned at head granularity with layer-specific allocation. We instantiate them in Head-wise Hybrid Architecture (HwH), using NoPE FA for global retrieval and LA for local positional modeling. With an FA-to-LA ratio below 1:3, HwH retains strong language modeling and commonsense reasoning while improving retrieval and substantially strengthening zero-shot long-context extrapolation over Transformer, LA, and a layer-wise hybrid baseline. Ablations validate both principles and component roles, highlighting principled hybrid architecture design as a promising route toward future foundation models.

---

*Source: [arXiv](https://arxiv.org/abs/2609.02986)*
