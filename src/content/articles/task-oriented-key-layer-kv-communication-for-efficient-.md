---
title: "Task-Oriented Key-Layer KV Communication for Efficient Latent Multi-Agent Collaboration"
dek: "arXiv:2610.08820v1 Announce Type: new Abstract: Large language model-based multi-agent systems improve complex problem solving through collaboration, while latent communication directly transmits model internal states..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-10-08
featured: false
gradient: grad-4
---

arXiv:2610.08820v1 Announce Type: new Abstract: Large language model-based multi-agent systems improve complex problem solving through collaboration, while latent communication directly transmits model internal states to avoid the high inference costs of natural language. However, existing KV-based latent communication methods prioritize sender-side state fidelity, leading to substantial communication and computation overhead and potentially introducing redundant information. To address these limitations, we revisit latent communication from a task-oriented perspective, shifting its objective from sender-side state fidelity to receiver-side task sufficiency. Under this formulation, we propose KITE, a training-free framework for task-oriented key-layer KV communication. KITE identifies a task-effective key layer using a receiver trajectory distortion criterion, transmits only the latent working memory associated with the key layer, and further uses the same layer as the entry point for autoregressive latent reasoning. Experiments on seven benchmarks across two model families and three model scales show that, compared with full-layer KV communication, KITE reduces communication volume by 28-36$\times$, achieves up to 3$\times$ end-to-end inference speedup, and improves accuracy by up to 23.3 percentage points.

---

*Source: [arXiv](https://arxiv.org/abs/2610.08820)*
