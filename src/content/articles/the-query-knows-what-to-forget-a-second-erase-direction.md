---
title: "The Query Knows What to Forget: A Second Erase Direction for Linear Attention"
dek: "arXiv:2608.13668v1 Announce Type: new Abstract: Linear attention keeps a state of fixed size. At long context, many stored items share this state, and interference between them degrades retrieval. Gated DeltaNet-2..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-17
featured: false
gradient: grad-4
---

arXiv:2608.13668v1 Announce Type: new Abstract: Linear attention keeps a state of fixed size. At long context, many stored items share this state, and interference between them degrades retrieval. Gated DeltaNet-2 (GDN-2), like every delta-rule model before it, derives its erase vector from the key of the current token. However, the interference in its reads is measured through the query, and the erase step cannot reach it. We introduce the Query-derived Erase Direction (QED). QED adds a second erase direction derived from the query and orthogonal to the key. In the fast-weight view, a key-directed delta edit cannot change the key-orthogonal part of a read. It uses the editable part to cancel old-state content measured along the query. It also improves retrieval at every length past the training window, and it about doubles the usable context length on S-NIAH-1.

---

*Source: [arXiv](https://arxiv.org/abs/2608.13668)*
