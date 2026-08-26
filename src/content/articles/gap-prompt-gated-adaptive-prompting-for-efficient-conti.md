---
title: "GAP-Prompt: Gated Adaptive Prompting for Efficient Continual Learning"
dek: "arXiv:2608.23782v1 Announce Type: new Abstract: Continual learning faces the persistent challenge of catastrophic forgetting, where sequential task updates degrade previously acquired knowledge. While prompt-based..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-08-26
featured: false
gradient: grad-4
---

arXiv:2608.23782v1 Announce Type: new Abstract: Continual learning faces the persistent challenge of catastrophic forgetting, where sequential task updates degrade previously acquired knowledge. While prompt-based methods integrated with pre-trained models offer a compelling solution by freezing the backbone, they often rely on static, task-level prompting strategies that overlook fine-grained intra-task diversity. In this paper, we propose Gated Adaptive Prompting (GAP-Prompt), a novel method that introduces instance-level adaptability to the prompting process. GAP-Prompt consists of three synergistic modules: (1) instance-conditioned gating, which dynamically determines optimal prompt injection layers for each individual image; (2) dynamic knowledge fusion, which performs instance-aware aggregation of current and historical prompts, enabling knowledge integration across tasks; and (3) shared prompt distillation, which anchors foundational knowledge in early shared layers to mitigate forgetting. Extensive evaluations on CIFAR-100, ImageNet-R, and CUB-200 benchmarks demonstrate that GAP-Prompt consistently achieves state-of-the-art performance. Notably, on the fine-grained CUB-200 dataset, GAP-Prompt reaches 87.29% accuracy, approaching the joint training upper bound (88.00%) and outperforming existing methods by a significant margin.

---

*Source: [arXiv](https://arxiv.org/abs/2608.23782)*
