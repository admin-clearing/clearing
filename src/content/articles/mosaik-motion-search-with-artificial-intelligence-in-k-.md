---
title: "MoSAIK: Motion Search with Artificial Intelligence in K-space"
dek: "arXiv:2610.27156v1 Announce Type: new Abstract: Object: Motion artefacts remain a major limitation of routine two-dimensional T2-weighted turbo spin-echo (TSE) brain MRI, reducing diagnostic confidence and often..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-22
featured: false
gradient: grad-4
---

arXiv:2610.27156v1 Announce Type: new Abstract: Object: Motion artefacts remain a major limitation of routine two-dimensional T2-weighted turbo spin-echo (TSE) brain MRI, reducing diagnostic confidence and often necessitating repeated acquisitions. MoSAIK (Motion Search with AI in K-space) retrospectively estimates in-plane rigid-body motion directly from standard multi-coil TSE k-space. Without a motion-free reference, external navigators, or additional acquisitions, MoSAIK infers motion from k-space self-consistency violations and incorporates predicted parameters into model-based, motion-aware reconstruction rather than synthesizing corrected images. Materials and Methods: Selected complex coil data were represented as log-magnitude and phase channels. A decoupled convolutional embedding and Transformer encoder estimated phase-encoding-line-indexed rotation and two-dimensional translations. Training used motion-free clinical acquisitions with simulated motion; four held-out subjects were evaluated. Component-wise errors assessed estimation; SSIM and PSNR in silico and entropy focus criterion (EFC) in vivo assessed reconstruction. Results: Motion estimation errors were low for both rotation (MSE $<$ 0.2 deg$^2$) and translation (MSE $<$ 0.2 pixels$^2$), with Pearson correlations of approximately 0.96 and 0.94, respectively. In every in-vivo acquisition, more than 75% of slices showed information gain relative to uncorrected reconstructions. MoSAIK reduced visible artefacts while preserving anatomical detail. Discussion: Transformer-based k-space motion-trajectory estimation enables fast retrospective correction of standard clinical TSE brain MRI.

---

*Source: [arXiv](https://arxiv.org/abs/2610.27156)*
