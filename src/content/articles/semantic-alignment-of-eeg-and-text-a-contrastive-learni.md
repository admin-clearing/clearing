---
title: "Semantic Alignment of EEG and Text: A Contrastive Learning Framework for Decoding Imagined Speech"
dek: "arXiv:2610.20766v1 Announce Type: new Abstract: Imagined speech decoding from EEG offers a promising route toward naturalistic brain-computer interfaces. Traditional closed-set classifiers treat semantic categories as..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-16
featured: false
gradient: grad-4
---

arXiv:2610.20766v1 Announce Type: new Abstract: Imagined speech decoding from EEG offers a promising route toward naturalistic brain-computer interfaces. Traditional closed-set classifiers treat semantic categories as independent labels and do not explicitly exploit relationships among linguistic intents, limiting output flexibility. We adapt a multimodal contrastive learning framework to imagined speech, aligning EEG trials with language representations in the embedding space of a frozen pretrained text encoder. An EEG encoder is trained with a composite objective combining semantically reweighted EEG-sentence alignment and text-prototype-based class discrimination, encouraging semantic structure while preserving separability among 39 intent categories. We evaluate the approach on the Chisco imagined speech dataset across five subjects, reporting Top-k accuracy, macro-F1, and balanced pairwise matching accuracy (2v2). We also investigate maximum EEG-text cosine similarity (MaxCosine) as an intrinsic indicator of decoding reliability and probe semantic structure beyond category labels using five evaluation-time semantic axes and a qualitative Semantic Gallery Probe (SGP) with previously unseen candidate sentences. The contrastive framework achieved decoding performance comparable to a task-optimized closed-set classifier while mapping EEG into a frozen language embedding space. MaxCosine identified subsets of held-out trials with higher Top-1 and Top-5 accuracy across subjects. Evaluation-time semantic axes showed mean agreement above the 50% chance reference across all five dimensions, and the SGP qualitatively illustrated direct comparison with unseen candidate sentences. Together, these findings suggest that EEG-language alignment can retain comparable fixed-intent d

---

*Source: [arXiv](https://arxiv.org/abs/2610.20766)*
