---
title: "Hybrid Ensemble Learning for EEG-Based Epileptic Seizure Forecasting"
dek: "arXiv:2609.35876v1 Announce Type: new Abstract: Epileptic seizure forecasting aims to provide actionable warnings before seizure onset, yet patient-independent generalization and false-alarm control remain major..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-30
featured: false
gradient: grad-4
---

arXiv:2609.35876v1 Announce Type: new Abstract: Epileptic seizure forecasting aims to provide actionable warnings before seizure onset, yet patient-independent generalization and false-alarm control remain major challenges. We propose a calibrated hybrid ensemble for EEG-based seizure forecasting that combines five deep learning models and three classical machine learning models through a logistic regression stacking meta-learner. The proposed pipeline integrates signal preprocessing, handcrafted feature extraction, class-imbalance handling, probability calibration, and clinically motivated post-processing. We evaluate the framework on CHB-MIT using strict Leave-One-Patient-Out (LOPO) cross-validation, with threshold and post-processing parameters selected only on held-out meta data. On the filtered cohort, excluding patients with anomalous preictal rates below 1\% or above 15\%, the model achieves 74.2\% seizure-level sensitivity at 1.24 false alarms per hour, with an average warning time of 16.9 minutes. A test-tuned oracle constrained to the target false-alarm budget achieves 60.9\% sensitivity at 0.951 false alarms per hour, highlighting the importance of reporting sensitivity together with realized false-alarm rates. Our code is available at: https://github.com/DanaMason/IEEE-CARS-Hybrid-Ensemble-Learning-for-EEG-Based-Epileptic-Seizure-Forecasting

---

*Source: [arXiv](https://arxiv.org/abs/2609.35876)*
