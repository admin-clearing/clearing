---
title: "Unmasking Removal-Budget Confounding: A Matched Operating-Point Evaluation Framework for Adaptive Data Cleaning"
dek: "arXiv:2608.06511v1 Announce Type: new Abstract: Adaptive data-cleaning methods replace manual filtering thresholds with data-driven partitions. However, changing the partition granularity, the number of groups used to..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-10
featured: false
gradient: grad-4
---

arXiv:2608.06511v1 Announce Type: new Abstract: Adaptive data-cleaning methods replace manual filtering thresholds with data-driven partitions. However, changing the partition granularity, the number of groups used to segment samples by estimated corruption risk, can implicitly shift the decision boundary and alter the overall number of removed samples. This creates a bias known as removal-budget confounding, where apparent gains in metrics like precision or false-positive rate reflect a smaller removal budget rather than superior corruption discrimination. To address this evaluation bias, we introduce an operating-point-aware evaluation framework that evaluates methods using matched-budget and matched-recall controls alongside threshold-independent metrics (AUROC and AUPRC). We test this framework on a multi-cue adaptive cleaner redesign featuring a reweighted learning-difficulty cue, an auxiliary Euclidean-distance cue, and increased partition granularity intended to isolate clean-but-difficult samples. While naive evaluations (assessing configurations at their own induced operating points) suggest substantial performance improvements for the redesign, these gains disappear once operating points are equalized. False-positive decomposition reveals that clean-but-difficult samples primarily drive error counts at low corruption rates, become threshold-dependent at moderate corruption, and contribute negligibly under severe corruption. Experiments on CIFAR-10 and ImageNet-100 demonstrate that most performance differences observed in naive evaluation shrink or vanish at low-to-moderate corruption when operating points are matched. True ranking advantages only remain in specific low-prevalence settings and in high-recall regions under severe corruption. These findings highl

---

*Source: [arXiv](https://arxiv.org/abs/2608.06511)*
