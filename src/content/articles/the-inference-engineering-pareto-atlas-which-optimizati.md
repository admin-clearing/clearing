---
title: "The Inference Engineering Pareto Atlas: Which Optimizations Dominate the Cost, Quality, and Latency Frontier?"
dek: "arXiv:2609.17863v1 Announce Type: new Abstract: LLM inference optimizations report speedups on different models, GPUs, prompts, and quality metrics, making them hard to compare or combine. We build a cost, quality, and..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-09-17
featured: false
gradient: grad-4
---

arXiv:2609.17863v1 Announce Type: new Abstract: LLM inference optimizations report speedups on different models, GPUs, prompts, and quality metrics, making them hard to compare or combine. We build a cost, quality, and latency Pareto atlas to identify the best configurations for different deployment constraints. Since exhaustive testing is impractical, we measure 54 configurations of Qwen2.5-7B-Instruct running on vLLM 0.12 across L4, A100, and H100 GPUs and use these anchors to calibrate a simulator. It reproduces measurements at anchored batch sizes, with cross campaign drift below 1.5 percent. A separate quality evaluation tests FP16, AWQ 4bit, FP8 weights, and FP8 KV cache on 200 GSM8K questions with five examples per prompt. Sparse attention is evaluated only in simulation. On the calibrated grid, 18 of 36 configurations reach the Pareto frontier. Combined methods reach it more often than individual methods, with 9 of 15 combinations versus 9 of 21 single methods. Quality testing changes the winners. AWQ 4bit reduces per token latency to 0.34 times baseline on L4 but loses 5.9 percent of strict GSM8K accuracy, narrowly missing the 95 percent quality floor within sampling uncertainty. Flexible answer extraction matches FP16 accuracy, suggesting the loss comes from formatting rather than arithmetic. FP8 weights retain 99.4 percent of baseline accuracy at 0.61 to 0.65 times baseline latency across all three GPUs and appear in three of four regime winners. A naive FP8 KV cache maintains normal throughput but answers none of the 200 questions correctly, showing why speed alone is insufficient. Under two prompt designs, n gram speculative decoding measures at 0.90 to 0.98 times baseline and adds no benefit on this stack. The best choice depends on the constraint and GPU:

---

*Source: [arXiv](https://arxiv.org/abs/2609.17863)*
