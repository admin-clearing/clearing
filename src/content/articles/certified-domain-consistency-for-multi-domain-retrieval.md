---
title: "Certified Domain Consistency for Multi-Domain Retrieval: Label-Free Per-Domain Contamination Control with Conformal Risk"
dek: "arXiv:2607.14157v1 Announce Type: new Abstract: Retrieval over corpora that mix several domains often returns relevant but wrong-domain evidence that ranking metrics miss and that conformal risk control bounds only..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-07-17
featured: false
gradient: grad-4
---

arXiv:2607.14157v1 Announce Type: new Abstract: Retrieval over corpora that mix several domains often returns relevant but wrong-domain evidence that ranking metrics miss and that conformal risk control bounds only marginally, under-covering the worst domains. This work introduces C3R, a drop-in control layer that, from an inferred domain posterior and no query-time label, certifies a per-domain contamination budget where feasible and otherwise abstains rather than silently violating; on the hardest domains it guarantees a reduction, not a tight bound. The core is a two-split scheme built on risk-controlling prediction sets, whose finite-sample transfer bound crosses from the inferred to the true domain with fully estimable slack, supports heterogeneous budgets, and inverts for deployment. Population validity rests on this bound and a controlled simulation; across a thousand resampled calibrations the certificate never violates (a stability result) while marginal control violates the most-contaminated domain in every draw, and soft demotion retains more recall than the strongest calibrated cascade at equal certified contamination. The method replicates across open testbeds including an independent one from public federal regulations, and an LLM-judged downstream probe indicates wrong-authority grounding rises with contamination and falls under control. The layer is frozen-stack and reranker-agnostic.

---

*Source: [arXiv](https://arxiv.org/abs/2607.14157)*
