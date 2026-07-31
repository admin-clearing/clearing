---
title: "Rethinking EEG-Based Disease Diagnosis: Decoupling Instance Representation Learning from Subject-Level Supervision"
dek: "arXiv:2607.27274v1 Announce Type: new Abstract: EEG-based disease diagnosis requires one prediction per subject, yet common pipelines segment recordings into short instances, inherit the subject label for every..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-31
featured: false
gradient: grad-4
---

arXiv:2607.27274v1 Announce Type: new Abstract: EEG-based disease diagnosis requires one prediction per subject, yet common pipelines segment recordings into short instances, inherit the subject label for every instance, and train instance-level classifiers. This assumes that all instances provide equally reliable diagnostic evidence. Multiple instance learning (MIL) avoids inherited labels by treating each subject as a bag. However, EEG datasets contain far fewer subjects than instances, which can limit the quality of the representations learned by end-to-end MIL. We propose BridgeMIL, a two-stage framework that decouples instance representation learning from subject-level supervision. Stage 1 pretrains the encoder without inherited instance labels by aligning temporally nearby windows and independently sampled within-subject sub-bags. Variance and covariance regularization prevent collapse and reduce redundancy without negative pairs. Stage 2 transfers the encoder to an attention-based MIL aggregator, applies supervision only to subject predictions, and limits representation drift through feature retention. Across three EEG disease datasets and five representative backbones, BridgeMIL attains the highest mean accuracy in 14 of 15 dataset-backbone settings and an overall mean accuracy of 76.57%, 4.28 percentage points higher than the strongest baseline. Further analyses reveal substantial variation in inherited-label reliability across instances, greater performance sensitivity to subject scarcity than to instance scarcity, and a more structured representation space with distinct subject-wise clusters and improved separation between diagnostic classes. Together, these findings underscore the importance of aligning supervision with the subject-level prediction objective

---

*Source: [arXiv](https://arxiv.org/abs/2607.27274)*
