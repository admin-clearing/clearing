---
title: "Individual Fairness via Local Predictive Consistency"
dek: "arXiv:2610.33285v1 Announce Type: new Abstract: Individual fairness in machine learning requires that similar individuals receive similar predictions. Most existing definitions are pairwise in nature, imposing a..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-28
featured: false
gradient: grad-4
---

arXiv:2610.33285v1 Announce Type: new Abstract: Individual fairness in machine learning requires that similar individuals receive similar predictions. Most existing definitions are pairwise in nature, imposing a Lipschitz constraint that must hold either globally across all pairs of data instances or locally within specified neighborhoods. In practice, however, such pairwise constraints may be overly restrictive and may not directly identify which individuals receive locally inconsistent predictions. We study local predictive consistency as a node-level relaxation of pairwise individual fairness, where each prediction is compared with a similarity-weighted average of predictions in its local neighborhood. This yields an interpretable node-level fairness score and a corresponding regularized learning approach based on local residuals. Since graph-based individual fairness depends critically on the underlying similarity structure, we make the construction of the neighborhood graph explicit and discuss threshold selection through graph-coverage diagnostics. Our approach applies to binary classification, regression, and time-to-event prediction. We further compare this formulation with pairwise constraint-based approaches and analyze the resulting fairness--performance trade-offs.

---

*Source: [arXiv](https://arxiv.org/abs/2610.33285)*
