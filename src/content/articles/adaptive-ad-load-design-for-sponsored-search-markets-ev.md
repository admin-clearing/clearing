---
title: "Adaptive Ad Load Design for Sponsored Search Markets: Evidence, Theory, and Deployment"
dek: "arXiv:2607.14418v1 Announce Type: new Abstract: Ad-load design is a central supply-side decision in sponsored search: more sponsored slots can raise revenue, but may crowd out organic results and degrade user outcomes...."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-18
featured: false
gradient: grad-4
---

arXiv:2607.14418v1 Announce Type: new Abstract: Ad-load design is a central supply-side decision in sponsored search: more sponsored slots can raise revenue, but may crowd out organic results and degrade user outcomes. We study this trade-off using a large-scale randomized field experiment on an Android app store, where over five million users are exposed to one through six sponsored slots. Increasing ad load raises revenue by up to 43%, but reduces total search conversions by up to 5% and daily engagement by up to 2.2%. These average effects mask substantial heterogeneity: additional slots generate large revenue gains for high-ad-conversion queries, but little or negative marginal revenue for low-conversion queries. The trade-off also shifts within query as advertiser composition changes, such as brand-advertiser presence. Motivated by these findings, we design and deploy a novel adaptive algorithm -- exploration-augmented Locally Adaptive Ad Load (e-LAAL). e-LAAL combines LAAL, a model-free query-level decision rule that updates ad-load recommendations using recent outcomes, with static exploration arms that maintain support and provide fixed-policy counterfactual benchmarks. We provide a finite-time dynamic-regret guarantee for the e-LAAL architecture. In a platform-level production deployment serving 22.3 million users and 77.6 million searches, e-LAAL improves the empirical revenue--conversion trade-off relative to deployed static benchmarks and outperforms uniform and historical query-dependent static benchmarks.

---

*Source: [arXiv](https://arxiv.org/abs/2607.14418)*
