---
title: "Dandelion: A Spherical Flower for Neural Simulation of Planetary Dynamics"
dek: "arXiv:2608.27521v1 Announce Type: new Abstract: Many dynamical processes unfold on the sphere but the default scientific machine learning architectures are Euclidean. Applying these architectures on a regular lat-lon..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-31
featured: false
gradient: grad-4
---

arXiv:2608.27521v1 Announce Type: new Abstract: Many dynamical processes unfold on the sphere but the default scientific machine learning architectures are Euclidean. Applying these architectures on a regular lat-lon grid causes problems: Cartesian convolutions become distorted at high latitude; 2D FFTs in Fourier neural operators incorrectly assume double periodicity; Cartesian positional encodings in ViTs distort spherical geodesic distances. Recent work moves towards natively spherical primitives, including spherical convolutions (e.g., DeepSphere or DISCO), Spherical Fourier Neural Operators (SFNOs), and geodesic attention. Here we propose Dandelion, a spherical version of Flower, a warp-based neural PDE solver. Layers of Dandelion predict a tangent-plane displacement and transport features along great circles. We obtain a U-Net-like structure by implementing hierarchical pooling entirely in the spherical-harmonic domain. There are thus no convolutions: spatial mixing is achieved only through spherical coordinate changes, or warps. To compare Dandelion with existing spherical architectures, we release an evolving benchmark suite of challenging, natively-spherical PDE datasets including a modified Galewsky jet, anomalous chained turbulence, Cahn-Hilliard decomposition, spherical Riemann shocks, Held-Suarez dry atmospheric transport and global ocean dynamics. This new benchmark fills the gap in existing spherical datasets which are either too small and stylized, or much too large (ERA5) for model iteration. Dandelion is best or second-best on every dataset, and the gap to non-warp baselines widens with resolution: at $256\times 512$, Dandelion and Flower2D occupy the top two slots in both single-step prediction and rollout.

---

*Source: [arXiv](https://arxiv.org/abs/2608.27521)*
