---
title: "JIVEAdapter: A Multi-Task Additive Low-Rank Adapter via Joint and Individual Variation Explained (JIVE)"
dek: "arXiv:2610.07036v1 Announce Type: new Abstract: Parameter-efficient fine-tuning adapts pretrained models at a fraction of the cost of full fine-tuning, yet most low-rank adapters are single-task and represent each..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-10-08
featured: false
gradient: grad-4
---

arXiv:2610.07036v1 Announce Type: new Abstract: Parameter-efficient fine-tuning adapts pretrained models at a fraction of the cost of full fine-tuning, yet most low-rank adapters are single-task and represent each weight update multiplicatively, leaving no explicit account of what is shared across tasks and what is task-specific. We introduce JIVEAdapter, a multi-task "additive" low-rank adapter inspired by statistical Joint and Individual Variation Explained (JIVE). JIVEAdapter decomposes every weight update into a Joint structure shared across all tasks plus a per-task Individual structure, penalizes the Individual structures to be near-orthogonal to the Joint so shared and task-specific signal stay "interpretable" and separated, and allocates rank adaptively across a shared Joint pool and a per-task Individual pool. The Joint is learned once, jointly over a task group or incrementally, one task at a time, then frozen and reused as a prior for new tasks without retraining the shared part. On GLUE and SuperGLUE with DeBERTaV3-base, JIVEAdapter is competitive with strong single-task and multi-task low-rank baselines at a matched per-task effective rank, without extra modules such as MoE, and when a related held-in task exists its frozen Joint serves a held-out task by reusing that task's Individual with only a cheap per-direction scale, otherwise training a small new one.

---

*Source: [arXiv](https://arxiv.org/abs/2610.07036)*
