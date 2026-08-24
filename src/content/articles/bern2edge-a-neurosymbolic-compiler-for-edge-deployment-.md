---
title: "Bern2Edge: A Neurosymbolic Compiler for Edge Deployment via Bernstein Polynomial Networks"
dek: "arXiv:2608.20497v1 Announce Type: new Abstract: Deploying high-accuracy neural networks on resource-constrained edge devices remains challenging, as existing approaches treat training, compression, and hardware..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-08-24
featured: false
gradient: grad-4
---

arXiv:2608.20497v1 Announce Type: new Abstract: Deploying high-accuracy neural networks on resource-constrained edge devices remains challenging, as existing approaches treat training, compression, and hardware synthesis as separate stages, leaving a gap between software-trained models and efficient end-to-end deployment with limited support for interpretability. We propose Bern2Edge, an end-to-end framework that uses knowledge distillation to convert a pretrained teacher feed-forward network into hardware-efficient representations via Bernstein polynomial activations. This representation enables two deployment paths: (i) a high-fidelity LUT-based realization that preserves model fidelity under compression, and (ii) a symbolic rule-based representation derived from Bernstein activation geometry, enabling interpretable inference with explicit input-space constraints. The resulting BNNs achieve up to 2.12 percentage-point (pp) accuracy improvement over ReLU under identical compression constraints. At the system level, Bern2Edge achieves up to 99.8% latency reduction and 95.2% BRAM reduction relative to a W8A8 quantized teacher on an AMD Xilinx KV260 FPGA, while maintaining accuracy within 0.5 pp, and further deploys on a low-power Spartan-7 XC7S15 FPGA. The rule-based path reduces DSP usage by up to 89.0% at a cost of 1.5 pp in total accuracy.

---

*Source: [arXiv](https://arxiv.org/abs/2608.20497)*
