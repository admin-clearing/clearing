---
title: "Reproducible Evaluation as the Substrate for Safe Prompt Compression in Production Agents"
dek: "arXiv:2610.31972v1 Announce Type: new Abstract: Evaluating conversational agents that act on live, mutable enterprise data is hard: replayed sessions drift as backend state changes, and a benchmark built today can..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-26
featured: false
gradient: grad-4
---

arXiv:2610.31972v1 Announce Type: new Abstract: Evaluating conversational agents that act on live, mutable enterprise data is hard: replayed sessions drift as backend state changes, and a benchmark built today can silently go stale as the data it describes moves on. We present an offline evaluation harness for a production conversational agent that stays reproducible despite the live data it operates on changing, and that can be regenerated on demand once it goes stale. We then use this harness as the fitness function for GEPA-based prompt optimization under a correctness gate that guards against reward hacking. Applied to a production merchant-facing agent, correctness-gated compression shrinks the agent's full prompt surface by 3.5-7.6% without regressing held-out task correctness, consistently across three independent subject-model families, and for one, correctness measurably improves.

---

*Source: [arXiv](https://arxiv.org/abs/2610.31972)*
