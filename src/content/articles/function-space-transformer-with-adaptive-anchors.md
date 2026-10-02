---
title: "Function-Space Transformer with Adaptive Anchors"
dek: "arXiv:2609.38348v1 Announce Type: new Abstract: Many forms of data, including physical fields, geometric shapes, and visual signals, are naturally described by functions over continuous domains but are observed through..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-02
featured: false
gradient: grad-4
---

arXiv:2609.38348v1 Announce Type: new Abstract: Many forms of data, including physical fields, geometric shapes, and visual signals, are naturally described by functions over continuous domains but are observed through discrete samples. Representing these functions on fixed uniform grids imposes a trade-off between resolving localized variation and increasing computation across the domain. Neural operators address this mismatch by learning mappings between functions, while latent-attention architectures provide flexible processing of sampled observations. We introduce the Function-Space Transformer (FST), a framework for learning from functions through a spatially adaptive continuous latent representation. FST stores features at anchors whose locations are predicted from the input observations and recursively refines these anchor features through function-space interactions. This allows the representation to adapt its spatial organization to each input rather than inherit that of the observation grid, while supporting both spatially resolved and finite-dimensional outputs. On PDE solution prediction using PDEBench Burgers and Darcy flow, FST substantially outperforms the Perceiver IO baseline, whose latent representation lacks explicit spatial organization, and is highly competitive with the Fourier Neural Operator. On ImageNet-1K, FST achieves higher classification accuracy than the Vision Transformer baseline, with fewer parameters across these comparisons. Ablations further support the benefits of function-space updates and recursive refinement. Together, these results highlight the potential of adaptive continuous representations for both scientific prediction and visual recognition.

---

*Source: [arXiv](https://arxiv.org/abs/2609.38348)*
