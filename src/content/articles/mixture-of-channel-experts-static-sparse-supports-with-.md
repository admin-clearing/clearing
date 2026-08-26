---
title: "Mixture of Channel Experts: Static Sparse Supports with Input-Adaptive Mixing for Pointwise Projections"
dek: "arXiv:2608.23794v1 Announce Type: new Abstract: Mixture-of-Experts (MoE) scales language models by routing each input through a small set of independently parameterized experts. We show that copying this design into..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-08-26
featured: false
gradient: grad-4
---

arXiv:2608.23794v1 Announce Type: new Abstract: Mixture-of-Experts (MoE) scales language models by routing each input through a small set of independently parameterized experts. We show that copying this design into convolutional networks fails for a structural reason: parallel convolutional experts that read the same input channels learn nearly identical filters. We therefore move the expert axis from operator duplication to channel selection. We introduce Mixture of Channel Experts (MoCE), a structured sparse channel-mixing layer, inspired by MoE, that replaces pointwise (1x1) channel-reduction projections. In MoCE, an expert is a single output channel with a learned sparse support of k << C input channels. The selected channels are combined by a softmax whose temperature is predicted per input, so each expert can move between mean-like and max-like aggregation. A residual expert summarizes the unselected channels, and a load-balancing loss keeps channel coverage complete. MoCE replaces a dense projection whose cost is quadratic in C with a mechanism whose relative cost scales as k/C, and the predicted savings hold in measured wall-clock time. Across ResNet backbones on ImageNet-1K and CIFAR-100, transfer learning, EfficientViT, and a strong modern training recipe, MoCE matches or exceeds dense baselines and prior channel-selection methods while reducing MACs by 16.7% and end-to-end latency.

---

*Source: [arXiv](https://arxiv.org/abs/2608.23794)*
