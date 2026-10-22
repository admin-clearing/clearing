---
title: "STAR-XPC: Set Transformer for Estimating X-ray Transmission in Polymer Composites"
dek: "arXiv:2610.28709v1 Announce Type: new Abstract: Evaluating the energy transmission ratio of an X-ray beam through a polymer composite is a challenging task in radiation shielding studies. The reference solution with..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-10-22
featured: false
gradient: grad-4
---

arXiv:2610.28709v1 Announce Type: new Abstract: Evaluating the energy transmission ratio of an X-ray beam through a polymer composite is a challenging task in radiation shielding studies. The reference solution with Monte Carlo transport simulation is highly accurate but computationally expensive: each of our reference simulations is capped at $4\times10^9$ photon histories and a 20,000 s (over 5 hours) time limit, while closed-form analytical methods fail to represent such complex scenarios. We present an artificial neural network model that maps the unordered multi-set of molecular constituents, their mass fractions, and four bulk physical descriptors directly to the transmission ratio $I(t)/I_0$ in 1-3 milliseconds. The model is a Set Transformer, which makes it permutation invariant by construction and accepts mixtures of different sizes up to 11 constituents within a fixed-size padded set. Each constituent is embedded with a chemistry-pretrained transformer language model, ChemBERTa. In our proposed method, training data are produced by an automated PENELOPE/penEasy pipeline using the radiation source at 30, 80, 100, and 120 kV tube voltages over polyethylene-based shielding composite slabs of thicknesses spanning 0.15-2.5 mm. After preprocessing, the dataset contains $n = 4697$ simulated configurations on which a leakage-free, jointly stratified 10-fold cross-validation is performed, attaining mean squared error MSE = $(1.12 \pm 0.56)\times10^{-4}$, normalized-MSE percentage NMSE% = 0.0294% $\pm$ 0.0147%, and $R^2 = 0.9988$. The corresponding per-sample percentage errors give an alpha-trimmed ($\alpha = 0.10$) absolute percentage error (APE) of 1.66% and a median APE of 1.15%. Our model's inference is several orders of magnitude faster than the underlying Monte Ca

---

*Source: [arXiv](https://arxiv.org/abs/2610.28709)*
