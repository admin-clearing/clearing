---
title: "Self-Evolving Skills via Surrogate-Guided Solve-and-Reproduce"
dek: "arXiv:2608.28638v1 Announce Type: new Abstract: Agent skills are portable packages of instructions and resources an agent consults at deployment. Self-evolving them fails in two ways today. First, skills evolved from..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-09-01
featured: false
gradient: grad-4
---

arXiv:2608.28638v1 Announce Type: new Abstract: Agent skills are portable packages of instructions and resources an agent consults at deployment. Self-evolving them fails in two ways today. First, skills evolved from scratch underperform human-curated ones and, on a weak model, using no skill at all. Second, an evolution-time pass records one lucky trajectory that a fresh stochastic agent often fails to reproduce at deployment. We present reSolve, a per-task, oracle-in-the-loop framework built on three components. It decouples interactive solving from a self-contained deliverable that is independently re-executed in a fresh container, a protocol we call solve-and-reproduce. It enhances the sparse reward signal with a surrogate verifier that cannot access hidden tests or reference answers. It then runs verifier-guided beam search over a solution-construction graph. Within a fixed harness, a cheap model self-evolves skills that reach $74.9\%$ mean-of-3, $+14.8$ points over the $60.1\%$ human-curated baseline, exceeding the strongest official curated-skill result ($67.3\%$, GPT-5.5/OpenHands). We also report observed failure cases and domain-level results, including performance on the 14 Natural Science tasks, to clarify when the approach does and does not help.

---

*Source: [arXiv](https://arxiv.org/abs/2608.28638)*
