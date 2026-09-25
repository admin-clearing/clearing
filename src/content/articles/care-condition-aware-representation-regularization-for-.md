---
title: "CARE: Condition-Aware Representation Regularization for Diffusion Models"
dek: "arXiv:2609.28561v1 Announce Type: new Abstract: Recent advances in diffusion models highlight the importance of representation regularization for improving sample quality and training efficiency. However, commonly used..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-25
featured: false
gradient: grad-4
---

arXiv:2609.28561v1 Announce Type: new Abstract: Recent advances in diffusion models highlight the importance of representation regularization for improving sample quality and training efficiency. However, commonly used regularization methods often overlook the built-in conditions (such as labels or texts) which directly determine the generation target. In this work, we demonstrate how conditioning signals affect the feature distribution and introduce the CARE (Condition-Aware REpresentation regularization). CARE is a lightweight plug-and-play regularization framework that dynamically modulates feature distribution based on condition similarity. CARE leverages built-in conditioning signals to judiciously guide the representation space, promoting tighter feature clusters for similar conditions without relying on explicit alignment losses or external supervision. Empirically, CARE consistently improves both visual fidelity and convergence stability across both class-to-image and text-to-image tasks. On ImageNet, CARE achieves a 19.08\% reduction in FID in 400k training steps, leading to a 3.5$\times$ speed-up. When applied to text-to-image generation, CARE lowers FID by 16.61\% in 200k iterations and improves semantic alignment between generated samples and text prompts. Moreover, CARE can be seamlessly integrated with existing regularization methods, yielding additional performance gains.

---

*Source: [arXiv](https://arxiv.org/abs/2609.28561)*
