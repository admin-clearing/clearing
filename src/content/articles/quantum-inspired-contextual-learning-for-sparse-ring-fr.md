---
title: "Quantum-Inspired Contextual Learning for Sparse-Ring Fraud Detection in Dynamic Transaction Graphs"
dek: "arXiv:2607.09704v1 Announce Type: new Abstract: We present an exploratory benchmark and quantum-inspired modeling prototype for fraud screening in dynamic financial transaction graphs. Coordinated fraud may not be..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-14
featured: false
gradient: grad-4
---

arXiv:2607.09704v1 Announce Type: new Abstract: We present an exploratory benchmark and quantum-inspired modeling prototype for fraud screening in dynamic financial transaction graphs. Coordinated fraud may not be visible from individual transactions alone, but may emerge as a multi-period relational pattern. We focus on sparse-ring fraud, a stylized pattern in which a completed directed cycle is distributed across several days, requiring models to integrate evidence across both time and graph structure. We study this problem using a synthetic transaction simulator with completed sparse-ring injections and broken-ring decoys. Daily directed transaction graphs are aggregated into rolling windows and represented using raw graph features, persistent-homology summaries, or hybrid feature vectors that combine both. We compare a gated recurrent unit (GRU) baseline with quantum-inspired Contextual Machine Learning (CML) as sequence-level classifiers. Because the benchmark uses synthetic data, a modest sample size, and sequence-level labels, the results are exploratory. Within this scope, topology-only summaries are too compressed to solve the supervised ring-completion task by themselves, largely because they remove account-pair identity and edge direction. The strongest results come from hybrid representations that combine identity-preserving graph features with topological summaries. These findings suggest that topology is most useful as a contextual layer over dynamic graph features, and that CML is a promising candidate model for fraud patterns whose evidence is distributed across temporal and relational context.

---

*Source: [arXiv](https://arxiv.org/abs/2607.09704)*
