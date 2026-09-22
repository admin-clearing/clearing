---
title: "PRQuant: Permutation Residual Quantization for Low-Overhead Inference"
dek: "arXiv:2609.22106v1 Announce Type: new Abstract: Accuracy of Low-bit quantization of linear layers is often dominated by a small number of outliers. Although existing methods, such as smoothing, rotation, or..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-09-22
featured: false
gradient: grad-4
---

arXiv:2609.22106v1 Announce Type: new Abstract: Accuracy of Low-bit quantization of linear layers is often dominated by a small number of outliers. Although existing methods, such as smoothing, rotation, or residual-based approaches, may mitigate this problem, they often introduce new accuracy bottlenecks to weights. Besides, most of these techniques are implemented as online approaches, which can result in heavy execution overheads. To address the afore-mentioned issues, We propose PRQuant (Permutation Residual Quantization), a training-free and low-overhead framework that combines channel reorganization with static weight-side residual compensation. After AWQ-style scaling, PRQuant identifies the input channels that contribute most to weight quantization error, permutes them into contiguous tail blocks, and constructs their residual weight sub-tensors offline. During inference, this contiguous structure enables the activation side to use tail blocks seamlessly without the expensive online gathering operation, and turns scattered residual compensation into a regular tail-augmented GEMM, substantially reducing latency. Experiments demonstrate that PRQuant effectively reduces down-projection reconstruction error. Ablation studies confirm that smoothing and residual compensation are the primary drivers of numerical improvement, while permutation provides a consistent marginal numerical benefit and, more importantly, enables a hardware-friendly contiguous layout that eliminates dynamic gathering overhead. Overall, PRQuant outperforms default MXFP4 and the evaluated PTQ baselines in average accuracy across five downstream benchmarks, improving over MXFP4 by 1.24 and 0.55 on Qwen3-4B-Instruct-2507 and Qwen3-30B-A3B-Instruct-2507, respectively.

---

*Source: [arXiv](https://arxiv.org/abs/2609.22106)*
