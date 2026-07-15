---
title: "Scalable Optimal Transport Algorithm for Network Alignment"
dek: "arXiv:2607.11952v1 Announce Type: new Abstract: Network alignment identifies node correspondences across different networks and is a fundamental primitive in many data science applications, including social network..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-07-15
featured: false
gradient: grad-4
---

arXiv:2607.11952v1 Announce Type: new Abstract: Network alignment identifies node correspondences across different networks and is a fundamental primitive in many data science applications, including social network analysis, fraud detection, and knowledge graph integration. However, state-of-the-art network alignment methods often achieve high accuracy by repeatedly constructing and updating dense matrices, sacrificing scalability in the process. To address this scalability limitation without compromising alignment accuracy, we present FastAlign, a scalable, sparsity-aware framework for optimal transport-based network alignment. Rather than introducing a new alignment model, FastAlign preserves the original OT formulation and reinterprets its computation as a set of recurring mixed sparse-dense operations. FastAlign combines sparsity-aware graph computation with domain-specific kernel fusion, including a custom SpMM kernel. Our results show that FastAlign achieves alignment quality comparable to state-of-the-art OT-based methods while substantially reducing end-to-end runtime up to 3.89x-9.45x on CPU and 2.24x-32.54x on GPU.

---

*Source: [arXiv](https://arxiv.org/abs/2607.11952)*
