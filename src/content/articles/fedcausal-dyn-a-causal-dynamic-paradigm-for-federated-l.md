---
title: "FedCausal-Dyn: A Causal-Dynamic Paradigm for Federated Learning under Dynamic Feature Drift"
dek: "arXiv:2607.09695v1 Announce Type: new Abstract: This paper addresses the challenging problem of dynamic feature drift in federated learning, where data distributions evolve across clients and over time -- a common..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-07-14
featured: false
gradient: grad-4
---

arXiv:2607.09695v1 Announce Type: new Abstract: This paper addresses the challenging problem of dynamic feature drift in federated learning, where data distributions evolve across clients and over time -- a common scenario in real-world applications like financial technology. Existing approaches often assume static drift, limiting their effectiveness in non-stationary environments. To overcome this, we propose \textbf{FedCausal-Dyn}, a novel federated learning framework built on a causal-dynamic paradigm. Its key innovation is \textit{causal-domain feature separation}, which disentangles domain-invariant causal features from spurious, domain-specific variations via specialized projection heads and adversarial training. This enables \textit{reliable and dynamic prototype aggregation}, weighting local class prototypes by estimated reliability before global aggregation. We further introduce \textit{causal-feature guided collaborative regularization}, unifying prototype contrastive alignment and domain invariance into a cohesive objective. Extensive experiments on three federated domain generalization benchmarks demonstrate that FedCausal-Dyn consistently achieves state-of-the-art performance, with the highest average accuracy and the most stable results. Ablation studies confirm each component's critical contribution. Our work provides a robust and principled solution for federated learning under dynamic feature drift.

---

*Source: [arXiv](https://arxiv.org/abs/2607.09695)*
