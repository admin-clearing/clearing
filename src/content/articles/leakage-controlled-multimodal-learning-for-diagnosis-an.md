---
title: "Leakage-Controlled Multimodal Learning for Diagnosis and Progression Prediction in Alzheimer's Disease Research"
dek: "arXiv:2610.10648v1 Announce Type: new Abstract: Alzheimer's disease prediction involves irregular visits, heterogeneous measurements and incomplete modalities. This study presents a multimodal multitask framework..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-09
featured: false
gradient: grad-4
---

arXiv:2610.10648v1 Announce Type: new Abstract: Alzheimer's disease prediction involves irregular visits, heterogeneous measurements and incomplete modalities. This study presents a multimodal multitask framework combining an adapted SFCN MRI encoder, four causal clinical Transformers, shared fusion and task-specific ODE-GRU dynamics. Fine-tuning and LoRA adapt the final two MRI blocks. Task-DRO balances task losses, while Group-CVaR targets cohort and comorbidity strata. Branch-specific input controls, subject-grouped partitions and empirical causality checks support longitudinal evaluation. Across 2,649 subjects and 17,317 visits from ADNI, OASIS-2 and MIRIAD, internal validation yields diagnosis, stage-1 progression and first-stage-1-visit progression AUROCs of 0.935 +/- 0.002, 0.884 +/- 0.003 and 0.870 +/- 0.005, respectively (mean +/- SD across three seeds). Corresponding hybrid AUROCs are 0.951, 0.909 and 0.896. Next-visit MMSE mean absolute error (MAE) is 1.61 points; worst-stratum diagnosis AUROC is 0.827 +/- 0.008. Sampled ADNI explanations identify task-specific input dependence. OASIS-3 external validation yields network and hybrid diagnosis AUROCs of 0.763 and 0.767, hybrid next-visit progression AUROC of 0.764, diagnosis calibration error decreasing from 0.197 to 0.052, and next-visit MMSE MAE of 0.86. Seed-42 paired ablations of six components yield pooled diagnosis and progression AUROC differences between -0.004 and +0.004; removing clinical encoder inputs lowers diagnosis AUROC by 0.272. The framework integrates longitudinal prediction, missing-modality handling, auxiliary comorbidity modelling and subgroup evaluation within a common pipeline.

---

*Source: [arXiv](https://arxiv.org/abs/2610.10648)*
