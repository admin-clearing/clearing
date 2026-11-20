---
title: "HapBO: Harnessed $\\alpha$-$\\pi$ Bayesian Optimization via Expert Natural Language Priors"
dek: "arXiv:2611.25100v1 Announce Type: new Abstract: Bayesian Optimization (BO) can be substantially more sample-efficient when informed by prior knowledge about the problem. In practice, however, such knowledge is often..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-11-20
featured: false
gradient: grad-4
---

arXiv:2611.25100v1 Announce Type: new Abstract: Bayesian Optimization (BO) can be substantially more sample-efficient when informed by prior knowledge about the problem. In practice, however, such knowledge is often available only in natural language, e.g., expert intuitions or documentation, rather than as the explicit probability distribution landscape that prior-guided BO methods may require. Leveraging it effectively demands both an expressive mapping from language to priors and robustness to information that may be misleading. We propose HapBO (Harnessed $\alpha$-$\pi$ Bayesian Optimization), which elicits beliefs once from a human expert, a large language model (LLM), or both, and deterministically compiles a structured specification into a reusable belief function ($\pi: \mathcal{X} \to[0,1]$), with a rich representation not restricted to a Gaussian family. Building on $\alpha$-$\pi$BO, HapBO applies this belief function through a bounded positive multiplier on any nonnegative acquisition, preserving positive acquisition support and requiring no LLM calls during optimization. We prove that, for the Expected Improvement acquisition function (EI), HapBO preserves the standard simple-regret rate up to a bounded factor, even under adversarial beliefs. We evaluate HapBO on 40 HPOBench tasks, a synthetic suite in 6-15 dimensions and two real-world applications: cortical neurostimulation and constrained solar design. HapBO achieves the lowest aggregate HPOBench regret and strong real-world task performance, with zero in-loop token cost. In real-world applications it improves the optimization outcome even at budgets of 12-20 queries, and at a small fraction of the wall-clock and token costs of other LLM-based methods.

---

*Source: [arXiv](https://arxiv.org/abs/2611.25100)*
