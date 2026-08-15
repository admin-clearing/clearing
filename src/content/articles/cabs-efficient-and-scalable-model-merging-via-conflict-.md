---
title: "CABS+: Efficient and Scalable Model Merging via Conflict-Aware Sparsification and Adaptive Weight Allocation"
dek: "arXiv:2608.12842v1 Announce Type: new Abstract: Model merging has recently attracted significant attention as a promising paradigm for constructing unified multi-task models without requiring additional retraining...."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-08-15
featured: false
gradient: grad-4
---

arXiv:2608.12842v1 Announce Type: new Abstract: Model merging has recently attracted significant attention as a promising paradigm for constructing unified multi-task models without requiring additional retraining. However, parameter conflicts and knowledge interference across tasks often degrade merged-model performance. Prior work introduced Conflict-Aware and Balanced Sparsification (CABS), which reduces parameter interference through structured pruning and sequential masking. However, CABS relies on grid search to determine scaling coefficients, resulting in exponential time complexity, while its optimization objective can be dominated by high-performance tasks, leading to suboptimal overall performance. To address these limitations, we extend CABS and propose CABS+. Specifically, Adaptive Weight Allocation (AWA) optimizes merging coefficients via a gradient-free search scheme to reduce time complexity, while an asymmetric fitness function promotes more comprehensive performance gains across tasks. Moreover, we conduct a systematic empirical study of key factors influencing model merging performance and propose Relative Synergy Score (RSS) to quantify model mergeability and guide model selection. We compare CABS+ with state-of-the-art model merging methods, including CABS, AdaMerging, and WUDIMerging, across 27 datasets and 5 models covering large language, small-scale language, and vision models. Extensive experiments verify the effectiveness and efficiency of CABS+. Compared with AdaMerging and WUDIMerging, CABS+ improves overall performance by 16.97% and 12.93%, respectively, exhibits stronger stability and robustness across varying task numbers and model architectures, uses less than 25% of the GPU memory required by AdaMerging, and achieves nearly a 4x speedup 

---

*Source: [arXiv](https://arxiv.org/abs/2608.12842)*
