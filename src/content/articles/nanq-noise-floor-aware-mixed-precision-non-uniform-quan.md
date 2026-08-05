---
title: "NANQ: Noise-Floor-Aware Mixed-Precision Non-Uniform Quantization for Analog Compute-in-Memory"
dek: "arXiv:2608.02700v1 Announce Type: new Abstract: Analog compute-in-memory (CIM) enables energy-efficient neural network inference, but device variation and read noise can severely degrade low-bit quantized models...."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-08-05
featured: false
gradient: grad-4
---

arXiv:2608.02700v1 Announce Type: new Abstract: Analog compute-in-memory (CIM) enables energy-efficient neural network inference, but device variation and read noise can severely degrade low-bit quantized models. Existing CIM-oriented quantization methods mainly minimize ideal quantization error, ignoring the hardware noise floor and thus causing inefficient precision allocation. We propose NANQ, a noise-aware mixed-precision non-uniform quantization framework for analog CIM. NANQ models magnitude-dependent weight noise from measured responses of an eFlash CIM array and converts the noise profile into an adaptive quantization density, assigning finer resolution to low-noise regions while avoiding ineffective precision in noise-dominated regions. It further assigns layer-wise bit-widths by identifying each layer's precision saturation point under hardware noise using a unified threshold. On-chip experiments on an eFlash CIM SoC show that, under 2-bit weight-magnitude quantization, NANQ improves vision-model accuracy by 8.05 percentage points and reduces language-model PPL by 54.7% on average over PowerQuant. Mixed-precision NANQ captures most of the gains obtainable from additional quantization resources with only 3.2-3.8 equivalent bits.

---

*Source: [arXiv](https://arxiv.org/abs/2608.02700)*
