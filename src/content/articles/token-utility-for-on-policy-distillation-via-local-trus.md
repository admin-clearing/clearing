---
title: "Token Utility for On-Policy Distillation via Local Trust-Region Optimization"
dek: "arXiv:2610.18883v1 Announce Type: new Abstract: Token-selection methods for on-policy distillation (OPD) prioritize student-visited positions using diverse signals, including uncertainty, teacher-student disagreement,..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-15
featured: false
gradient: grad-4
---

arXiv:2610.18883v1 Announce Type: new Abstract: Token-selection methods for on-policy distillation (OPD) prioritize student-visited positions using diverse signals, including uncertainty, teacher-student disagreement, and mismatch direction. We instead derive token importance from the distillation objective itself: how much can each position's loss decrease under an equal local KL budget on the student's predictive distribution? The answer is the utility $s_t=g_t^\top F_t^\dagger g_t$, where $g_t$ is the logit gradient and $F_t$ is the categorical Fisher matrix. For reverse-KL it equals the student-weighted variance of the student-teacher log-probability ratio, and for forward-KL it equals the Pearson $\chi^2$ divergence, so the appropriate utility follows from the choice of objective. On shared training checkpoints, several independently motivated criteria, including student entropy, KL disagreement, and TIP, concentrate their importance on nearly the same positions as the derived utility at a 50\% selection fraction, while diverging at stricter fractions and for direction-specific criteria. We instantiate the utility as Fisher Utility Weighting (FUW), a continuous, mean-normalized token weighting. Across seven mathematical reasoning benchmarks and three Qwen3 student-teacher pairs, FUW improves over matched uniform OPD under both reverse-KL (1.35-4.0 macro points) and forward-KL (1.08-2.71 macro points), and is competitive with existing selective methods using a single closed-form score derived from the training objective.

---

*Source: [arXiv](https://arxiv.org/abs/2610.18883)*
