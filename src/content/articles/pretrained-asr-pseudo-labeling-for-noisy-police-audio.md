---
title: "Pretrained ASR Pseudo-labeling for Noisy Police Audio"
dek: "arXiv:2609.30469v1 Announce Type: new Abstract: Pretrained ASR systems perform poorly on noisy Broadcast Police Communication (BPC), hindering efforts to understand police decision-making. Pseudo-labeling offers an..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-28
featured: false
gradient: grad-4
---

arXiv:2609.30469v1 Announce Type: new Abstract: Pretrained ASR systems perform poorly on noisy Broadcast Police Communication (BPC), hindering efforts to understand police decision-making. Pseudo-labeling offers an unsupervised path to improve ASR without expensive human labels, but the efficacy of this approach on very noisy domains is not known. In this work, we systematically assess the opportunities and limits of pseudo-labeling to adapt foundation ASR models (Whisper and Qwen3-ASR) to noisy BPC domain corpora from Baltimore and Chicago. We demonstrate that existing internal confidence metrics (log-probabilities and STAR scores) fail to distinguish between high and low quality BPC pseudo-labels, and we introduce an external LLM-as-a-judge filtering paradigm that leverages parametric knowledge to discard contextually implausible transcripts. Our LLM-judging filters more aggressively than internal metrics and significantly reduces WER of the pseudo-labeled training sets across the Baltimore and Chicago BPC corpora, though a substantial gap remains relative to an oracle filter. We also introduce a new cross-model pseudo-labeling paradigm where one model is finetuned with pseudo-labels from the other, and we identify this method as a promising direction for future pseudo-labeling work.

---

*Source: [arXiv](https://arxiv.org/abs/2609.30469)*
