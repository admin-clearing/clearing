---
title: "Energy-Conditioned Noise Schedule and Whitening for Spectral Diffusion"
dek: "arXiv:2610.07206v1 Announce Type: new Abstract: This paper introduces an energy-adaptive noise scheduling and whitening strategy for transform-domain diffusion models. Existing spectral diffusion methods account for the..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-08
featured: false
gradient: grad-4
---

arXiv:2610.07206v1 Announce Type: new Abstract: This paper introduces an energy-adaptive noise scheduling and whitening strategy for transform-domain diffusion models. Existing spectral diffusion methods account for the non-uniform statistics of transform coefficients through coefficient scaling, normalization, or frequency prioritization, while the forward diffusion noise schedule remains largely independent of the underlying spectral-energy distribution. We investigate whether the temporal evolution of the forward diffusion process should also follow the spectral organization of natural images. The proposed formulation combines global spectral whitening with energy-conditioned noise allocation that jointly modulates the injected noise according to the energy of individual transform coefficients and an image-dependent energy path over diffusion time. The resulting forward process preserves Gaussian transitions with closed-form marginals and remains compatible with standard DDPM and DDIM procedures without modifying the diffusion architecture. Experiments on CIFAR-10 demonstrate the contribution of the proposed energy-conditioned noise schedule and spectral whitening, reducing Fr\'echet Inception Distance from 142.48 for a compact DCTdiff U-Net variant to 100.45.

---

*Source: [arXiv](https://arxiv.org/abs/2610.07206)*
