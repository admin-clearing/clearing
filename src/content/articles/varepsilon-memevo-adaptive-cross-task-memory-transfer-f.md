---
title: "$\\varepsilon$-MemEvo: Adaptive Cross-Task Memory Transfer for LLM Program Evolution"
dek: "arXiv:2608.12522v1 Announce Type: new Abstract: LLM-based program evolution systems such as FunSearch and AlphaEvolve have shown strong ability to discover novel algorithms, but typically optimize each task in..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-08-14
featured: false
gradient: grad-4
---

arXiv:2608.12522v1 Announce Type: new Abstract: LLM-based program evolution systems such as FunSearch and AlphaEvolve have shown strong ability to discover novel algorithms, but typically optimize each task in isolation, discarding search experience after completion. We introduce $\varepsilon$-MemEvo, a framework for cross-task knowledge transfer in LLM program evolution. $\varepsilon$-MemEvo stores prior experience as task-agnostic tactic memories: compact natural-language summaries of successful algorithmic strategies rather than raw code, enabling transfer across tasks with different APIs and evaluators. To avoid negative transfer from semantically mismatched memories, $\varepsilon$-MemEvo uses an adaptive injection gate that decides whether retrieved memories should be injected, and at what intensity. We evaluate $\varepsilon$-MemEvo on 8 diverse optimization benchmarks spanning mathematical optimization and systems engineering, using a content-level Leave-One-Out protocol that excludes target-task memory entries. On the primary GPT-5 backbone, $\varepsilon$-MemEvo improves AUCC over AdaEvolve on all 8 tasks, with a mean relative gain of +8.7%, and improves early-stage convergence by +9.4% on average. Ablations show that naive memory injection can fail catastrophically, while adaptive gating remains safe across all five ablation tasks. The data-updated posterior is interpretable in observed states: it favors skip during improving search and shifts from skip to hint across early and late plateaus. These gains incur less than 1% computational overhead.

---

*Source: [arXiv](https://arxiv.org/abs/2608.12522)*
