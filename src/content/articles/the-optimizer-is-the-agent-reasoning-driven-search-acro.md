---
title: "The Optimizer Is the Agent: Reasoning-Driven Search across Prompts, Programs, and ML Workflows"
dek: "arXiv:2608.06714v1 Announce Type: new Abstract: Recent systems for optimizing prompts, programs, and ML workflows typically rely on explicit outer-loop controllers such as evolutionary search, bandits, or..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-10
featured: false
gradient: grad-4
---

arXiv:2608.06714v1 Announce Type: new Abstract: Recent systems for optimizing prompts, programs, and ML workflows typically rely on explicit outer-loop controllers such as evolutionary search, bandits, or textual-gradient methods. We ask a fundamentally different question: how much of this search policy can be internalized by a single tool-using agent? We present ReASearch, a unified framework for reasoning-driven optimization in which the agent autonomously decides what to evaluate, how to diagnose failures, which edits to make, and when to verify or restart. Rather than serving only as a proposal generator guided by hand-designed heuristics, the agent actively analyzes outcomes, allocates budget, and refines its strategy over long horizons through persistent memory. With a shared agent loop and domain-specific tools, ReASearch instantiates the exact same scaffold to optimize prompts, programs, and ML workflows. Across 14 diverse tasks, it is competitive with and mostly better than specialized optimization systems, achieving gains of 2% to 40% over strong domain-specific baselines, and in some cases discovering solutions that improve on prior human best-known results. Crucially, we observe that complex search behaviors, which are typically implemented by explicit controllers, emerge naturally from the agent's reasoning process.

---

*Source: [arXiv](https://arxiv.org/abs/2608.06714)*
