---
title: "Exploring Oversmoothing with Householder Matrices"
dek: "arXiv:2608.12514v1 Announce Type: new Abstract: Deep graph neural networks(GNNs) suffer from oversmoothing- a progressive collapse of node representation towards a low information subspace as network depth increases..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-14
featured: false
gradient: grad-4
---

arXiv:2608.12514v1 Announce Type: new Abstract: Deep graph neural networks(GNNs) suffer from oversmoothing- a progressive collapse of node representation towards a low information subspace as network depth increases because the normalized graph propagation operator is repeatedly applied directly to the hidden representations. In this work we study Householder Graph Neural Network (HouseGNN). Rather than updating the hidden state like standard GCN, HouseGNN uses the aggregated neighbourhood message solely to estimate a reflection direction; the node embedding is then updated by a Householder reflector followed by GroupSort, yielding a piecewise orthogonal layer that preserves Euclidean norm at every node and at every depth. We prove three core properties: (i) every internal layer preserves the node-wise Euclidean norm; (ii) the Householder reflector is scale scale and sign-invariant in the message; and (iii) pairwise distance between nodes can change through mismatch between node-wise orthogonal operators.

---

*Source: [arXiv](https://arxiv.org/abs/2608.12514)*
