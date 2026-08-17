---
title: "SAGE: Surrogate-gradient Adaptation via Attention-Guided Entropy for Spiking Transformers"
dek: "arXiv:2608.13702v1 Announce Type: new Abstract: Spiking neural networks (SNNs) offer an energy-efficient alternative to conventional deep neural networks by exploiting sparse event-driven computation, but their training..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-08-17
featured: false
gradient: grad-4
---

arXiv:2608.13702v1 Announce Type: new Abstract: Spiking neural networks (SNNs) offer an energy-efficient alternative to conventional deep neural networks by exploiting sparse event-driven computation, but their training remains challenging because the non-differentiable spike function requires surrogate gradients whose fixed shape may be suboptimal across layers and training stages. In this work, we introduce SAGE, an uncertainty-modulated surrogate-gradient mechanism for Transformer-based SNNs. SAGE estimates block-level uncertainty from normalized self-attention entropy and uses this signal to adapt the surrogate-gradient slope during training while leaving the inference model unchanged. By modulating only the training-time surrogate parameter, the proposed method preserves the original architecture and deployment cost while improving optimization flexibility. Experiments on CIFAR-10/100 demonstrate that SAGE achieves improved accuracy over fixed-surrogate baselines, with results up to 1-2\% consistent gains across multiple simulation time steps. These results highlight the potential of attention-derived uncertainty as a lightweight training signal for adaptive surrogate-gradient learning in transformer-based SNNs.

---

*Source: [arXiv](https://arxiv.org/abs/2608.13702)*
