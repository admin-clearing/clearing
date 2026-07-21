---
title: "Diffusion-corrected Autoregressive Fourier Neural Operator for Droplet Evolution Prediction"
dek: "arXiv:2607.16238v1 Announce Type: new Abstract: Predicting droplet evolution in material jetting, or Inkjet Printing (IJP), is essential for maintaining printing quality. However, long-horizon forecasts remain..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-07-21
featured: false
gradient: grad-4
---

arXiv:2607.16238v1 Announce Type: new Abstract: Predicting droplet evolution in material jetting, or Inkjet Printing (IJP), is essential for maintaining printing quality. However, long-horizon forecasts remain challenging due to error accumulation and the complex coupling of process variables. In this work, we introduce the Diffusion-corrected Auto-Regressive Fourier Neural Operator (DiffARFNO), a two-stage framework that combines an autoregressive Fourier-MIONet with a conditional Denoising Diffusion Implicit Model (DDIM) corrector. Fourier-MIONet is trained as a coarse predictor and deployed autoregressively for long-horizon forecasting. In the second stage, a DDIM-based conditional corrector refines the coarse prediction within each sliding window through efficient iterative denoising. By combining coarse predictions from Fourier-MIONet with a DDIM corrector that restores fine details, DiffARFNO aims to provide high-fidelity predictions for long-horizon forecasts. Extensive experiments on droplet datasets from ANSYS Fluent demonstrate that DiffARFNO significantly outperforms existing state-of-the-art models.

---

*Source: [arXiv](https://arxiv.org/abs/2607.16238)*
