---
title: "PEARL: Solver-in-the-Loop Interactive Optimization Modeling from Natural Language"
dek: "arXiv:2607.18256v1 Announce Type: new Abstract: Optimization modeling is the process of translating real-world decision problems, often described in natural language, into formal mathematical formulations and executable..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-07-22
featured: false
gradient: grad-4
---

arXiv:2607.18256v1 Announce Type: new Abstract: Optimization modeling is the process of translating real-world decision problems, often described in natural language, into formal mathematical formulations and executable solver code. While recent advances in large language models have shown promise in automating this process, most existing approaches remain one-shot: a model produces a formulation once, without executing it, conditioning on solver feedback, or iteratively revising errors. This stands in sharp contrast to real-world optimization modeling, which is inherently interactive and proceeds through repeated solve-debug-revise cycles. We introduce PEARL, a system for interactive optimization modeling that uses Python execution and mathematical programming solvers inside this loop. Rather than relying on a fixed repair workflow, PEARL learns when to test partial models, how to revise from solver diagnostics, and when to stop. It operates in a multi-turn tool-integrated setting where intermediate execution results, feasibility signals, and solution checks are used to improve both formulations and solver code before finalization. Across diverse optimization benchmarks, PEARL substantially improves verified solve rates over strong one-shot and tool-augmented baselines; notably, our PEARL-Qwen3-\textbf{4B} model outperforms the much larger DeepSeek-V3.2-\textbf{685B} in both macro- and micro-averaged accuracy on optimization modeling tasks.

---

*Source: [arXiv](https://arxiv.org/abs/2607.18256)*
