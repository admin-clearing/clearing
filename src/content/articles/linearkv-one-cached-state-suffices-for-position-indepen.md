---
title: "LinearKV: One Cached State Suffices for Position-Independent Caching in Hybrid LLMs"
dek: "arXiv:2608.11231v1 Announce Type: new Abstract: LLM serving is increasingly accelerated by position-independent caching (PIC). Existing PIC methods, however, are built for full-attention models, where a token-indexed KV..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-08-13
featured: false
gradient: grad-4
---

arXiv:2608.11231v1 Announce Type: new Abstract: LLM serving is increasingly accelerated by position-independent caching (PIC). Existing PIC methods, however, are built for full-attention models, where a token-indexed KV cache underlies its core operations: matching reusable token chunks, concatenating their KV entries, and selectively recomputing a few tokens to restore cross-chunk context. Hybrid LLMs break these primitives---they replace most attention layers with linear recurrences that expose only a fixed-size state, leaving no token-indexed KV to concatenate or to locally repair. This raises a natural question: can PIC benefit hybrid models, and what would it take? We present LinearKV, a training-free hybrid-PIC framework. Its key insight is a \emph{decoupled initialization}: each linear layer maps its $K$ matched local states to a single initial state, while full-attention layers concatenate their KV as before. LinearKV is therefore compatible with existing PIC methods, reusing their token selection and recomputation as-is. Under this framework, we find that a \emph{single cached state} suffices as the linear layer's initializer. The algebraically principled alternative---composing all $K$ cached states into the exact full-prefix state, as concurrent work HYPIC does---is unnecessary and, on some architectures, even harmful. We compare the two across three hybrid models and three PIC selectors. On the two GDN models the two tie, both recovering most of full quality (up to $92\%$); on the Mamba-2 model, exact composition instead collapses under every selector---under EPIC, for instance, it recovers only $46.6\%$ of full quality, versus $86.8\%$ for a single cached block initializer. A single state initializer is also cheaper, cutting time-to-first-token to $0.46\tim

---

*Source: [arXiv](https://arxiv.org/abs/2608.11231)*
