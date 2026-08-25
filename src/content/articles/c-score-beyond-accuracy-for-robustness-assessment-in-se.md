---
title: "C-Score: Beyond Accuracy for Robustness Assessment in Semi-Supervised Learning under Open-World Unlabeled Contamination"
dek: "arXiv:2608.20667v1 Announce Type: new Abstract: Pseudo-label-based semi-supervised learning has achieved strong performance due to its simplicity and scalability. However, it is typically developed under a closed-world..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-25
featured: false
gradient: grad-4
---

arXiv:2608.20667v1 Announce Type: new Abstract: Pseudo-label-based semi-supervised learning has achieved strong performance due to its simplicity and scalability. However, it is typically developed under a closed-world assumption that unlabeled data are drawn from the same distribution as labeled data. In practical deployment, unlabeled data are often collected from open environments and may contain OOD samples. Under such contamination, OOD samples may still receive high-confidence predictions and be incorporated into training as if they were valid target examples. This creates an important evaluation problem: clean in-distribution test accuracy may appear stable even when the internal learning dynamics of SSL have already deteriorated. To address this issue, we study hidden collapse in pseudo-label-based SSL under open-world unlabeled contamination from a diagnostic evaluation perspective. We present C-Score, a compact framework that evaluates training behavior in three complementary spaces: prediction, feature representation, and optimization. C-Score includes PLE and CCI for unlabeled prediction behavior, Sem-Drift for deviation from labeled semantic anchors, and Grad-Align for the compatibility between labeled and unlabeled optimization. Experiments on CIFAR-10 and CIFAR-100 with multiple OOD sources, varying contamination ratios, and four pseudo-label-based SSL algorithms show that C-Score metrics reveal hidden degradation that clean accuracy alone fails to detect: under SVHN contamination, CCI rises over 280% while best-accuracy remains within 3% of the uncontaminated baseline; near-OOD sources (CIFAR-100, STL-10) cause up to 14.9% accuracy collapse (FlexMatch, r=0.5). The results suggest that clean accuracy alone is insufficient for evaluating SSL robustness in 

---

*Source: [arXiv](https://arxiv.org/abs/2608.20667)*
