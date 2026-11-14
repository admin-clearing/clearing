---
title: "Together Compiler: Continual Compilation for AI Inference"
dek: "arXiv:2611.14681v1 Announce Type: new Abstract: Today's AI workloads are rapidly changing: new models are released more often, model architectures are increasingly diverse, and traffic distributions change frequently...."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-11-14
featured: false
gradient: grad-4
---

arXiv:2611.14681v1 Announce Type: new Abstract: Today's AI workloads are rapidly changing: new models are released more often, model architectures are increasingly diverse, and traffic distributions change frequently. The challenge we face at Together AI is continual optimization for these changing workloads. Compiling a deployment into an optimized forward pass is a challenge that is well-suited for agent hill-climbing. Existing systems struggle with continual compilation due to a tradeoff between measurement throughput and fidelity. Many systems use agents to optimize individual kernels from the inference forward pass using offline benchmarks, but timings are low-fidelity because of data-dependent behavior in primitives like mixture-of-experts (MoE). On the other hand, systems use agents to directly optimize end-to-end engines but suffer from slow engine launch times. To address these challenges, we build Together Compiler (TKCC), the first truly continual agent loop designed for AI inference optimization. To address the throughput-fidelity tradeoff, we propose: (1) a Tiered Persistent Engine that decouples engine launch overheads from forward pass computation; (2) a cost model to select the parallelism configurations that seed the optimization process. We also conduct extensive ablations on agent context management and present our insights on deploying TKCC in production. TKCC outperforms highly-optimized hand-written Megakernels on the Llama 1B workhorse workload by up to 1.7x and the best open source engines on the latest frontier models (Kimi K3, GLM 5.3, MiniMax M3.1 Flash, DeepSeek v4.1 Flash) across hardware platforms by up to 2.6x higher TPS on the InferenceX benchmark. TKCC also sets the state-of-the-art performance at batch size 1, with 1111 TPS on M3.1 Flas

---

*Source: [arXiv](https://arxiv.org/abs/2611.14681)*
