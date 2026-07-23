---
title: "Building Fast, Evaluating Slow: Pipeline Choices Dominate Autointerpretability Score Variance"
dek: "arXiv:2607.19386v1 Announce Type: new Abstract: Cross-paper comparison of sparse autoencoder (SAE) interpretability often relies on autointerpretability scores. In this evaluation pipeline, a language model (LM)..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-23
featured: false
gradient: grad-4
---

arXiv:2607.19386v1 Announce Type: new Abstract: Cross-paper comparison of sparse autoencoder (SAE) interpretability often relies on autointerpretability scores. In this evaluation pipeline, a language model (LM) explains each feature, and another LM scores the explanation. For these comparisons to be meaningful, scores must reflect stable properties of the features rather than confounding aspects of the evaluation pipeline. Through systematic experiments across four metrics (simulation, detection, fuzzing, purity), two models (Pythia-160M, Apertus-8B), and four axes of methodological variation, we show that this assumption does not hold. Specifically, we find that R1) methodological variance collectively exceeds architectural variance across all metrics and tested models; R2) each metric exhibits a distinct instability profile, with detection being the most stable and fuzzing unreliable across all conditions; R3) top-k feature rankings do not stay consistent across corpus and draw conditions, masking per-feature instability behind stable mean scores; a failure that cannot be detected by monitoring explanation similarity alone. These findings suggest that cross-paper comparisons based on autointerpretability scores may reflect pipeline differences rather than architectural differences, with implications for the ongoing debate on SAE utility. More broadly, unreliable evaluation slows progress in interpretability research at a time when reliable tools for understanding AI systems are needed. To support evaluation, we contribute a variance decomposition approach, a Stability Check, and a Minimum Reporting Checklist.

---

*Source: [arXiv](https://arxiv.org/abs/2607.19386)*
