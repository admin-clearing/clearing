---
title: "HARN: Hierarchical Associative Resonance Network for Event-Driven Multi-Timeframe Forecasting"
dek: "arXiv:2609.26822v1 Announce Type: new Abstract: Financial time series evolve across multiple temporal resolutions, challenging forecasting systems to incorporate newly available information without repeatedly..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-24
featured: false
gradient: grad-4
---

arXiv:2609.26822v1 Announce Type: new Abstract: Financial time series evolve across multiple temporal resolutions, challenging forecasting systems to incorporate newly available information without repeatedly recomputing unchanged representations. We introduce HARN, a Hierarchical Associative Resonance Network for event-driven multi-timeframe forecasting. HARN maintains persistent representations across temporal levels and updates each level only when its corresponding completed bar becomes available. The architecture combines causal multi-scale temporal encoding, gated associative memory, cross-level resonance, and hierarchical evidence aggregation, with forecasting performed in basis-point space and reconstructed to the original price scale. We evaluate HARN on four assets spanning equity, foreign exchange, and commodity markets using multiple random seeds and component ablations. HARN achieves competitive reconstructed-price forecasting errors against single-timeframe PatchTST and TimeXer baselines, while ablations reveal the effects of removing individual components across assets and timeframes. A code-level audit further examines consistency between the implementation and the defined event-driven causal protocol. The results position HARN as a persistent multi-timeframe forecasting framework rather than evidence of universal predictive superiority.

---

*Source: [arXiv](https://arxiv.org/abs/2609.26822)*
