---
title: "Intrinsic Structure: Spectral Identifiability for Mechanistic Interpretability"
dek: "arXiv:2608.10172v1 Announce Type: new Abstract: Mechanistic interpretability explains models by identifying circuits inside them, but has no way to tell whether a circuit is a property of the model or an artifact of the..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-08-12
featured: false
gradient: grad-4
---

arXiv:2608.10172v1 Announce Type: new Abstract: Mechanistic interpretability explains models by identifying circuits inside them, but has no way to tell whether a circuit is a property of the model or an artifact of the method that found it. Sparse autoencoders illustrate the problem: different seeds and widths recover materially different features from the same activations, and no theory says whether that variability is incidental or structural. We put dictionary learning for interpretability on an identifiability footing. Treating the forward pass as a controlled dynamical system with depth as time and lifting it with the Koopman operator yields a finite linear realisation whose \emph{spectrum} is a coordinate-free property of the model. We prove the spectrum is recoverable from $M$ calibration samples at rate $M^{-1/2}$ up to permutation - to our knowledge the first identifiability theorem for a mechanistic-interpretability primitive, with a matching minimax lower bound, a median-of-means variant for heavy-tailed activations, and a dissociation theorem: whenever the realisation is non-normal, the directions carrying activation variance and the directions carrying information across depth cannot coincide. The identifiable object and the legible object are not the same object. On GPT-2 small, Gemma-2-2B and Qwen3-8B-Base the spectrum converges everywhere and attains the predicted exponent on Qwen3-8B-Base ($0.506 \pm 0.031$); shortfalls collapse onto one curve against each cell's sample threshold. Koopman modes beat random directions but lose to principal components on indirect-object identification, with the gap decaying $4.1\times$ in depth-distance, as the theorem predicts. The Koopman spectrum is an identifiable, model-intrinsic fingerprint with a stated error bar,

---

*Source: [arXiv](https://arxiv.org/abs/2608.10172)*
