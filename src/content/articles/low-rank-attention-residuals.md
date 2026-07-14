---
title: "Low-Rank Attention Residuals"
dek: "arXiv:2607.09694v1 Announce Type: new Abstract: Attention Residuals replace the fixed residual sum with depthwise attention over previous sub-layer outputs in large language models (LLMs), but use each output as both a..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-07-14
featured: false
gradient: grad-4
---

arXiv:2607.09694v1 Announce Type: new Abstract: Attention Residuals replace the fixed residual sum with depthwise attention over previous sub-layer outputs in large language models (LLMs), but use each output as both a full-dimensional key and value. This couples routing with representation and makes depth-routing scores scale with the hidden width $d$. We propose Low-Rank Attention Residuals (LR-AttnRes), which keep full-dimensional residual values while using $r$-dimensional keys, with $r \ll d$, for routing. Projected LR-AttnRes emits learned low-rank keys from existing output projections, decoupling routing from residual content and achieving the best validation loss among the variants tested. Sliced LR-AttnRes uses the last $r$ dimensions of each value as the routing key, removing the auxiliary key-projection path and reducing residual-side FLOPs while still improving performance. Comprehensive sweeps show that depthwise routing can be effective with far fewer dimensions than the model width. We release code and models to facilitate future research.

---

*Source: [arXiv](https://arxiv.org/abs/2607.09694)*
