---
title: "Learning Calibrated and Samplable Predictive Distributions of Surface-Ocean $\\Delta p$CO$_2$ Using Tabular Diffusion Mod"
dek: "arXiv:2611.21769v1 Announce Type: new Abstract: The ocean absorbs almost 30% of anthropogenic CO$_2$ emissions, but quantifying this sink requires estimating surface-ocean CO$_2$ from observations that are sparse in..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-11-18
featured: false
gradient: grad-4
---

arXiv:2611.21769v1 Announce Type: new Abstract: The ocean absorbs almost 30% of anthropogenic CO$_2$ emissions, but quantifying this sink requires estimating surface-ocean CO$_2$ from observations that are sparse in space and time. Most existing machine-learning estimates of this field are deterministic, giving a single value per grid point, with uncertainty approximated post hoc via residuals, ensembles, or prescribed distributions. We instead learn a conditional predictive distribution for each observation: using Treeffuser, a conditional diffusion model with gradient-boosted-tree score functions, we estimate the full predictive distribution of $\Delta p$CO$_2$ (the sea-air $p$CO$_2$ difference) from 13 environmental, spatial, and temporal predictors. On a held-out SOCAT test set, Treeffuser attains the lowest continuous ranked probability score among the uncertainty-quantification methods evaluated (8.229 $\mu$atm) and the coverage closest to the nominal 68% / 95% levels (0.686 / 0.930), while retaining point-prediction skill comparable to a deterministic XGBoost baseline (RMSE 18.4 vs. 17.7 $\mu$atm; $R^2$ 0.77 vs. 0.79). These results show that conditional diffusion can provide well-calibrated, observation-level uncertainties while largely preserving point-prediction skill. Because Treeffuser is generative, its samples can support probabilistic analyses of $\Delta p$CO$_2$; extending this to spatially coherent field reconstruction will require modeling dependence across grid cells and evaluation on spatially held-out data.

---

*Source: [arXiv](https://arxiv.org/abs/2611.21769)*
