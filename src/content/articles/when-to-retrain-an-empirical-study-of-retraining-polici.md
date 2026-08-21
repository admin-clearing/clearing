---
title: "When to Retrain: An Empirical Study of Retraining Policies for Streaming ML Under Concept Drift, Budget, and Latency Con"
dek: "arXiv:2608.19488v1 Announce Type: new Abstract: Production machine learning systems degrade under concept drift, yet practitioners have little principled guidance on when to retrain. Retraining is costly, retraining..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-21
featured: false
gradient: grad-4
---

arXiv:2608.19488v1 Announce Type: new Abstract: Production machine learning systems degrade under concept drift, yet practitioners have little principled guidance on when to retrain. Retraining is costly, retraining budgets are finite, and a retrained model does not take effect instantly: training and deployment latency leave a stale model serving predictions while the data continues to move. We present a controlled empirical study of three practical model-refresh policies (periodic retraining, error-threshold triggering, and statistical drift-triggered retraining with ADWIN) against a no-retrain baseline, evaluated under a unified system model that makes retraining budgets and training-plus-deployment latency explicit. Across 3,933 experiment runs spanning three drift regimes, three budget levels, up to five latency levels, three datasets, and two learning modes, we find that the single most consequential design decision is not the retraining policy but whether the deployed model learns incrementally. With per-sample incremental updates, and for the linear online learner with immediate labels studied here, no policy differs from the no-retrain baseline by a practically significant margin in any of 54 paired comparisons, even at extreme latency. Without incremental updates, policy choice separates outcomes by 15-55 percentage points of post-drift accuracy, and simple periodic retraining significantly outperforms both reactive policies under abrupt and gradual drift, while reactive policies retain an advantage only under recurring drift. We document systematic failure modes of reactive policies and a latency-budget queueing interaction that silently halves effective retraining budgets, and release the full simulator, dataset pipelines, and per-run artifacts for reproduci

---

*Source: [arXiv](https://arxiv.org/abs/2608.19488)*
