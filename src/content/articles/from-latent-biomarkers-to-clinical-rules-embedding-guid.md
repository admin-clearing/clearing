---
title: "From Latent Biomarkers to Clinical Rules: Embedding-Guided Rule Mining and Attribution-Based Translation for Interpretab"
dek: "arXiv:2609.22155v1 Announce Type: new Abstract: Clinical decision support tools are most useful when accurate predictions are accompanied by understandable explanations. Rule-based models provide transparency, but rules..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-22
featured: false
gradient: grad-4
---

arXiv:2609.22155v1 Announce Type: new Abstract: Clinical decision support tools are most useful when accurate predictions are accompanied by understandable explanations. Rule-based models provide transparency, but rules derived directly from raw clinical measurements may miss patterns arising from interactions between multiple variables. We present a four-step pipeline that mines decision rules in the latent space of an FT-Transformer and translates them back into measurable clinical features. Embedding dimensions that consistently separate patient groups are treated as latent biomarkers, rules are mined using small decision trees, and selected rules are translated using gradient-input saliency and CLS attention attribution. We evaluate the framework on six public clinical and population health datasets at four embedding dimensions. Translated rules outperformed raw-feature rules in five of six datasets, with mean AUROC gains ranging from 0.04 to 0.23. On the heart disease dataset, embedding-space rules reached 0.98 AUROC, but translation reduced this to 0.72, showing that high-performing latent rules cannot always be represented by simple raw-feature conditions. These results show that latent-space rule discovery can uncover predictive patterns while translating them into clinically measurable features that can be evaluated by clinicians.

---

*Source: [arXiv](https://arxiv.org/abs/2609.22155)*
