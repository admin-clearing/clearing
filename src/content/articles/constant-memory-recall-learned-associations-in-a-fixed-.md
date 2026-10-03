---
title: "Constant-Memory Recall: Learned Associations in a Fixed Matrix State"
dek: "arXiv:2610.00232v1 Announce Type: new Abstract: Fixed-size recurrent memory limits storage growth during inference, but successful recall depends on the task and training. We study a small DeltaNet variant with fixed..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-10-03
featured: false
gradient: grad-4
---

arXiv:2610.00232v1 Announce Type: new Abstract: Fixed-size recurrent memory limits storage growth during inference, but successful recall depends on the task and training. We study a small DeltaNet variant with fixed token-specific key biases, trained to remember 32 new key-value pairings per sequence. With 32 KiB of recurrent matrix state, it achieves 99.95% mean accuracy across three training seeds when choosing among the sequence's values. Recall remains near perfect when filler extends the pre-query context to 1,798 tokens without adding pairings. Zeroing the first memory block removes this recall. An exploratory 48-pair test remains near chance after one quarter of the primary training budget and does not locate a capacity limit. Parameter-matched vector and Transformer baselines remain near chance, including the Transformer after additional training searches. This unresolved baseline failure prevents a memory-efficiency comparison.

---

*Source: [arXiv](https://arxiv.org/abs/2610.00232)*
