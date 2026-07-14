---
title: "Prioritizing Search Space Regions in the Low Autocorrelation Binary Sequences Problem"
dek: "arXiv:2607.09688v1 Announce Type: new Abstract: Low autocorrelation binary sequences problem (LABS) is a hard combinatorial optimization challenge with important applications in communications, signal processing, and..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-07-14
featured: false
gradient: grad-4
---

arXiv:2607.09688v1 Announce Type: new Abstract: Low autocorrelation binary sequences problem (LABS) is a hard combinatorial optimization challenge with important applications in communications, signal processing, and satellite navigation. This paper proposes a hybrid search framework that combines Thompson sampling with parallel self-avoiding walks to adaptively allocate computational effort across restriction classes of the LABS search space. By modeling partitions as arms in a multi-armed bandit setting, the proposed method dynamically shifts search resources toward partitions that empirically produce higher merit factors while maintaining exploration of less-sampled regions. The approach is further accelerated through GPU-parallel execution, shared posterior updates, efficient neighborhood evaluation, and a Bloom filter for cycle prevention. In addition, we use a two-stage optimization strategy that first searches constrained partitioned skew-symmetric spaces and then refines the best candidates in the unrestricted space. Experiments on long binary sequences show that the proposed method improves the previously best-known results for 35 sequence lengths in the range $450 \le L \le 527$ and for $L=573$. In particular, we report a new longest sequence with merit factor exceeding $8.0$, obtained for $L=451$. The results also show that Thompson sampling effectively prioritizes partitions with better observed performance, confirming the value of online, data-driven resource allocation in LABS optimization. Overall, the proposed framework provides a scalable and effective strategy for high-performance merit factor maximization.

---

*Source: [arXiv](https://arxiv.org/abs/2607.09688)*
