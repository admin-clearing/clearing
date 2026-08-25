---
title: "RiskTraf: Risk-Extrapolated Residual Learning for Multi-Variate Traffic Flow Prediction"
dek: "arXiv:2608.20656v1 Announce Type: new Abstract: Traffic sensors commonly record flow, speed, and occupancy, but standard traffic flow forecasting benchmarks and models rarely exploit all three raw measurements reliably...."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-25
featured: false
gradient: grad-4
---

arXiv:2608.20656v1 Announce Type: new Abstract: Traffic sensors commonly record flow, speed, and occupancy, but standard traffic flow forecasting benchmarks and models rarely exploit all three raw measurements reliably. Although speed and occupancy provide sensor-native traffic-state information beyond flow alone, existing releases often omit these variables, replace them with proxies, or contain logically inconsistent records. Moreover, direct empirical risk minimization over three-variable inputs may exploit regime-dependent shortcuts, as the relationships among flow, speed, and occupancy vary substantially between free-flow and congested states. We introduce \textbf{PEMSB-3V}, a public benchmark suite that preserves raw flow, speed, and occupancy measurements from PeMS detectors for flow prediction. We also propose \textbf{RiskTraf}, a model-agnostic risk-extrapolated residual plug-in. For each trained spatio-temporal backbone, RiskTraf freezes the selected checkpoint and learns a lightweight zero-start residual head from historical speed and occupancy. The residual head constructs ordered traffic-risk environments and optimizes horizon-wise flow corrections with a risk extrapolation objective, thereby mitigating regime-specific shortcut correlations without modifying the backbone. Extensive experiments demonstrate that RiskTraf consistently improves diverse forecasting backbones and outperforms debiasing and distribution-shift adaptation methods. Our code and benchmark are available at https://github.com/Guangyu4/RiskTraf.

---

*Source: [arXiv](https://arxiv.org/abs/2608.20656)*
