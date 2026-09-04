---
title: "LeanStream: A Speculate-and-Refine Streaming Framework for Efficient on-Device LLM Inference"
dek: "arXiv:2609.03079v1 Announce Type: new Abstract: On-device LLM inference is attractive for privacy and responsiveness, but remains challenging on mobile and embedded devices because model weights far exceed available..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-09-04
featured: false
gradient: grad-4
---

arXiv:2609.03079v1 Announce Type: new Abstract: On-device LLM inference is attractive for privacy and responsiveness, but remains challenging on mobile and embedded devices because model weights far exceed available DRAM. Prior systems exploit activation sparsity and offload weights to SSD or flash storage, but face a fundamental systems trade-off: accurate sparse execution decisions require the latest context, whereas efficient computation-I/O overlap requires early prediction. As a result, existing designs either serialize execution or incur redundant weight fetches, extra computation, and large cache overheads. We present LeanStream, a streaming speculate-and-refine framework for efficient on-device LLM inference. LeanStream progressively refines computation, loading, and cache-retention priorities using partial GPU results, enabling fine-grained overlap between GPU execution and storage I/O. We implement LeanStream on both mobile and embedded platforms. Compared with prior on-device LLM inference systems, LeanStream reduces memory usage by 4.8$\times$ to 7.5$\times$ at the best throughput achieved by prior work, while further improving token generation throughput by 1.6$\times$ to 2.1$\times$.

---

*Source: [arXiv](https://arxiv.org/abs/2609.03079)*
