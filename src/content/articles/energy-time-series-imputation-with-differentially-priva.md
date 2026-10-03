---
title: "Energy Time-Series Imputation with Differentially Private Diffusion Models via Clipping-Aware Objective Conditioning"
dek: "arXiv:2610.00209v1 Announce Type: new Abstract: Reliable recovery of missing measurements is important for monitoring and analysis in energy time-series systems, where fine-grained measurements may contain sensitive..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-03
featured: false
gradient: grad-4
---

arXiv:2610.00209v1 Announce Type: new Abstract: Reliable recovery of missing measurements is important for monitoring and analysis in energy time-series systems, where fine-grained measurements may contain sensitive temporal information. Diffusion models trained with differentially private stochastic gradient descent (DP-SGD) provide a promising framework for privacy-sensitive energy time-series imputation. Under cosine diffusion schedules, late timesteps correspond to low signal-to-noise ratio (SNR) conditions, where standard $\varepsilon$-prediction can induce large pre-clipping gradients. Such gradients are more likely to be clipped, reducing the retained optimization signal. The artificial intelligence (AI) contribution lies in formulating this objective--clipping interaction as an objective optimization problem under fixed-threshold DP-SGD and developing timestep-aware objective conditioning for diffusion-based energy time-series imputation. The method adopts $v$-prediction to mitigate late-timestep gradient amplification, uses static loss weighting as a uniform-scaling control, and introduces diffusion-schedule-aware dynamic weighting for stronger attenuation before clipping. For the engineering application, we evaluate the method on five real-world energy time-series datasets across random point missingness, contiguous block missingness, persistent outages, and multiple missing-data severities. Under matched DP-SGD settings, the proposed method consistently improves imputation utility over the $\varepsilon$-prediction baseline. Gradient diagnostics reveal lower upper-tail pre-clipping gradient norms, reduced clipping fractions, and stronger attenuation at late low-SNR timesteps, supporting the effectiveness of clipping-aware objective conditioning for energy time

---

*Source: [arXiv](https://arxiv.org/abs/2610.00209)*
