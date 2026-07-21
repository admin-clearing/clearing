---
title: "BACON: Budgeted Human Calibration for Modeling and Evaluation with Multiple AI Judges"
dek: "arXiv:2607.16239v1 Announce Type: new Abstract: AI judges offer a scalable, low-cost alternative to human evaluation, but their outputs can be biased relative to human preferences and highly item-dependent, varying..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-21
featured: false
gradient: grad-4
---

arXiv:2607.16239v1 Announce Type: new Abstract: AI judges offer a scalable, low-cost alternative to human evaluation, but their outputs can be biased relative to human preferences and highly item-dependent, varying across judges, tasks, and domains. When uncalibrated AI evaluations are used for model ranking, item scoring, or population-level quality reporting, these biases can directly distort downstream decisions. We propose BACON, a four-stage pipeline that combines budgeted human calibration with multiple AI-judge outputs to produce more accurate annotations. BACON constructs full-coverage auxiliary features for every item, including multi-judge scores, token-level uncertainty statistics, and contextual embeddings. It then collects human labels for a small sampled subset and trains a cross-fitted outcome model to generate calibrated item-level surrogate predictions. These predictions support two use cases: population-level estimation of summary metrics, such as means or quantiles, using an augmented estimating-equation estimator with valid confidence intervals; and individual-level surrogate scoring for item ranking and annotation. BACON treats AI judges as auxiliary measurements rather than ground truth: human labels provide the calibration anchor, while AI-derived signals improve efficiency. Across diverse tasks, domains, and labeling budgets, BACON improves predictive accuracy and ranking consistency, and reduces bias and variance relative to raw AI outputs and purely human-label-based methods. These results show that BACON offers a practical, statistically grounded framework for scalable evaluation with limited human annotation.

---

*Source: [arXiv](https://arxiv.org/abs/2607.16239)*
