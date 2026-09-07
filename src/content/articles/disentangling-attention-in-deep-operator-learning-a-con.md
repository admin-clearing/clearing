---
title: "Disentangling Attention in Deep Operator Learning: A Controlled Study of Data-Driven and Physics-Informed Architectures"
dek: "arXiv:2609.04407v1 Announce Type: new Abstract: Deep neural operators learn mappings between input functions and complete PDE solution fields, enabling forward evaluations of new problem instances orders of magnitude..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-07
featured: false
gradient: grad-4
---

arXiv:2609.04407v1 Announce Type: new Abstract: Deep neural operators learn mappings between input functions and complete PDE solution fields, enabling forward evaluations of new problem instances orders of magnitude faster than conventional numerical solvers. Attention mechanisms have recently been introduced into neural operators, but most studies change several architectural components at once, making it difficult to identify what actually improves accuracy. This work presents a controlled and systematic study of five deep operator network (DeepONet) variants with distinct attention mechanisms, trained under both data-driven and physics-informed regimes, to isolate the effects of cross-attention, self-attention, tokenization, and attention depth. We evaluate them on a source-driven transient one-dimensional nonlinear diffusion-reaction equation, a transient one-dimensional viscous Burgers equation with variable initial conditions, and a two-dimensional Poisson heat-conduction problem with heterogeneous source fields. Per-sensor tokenization with cross-attention reduces the mean relative L_2 error of the classical DeepONet in all benchmark-training combinations by factors of 2.4-28.0, while the best attention configurations reach 3.5-32.3. Branch self-attention paired only with dot-product fusion is inconsistent, degrading the one-dimensional problems while helping the more complex two-dimensional source field; added on top of cross-attention it improves all six cases, though by less than cross-attention fusion alone. Global pre-mixing provides no consistent benefit. Increasing cross-attention depth further improves accuracy, but with diminishing returns and a substantially higher cost under physics-informed training. Overall, query-dependent cross-attention is the mo

---

*Source: [arXiv](https://arxiv.org/abs/2609.04407)*
