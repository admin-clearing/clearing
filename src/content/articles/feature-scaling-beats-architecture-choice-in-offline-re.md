---
title: "Feature Scaling Beats Architecture Choice in Offline Respiratory Screening for Low-Resource Clinics"
dek: "arXiv:2610.33030v1 Announce Type: new Abstract: Deep models are the usual choice for respiratory sound classification, but in clinics without GPUs or connectivity that choice carries a cost. We compare classical and..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-28
featured: false
gradient: grad-4
---

arXiv:2610.33030v1 Announce Type: new Abstract: Deep models are the usual choice for respiratory sound classification, but in clinics without GPUs or connectivity that choice carries a cost. We compare classical and deep classifiers on a five-class respiratory-sound corpus of 1,211 clips (asthma, COPD, pneumonia, Bronchial, healthy) from 201 patient groups, with a 3.86:1 class imbalance, using pre-registered patient-grouped cross-validation (25 runs per configuration). An SVM over 30 summary features (MFCC, ZCR and RMS statistics) reaches macro recall 0.78 and 0.71 recall on the rarest class. A 1.13M-parameter convolutional recurrent network over log-Mel spectrograms reaches 0.75 to 0.77, and no difference between model families is resolved. The largest single effect we measure is a preprocessing effect rather than an architectural one. Standardizing the SVM's features, a routine step for RBF kernels, moves its macro recall from 0.51 to 0.78, a 27-point swing wider than any gap between model families here. Augmentation did not help: SMOTE, waveform augmentation and SpecAugment have no measurable effect. Latency does not separate the models (51 to 74 ms per clip on a CPU-only laptop), but the classical models avoid a 449 MB PyTorch runtime. Clip-level splits, which let a patient's recordings fall on both sides, inflate macro recall by 7.5 to 9.8 points. Recording source is strongly tied to label (Cramer's V = 0.65 between native sampling rate and class), and in an exploratory analysis clips recorded at a class's minority rate are mostly assigned to classes typical of that rate; we state this confound as the paper's main limitation.

---

*Source: [arXiv](https://arxiv.org/abs/2610.33030)*
