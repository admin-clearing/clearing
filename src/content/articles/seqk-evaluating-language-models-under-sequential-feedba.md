---
title: "Seq@K: Evaluating Language Models Under Sequential Feedback"
dek: "arXiv:2610.37859v1 Announce Type: new Abstract: Language-model agents differ fundamentally from prior intelligent systems in their ability to learn from natural language in context. This capability enables agents to..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-10-31
featured: false
gradient: grad-4
---

arXiv:2610.37859v1 Announce Type: new Abstract: Language-model agents differ fundamentally from prior intelligent systems in their ability to learn from natural language in context. This capability enables agents to iteratively refine their answers in response to feedback, a prevalent mode of operation in modern agentic workflows. However, the community primarily ranks models by metrics such as Pass@1 or Pass@K, which cannot capture how they utilize feedback on prior attempts. We introduce Seq@K, a natural evaluation protocol that measures whether a model can solve a problem within K sequential attempts, provided feedback after each previous failure. Unlike multi-turn agentic benchmarks that examine long-horizon planning, Seq@K isolates and formalizes the core capability of refinement from feedback. We evaluate Seq@K on a suite of 7 benchmarks and 16 frontier models, and show that Seq@K reveals a materially different model-selection landscape: under Seq@K, (1) model rankings often differ, (2) the Pareto frontiers admit more efficient configurations and (3) the gains from choosing the optimal model configuration can widen or shrink relative to those of Pass@K. We further show that analyzing model trajectories under Seq@K helps characterize iterative refinement behavior, such as the rate at which models address issues raised in feedback, or how rigidly they hold onto their own answers. Finally, we study how the nature of feedback affects models' iterative refinement, showing that practitioners must carefully design and benchmark the feedback loops of iterative agentic systems. Together, these results establish how Seq@K offers a more faithful metric for intelligent systems that typically operate in such feedback loop, and the necessity to consider Seq@K in evaluating mode

---

*Source: [arXiv](https://arxiv.org/abs/2610.37859)*
