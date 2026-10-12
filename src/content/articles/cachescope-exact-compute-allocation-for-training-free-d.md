---
title: "CacheScope: Exact-Compute Allocation for Training-Free Diffusion Acceleration"
dek: "arXiv:2610.12530v1 Announce Type: new Abstract: Training-free feature reuse accelerates diffusion transformer inference by replacing full denoising computation at selected steps with cached approximations. Existing..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-10-12
featured: false
gradient: grad-4
---

arXiv:2610.12530v1 Announce Type: new Abstract: Training-free feature reuse accelerates diffusion transformer inference by replacing full denoising computation at selected steps with cached approximations. Existing methods mainly improve the reconstruction of skipped features, but we find that once a stable first-order reconstructor is used, increasing reconstruction complexity brings limited gains, whereas the placement of exact-computation steps has a much larger effect on fidelity. More importantly, absolute shallow-probe variation is jointly affected by input-trajectory displacement and network response strength, and therefore does not directly reflect cache risk. We address this confounding by normalizing probe-output variation with the corresponding input displacement, yielding a directional gain per unit trajectory movement. Based on this signal, we propose CacheScope, which identifies high-risk reuse steps online and selectively falls back to full denoising computation while leaving the underlying cache reconstructor unchanged. CacheScope requires no additional training, gradients, auxiliary networks, or prompt-specific offline schedule optimization. Across FLUX.1-dev, Wan2.1-T2V-1.3B, and Open-Sora 1.2, CacheScope achieves up to 3.57x acceleration and reduces median LPIPS by up to 70.1% over the strongest probe-based baseline.

---

*Source: [arXiv](https://arxiv.org/abs/2610.12530)*
