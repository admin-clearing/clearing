---
title: "Effective Teacher Support for Reasoning Distillation"
dek: "arXiv:2611.14850v1 Announce Type: new Abstract: Forward-KL language-model distillation normally computes dense teacher and student scores over the full vocabulary at every supervised position, making training and stored..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-11-14
featured: false
gradient: grad-4
---

arXiv:2611.14850v1 Announce Type: new Abstract: Forward-KL language-model distillation normally computes dense teacher and student scores over the full vocabulary at every supervised position, making training and stored teacher targets expensive. We instead distill from the teacher's highest-probability vocabulary fraction, renormalizing the retained mass as we sweep support from 100% to 0.01%. Our main study distills Qwen3 4B -> 1.7B. We confirm the broader support-reduction finding on larger Qwen3 8B -> 4B and Nemotron Nano 12B -> 9B pairs and under answer-only supervision. We evaluate generation primarily on MMLU-Pro and secondarily on GPQA-Diamond. Across the Qwen3 settings, retaining 0.01% of the vocabulary causes no observed MMLU-Pro degradation relative to full-vocabulary distillation, although disagreement with the complete teacher distribution increases. Nemotron Nano matches full-vocabulary MMLU-Pro at 0.1%, but smaller fractions fail to emit the closing reasoning tag, showing that the reliable cutoff depends on the model family. At 0.01% support, caching the retained next-token scores from the teacher forward pass cuts training step time by 38%, while restricting student output computation to those tokens cuts peak memory by 24%; neither causes observed MMLU-Pro degradation.

---

*Source: [arXiv](https://arxiv.org/abs/2611.14850)*
