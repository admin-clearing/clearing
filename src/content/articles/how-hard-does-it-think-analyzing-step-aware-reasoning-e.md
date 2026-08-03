---
title: "How Hard Does It Think? Analyzing Step-Aware Reasoning Energy in LLM Chain-of-Thought Trajectories"
dek: "arXiv:2607.28674v1 Announce Type: new Abstract: Understanding how computational effort is allocated across individual chain-of-thought (CoT) reasoning steps remains an open challenge: existing interpretability methods..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-03
featured: false
gradient: grad-4
---

arXiv:2607.28674v1 Announce Type: new Abstract: Understanding how computational effort is allocated across individual chain-of-thought (CoT) reasoning steps remains an open challenge: existing interpretability methods rely on output-level signals or collapse processing depth into a single trajectory-level scalar, leaving step-wise effort opaque. We propose Step-Aware Reasoning Energy (SARE), a geometric framework that quantifies effort at the granularity of individual CoT steps via Centered Kernel Alignment (CKA) between Gram matrices of token hidden states across adjacent transformer layers, capturing inter-token relational structure without requiring eigenvector alignment or cluster correspondence. SARE further contextualizes this energy within reasoning's semantic progression by modeling CoT trajectories as transitions among latent semantic states. Across six reasoning benchmarks and three open-weight LLMs, we find that reasoning energy is highly non-uniform across step types, exhibiting phase-like transitions invisible to trajectory-level metrics; incorrect trajectories show systematically lower energy at critical reasoning junctions; and SARE-based features match or outperform output-based confidence baselines in most settings, indicating that internal geometric dynamics encode predictive information beyond surface-level signals.

---

*Source: [arXiv](https://arxiv.org/abs/2607.28674)*
