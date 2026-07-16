---
title: "TSSM: Triaxial State Space Model for Global Station Weather Forecasting with Temporal-Variable-Historical Modeling"
dek: "arXiv:2607.13101v1 Announce Type: new Abstract: Global Station Weather Forecasting (GSWF) is pivotal for localized and extreme weather prediction over key regions. Despite efforts to exploit look-back windows, existing..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-16
featured: false
gradient: grad-4
---

arXiv:2607.13101v1 Announce Type: new Abstract: Global Station Weather Forecasting (GSWF) is pivotal for localized and extreme weather prediction over key regions. Despite efforts to exploit look-back windows, existing methods show limited accuracy gains and struggle with extreme events and error accumulation. These limitations stem from overreliance on short-term patterns, which are insufficient to capture chaotic weather dynamics, especially under partial observations. To address this problem, we propose a novel Triaxial State Space Model (TSSM) with a history-enhanced Temporal-VariableHistorical paradigm, which incorporates period-aligned historical weather data to compensate for long-term, large-scale periodic, and full-window weather patterns beyond the temporal lookback window. Specifically, TSSM stacks historical samples into period-aligned batches, where forecasting is causally supported by historical and current observations. Temporal, variable, and historical scanning are designed to capture axial temporal dependencies, variable correlations, and historical evolution. This structure is hierarchically shared to model seasonal to extreme events while alleviating misalignment across historical patterns. TSSM achieves SOTA performance on Weather-5K, the largest station weather dataset to date, with 10% and 61% gains in accuracy and extreme event metrics, and obtains 95% best or second-best results on human-involved datasets. Its advantages are more pronounced in long-horizon and iterative forecasting, reaching a 37.5% gain at 240h and up to 103.5% under a 48h times 5 iterative setting. Moreover, TSSM retains > 90% performance under up to 80% missing observations, compared with < 43% for baselines, demonstrating robustness and practical potential for reliable GSWF 

---

*Source: [arXiv](https://arxiv.org/abs/2607.13101)*
