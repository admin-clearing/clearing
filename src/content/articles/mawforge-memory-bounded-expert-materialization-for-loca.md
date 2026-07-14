---
title: "MawForge: Memory-Bounded Expert Materialization for Local Mixture-of-Experts Inference"
dek: "arXiv:2607.09686v1 Announce Type: new Abstract: Sparse Mixture-of-Experts (MoE) language models separate total parameter count from per-token active computation, but local inference systems often still require the full..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-07-14
featured: false
gradient: grad-4
---

arXiv:2607.09686v1 Announce Type: new Abstract: Sparse Mixture-of-Experts (MoE) language models separate total parameter count from per-token active computation, but local inference systems often still require the full model, key-value cache, runtime buffers, and operatingsystem headroom to fit in fast memory. MawForge tests a different systems hypothesis: local MoE serving can be made practical on constrained unified-memory machines by storing the full model on disk, keeping common tensors resident, and materializing routed expert tensors into a bounded execution cache on demand. The central finding is that MawForge is effective as a bounded execution mechanism and measurement substrate for local MoE inference, but not as a cache-maximization policy. Performance depends on balancing expert reuse against resident footprint, KV-cache size, quantization, route locality, and macOS memory pressure.

---

*Source: [arXiv](https://arxiv.org/abs/2607.09686)*
