---
title: "RoLaQ: Joint Rotation and Range Calibration for 2-Bit KV Caches in Multi-Head Latent Attention"
dek: "arXiv:2610.20686v1 Announce Type: new Abstract: Multi-head latent attention (MLA) compresses the content of a key-value cache into a shared latent per token, making low-bit storage attractive for long-context inference...."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-10-16
featured: false
gradient: grad-4
---

arXiv:2610.20686v1 Announce Type: new Abstract: Multi-head latent attention (MLA) compresses the content of a key-value cache into a shared latent per token, making low-bit storage attractive for long-context inference. At two bits, errors in this representation perturb both attention matching and value readout, with effects that depend on error direction and reconstruction scale. We introduce RoLaQ (Rotation-calibrated Latent Quantization), an offline method for joint rotation and range calibration. RoLaQ refines a shared rotation within subspaces defined by the frozen key and value projections, and jointly learns quantization ranges whose thresholds and reconstruction gains are coupled to control the shared signal's response. Prediction matching and attention-output supervision guide calibration with model weights frozen. Across three MLA models and six benchmarks, RoLaQ achieves the highest average accuracy among the compared 2-bit methods both without and with token protection. On DeepSeek-V2-Lite, an SGLang implementation provides 3.96 times the BF16 KV capacity under the same memory budget and 2.51 times its decode throughput with 256K input tokens.

---

*Source: [arXiv](https://arxiv.org/abs/2610.20686)*
