---
title: "Vision Token Pruning via Query-Vision Interaction Decomposition"
dek: "arXiv:2610.33215v1 Announce Type: new Abstract: Large vision-language models (VLMs), which process both visual inputs and text queries, incur high inference costs due to the large number of visual tokens, making visual..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-10-28
featured: false
gradient: grad-4
---

arXiv:2610.33215v1 Announce Type: new Abstract: Large vision-language models (VLMs), which process both visual inputs and text queries, incur high inference costs due to the large number of visual tokens, making visual token pruning a natural approach for improving efficiency. Recent work has leveraged query information to guide token selection, often through heuristics derived from attention patterns or token dynamics. However, these approaches do not explicitly exploit the underlying structure of query-vision interactions. We address this gap by observing that the query-vision interaction matrix, naturally induced by the query and key projections already present in transformer attention, is effectively low-rank, with a small number of dominant latent interaction modes capturing query-relevant semantics. Motivated by this observation, we propose Query-Vision Decomposition (QViD), a novel training-free query-aware visual token pruning method that exploits this structure. Extensive experiments on both image and video understanding benchmarks show that QViD consistently improves performance under matched token budgets, with the largest gains appearing under aggressive compression regimes.

---

*Source: [arXiv](https://arxiv.org/abs/2610.33215)*
