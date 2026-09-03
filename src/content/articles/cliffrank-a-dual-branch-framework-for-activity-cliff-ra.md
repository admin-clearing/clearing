---
title: "CliffRank: A Dual-Branch Framework for Activity-Cliff Ranking Prediction"
dek: "arXiv:2609.01673v1 Announce Type: new Abstract: Activity-cliff ranking remains difficult because local structural changes can cause large activity differences, while high-quality data that resolve the underlying..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-03
featured: false
gradient: grad-4
---

arXiv:2609.01673v1 Announce Type: new Abstract: Activity-cliff ranking remains difficult because local structural changes can cause large activity differences, while high-quality data that resolve the underlying mechanisms remain limited. To use available activity labels more effectively, we combine absolute-activity regression with ranking-consistency learning. CliffRank trains two parallel predictors with mean squared error, a thresholded listwise loss, and Pairwise Preference Consistency (PPC), which aligns relative ordering in the preference-probability space. On three antimicrobial peptide datasets, CliffRank with ESM2-t12 achieved the highest mean Spearman correlation of 0.5393 and mean Recall@50 of 21.4, although the leading method varied across individual datasets. On three small-molecule datasets, CliffRank with PNA, where PPC was activated after 120 epochs, achieved the highest mean Spearman correlation of 0.6890, while its mean Recall@50 of 30.4 matched that of ACANet-PNA. The PPC results also define its practical limits. Asymmetric initialization improved the MolCLR-GIN averages but did not improve every target. For PNA without pretrained weights, delayed PPC improved selected metrics, but no schedule was best for both mean Spearman correlation and mean Recall@50. Future work should evaluate more targets and antimicrobial peptide systems, develop adaptive PPC schedules, and incorporate protein or membrane context when available.

---

*Source: [arXiv](https://arxiv.org/abs/2609.01673)*
