---
title: "Fixed State, Long Reach: What a Constant-Size Cache Buys Block Diffusion at Scale"
dek: "arXiv:2609.11998v1 Announce Type: new Abstract: Diffusion language models decode tokens in parallel, but their bidirectional denoiser rules out the naive key--value (KV) cache behind fast autoregressive inference. Block..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-09-14
featured: false
gradient: grad-4
---

arXiv:2609.11998v1 Announce Type: new Abstract: Diffusion language models decode tokens in parallel, but their bidirectional denoiser rules out the naive key--value (KV) cache behind fast autoregressive inference. Block diffusion restores caching by decoding block-by-block, and the block caches deployed on it so far are tied to attention: O(L)in memory and, if used as training-free retrofits, only an approximation of the model's computation. Both constraints can be overcome: sequence mixers that summarize finalized blocks into a reusable state support block caching, and the corresponding block-causal training objective makes the cache exact. We study this recipe at scale, pretraining three 3B block-diffusion denoisers (attention, mamba, and hybrid) on 300B tokens under one single-frontier objective and decoding all three through a single cached interface. Only the state-space cache is O(1) in sequence length: its memory and per-step latency stay constant at any context length, while an attention cache remains O(L). At 256k tokens (where attention has grown to 82GB and 29 ms/step), the Mamba cache delivers 4.3x lower latency, 11x less memory, and 2.6x higher single-stream throughput; and because that footprint is constant it scales with batch as well, reaching 14x the aggregate throughput, where attention cannot run beyond a single stream. The same linear-state bias lets the Mamba and hybrid backbones keep retrieving out to 8-16x their training length, whereas attention's retrieval collapses at 2x, at no measured quality cost.

---

*Source: [arXiv](https://arxiv.org/abs/2609.11998)*
