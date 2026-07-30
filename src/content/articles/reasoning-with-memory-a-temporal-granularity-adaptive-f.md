---
title: "Reasoning with Memory: A Temporal Granularity-Adaptive Framework for Training-Free Long Video Understanding"
dek: "arXiv:2607.24794v1 Announce Type: new Abstract: While Multimodal Large Language Models (MLLMs) demonstrate superior generalization in fundamental video tasks, restricted context windows limit their long video..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-07-30
featured: false
gradient: grad-4
---

arXiv:2607.24794v1 Announce Type: new Abstract: While Multimodal Large Language Models (MLLMs) demonstrate superior generalization in fundamental video tasks, restricted context windows limit their long video understanding. To accommodate this constraint, models typically resort to keyframe selection. However, uniform sampling or static query-guided selection often overlooks critical temporal context, failing to adapt to the varying query temporal granularities. In this paper, we propose ReMem, a temporal granularity-adaptive keyframe selection framework for training-free LongVideoQA. ReMem introduces a dual-level memory-augmented adaptation. At the query level, Memory-Driven Question Parsing leverages LLM long-term memory to decode question temporal granularity and extract semantic entities. At the video level, Synergistic Dual-Semantic Frame Alignment exploits intrinsic structural memory to align frames with query semantics, guiding Structure-Aware Dynamic Frame Routing to cluster events and optimally distribute sampling budgets. By explicitly preserving temporal information with memory mechanisms, ReMem suppresses redundancy and empowers MLLMs to perform robust multi-granular video reasoning. Evaluations across four popular LongVideoQA benchmarks using three MLLMs demonstrate highly efficient, state-of-the-art zero-shot performance; notably, LLaVA-Video with ReMem reaches 54.5% (+12.3%) on LVBench and 67.1% (+8.2%) on LongVideoBench.

---

*Source: [arXiv](https://arxiv.org/abs/2607.24794)*
