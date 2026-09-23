---
title: "Text, Pixels, or Both? Evaluating Input Representations for Multimodal Document QA"
dek: "arXiv:2609.22628v1 Announce Type: new Abstract: Every document QA system begins with a choice that is rarely studied on its own: whether to feed the model page images, extracted text, or both. We isolate this choice,..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-23
featured: false
gradient: grad-4
---

arXiv:2609.22628v1 Announce Type: new Abstract: Every document QA system begins with a choice that is rarely studied on its own: whether to feed the model page images, extracted text, or both. We isolate this choice, holding the prompt, judge, and scoring pipeline fixed, across four commercial model endpoints, two corpora, and two context regimes (gold evidence pages and the full document). On documents that fit the image budget, page images lead on accuracy at every document length on both corpora, but this advantage carries a growing latency and cost premium: text latency stays roughly flat as documents lengthen while image latency rises steadily. Text and images also fail on different questions, with exactly one representation correct on 19--25% of items across the reported cells, so neither subsumes the other. Exploiting this complementarity, a lightweight TF-IDF router that reads only the question text gains 2.6 points over always-text while cutting median latency 30% relative to always-vision, on a document-disjoint held-out split.

---

*Source: [arXiv](https://arxiv.org/abs/2609.22628)*
