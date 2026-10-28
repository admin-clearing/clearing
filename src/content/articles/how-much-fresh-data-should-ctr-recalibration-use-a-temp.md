---
title: "How Much Fresh Data Should CTR Recalibration Use? A Temporal Evaluation of Post-hoc Calibration"
dek: "arXiv:2610.33168v1 Announce Type: new Abstract: Offline evaluation of click-through rate (CTR) models still defaults to random splits, although deployed models score future traffic and downstream systems consume..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-28
featured: false
gradient: grad-4
---

arXiv:2610.33168v1 Announce Type: new Abstract: Offline evaluation of click-through rate (CTR) models still defaults to random splits, although deployed models score future traffic and downstream systems consume calibrated probabilities. On Avazu (40.4M impressions) we train logistic regression (LR), DeepFM, and DCN-v2 under two rolling temporal origins and a random split, three seeds per arm, and recalibrate each test day with Platt scaling and isotonic regression fitted on the preceding hours. At origin 1's nearest test day, random splits report LR's expected calibration error (ECE) at 55-62% of the temporal value in every seed (the deep models' ratio is seed-unstable), and no model's ECE is monotone in temporal distance. With a 6-hour fitting slice, recalibration removes up to 61% of ECE in badly miscalibrated cells but increases it in about a third of applications (14-17 of 48 across seeds). On fixed evaluation sets, a 12-hour slice cuts harm from 13-17 to 3-5 of 36 applications, and 24 hours raises it again. The 12-hour slice subsampled to the 1-hour slice's size (5% of the impressions; 20-25x faster to fit) recovers 88% of the full slice's gain, so impression count alone does not explain it. A slice-ECE gate shows no benefit out-of-origin, and in a simulated auction recalibration moves profit by only about -0.21% to +0.26%. Offline protocols should measure calibration temporally, over multiple origins and seeds; in this data, recalibration fitted on a wide time span beat the freshest few hours, which other logs must confirm.

---

*Source: [arXiv](https://arxiv.org/abs/2610.33168)*
