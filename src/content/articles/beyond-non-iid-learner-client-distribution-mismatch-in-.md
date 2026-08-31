---
title: "Beyond Non-IID: Learner--Client Distribution Mismatch in Federated Learning"
dek: "arXiv:2608.27715v1 Announce Type: new Abstract: Federated learning systems are increasingly deployed to facilitate collaborative model training across a heterogeneous client population. Existing practice mostly..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-31
featured: false
gradient: grad-4
---

arXiv:2608.27715v1 Announce Type: new Abstract: Federated learning systems are increasingly deployed to facilitate collaborative model training across a heterogeneous client population. Existing practice mostly implicitly assumes that the aggregated client data distribution is representative of the learner's target distribution or that learning from all available clients is uniformly beneficial for the learner distribution. However, such an assumption often does not hold in reality. Traditional client selection strategies in FL literature largely overlook such misalignment, while most existing work on multi-source transfer learning either requires direct access to local data or uses one-shot model/feature aggregation. In this paper, we take the initiative to understand and mitigate the impacts of such learner-client population misalignment. In particular, we consider the practical setting where the learner keeps a small proxy dataset. We observe that client contributions vary significantly across training rounds, and traditional technology is insufficient to identify beneficial sources under multi-source transfer diversity. Then, we propose a dynamic, influence-aware client selection framework that estimates each client's potential utility to the learner's optimization objective using proxy influence signals on a learner-specific proxy set. Via using leave-one-out evaluations, we prioritize the most informative sources of knowledge while controlling the negative impacts of statistical noise and data heterogeneity. Experiments on CIFAR-10 under heterogeneous data partitions demonstrate that our approach consistently outperforms static and dynamic baselines, achieving faster convergence and higher accuracy.

---

*Source: [arXiv](https://arxiv.org/abs/2608.27715)*
