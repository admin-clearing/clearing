---
title: "Characterizing a Configuration Where Inference-Time PRM-Pruned Fragment Grafting Is Inert: Evidence from Three Reasoning"
dek: "arXiv:2610.00047v1 Announce Type: new Abstract: Diversity collapse in parallel chain-of-thought has motivated inference-time interventions built on a natural design: when a process reward model (PRM) prunes a chain, its..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-10-02
featured: false
gradient: grad-4
---

arXiv:2610.00047v1 Announce Type: new Abstract: Diversity collapse in parallel chain-of-thought has motivated inference-time interventions built on a natural design: when a process reward model (PRM) prunes a chain, its high-PRM prefix is extracted and grafted verbatim as an in-context demonstration into a still-decoding sibling. We isolate this mechanism, PRM-Pruned Fragment Grafting (PPFG), as the most cost-minimal operationalization of cross-trajectory step-level transfer, and test it at the operating point where prior fragment-grafting work reports gains only under additional compensating ingredients. On Qwen2.5-7B-Instruct with Math-Shepherd on full MATH500 (n=500, three seeds), PPFG in both stagnation- and random-targeting variants is statistically indistinguishable from an independent parallel-CoT baseline on every measured axis. We characterize why: a four-bucket classification of 322 stagnation-rule injection events shows only 14% targeted a genuinely struggling chain; the rest landed on chains that had already succeeded, were near completion, or sat on a flat PRM plateau, states a rescue graft cannot change. No compound-gate refinement jointly achieves well-targeted firing and adequate density, and a random control matches the same parity at 2.4x the firing rate, so the inertness is not heuristic-specific. The finding replicates across three base LMs, six benchmarks, a second PRM, and a compatibility-gate sweep; two-one-sided-tests analysis promotes the parity to positive equivalence on all twelve Qwen/LLaMA cells. A per-event spot-check finds injected chains prune at 2.75x the matched-step rate, but a surviving-sibling counterfactual finds no population-level compensation. A hindsight oracle bounds any per-problem gain from choosing PPFG over independent at +

---

*Source: [arXiv](https://arxiv.org/abs/2610.00047)*
