---
title: "Amortized Bandwidth Learning for Kernel Density Estimation under Logarithmic Score"
dek: "arXiv:2608.20445v1 Announce Type: new Abstract: Kernel density estimation converts finite samples into probability densities, but its performance depends critically on bandwidth selection. Classical selectors prescribe..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-24
featured: false
gradient: grad-4
---

arXiv:2608.20445v1 Announce Type: new Abstract: Kernel density estimation converts finite samples into probability densities, but its performance depends critically on bandwidth selection. Classical selectors prescribe the sample-to-bandwidth rule analytically or asymptotically, or solve a new optimization for each sample. An amortized framework is proposed that instead learns this mapping across a distribution of density-estimation tasks by optimizing the logarithmic score. A truncated-and-renormalized bounded-support formulation enables stable learning across heterogeneous tasks, while affine standardization allows a selector trained on a single reference interval to transfer across bounded intervals. Experiments under Gaussian sampling, a multi-family benchmark, and randomized Gaussian-mixture training show that the amortized selector consistently and substantially outperforms Silverman's rule, the Sheather--Jones selector, and least-squares cross-validation, with especially large gains in small and heterogeneous samples. Finite Gaussian mixtures provide a generic training mechanism supported by their $L^1$ approximation property. Selectors trained in this way generalize strongly across different density structures, allowing the same trained selector to be applied directly to finite samples from unknown densities without specifying or fitting a distributional family. This combination of broad applicability and strong empirical performance makes the framework attractive for a wide range of applications in which finite samples or ensembles must be converted into continuous probability densities.

---

*Source: [arXiv](https://arxiv.org/abs/2608.20445)*
