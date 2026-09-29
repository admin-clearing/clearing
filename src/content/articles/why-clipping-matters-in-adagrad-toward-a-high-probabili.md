---
title: "Why Clipping Matters in AdaGrad? Toward a High-Probability Theory under Generalized Smoothness"
dek: "arXiv:2609.30276v1 Announce Type: new Abstract: We analyze the original same-step coordinate-wise AdaGrad under generalized smoothness and heavy-tailed noise with bounded variance. In this setting, local curvature may..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-29
featured: false
gradient: grad-4
---

arXiv:2609.30276v1 Announce Type: new Abstract: We analyze the original same-step coordinate-wise AdaGrad under generalized smoothness and heavy-tailed noise with bounded variance. In this setting, local curvature may grow sub-quadratically with the gradient norm, and stochastic gradients are assumed to have only bounded conditional second moments. We show that unclipped AdaGrad can become \emph{anisotropically miscalibrated}: under heavy-tailed noise, the adaptive denominator can learn the geometry of rare noise shocks rather than the local curvature of the objective, leading to a persistent directional distortion that blocks finite-horizon Euclidean progress. We then prove that clipping repairs this failure mode. Our main result is a finite-horizon high-probability guarantee for the original non-lagged AdaGrad update, yielding $\frac1T\sum_{t=0}^{T-1}\|\nabla f(x_t)\|^2=\mathcal{O}\left(\frac{d\big(\sqrt{\log T} + \log \frac{1}{\delta}\big)}{\sqrt{T}}\right),$ and hence $\widetilde{\mathcal O}(\varepsilon^{-2})$ complexity. This shows that, for AdaGrad under heavy-tailed noise, clipping is a structural stabilizer of the adaptive geometry rather than merely a robustness heuristic.

---

*Source: [arXiv](https://arxiv.org/abs/2609.30276)*
