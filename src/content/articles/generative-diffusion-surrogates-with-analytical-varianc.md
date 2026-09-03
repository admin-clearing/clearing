---
title: "Generative Diffusion Surrogates with Analytical Variance Schedule"
dek: "arXiv:2609.01705v1 Announce Type: new Abstract: Stochastic transport describes physical systems in which an initially structured distribution spreads under unresolved forcing, scattering, or heterogeneous media. Useful..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-09-03
featured: false
gradient: grad-4
---

arXiv:2609.01705v1 Announce Type: new Abstract: Stochastic transport describes physical systems in which an initially structured distribution spreads under unresolved forcing, scattering, or heterogeneous media. Useful surrogates for such systems should be probabilistic, time-resolved, and able to represent non-Gaussian distributional structure. Generative diffusion models, which corrupt data with Gaussian noise and learn a reverse flow back to structured states, have these properties. Their noise schedules, however, are usually chosen heuristically: image and audio generation---the canonical use cases---provide no physical clock. In transport, by contrast, the variance, or mean-square displacement, is often known from macroscopic theory or empirical scaling even when the full distribution is not. Here we prescribe the forward noising rate as the time derivative of this variance, turning generative time into a calibrated transport clock. The variance path is enforced by construction, while the learned score field represents how non-Gaussian structure inherited from entrance data is smoothed along that path, requiring no intermediate-time physical transport data. For ballistic-to-diffusive transport in turbulent plasmas, the surrogate matches test-particle distributions, reproduces the laboratory-measured variance scale, and tracks the simulated kurtosis evolution without schedule tuning, enabling calibrated emulation and likelihood-based inference.

---

*Source: [arXiv](https://arxiv.org/abs/2609.01705)*
