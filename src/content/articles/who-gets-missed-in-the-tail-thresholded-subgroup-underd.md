---
title: "Who Gets Missed in the Tail? Thresholded Subgroup Underdiagnosis in Long-Tailed Chest X-ray Classification"
dek: "arXiv:2607.07717v1 Announce Type: new Abstract: In chest X-ray (CXR) classification, acceptable ranking performance can still leave rare-positive patients below threshold, especially within subgroups. We study this..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-07-10
featured: false
gradient: grad-4
---

arXiv:2607.07717v1 Announce Type: new Abstract: In chest X-ray (CXR) classification, acceptable ranking performance can still leave rare-positive patients below threshold, especially within subgroups. We study this pre-deployment fairness problem as an audit question: after a long-tailed multi-label CXR model is converted from scores into decisions, who is missed? Across VinDr-CXR and MIMIC-CXR/CXR-LT, we use a diagnostic ladder to separate class-level long-tail losses, subgroup-aware weighting, group robustness, and threshold selection. On VinDr-CXR, group-tail weighting followed by tail-aware thresholding reduces tail FNR from 0.665 to 0.269, sex worst-group FNR from 0.705 to 0.157, and age worst-group FNR from 0.822 to 0.133, while macro-mAP increases from 0.611 to 0.635. On MIMIC-CXR/CXR-LT, the same score-to-threshold comparison reduces tail FNR from 0.866 to 0.741 and lowers worst-group FNR across sex, age, race, and insurance; residual missed-positive rates nevertheless remain high. Paired bootstrap contrasts on VinDr support the thresholded FNR reductions, and GroupDRO reference runs indicate that aggregate group robustness alone does not remove rare subgroup misses in this setting. The study supports a narrow audit claim: rare-label fairness in CXR depends jointly on the finding, subgroup, and operating threshold, not on label frequency or ranking metrics alone.

---

*Source: [arXiv](https://arxiv.org/abs/2607.07717)*
