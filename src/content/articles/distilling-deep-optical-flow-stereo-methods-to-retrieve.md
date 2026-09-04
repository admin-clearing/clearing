---
title: "Distilling deep optical flow stereo methods to retrieve dense three-dimensional wind fields"
dek: "arXiv:2609.03100v1 Announce Type: new Abstract: Geostationary atmospheric motion vectors (AMVs) provide the dense horizontal wind vectors (u,v) and heights ingested into data assimilation systems. Traditional AMVs track..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-09-04
featured: false
gradient: grad-4
---

arXiv:2609.03100v1 Announce Type: new Abstract: Geostationary atmospheric motion vectors (AMVs) provide the dense horizontal wind vectors (u,v) and heights ingested into data assimilation systems. Traditional AMVs track features using window-based cross-correlation and estimate heights via infrared brightness temperatures paired with numerical weather prediction (NWP) background states, creating a circular dependency that yields inaccurate heights, high computational cost, and sparse retrievals. Stereo winds from GEO-GEO and GEO-LEO geometrically resolve heights from parallax shifts across different poses, eliminating NWP dependence and improving accuracy, but they remain computationally heavy with limited coverage. In this work, we replace window-based tracking in stereo matching with deep optical flow for efficient, improved retrieval. Fine-tuning balances a self-supervised geometric residual loss with supervised radiosonde reconstruction. To eliminate multi-satellite overlap requirements, we distill the stereo teacher into a single-satellite student model. Chi-square and height uncertainties from the teacher are emulated by the student for quality assurance. The student generates winds across full-disk GEO imagery globally. Validation compares stereo and student models against radiosondes, operational AMVs, ERA5 reanalysis, and EarthCARE cloud profiles. Results through triple collocation show that stereo winds improve performance beyond operational AMVs for water vapor bands (6.2, 6.9, and 7.3 {\mu}m), wit degradation in the long-wave infrared (11.2 {\mu}m) band.

---

*Source: [arXiv](https://arxiv.org/abs/2609.03100)*
