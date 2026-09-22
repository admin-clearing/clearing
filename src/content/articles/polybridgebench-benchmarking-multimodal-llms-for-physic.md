---
title: "PolyBridgeBench: Benchmarking Multimodal LLMs for Physics-Grounded Bridge Design"
dek: "arXiv:2609.21493v1 Announce Type: new Abstract: Multimodal large language models, or MLLMs, perform well at visual understanding and structured generation, yet these capabilities do not establish whether an engineering..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-22
featured: false
gradient: grad-4
---

arXiv:2609.21493v1 Announce Type: new Abstract: Multimodal large language models, or MLLMs, perform well at visual understanding and structured generation, yet these capabilities do not establish whether an engineering design will work when executed. Existing benchmarks assess spatial reasoning, structural validity, or physics-grounded construction, but they do not determine whether MLLMs can synthesize complete load-bearing structures and repair them after simulator execution exposes a failure. We introduce PolyBridgeBench, an executable benchmark for multimodal bridge design. A model receives a visual scene and structured engineering constraints and generates a complete node--member--material topology. Deterministic legality checks gate execution in a native dynamic physics simulation. Following an execution failure, the benchmark returns temporal visual evidence from the failed rollout and evaluates repair under a fixed interaction budget. Separate measurements of deterministic validity, dynamic functional success, and post-failure recovery identify the stage at which design fails. Experiments with six representative MLLMs across 189 levels expose a substantial gap between deterministic validity and dynamic success, pronounced sensitivity to material budgets, and limited post-failure recovery under the primary strict-budget setting.

---

*Source: [arXiv](https://arxiv.org/abs/2609.21493)*
