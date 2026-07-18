---
title: "Reward-Free Evolving Agents via Pairwise Validator"
dek: "arXiv:2607.14408v1 Announce Type: new Abstract: A self-evolving agentic loop repeatedly proposes a tweaked version of an agent (its prompt template or program) and accepts or rejects the change based on a per-iteration..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-18
featured: false
gradient: grad-4
---

arXiv:2607.14408v1 Announce Type: new Abstract: A self-evolving agentic loop repeatedly proposes a tweaked version of an agent (its prompt template or program) and accepts or rejects the change based on a per-iteration quality signal. Designing that signal is often the costly part of the project: a reliable scalar reward requires domain expertise and labeled examples that are themselves as expensive to assemble as the agent's underlying task. We propose replacing the scalar at the accept/reject gate with a pairwise validator: a frozen LLM that, given the parent and child candidate, returns a binary verdict on which is better. Pairwise judgment is generally easier and more stable than absolute scoring, due to its contrastive nature, which mitigates the need for strict scale calibration. The validator also requires no training of its own. We integrate the validator into three published self-evolving engines (GEPA, ADRS, ShinkaEvolve) and report two flavors: Adaptive Focus, which retains the engine's existing val-set parent selection, and Soft Elo, which lets the validator's verdicts drive parent selection so that val-set rewards drop as well. Across multiple agents and two artifact substrates (prompt and code), our method matches or exceeds the full-reward baseline on the majority of settings we evaluate, and the pattern survives a cross-family validator swap. The pairwise gate is thus a drop-in replacement for per-step reward design at competitive task accuracy without the labeling cost.

---

*Source: [arXiv](https://arxiv.org/abs/2607.14408)*
