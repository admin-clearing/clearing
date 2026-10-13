---
title: "Transformer-Based Masked Diffusion Models Provably Learn Distributions with Latent Structure"
dek: "arXiv:2610.12544v1 Announce Type: new Abstract: Masked diffusion models (MDMs) generate discrete data by iteratively unmasking multiple tokens in parallel using a learned mask predictor. Their output carries two errors:..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-12
featured: false
gradient: grad-4
---

arXiv:2610.12544v1 Announce Type: new Abstract: Masked diffusion models (MDMs) generate discrete data by iteratively unmasking multiple tokens in parallel using a learned mask predictor. Their output carries two errors: parallelization error due to parallel sampling, and estimation error from the mask predictor learned with finite samples. Existing theory treats these errors separately, and the available statistical bounds typically scale with the number $V^L$ of length-$L$ sequences over a vocabulary of size $V$, suffering from the curse of dimensionality. In this work, we establish end-to-end statistical guarantees showing that transformer-based MDMs learn structured distributions with a sample complexity governed by their latent structure. Specifically, we model this structure through mixtures of hidden Markov trees, which capture latent dependencies within components and heterogeneity across components. When the data distribution is well approximated by such a mixture, a transformer-based MDM with parallel unmasking schedules achieves $\varepsilon$-accurate sampling in KL divergence with $\widetilde{O}(LK_{\mathrm{par}}/\varepsilon)$ training samples, where $K_{\mathrm{par}}$ is polynomial in $L$, $V$, the number of hidden states, and the number of mixture components. The transformer network and sampling procedure require no knowledge of the tree topologies or component parameters, thereby adapting to the unknown latent structure automatically. Overall, our results provide theoretical justification for the empirical effectiveness of MDMs on real-world data.

---

*Source: [arXiv](https://arxiv.org/abs/2610.12544)*
