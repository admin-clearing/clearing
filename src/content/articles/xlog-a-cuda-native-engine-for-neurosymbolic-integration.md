---
title: "XLOG: A CUDA-Native Engine for Neurosymbolic Integration"
dek: "arXiv:2609.27203v1 Announce Type: new Abstract: xlog is a CUDA-native logic programming engine integrating neural perception with deterministic Datalog, probabilistic inference, and epistemic world views through a typed..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-09-24
featured: false
gradient: grad-4
---

arXiv:2609.27203v1 Announce Type: new Abstract: xlog is a CUDA-native logic programming engine integrating neural perception with deterministic Datalog, probabilistic inference, and epistemic world views through a typed frontend and provider-owned CUDA runtime. Its reasoning modes share device data planes, but their execution boundaries differ: ordinary Datalog and exact inference are host-orchestrated, while certified resident recursive and Monte Carlo sampled cores record zero tracked host-device transfers before a bounded terminal receipt. The probabilistic path supports end-to-end gradients through GPU knowledge compilation from provenance to CNF to Decision-DNNF, exact weighted model counting, and backward gradients. A final smoothed circuit is certified against its source formula before caching or evaluation. Circuit caching yields a 2.74x MNIST-addition training speedup; a worst-case-optimal join subsystem yields a 27.96x geometric-mean gain over xlog's binary-join baseline. MNIST-addition accuracy matches Scallop's (0.9561 versus 0.9468), but no per-epoch speed claim is made because baseline epoch time varies with CPU quota. In five hub-skewed triangle-counting cases, the Souffle-to-fused-xlog execution-time ratio rises from 0.88x at 150k edges, where Souffle is faster, to 5.54x at 1.2M; fused peak device allocations are 85-1,033 MB versus 3,287-44,979 MB for the materializing arm. Exact inference is correctness-equivalent to but slower than ProbLog2. On a public video benchmark, a proximity predicate trained only through symbolic credit replaces hand-set geometry at unchanged held-out accuracy; within Event-Calculus rule search it fails ten-fold cross-validation and does not transfer on a leak-free split. On a maritime corpus, weighted clauses beat crisp select

---

*Source: [arXiv](https://arxiv.org/abs/2609.27203)*
