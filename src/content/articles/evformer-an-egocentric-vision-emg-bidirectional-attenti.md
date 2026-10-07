---
title: "EVFormer: An Egocentric Vision-EMG Bidirectional Attention Model for Bimanual Hand Pose Estimation"
dek: "arXiv:2610.06970v1 Announce Type: new Abstract: Egocentric bimanual hand pose estimation is important for virtual interaction, wearable control, and rehabilitation, but visual observations are often degraded by..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-07
featured: false
gradient: grad-4
---

arXiv:2610.06970v1 Announce Type: new Abstract: Egocentric bimanual hand pose estimation is important for virtual interaction, wearable control, and rehabilitation, but visual observations are often degraded by self-occlusion, hand-hand contact, and object manipulation. We propose EVFormer, a multimodal framework that combines the current RGB frame with the preceding 200 ms of bilateral wrist surface electromyography (sEMG) to estimate 44 finger and wrist joint angles. EVFormer separately encodes visual spatial features and sEMG temporal features, enables cross-modal information exchange through sequential bidirectional cross-attention, and integrates the two modalities using feature-wise gated fusion. We evaluate EVFormer in a single-participant feasibility study using one synchronized public EgoEMG recording with chronologically separated training, validation, and test splits. On 296 test samples, EVFormer achieves a mean absolute error of 11.482 degrees, compared with 13.228-13.610 degrees for vision-only, sEMG-only, late-fusion, and training-mean baselines. This corresponds to relative error reductions of 13.20% compared with the vision-only model and 14.23% compared with late fusion. EVFormer also achieves the lowest error in four of the five evaluated gesture classes. These results provide preliminary evidence that feature-level interaction between egocentric vision and sEMG can improve bimanual hand pose estimation. Further evaluation across participants, recording sessions, sensor placements, and real-world interaction conditions is required to establish the generalizability of the approach.

---

*Source: [arXiv](https://arxiv.org/abs/2610.06970)*
