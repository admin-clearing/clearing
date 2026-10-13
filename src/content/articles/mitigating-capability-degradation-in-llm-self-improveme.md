---
title: "Mitigating Capability Degradation in LLM Self-Improvement via Representation Geometry Regularization"
dek: "arXiv:2610.12855v1 Announce Type: new Abstract: On-Policy Self-distillation is a self-improvement paradigm that enables large language models (LLMs) to improve their capabilities by leveraging the same model as both..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-13
featured: false
gradient: grad-4
---

arXiv:2610.12855v1 Announce Type: new Abstract: On-Policy Self-distillation is a self-improvement paradigm that enables large language models (LLMs) to improve their capabilities by leveraging the same model as both teacher and student under different conditioning contexts. However, we find that OPSD methods can progressively degrade previously acquired capabilities: queries that are correctly responded at earlier training stages may become incorrectly responded as optimization proceeds, even the overall performance continues to improve. Further analysis reveals that this degradation coincides with a deterioration of the geometry of hidden representations, characterized by reduced intra-cluster compactness and diminished inter-cluster separation. Motivated by this observation, we propose Representation Geometry Regularization (RGR), which preserves representation geometry during post-training by encouraging compactness within cluster and separation across cluster. RGR can be seamlessly integrated into existing OPSD methods without altering their core optimization procedures. Extensive experiments on multiple OPSD methods and benchmarks show that RGR generally alleviates capability degradation while retaining capability improvements. Our code is available in https://github.com/supermachinelearner/RGR.

---

*Source: [arXiv](https://arxiv.org/abs/2610.12855)*
