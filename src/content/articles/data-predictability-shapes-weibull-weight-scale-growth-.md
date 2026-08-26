---
title: "Data Predictability Shapes Weibull Weight-Scale Growth in Transformer Training"
dek: "arXiv:2608.23573v1 Announce Type: new Abstract: A trained transformer's weight magnitudes can be summarized by a two-parameter Weibull distribution whose shape $k \\approx 1.2$ is stable across layers and models, so the..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-26
featured: false
gradient: grad-4
---

arXiv:2608.23573v1 Announce Type: new Abstract: A trained transformer's weight magnitudes can be summarized by a two-parameter Weibull distribution whose shape $k \approx 1.2$ is stable across layers and models, so the scale $\lambda$ carries most training-induced movement. What corpus property sets how much $\lambda$ grows? Using the bigram conditional entropy $D = H(\text{next} \mid \text{prev})$, a training-free statistic computed before training, we find across controlled corruption families a learning-rate-conditioned law, $\lambda^2 - \lambda_0^2 = C_0(\eta) + C_1(\eta)(H_r - D)^{0.59}$, where $H_r$ is a matched-budget shuffle baseline. The convex exponent is inherited from an independently measured data-side saturation relation rather than fitted directly to the growth curve. After removing the two per-$\eta$ coefficients, 23 runs spanning an order of magnitude in learning rate collapse onto $(H_r - D)^{0.59}$ with unit slope ($R^2 = 0.941$; direct per-$\eta$ fits are weaker, $R^2 \approx 0.82$). Because $D$ is computed before training, the law is a forward predictor: an end-to-end self-validation recovers held-out within-family weight growth with 5.7% relative error. The readout holds at model and per-layer resolutions and across two tested architectures, with the functional form preserved and only the coefficients changing. It also marks its boundary: cross-corpus prediction over-predicts code, implicating redundancy as a second axis of a broader $\Phi(D,R,A,H)$ data-to-weight framework.

---

*Source: [arXiv](https://arxiv.org/abs/2608.23573)*
