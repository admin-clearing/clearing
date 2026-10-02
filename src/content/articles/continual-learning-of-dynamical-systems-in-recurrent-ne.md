---
title: "Continual Learning of Dynamical Systems in Recurrent Neural Networks through Recyclable Unit Gating"
dek: "arXiv:2609.38356v1 Announce Type: new Abstract: Dynamical Systems Reconstruction (DSR) aims to infer models from observed time series that reproduce a system's qualitative long-term behavior. Continual DSR (cDSR)..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-02
featured: false
gradient: grad-4
---

arXiv:2609.38356v1 Announce Type: new Abstract: Dynamical Systems Reconstruction (DSR) aims to infer models from observed time series that reproduce a system's qualitative long-term behavior. Continual DSR (cDSR) requires learning new systems while preserving previously learned dynamics, yet even small parameter updates in recurrent models can qualitatively alter their behavior over long autonomous rollouts. We benchmark established continual learning (CL) methods spanning parameter regularization, replay, and parameter isolation on the fully trainable and interpretable Almost-Linear RNN (AL-RNN). Parameter isolation preserves earlier dynamics most effectively, but excessive task-specific allocations can rapidly exhaust a fixed-size network. We therefore introduce Continually-Recyclable Unit-Gating (CRUG), which conserves capacity through compact allocation and forward transfer. Differentiable gates trained with an $L_0$-based penalty select task-specific units, while unused units are recycled for subsequent tasks. Directed connections allow later tasks to reuse earlier representations without affecting the dynamics of previously committed units. CRUG achieves the strongest reconstruction--capacity trade-off among the tested methods with zero forgetting and reliably learns a heterogeneous sequence of nonlinear and chaotic systems. Furthermore, we show that forward transfer is more pronounced and useful when tasks share similar underlying dynamics. Lastly, we demonstrate that CRUG's advantages extend beyond autonomous cDSR to sequential cognitive tasks.

---

*Source: [arXiv](https://arxiv.org/abs/2609.38356)*
