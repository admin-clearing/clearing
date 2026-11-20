---
title: "When Lower Harm Misleads: Auditing Concept Corrections"
dek: "arXiv:2611.22084v1 Announce Type: new Abstract: An expert who corrects a concept prediction, such as a BI-RADS descriptor in breast ultrasound, expects the diagnosis to improve. Objectives that reduce the harm of such..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-11-19
featured: false
gradient: grad-4
---

arXiv:2611.22084v1 Announce Type: new Abstract: An expert who corrects a concept prediction, such as a BI-RADS descriptor in breast ultrasound, expects the diagnosis to improve. Objectives that reduce the harm of such corrections are judged by harm and accuracy, yet harm also falls when a model responds less to every correction or starts from a worse uncorrected prediction, the reference for harm. We propose a correction audit, a reproducible evaluation protocol that separates these explanations: it splits each correction into harm and useful gain on identical events, separates the starting prediction from the correction response, and compares objectives with amplitude baselines matched in source harm. On three breast-ultrasound sources, worst-case correction training, evaluated from the mean-case model's start, lowers harm but gives up more useful gain in all 21 source comparisons pooled over six seeds, raising the corrected negative log-likelihood (NLL); from the same start, selecting between the objectives by harm picks the less helpful model on all three sources. On CUB, a monotonic harm penalty at its reported weight lowers path-level harm in all 80 concept sets while raising the NLL in all 80, almost entirely before any correction. At a fixed start, rescaling both responses to the same source harm reproduces the penalty's mean harm, useful gain and NLL on single-concept corrections within a prespecified margin of 0.0005 nat, although the two responses point in different directions. Lower harm therefore signals better corrections only when it is read together with useful gain, absolute risk and the start it is measured from.

---

*Source: [arXiv](https://arxiv.org/abs/2611.22084)*
