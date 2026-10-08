---
title: "Cascadia: Resident 975B MoE Inference on Eleven AI PCs"
dek: "arXiv:2610.07219v1 Announce Type: new Abstract: Mixture-of-experts models make nearly trillion-parameter capacity accessible with sparse per-token computation, provided that the serving system can distribute the weights..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-10-08
featured: false
gradient: grad-4
---

arXiv:2610.07219v1 Announce Type: new Abstract: Mixture-of-experts models make nearly trillion-parameter capacity accessible with sparse per-token computation, provided that the serving system can distribute the weights and coordinate their execution. We present Cascadia's resident execution of Inkling, a 975B-total/41B-active-parameter model, on eleven Intel Core Ultra X7 358H AI PCs, each with 64 GB of memory, Arc B390 integrated graphics and gigabit Ethernet. We contribute a custom resident MoE engine that preserves Inkling's routing rules, constructs compressed graphs for OpenVINO's fused iGPU primitives, and coordinates FP16 expert computation with FP32 output restoration. The engine fits six consecutive decoder layers per machine and represents dense feed-forward blocks as all-active expert slices, reducing measured dense-layer call time from approximately 8.1 to 4.5 ms. A streaming pipeline coordinates concurrent generation, while captured-state draft evaluation measures agreement with the deployed numerical path. Paired measurements at fifteen concurrency levels from 1 to 176 streams reach 60.29 aggregate decode tokens/s at 88 streams, with 46.87 tokens/s over the complete serving phases. At fifteen streams, median first-token latency is 6.05 s. Raising the context budget from the 1,024-position default, real prompts of 1k to 64k tokens recover the embedded code in all 19 measured answers, with first-token time growing as $aN+bN^2$ and decode latency growing approximately linearly, both bounded by a single-threaded CPU attention loop rather than by memory, which holds 512k positions per stream. Evaluation on captured fleet states separates the effects of vocabulary selection and weight quantization on draft agreement. Together, these contributions establish an e

---

*Source: [arXiv](https://arxiv.org/abs/2610.07219)*
