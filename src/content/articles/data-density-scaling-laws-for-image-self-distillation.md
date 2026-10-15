---
title: "Data Density Scaling Laws for Image Self-Distillation"
dek: "arXiv:2610.19013v1 Announce Type: new Abstract: Current scaling law formulations suggest that increasing the number of unique samples in a dataset improves model performance, while repeated exposure to the same samples..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-15
featured: false
gradient: grad-4
---

arXiv:2610.19013v1 Announce Type: new Abstract: Current scaling law formulations suggest that increasing the number of unique samples in a dataset improves model performance, while repeated exposure to the same samples provides diminishing value. In this work, we examine this assumption for image self-distillation models. Through systematic experiments across diverse datasets, namely Maxar, SATLAS, Waymo, nuPlan, Ego4D, ImageNet, and YFCC15M, we demonstrate that the effects of sample repetition on downstream performance are non-trivial and dataset-dependent. We identify settings where repeatedly training on a smaller random subset can outperform training on a larger set of unique samples. This finding highlights a limitation of existing scaling laws. To address this gap, we propose a modified version of a Chinchilla-style scaling law that explicitly accounts for two factors: the number of unique samples and repetition per sample. This formulation provides a framework for understanding data-compute trade-offs and improves prediction in some regimes where repetition plays a central role, although its benefits are not consistent across datasets. Finally, we examine how subset selection and augmentation affect downstream performance.

---

*Source: [arXiv](https://arxiv.org/abs/2610.19013)*
