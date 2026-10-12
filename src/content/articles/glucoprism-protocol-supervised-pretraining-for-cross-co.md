---
title: "GlucoPRISM: Protocol-Supervised Pretraining for Cross-Cohort Glucose Transfer"
dek: "arXiv:2610.12528v1 Announce Type: new Abstract: Continuous glucose monitoring (CGM) foundation models encode each day as one vector that mixes who the person is, what happened that day and how the sensor measured it, so..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-12
featured: false
gradient: grad-4
---

arXiv:2610.12528v1 Announce Type: new Abstract: Continuous glucose monitoring (CGM) foundation models encode each day as one vector that mixes who the person is, what happened that day and how the sensor measured it, so measurement differences travel with the representation into new cohorts. We ask whether pretraining can place the measurement component that harms transfer in known coordinates, so that deployment drops them with a fixed projection and no target data. GlucoPRISM supervises a GlucoFM backbone with response contracts, rules for how each part of the representation should change when only the day or only the sensor changes: a 64-dimensional Trait band should change with neither, a 48-dimensional State band only across days, and a 16-dimensional Sensor band should track the device. Synthetic sensor views calibrated on paired Dexcom and Libre recordings, different-day pairs and glucose-summary targets supply this supervision without clinical labels. Across twelve cross-cohort directions, dropping the Sensor band from the same frozen encoder raises mean transfer AUROC from 68.75 to 73.57, against 69.3 for GlucoFM. The gain has two parts. Into CGMacros, the one target cohort recorded with two sensor types, filtering adds 11 to 19 points, and this holds when the generator is recalibrated on half of the participants and scored on the other half. On the other eight directions filtering is neutral and the encoder itself exceeds GlucoFM by 3.5 points. The device remains linearly decodable after filtering, so the filter removes a device-related component that harms transfer rather than all measurement information. The retained bands improve window AUROC on thirteen of fourteen public task--cohort cells (Holm-adjusted p=0.031) and correlation on fourteen of fifteen cli

---

*Source: [arXiv](https://arxiv.org/abs/2610.12528)*
