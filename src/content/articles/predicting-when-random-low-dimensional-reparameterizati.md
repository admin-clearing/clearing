---
title: "Predicting When Random Low-Dimensional Reparameterizations Train Neural Networks"
dek: "arXiv:2608.12597v1 Announce Type: new Abstract: Neural networks can often be trained or fine-tuned through random low-dimensional reparameterization, where a small latent vector is mapped into a full parameter update by..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-14
featured: false
gradient: grad-4
---

arXiv:2608.12597v1 Announce Type: new Abstract: Neural networks can often be trained or fine-tuned through random low-dimensional reparameterization, where a small latent vector is mapped into a full parameter update by a frozen random map. This raises a practical question: how large must the latent search space be to reach a low-loss region? We first express the known accessibility transition in an equivalent conic form, centered for compact convex targets at the statistical dimension of the polar cone. Our main theoretical contribution is an orientation-resolved quadratic master formula that predicts the random-slice residual from both the curvature spectrum and the reference-to-solution displacement profile. It yields a self-consistent isotropic-orientation predictor and, in a conservative radius-only specialization, recovers the earlier Gaussian-width quadratic bound. Building on this analysis, we introduce Random Mapping Networks (RaMaN), which instantiate the predicted latent dimension using structured Hadamard or seed-regenerated Gaussian maps. These constructions avoid the O(dP) storage of dense random maps and reduce optimizer-state memory from O(P) to O(d). We also develop matrix-free curvature approximations and sweep-free dimension selection. Across controlled quadratic and neural-curvature experiments, the orientation-resolved predictor closely tracks measured transition locations and outperforms orientation-agnostic approximations when displacement direction matters. End-to-end experiments further show sharp, protocol-dependent training transitions across image and language models.

---

*Source: [arXiv](https://arxiv.org/abs/2608.12597)*
