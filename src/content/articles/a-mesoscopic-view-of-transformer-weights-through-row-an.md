---
title: "A Mesoscopic View of Transformer Weights Through Row and Column Scale Fields"
dek: "arXiv:2609.35852v1 Announce Type: new Abstract: Pooled statistics of Transformer weights obscure how magnitude is distributed across functional channels, while individual weights are too numerous to compare directly. We..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-30
featured: false
gradient: grad-4
---

arXiv:2609.35852v1 Announce Type: new Abstract: Pooled statistics of Transformer weights obscure how magnitude is distributed across functional channels, while individual weights are too numerous to compare directly. We study the mesoscopic level between them: row and column scale fields, the median-centred log-RMS profiles of a weight matrix over its channels, which together with a global scale and a full balanced core represent the matrix exactly. Across public Pythia checkpoints at four sizes and controlled runs from three initialization families, balancing reveals similar measured core magnitude profiles. A mixture bridge, with its form fixed before the analysis and its coefficients fitted, predicts the pooled-shape departure from field width on held-out runs and data arms of the controlled grid. The indexed fields retain further structure: they align across projections that share a functional channel, and query/key profiles follow reassigned RoPE frequencies rather than fixed matrix coordinates. Training trajectories show early field formation followed by component-dependent broadening or recession. Extending the channel-based analysis to AdamW's second moment reveals related functional organization in its log-space row and column factors. Finally, edits of a frozen checkpoint separate reciprocal scale balance, which preserves the forward computation, from relative channel gain: flattening the gain increases in-distribution loss while preserving matrix norms and the balanced core. Row and column scale fields thus connect pooled magnitude statistics to channel organization and provide coordinates for tracking and testing trained weight structure.

---

*Source: [arXiv](https://arxiv.org/abs/2609.35852)*
