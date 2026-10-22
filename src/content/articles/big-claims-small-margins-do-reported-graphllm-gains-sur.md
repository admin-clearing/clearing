---
title: "Big Claims, Small Margins: Do Reported GraphLLM Gains Survive Simple Baselines?"
dek: "arXiv:2610.28714v1 Announce Type: new Abstract: LLM-based methods for node classification on text-attributed graphs (TAGs) routinely report state-of-the-art accuracy. We ask how these results compare with inexpensive..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-22
featured: false
gradient: grad-4
---

arXiv:2610.28714v1 Announce Type: new Abstract: LLM-based methods for node classification on text-attributed graphs (TAGs) routinely report state-of-the-art accuracy. We ask how these results compare with inexpensive baselines run on the same splits. On the splits of three recent studies, we tune four baseline representatives with validation-only selection and compare them with the highest mean that each paper reports for an LLM-based method in the matched setting. Correct & Smooth on TF-IDF features trails this reference by a median of 2.3 percentage points, and an MLP on frozen e5-large-v2 embeddings by 2.8 points. Correct & Smooth is within 3 points of the reference or better on 15 of 24 tasks, but the reference is significantly higher on 12 of 22 testable tasks, so several reported gains remain substantial. Reading released code next to the papers, we also document evaluation risks: selection of hyperparameters or checkpoints on the test set, labels of test-pool nodes used in training, baseline numbers reused without disclosure, and a text-label misalignment in a released Cora loader. Reports of the same method on the same split also differ by up to 12.5 points across papers whose configurations are not documented to match.

---

*Source: [arXiv](https://arxiv.org/abs/2610.28714)*
