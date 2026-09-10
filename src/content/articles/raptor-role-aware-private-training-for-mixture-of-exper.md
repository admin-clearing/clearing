---
title: "RAPTOR: Role-Aware Private Training for Mixture-of-Experts"
dek: "arXiv:2609.05770v1 Announce Type: new Abstract: Differentially private (DP) fine-tuning methods treat sparse Mixture-of-Experts (MoE) models as a single dense block, ignoring that shared layers see all data while..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-09-10
featured: false
gradient: grad-4
---

arXiv:2609.05770v1 Announce Type: new Abstract: Differentially private (DP) fine-tuning methods treat sparse Mixture-of-Experts (MoE) models as a single dense block, ignoring that shared layers see all data while experts only see routed records. We identify and formally characterize three resulting failure modes: global clipping suppresses expert gradients, batch-level normalization dilutes sparse expert updates, and fixed privacy noise degrades signal-to-noise ratio on low-load experts. We introduce RAPTOR - a Role-Aware Private Training framework, which alternates shared and expert optimization and targets each failure directly, using expert-specific clipping and noise together with a public expected-owner denominator and a count-independent update schedule that avoids conditioning on private, realized expert counts. We prove the resulting mechanism satisfies $(\varepsilon,\delta)$-DP: because each record is assigned to exactly one owner expert, per-expert mechanisms within a layer compose in parallel, so updating all $E$ experts costs no more, in privacy terms, than updating one, with shared and expert streams composing sequentially across training. We further derive a bias-variance decomposition of the public-denominator estimator showing its bias grows predictably with routing imbalance, yielding a privacy-free rule for selecting which layer to protect from routing entropy measured on a small public corpus. Experiments on Switch Transformer and OLMoE fine-tuning across GLUE tasks, and on DeepSeek-VL2-Tiny, show consistent gains over standard DP baselines across several privacy levels ($\varepsilon$), with the largest margins typically at the tightest budgets. Code and models are publicly available: https://github.com/leduckhai/RAPTOR

---

*Source: [arXiv](https://arxiv.org/abs/2609.05770)*
