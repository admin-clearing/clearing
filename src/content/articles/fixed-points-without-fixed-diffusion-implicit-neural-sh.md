---
title: "Fixed Points Without Fixed Diffusion: Implicit Neural Sheaves for Convergent Test-Time Computation"
dek: "arXiv:2609.30277v1 Announce Type: new Abstract: Implicit Graph Neural Networks (IGNNs) define node representations as fixed points of message-passing operators, enabling effectively infinite-depth propagation,..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-09-29
featured: false
gradient: grad-4
---

arXiv:2609.30277v1 Announce Type: new Abstract: Implicit Graph Neural Networks (IGNNs) define node representations as fixed points of message-passing operators, enabling effectively infinite-depth propagation, iteration-independent parameterization, and flexible test-time computation. Yet these benefits depend on the equilibrium being unique and attainable by fixed-point iteration. Existing constructions often impose constraints on recurrent updates to obtain these guarantees, limiting the transformations available at equilibrium. This raises a central question: can IGNNs gain expressiveness through richer, edge-dependent transformations while retaining the inherent strengths of their equilibrium formulation? We introduce SheafDEQ, a subhomogeneous deep-equilibrium architecture with adaptive neural-sheaf propagation. Its learned, matrix-valued sheaf restriction maps can align, mix, or reverse neighbouring representations. Under mild regularity conditions, we prove that SheafDEQ admits a unique equilibrium reached globally by fixed-point iteration from any positive initialization. Contractivity further guarantees convergence under bounded communication staleness. We evaluate SheafDEQ on distributed-inference tasks requiring repeated nonlocal aggregation and on community detection whose rewiring increasingly favours cross-community interactions. SheafDEQ improves over fixed-propagation implicit baselines on Sums, MNIST Terrain, and Coordinates, and on community detection as connectivity becomes increasingly heterophilic. Continued-iteration diagnostics show decreasing residuals and low prediction sensitivity after 100 iterations for initialization scales from $0.001$ to $10$, while delayed-update experiments show low sensitivity to bounded communication staleness.

---

*Source: [arXiv](https://arxiv.org/abs/2609.30277)*
