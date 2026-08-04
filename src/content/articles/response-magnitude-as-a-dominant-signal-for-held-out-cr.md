---
title: "Response Magnitude as a Dominant Signal for Held-Out CRISPRi Perturbation Effect Prediction"
dek: "arXiv:2608.00152v1 Announce Type: new Abstract: Predicting the magnitude of a CRISPRi perturbation's transcriptomic effect on held-out target genes is an important open problem in single-cell biology. Recent work has..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-04
featured: false
gradient: grad-4
---

arXiv:2608.00152v1 Announce Type: new Abstract: Predicting the magnitude of a CRISPRi perturbation's transcriptomic effect on held-out target genes is an important open problem in single-cell biology. Recent work has documented that simple baselines often match or exceed deep perturbation predictors on related protocols. We study this phenomenon on the Virtual Cell Challenge (VCC) benchmark under a strict held-out target-gene split, identify the specific low-dimensional signal that drives the gap, and characterize how it transfers across cell types. The target is the log Anderson-Darling distance from non-targeting controls, which is strongly predictable from four deterministic scalar functions of the 2,000-dimensional input. A deep MLP encoder with direct access to the full input collapses toward the marginal training mean, and standard remedies do not close the gap. A linear regression on the four magnitude scalars alone exceeds the strongest x-only classical model, while a Random Forest on the input plus the four scalars substantially outperforms our deep proof-of-concept encoder. Two pre-specified controls attribute the magnitude gain to per-row alignment rather than added dimensionality. Under zero-shot transfer to two external CRISPRi screens evaluated against a target-gene endpoint rebuilt from single-cell data, magnitude-only predictors transfer positively whereas expression-only predictors are negative or unresolved. Exposing magnitude to the deep encoder improves transfer over its expression-only counterpart, yet the encoder does not outperform a four-scalar linear regression on the same features. We also find that the Anderson-Darling column distributed with these screens measures transcriptome-wide response breadth rather than target-gene effect strength, so

---

*Source: [arXiv](https://arxiv.org/abs/2608.00152)*
