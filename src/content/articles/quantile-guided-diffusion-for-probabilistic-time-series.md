---
title: "Quantile-Guided Diffusion for Probabilistic Time-Series Forecasting"
dek: "arXiv:2610.20739v1 Announce Type: new Abstract: Quantile forecasts summarize uncertainty at each future time step, while diffusion forecasters represent it through sampled future trajectories. We study how predicted..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-16
featured: false
gradient: grad-4
---

arXiv:2610.20739v1 Announce Type: new Abstract: Quantile forecasts summarize uncertainty at each future time step, while diffusion forecasters represent it through sampled future trajectories. We study how predicted quantiles can serve as distributional controls for diffusion forecasting. Specifically, we investigate how the mechanism of quantile integration affects its effectiveness in guiding a pretrained diffusion forecaster. We find that residual control throughout the denoising network yields the most consistent improvements. We instantiate this approach as Control-TS, which learns a quantile-control pathway while keeping the pretrained backbone frozen. Across eight benchmarks, Control-TS consistently improves the backbone's CRPS, achieves competitive performance against state-of-the-art forecasting models, and retains its gains in capacity-matched comparisons. Further analyses examine how these gains depend on quantile granularity, predictor choice, and forecast quality. Finally, we introduce the Conditional Linear Predictive Score (CLPS), which complements distributional metrics by evaluating the downstream forecasting utility of generated futures. Together, these findings support predicted quantiles as an effective interface between explicit uncertainty estimates and diffusion-based trajectory generation.

---

*Source: [arXiv](https://arxiv.org/abs/2610.20739)*
