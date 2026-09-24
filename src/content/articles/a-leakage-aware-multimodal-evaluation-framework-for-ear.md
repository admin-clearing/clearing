---
title: "A Leakage-Aware Multimodal Evaluation Framework for Early Intraoperative Acute Kidney Injury Prediction"
dek: "arXiv:2609.26848v1 Announce Type: new Abstract: Postoperative acute kidney injury (AKI) after major non-cardiac surgery carries substantial morbidity, yet early intraoperative risk stratification remains difficult. In..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-24
featured: false
gradient: grad-4
---

arXiv:2609.26848v1 Announce Type: new Abstract: Postoperative acute kidney injury (AKI) after major non-cardiac surgery carries substantial morbidity, yet early intraoperative risk stratification remains difficult. In this retrospective cohort study, we propose SynerT, a waveform-only hybrid temporal backbone that combines a causal dilated TCN with a hierarchy of dilated recurrent layers to encode early intraoperative physiologic trajectories for AKI risk prediction. Building on SynerT, we further design two model variants that extend the backbone with structured clinical context: SynerT-MM, a late-fusion multimodal extension that integrates hemodynamic burden summaries and preoperative covariates, and SynerTStack, a leakage-safe stacked ensemble that combines cross-validated predictions from SynerT-MM with strong tabular baselines at the meta-learning stage. All models are evaluated under a strict leakage-aware framework on VitalDB, a high-fidelity perioperative database, with prediction restricted to information available within the first 60 intraoperative minutes. Among 2,413 waveform-usable cases (180 AKI-positive; 7.46% prevalence), SynerT fell well below strong structured-data baselines, demonstrating that waveform-only temporal modeling is insufficient under strict early constraints. SynerTMM recovered discrimination by incorporating hemodynamic burden summaries and preoperative covariates, and SynerT-Stack achieved the best overall performance across AUROC, AUPRC, and F1-max. Cross-fitted Platt recalibration substantially corrected calibration defects in both multimodal variants, and decision-curve analysis confirmed the recalibrated stacked model delivered the strongest net clinical benefit across low-to-intermediate thresholds.

---

*Source: [arXiv](https://arxiv.org/abs/2609.26848)*
