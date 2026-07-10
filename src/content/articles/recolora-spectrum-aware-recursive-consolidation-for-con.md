---
title: "ReCoLoRA: Spectrum-Aware Recursive Consolidation for Continual LLM Fine-Tuning"
dek: "arXiv:2607.07719v1 Announce Type: new Abstract: Parameter-efficient fine-tuning adapts a large language model to one task cheaply, but across a task sequence LoRA-style methods keep stacking low-rank updates on the same..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-07-10
featured: false
gradient: grad-4
---

arXiv:2607.07719v1 Announce Type: new Abstract: Parameter-efficient fine-tuning adapts a large language model to one task cheaply, but across a task sequence LoRA-style methods keep stacking low-rank updates on the same frozen weight, so each new task tends to overwrite the previous ones. We present ReCoLoRA (Recursive Consolidation of Low-Rank Adapters), a spectrum-aware framework for continual fine-tuning: adapters are initialized from a randomized SVD of the pretrained weight, per-layer effective ranks are selected by an elbow criterion, and the principal subspace is adapted before residual capacity is opened. Before each new task, ReCoLoRA re-decomposes the current effective weight, rather than the original one, into a frozen residual, a slowly updated principal component, and a fresh adapter (recursive consolidation), so every task starts from the model that has already absorbed its predecessors. On a six-task continual GLUE sequence over four 7-8B backbones, ReCoLoRA attains the best final average score on three of the four backbones against rank-swept LoRA, PiSSA, AdaLoRA, and DoRA baselines while training fewer parameters; an oracle-routed task-bank variant serves as an upper bound under full task isolation. Code: https://github.com/bhqy666/ReCoLoRA.

---

*Source: [arXiv](https://arxiv.org/abs/2607.07719)*
