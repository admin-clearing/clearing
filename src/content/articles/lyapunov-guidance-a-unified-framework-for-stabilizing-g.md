---
title: "Lyapunov Guidance: A Unified Framework for Stabilizing Generative Flows"
dek: "arXiv:2607.14272v1 Announce Type: new Abstract: Flow matching has emerged as an effective framework for learning complex data distributions, but adapting pretrained flow models to new tasks often requires..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-07-18
featured: false
gradient: grad-4
---

arXiv:2607.14272v1 Announce Type: new Abstract: Flow matching has emerged as an effective framework for learning complex data distributions, but adapting pretrained flow models to new tasks often requires computationally expensive retraining. Post-training guidance provides a more efficient alternative, but existing methods are largely heuristic and offer no explicit stability guarantees. We address this limitation by proposing LyaGuide, a unified Lyapunov-guided framework that formulates flow guidance as a Lyapunov control problem. Our main theoretical result establishes an equivalence between guided flow matching and Lyapunov control, thereby unifying common guidance strategies, such as classifier guidance, reward guidance, and energy-based guidance, within a single control-theoretic framework. To enforce the Lyapunov condition, we introduce a pseudo-projection operator with a closed-form expression that endows learned or heuristic guidance terms with explicit stability guarantees. LyaGuide supports two practical settings: a model-driven setting, where the target guidance distribution is specified through a known Lyapunov function, and a data-driven setting, where the guidance is adapted from task-specific downstream data. LyaGuide is compatible with existing guidance methods, introduces minimal additional computational overhead, and is straightforward to integrate in practice. Extensive experiments on synthetic benchmarks, image inverse problems, reinforcement learning planning, and energy-based modeling demonstrate consistent improvements in sample quality, guidance fidelity, and robustness, while maintaining computational efficiency.

---

*Source: [arXiv](https://arxiv.org/abs/2607.14272)*
