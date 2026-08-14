---
title: "Geometry-aware Incremental Neural Operator for Long-Horizon PDE prediction"
dek: "arXiv:2608.11237v1 Announce Type: new Abstract: Neural operators have shown strong potential for learning solution operators of partial differential equations (PDEs). However, long-horizon autoregressive prediction..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-13
featured: false
gradient: grad-4
---

arXiv:2608.11237v1 Announce Type: new Abstract: Neural operators have shown strong potential for learning solution operators of partial differential equations (PDEs). However, long-horizon autoregressive prediction remains challenging: local errors accumulate as spectral inconsistency, phase misalignment, or mean drift. Existing methods mainly improve state representations and operator backbones, while leaving the repeatedly applied latent transition increment weakly structured, allowing spectral errors and unstable channel couplings to accumulate during rollout. To address these issues, we propose a geometry-aware incremental neural operator (GeoIncNO) for stable long-horizon PDE prediction. GeoIncNO predicts latent increments for residual advancement and uses lightweight low-rank projectors to regulate channel coupling within active frequency bands derived from the increment spectral energy distribution. To reduce physical-space reconstruction errors, GeoIncNO further introduces a mean--fluctuation decoupled reconstruction mechanism, where stable mean structures and dynamic fluctuations are fused separately, and phase correction is applied only to the zero-mean fluctuation component. Extensive experiments on six PDE benchmarks, covering 1D, 2D, and 3D dynamical systems, show that GeoIncNO achieves consistently strong prediction accuracy, improved rollout stability, and better spectral fidelity compared with competitive neural-operator baselines.

---

*Source: [arXiv](https://arxiv.org/abs/2608.11237)*
