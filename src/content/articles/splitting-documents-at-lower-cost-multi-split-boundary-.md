---
title: "Splitting Documents at Lower Cost: Multi-Split Boundary Decisions for LLM-Based Page Stream Segmentation"
dek: "arXiv:2609.22620v1 Announce Type: new Abstract: Scanned mail, uploaded PDFs, and consolidated attachments often arrive as page streams that must be split into individual documents before downstream classification,..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-09-23
featured: false
gradient: grad-4
---

arXiv:2609.22620v1 Announce Type: new Abstract: Scanned mail, uploaded PDFs, and consolidated attachments often arrive as page streams that must be split into individual documents before downstream classification, extraction, or routing. Zero-shot large language models can detect document boundaries without task-specific training, but standard Page Classification (PC) and Boundary Decision (BD) formulations resolve only one boundary per model call. We introduce Multi-Split Boundary Decision (MSBD), which predicts multiple boundaries within a page window in a single call, reducing the number of inference requests. We evaluate MSBD across multiple language models, document collections, input modalities, and window sizes. The results reveal a model- and corpus-dependent operating range in which MSBD preserves strong segmentation accuracy while substantially improving inference efficiency, followed by a sharp decline at larger windows. MSBD provided the strongest overall accuracy--efficiency trade-off, while large windows expose distinct over- and under-segmentation behavior across models. These findings show that multi-boundary prediction can make zero-shot page stream segmentation more efficient when the window size is selected for the target corpus.

---

*Source: [arXiv](https://arxiv.org/abs/2609.22620)*
