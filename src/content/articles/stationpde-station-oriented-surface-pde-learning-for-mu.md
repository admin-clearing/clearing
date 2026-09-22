---
title: "StationPDE: Station-Oriented Surface PDE Learning for Multi-Station Multivariate Weather Forecasting"
dek: "arXiv:2609.22123v1 Announce Type: new Abstract: Multi-station multivariate weather forecasting aims to forecast future weather variables at multiple weather stations from historical surface observations. Existing..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-09-22
featured: false
gradient: grad-4
---

arXiv:2609.22123v1 Announce Type: new Abstract: Multi-station multivariate weather forecasting aims to forecast future weather variables at multiple weather stations from historical surface observations. Existing station forecasting models learn statistical dependencies among discrete stations, but lack explicit physical evolution. Meanwhile, PDE-based weather models provide interpretable physical dynamics, yet require continuous fields and upper-air variables unavailable in surface station data. To bridge this gap, we propose StationPDE, a station-oriented surface PDE learning model. StationPDE constructs a terrain-aware continuous surface field from discrete station observations and decomposes its physical evolution into surface wind transport and upper-air inference. Surface wind transport explicitly evolves observable weather variables, while upper-air inference uses learnable horizontal diffusion to approximate the missing influence of unavailable upper-air variables. A parallel data-driven diffusion branch captures complementary motion patterns, and an adaptive router integrates the two forecasts for station-level multivariate forecasting. Experiments on Weather2K and MeteoNet show that StationPDE consistently outperforms state-of-the-art baselines, reducing MSE by about $9.6\%$ on average compared with the strongest baseline. Code and implementation details are available at https://github.com/hnu-vis/StationPDE.

---

*Source: [arXiv](https://arxiv.org/abs/2609.22123)*
