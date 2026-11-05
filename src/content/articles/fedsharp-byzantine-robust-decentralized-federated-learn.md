---
title: "FedSharp: Byzantine Robust Decentralized Federated Learning Under Noisy Channel"
dek: "arXiv:2611.05546v1 Announce Type: new Abstract: Decentralized federated learning (DFL) eliminates the central aggregation server but remains vulnerable to data heterogeneity, Byzantine attacks, and channel noise. We..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-11-05
featured: false
gradient: grad-4
---

arXiv:2611.05546v1 Announce Type: new Abstract: Decentralized federated learning (DFL) eliminates the central aggregation server but remains vulnerable to data heterogeneity, Byzantine attacks, and channel noise. We show that noise accumulates as models propagate across nodes, becoming increasingly significant as the learning rate decays. Moreover, accumulated noise enables Byzantine attackers to exploit loss-based model selection by mimicking honest model averages. To address these challenges, we propose screened, hop-aware, ranked, proximal averaging, a robust DFL framework (FedSharp). In this approach, each node maintains models from its 2b predecessors, ensuring at least b honest candidates when at most b nodes are Byzantine. FedSharp screens suspicious models using coordinate-wise median deviations, averages the b lowest-loss candidates to reduce fresh channel-noise variance by a factor of b, and applies noise-adaptive gradient-norm regularization and proximal training to mitigate accumulated noise and non-IID drift. Experiments on a 100-node ring with 33 Byzantine nodes show that FedSharp achieves 93.5-94.9% accuracy on MNIST, compared with 29.4-38.1% for a state-of-the-art single-model-selection benchmark, and 32.8-48.8% on CIFAR-10, compared with 10.0-30.5%, across Gaussian and hidden attacks under IID and non-IID data. On MNIST, FedSharp also achieves accuracy within approximately one percentage point of the benchmark operating without channel noise.

---

*Source: [arXiv](https://arxiv.org/abs/2611.05546)*
