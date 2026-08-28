---
title: "EduRiskX: A Neuro-Symbolic Framework with F-Logic Reasoning for Early Academic Risk Prediction"
dek: "arXiv:2608.26107v1 Announce Type: new Abstract: Predicting students' academic risk in online education is crucial for enabling timely interventions that can improve retention and learning outcomes. However, existing..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-28
featured: false
gradient: grad-4
---

arXiv:2608.26107v1 Announce Type: new Abstract: Predicting students' academic risk in online education is crucial for enabling timely interventions that can improve retention and learning outcomes. However, existing models often suffer from limited early detection capability and insufficient interpretability, leading to a "black-box" trust crisis that hinders their adoption in real-world pedagogical settings. To address these challenges, we propose EduRiskX, a neuro-symbolic framework that integrates a temporal Transformer-based predictor with F-Logic symbolic reasoning. The neural component models longitudinal student activity sequences using temporal attention, class-weighted loss, and dynamic weekly truncation. Acting as a data-driven expert system, an F-Logic rule base -- grounded in established educational theories (Engagement Theory and Student Integration Model) to mimic the diagnostic logic of human educators -- is constructed exclusively from the training data. The neural risk probability and the symbolic confidence score are then combined through a logistic regression-based fusion mechanism that learns the relative contribution of each signal. Experiments on the Open University Learning Analytics Dataset (OULAD) using a strict 80/10/10 student-level split show that EduRiskX achieves an accuracy of 0.900 and an F1-score of 0.894 at the end of the semester (Week 38), with an average early detection week of 9.32 and a detection rate of 94.30 percent. Compared with state-of-the-art time-series models (PatchTST, iTransformer) and common deep learning baselines (LSTM, CNN), EduRiskX yields improved recall and earlier risk identification under identical conditions. Beyond predictive performance, the F-Logic module provides structured rule-based explanations linking p

---

*Source: [arXiv](https://arxiv.org/abs/2608.26107)*
