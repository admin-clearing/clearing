---
title: "Do AI Agents Understand Computer Architecture?"
dek: "arXiv:2609.19387v1 Announce Type: new Abstract: Agents are increasingly asked to design hardware, and increasingly reported to succeed. Such reports establish that a design improved; they cannot establish why. An agent..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-18
featured: false
gradient: grad-4
---

arXiv:2609.19387v1 Announce Type: new Abstract: Agents are increasingly asked to design hardware, and increasingly reported to succeed. Such reports establish that a design improved; they cannot establish why. An agent that improves an accelerator may be reasoning about the machine, or may be searching competently over knobs whose meaning it never recovers -- and only the first transfers to the next architecture. Existing evaluations cannot tell the two apart, because they vary the agent while holding the framing of the problem fixed. We do the opposite. AutoTuring hands the same agent the same 15-dimensional accelerator space twice: once as named architectural knobs with simulator counters, once as anonymous variables on [0,1], with the evaluator, the legal space and the reachable optima held identical, so that the only thing that varies is whether the problem means anything. The gap between the two is the measurement. On a nine-kernel FP16 GEMM basket, meaning pays: the architect beats a modeled H200 by 5.4% and its blind counterpart by 12.3% on average, with 70.1% fewer simulator calls. It does not pay uniquely: a critic loop recovers most of that gap for the blind agent and buys the architect nothing, so architectural knowledge and structured critique behave as substitutes rather than as complements. We report these as preliminary findings -- five to six runs per condition on a single modeled accelerator -- and take the comparison itself, not the accelerator, to be the contribution.

---

*Source: [arXiv](https://arxiv.org/abs/2609.19387)*
