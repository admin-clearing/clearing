---
title: "Spectral Feedback for Test-Time Alignment of Protein Diffusion Models"
dek: "arXiv:2609.30456v1 Announce Type: new Abstract: Reward maximization alignment methods for discrete diffusion models have primarily focused on steering the reverse process, either by influencing token logits or by..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-09-28
featured: false
gradient: grad-4
---

arXiv:2609.30456v1 Announce Type: new Abstract: Reward maximization alignment methods for discrete diffusion models have primarily focused on steering the reverse process, either by influencing token logits or by selecting favorable sequences at intermediate steps. These approaches largely treat inference as a unidirectional process, lacking mechanisms for revisiting undesirable token selections. We introduce Spectral Feedback, an algorithm that selects edit-positions in a feedback loop, allowing the model to iteratively correct its own generations. This approach leverages the mask structure of discrete diffusion models by re-masking and re-sampling tokens, analogous to image editing methods that reintroduce noisy latents and re-run the reverse process. While prior alignment methods focus on what token labels to assign to maximize a target reward, we instead treat which tokens to revisit as the central alignment problem. Selecting edit-positions is challenging because edit effects are interdependent: the impact of modifying one token depends on which others are edited simultaneously. We define an edit-set as a set of token positions to re-mask and re-sample. Motivated by prior work on sparse interactions in biological systems, we find empirically that edit-set value functions for protein inverse folding admit sparse Fourier representations. This structure enables Spectral Feedback to efficiently learn and optimize the value functions for edit-position selection. Spectral Feedback is model-agnostic and can be applied to pretrained, test-time aligned, and fine-tuned diffusion models. For all of these models, the algorithm improves alignment performance without modifying the underlying generative process. Applied to inverse folding with a protein stability reward oracle, i

---

*Source: [arXiv](https://arxiv.org/abs/2609.30456)*
