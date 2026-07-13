---
title: "Accelerating GPU Inference of Large Language Models with Moderately Unstructured Sparse Weight Matrices"
dek: "arXiv:2607.08786v1 Announce Type: new Abstract: With the growing deployment of large language models (LLMs), LLM inference cost has become a key challenge. Pruning techniques that introduce sparsity into weight matrices..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-07-13
featured: false
gradient: grad-4
---

arXiv:2607.08786v1 Announce Type: new Abstract: With the growing deployment of large language models (LLMs), LLM inference cost has become a key challenge. Pruning techniques that introduce sparsity into weight matrices can accelerate inference. However, maintaining model quality typically limits pruning to moderate unstructured sparsity (around 50\%). At these sparsity levels, none of the existing GPU kernels for sparse matrix multiplication (SpMM) can outperform their dense counterparts. This paper proposes an efficient GPU inference method for LLMs with moderate sparsity. We propose a three-layer matrix storage format comprising: (i) a Sparse-TC layer enabling sparse tensor cores to accelerate SpMM; (ii) a Slot-Filling layer using parallel differential distance for matrix compression while supporting low-cost on-chip decoding; (iii) a lightweight Residual Layer ensuring correct SpMM computation. Building on this format, we design a SpMM kernel that jointly utilizes sparse tensor cores and CUDA cores. This design enables an efficient execution pipeline and overlaps on-chip computation with memory access. Evaluations show that our work is the first to outperform dense matrix multiplication on modern GPUs equipped with high-bandwidth memory (HBM). It achieves up to 1.64x kernel-level speedup over SpInfer (EuroSys'25, Best paper) and up to 1.41x end-to-end speedups over FlashLLM (VLDB'24). Our source code: https://github.com/moui0/cudac.

---

*Source: [arXiv](https://arxiv.org/abs/2607.08786)*
