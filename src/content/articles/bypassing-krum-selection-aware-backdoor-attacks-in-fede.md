---
title: "Bypassing Krum: Selection-Aware Backdoor Attacks in Federated Learning"
dek: "arXiv:2608.06637v1 Announce Type: new Abstract: Robust aggregation methods are widely used in federated learning to mitigate the impact of adversarial client behavior. Distance-based aggregation rules, such as Krum and..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-10
featured: false
gradient: grad-4
---

arXiv:2608.06637v1 Announce Type: new Abstract: Robust aggregation methods are widely used in federated learning to mitigate the impact of adversarial client behavior. Distance-based aggregation rules, such as Krum and Multi-Krum, select updates that are closest to the majority under the assumption that benign updates form a compact cluster. However, these methods rely on geometric properties that can be exploited by adaptive adversaries. We introduce the Krum-Proxy attack, a selection-aware backdoor injection strategy that consistently bypasses Byzantine-robust aggregation. Rather than relying on naive scaling or constraining, our method actively optimizes malicious updates to infiltrate the dense core of the benign distribution. The proposed method constructs adversarial updates that are not only similar to benign updates but are also optimized to lie in regions of the update space that are favored during aggregation. This is achieved through a two-stage optimization procedure that separates task-specific attack objectives from geometry-aware refinement, using a nearest-neighbor proxy, stochastic reference modeling, and anchor-guided alignment. To maintain stealth, we introduce a projection mechanism that constrains adversarial updates within realistic norm and variance bounds. Experiments on standard federated learning benchmarks show that Krum-Proxy achieves higher attack success while preserving clean accuracy, highlighting the vulnerability of distance-based aggregation to selection-aware adversaries.

---

*Source: [arXiv](https://arxiv.org/abs/2608.06637)*
