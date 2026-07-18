---
title: "Dysco: Dynamic Subspace Boosting to Mitigate LoRA Interference in Federated Learning"
dek: "arXiv:2607.14367v1 Announce Type: new Abstract: Federated fine-tuning of large pre-trained models increasingly relies on Low-Rank Adaptation (LoRA) to reduce communication and computation, but heterogeneous clients can..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-07-18
featured: false
gradient: grad-4
---

arXiv:2607.14367v1 Announce Type: new Abstract: Federated fine-tuning of large pre-trained models increasingly relies on Low-Rank Adaptation (LoRA) to reduce communication and computation, but heterogeneous clients can make adapter aggregation unstable. We identify the data-parameter interference as a geometric source of this instability. This interference is controlled by the alignment between LoRA update subspaces and client activations, suggesting that federated LoRA aggregation should be viewed not only as parameter averaging but also as subspace allocation. We propose Dynamic Subspace Boosting (Dysco), a plug-in method that allocates client-specific LoRA subspaces in a federated and dynamic manner. In each round, clients compute activation-insensitive subspaces from local representations and transmit only the resulting bases; the server then constructs client-specific merged subspaces through a closed-form solution that maximizes compatibility with other clients' insensitive directions. To handle representation drift, Dysco performs multi-round subspace boosting to preserve past update directions while adapting to future representations. We provide a convergence analysis that embeds the data-parameter interference as an aggregation-error term in a standard federated optimization bound, and prove that Dysco's server-fixed merged subspaces yield a tighter upper bound on this error. Experiments on controlled synthetic federated tasks and on MIMIC-IV clinical-note classification with Llama-3.2-1B show that Dysco substantially reduces interference, reduces the final-round synthetic training loss by up to 9 times relative to baselines under the orthogonal-subspace partition the theory identifies, improves all five tested FL algorithms by up to 4.3% on MIMIC, outperforms 

---

*Source: [arXiv](https://arxiv.org/abs/2607.14367)*
