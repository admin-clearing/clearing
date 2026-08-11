---
title: "TEMPER: Tensorized Efficient Manifold-constrained Parameterization for Expressive Residual Routing"
dek: "arXiv:2608.07851v1 Announce Type: new Abstract: Residual connections rely on a static residual pathway, and are essential for training deep neural networks. Hyper-connections (HC) increase the expressivity of residual..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-08-11
featured: false
gradient: grad-4
---

arXiv:2608.07851v1 Announce Type: new Abstract: Residual connections rely on a static residual pathway, and are essential for training deep neural networks. Hyper-connections (HC) increase the expressivity of residual routing by incorporating multiple residual streams and learning dynamic information flow, while manifold-constrained (mHC) variants stabilize training through doubly stochastic residual mixing. However, a generator-level bottleneck remains in existing methods: they use dense, unstructured generators for pre-branch aggregation, residual mixing, and post-branch redistribution, which results in parameter count growing rapidly with the number of streams. To address this issue, we propose \underline{\textbf{T}}ensorized \underline{\textbf{E}}fficient \underline{\textbf{M}}anifold-constrained \underline{\textbf{P}}arameterization for \underline{\textbf{E}}xpressive Residual \underline{\textbf{R}}outing (\textbf{TEMPER}), which represents these generators as multi-way tensors over the input-stream, feature, and output-stream modes, and parameterizes them using tensor networks. Such a structured low-rank formulation is shown to preserve token-dependent manifold-constrained routing interface while substantially reducing parameter growth. It also promotes interpretability and intuition, as: i) tensor ranks control the dimensionality of the learned routing subspace, with full ranks recovering dense routing; while ii) the generator approximation errors bound differences in routing logits and, consequently, in the routed-block outputs. Comprehensive experiments show that TEMPER matches or outperforms existing methods across language modeling and commonsense reasoning tasks, while requiring substantially fewer additional parameters. At eight residual streams, TEMPER ach

---

*Source: [arXiv](https://arxiv.org/abs/2608.07851)*
