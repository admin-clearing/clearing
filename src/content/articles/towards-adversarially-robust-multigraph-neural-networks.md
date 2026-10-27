---
title: "Towards Adversarially Robust Multigraph Neural Networks for Financial Crime Analysis"
dek: "arXiv:2610.31718v1 Announce Type: new Abstract: Financial transaction networks are naturally represented as multigraphs, where repeated transactions between the same pair of accounts are modeled as distinct edges...."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-27
featured: false
gradient: grad-4
---

arXiv:2610.31718v1 Announce Type: new Abstract: Financial transaction networks are naturally represented as multigraphs, where repeated transactions between the same pair of accounts are modeled as distinct edges. Recently proposed multigraph neural network architectures leverage this structure explicitly to achieve a strong performance on anti-money laundering (AML) tasks. However, their robustness to adversaries that manipulate transaction structures to evade detection remains largely unexplored. We present the first scalable framework for structural attacks and adversarial training of multigraph neural networks using node-edge incidence matrices, adapting projected gradient descent and projected randomized block coordinate descent methods to optimize structural perturbations over such matrices. We further introduce a cycle-based regularizer that penalizes changes in the global counts of directed 2- and 3-cycles, providing a structural measure of attack plausibility. Experiments on synthetic pattern-detection and realistic AML datasets show that our learned attacks substantially outperform non-learnable perturbation baselines in reducing detection performance (PR-AUC), while adversarial training consistently improves robustness against these attacks. These results demonstrate that multigraph neural networks are vulnerable to learned structural attacks and that adversarial training provides an effective defense. Our code is available at https://github.com/denheijmans/robust_multignn.

---

*Source: [arXiv](https://arxiv.org/abs/2610.31718)*
