---
title: "Shapley Context Pruning: A Cooperative Game Perspective for Context Reranking and Pruning"
dek: "arXiv:2607.16209v1 Announce Type: new Abstract: Context reranking and pruning have become essential for improving the efficiency of modern Retrieval-Augmented Generation (RAG) systems, yet an interpretable and unified..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-07-21
featured: false
gradient: grad-4
---

arXiv:2607.16209v1 Announce Type: new Abstract: Context reranking and pruning have become essential for improving the efficiency of modern Retrieval-Augmented Generation (RAG) systems, yet an interpretable and unified framework remains underexplored. Previous work has primarily emphasized lexical retrieval, cross-encoder architectures, model distillation, and Low-Rank Adaptation (LoRA), mostly relying on heuristic loss functions and empirical attribution. This paper presents Shapley Context Pruning (SCP), a novel framework for context reranking that establishes a cooperative-game-theory perspective for importance attribution by modeling the context as a cooperative game. Balancing the trade-off between fine-grained and coarse-grained representations, we employ a Deep Sets architecture to approximate a permutation-invariant value function at the sentence level, utilizing pre-trained language models as sentence embedders and optimizing via a pairwise margin ranking loss. To ensure practical scalability without sacrificing mathematical rigor, we leverage Monte-Carlo sampling for efficient training and inference, providing formal theoretical error bounds and sample complexity guarantees for preserving Top-K subset rankings. Furthermore, we conduct comprehensive experiments-spanning supporting-sentence recall, Needle-in-the-Haystack (NIAH) evaluations, long-context QA, and multi-hop reasoning-alongside rigorous ablation studies on embedding quality and attribution strategies. The model achieves competitive downstream QA performance against robust baselines.

---

*Source: [arXiv](https://arxiv.org/abs/2607.16209)*
