---
title: "HERO: A Heterogeneity-Aware Benchmark Library for Federated Continual Learning"
dek: "arXiv:2607.08784v1 Announce Type: new Abstract: Federated continual learning (FCL) evaluates how distributed clients learn from changing data streams while retaining previously learned knowledge. Existing evaluations..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-07-13
featured: false
gradient: grad-4
---

arXiv:2607.08784v1 Announce Type: new Abstract: Federated continual learning (FCL) evaluates how distributed clients learn from changing data streams while retaining previously learned knowledge. Existing evaluations are difficult to compare because they often change datasets, task splits, client data splits, task orders, backbones, memory assumptions, and reporting rules simultaneously. We introduce \textbf{HERO}, a heterogeneity-aware benchmark library for FCL. HERO builds benchmark streams by separating three choices that are often coupled, namely the task split, the client data split, and the client task sequence. In HERO-Core, the main comparable benchmark, $\alpha$ controls client data skew and $\rho$ controls task-order mismatch. We evaluate representative FCL methods on CIFAR-100 and TinyImageNet using final average accuracy, average forgetting, and bottom-10\% client accuracy. We also include a graph-based Domain-IL portability case study on OGB-MolPCBA, where scaffold-domain granularity changes the input distribution while the prediction task remains fixed. Our results show that method behavior changes across easy and heterogeneous settings, that average accuracy can hide weak bottom-client performance, that task-order mismatch favors different strategies from synchronized evaluation, and that the same HERO interface can expose domain-shift difficulty beyond image-based FCIL. HERO releases benchmark streams, configurations, method implementations, and reporting scripts to support reproducible and setting-aware FCL evaluation.

---

*Source: [arXiv](https://arxiv.org/abs/2607.08784)*
