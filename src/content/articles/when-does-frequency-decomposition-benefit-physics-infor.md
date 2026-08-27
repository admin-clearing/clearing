---
title: "When Does Frequency Decomposition Benefit Physics-Informed Neural Networks? A Preliminary Ablation Study"
dek: "arXiv:2608.24940v1 Announce Type: new Abstract: Partial differential equations (PDEs) often have high-frequency and multi-scale features that neural networks struggle to approximate. Physics-Informed Neural Networks..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-27
featured: false
gradient: grad-4
---

arXiv:2608.24940v1 Announce Type: new Abstract: Partial differential equations (PDEs) often have high-frequency and multi-scale features that neural networks struggle to approximate. Physics-Informed Neural Networks (PINNs) build the governing equations directly into training, but suffer from spectral bias: they learn low-frequency components faster than high-frequency ones. Techniques such as Fourier feature embeddings and sinusoidal activations address this, but most studies assume they help across the board without checking which spectral regimes actually benefit. We introduce a dual-branch, spectrally-gated architecture (DBSG-PINN) that splits low- and high-frequency components into separate subnetworks joined by an adaptive gate, and use it to run a partially controlled ablation of frequency decomposition and spectral routing. We test this on five one-dimensional benchmark PDEs, ranging from smooth, single-scale problems to oscillatory, multi-scale ones. Frequency decomposition helps most on the spectrally complex benchmarks, cutting relative $L_2$ error by up to $59.2\%$ on a multimodal wave problem, but gives little benefit on smoother PDEs. On one benchmark (1D Wave), it performs substantially worse than a simpler fixed-combination variant. The gate's benefit scales with how spectrally rich the target solution is: the full model's advantage over the ablations is largest on multi-scale benchmarks and smallest (or negative) on single-scale ones, consistent with the gate exploiting frequency structure rather than acting as noise,though we do not directly visualize or quantify its spatial activations in this study. All results come from a single training seed across five 1D benchmarks, so we present this as an exploratory study meant to raise questions rather than a

---

*Source: [arXiv](https://arxiv.org/abs/2608.24940)*
