---
title: "Beyond Surface Style: Aligning Multi-Turn User Simulators with Behavioral Consistency"
dek: "arXiv:2609.28690v1 Announce Type: new Abstract: Faithful user simulation is fundamental to building, evaluating, and improving interactive AI at scale. However, plausible individual responses do not ensure that..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-25
featured: false
gradient: grad-4
---

arXiv:2609.28690v1 Announce Type: new Abstract: Faithful user simulation is fundamental to building, evaluating, and improving interactive AI at scale. However, plausible individual responses do not ensure that simulated users reproduce the intent evolution and outcomes observed in real interactions. We propose TRACER, a multi-turn user simulator that explicitly models users' evolving intent and learns to align simulated behavior with real interaction trajectories. TRACER is trained in two stages: supervised fine-tuning on real user dialogues, followed by multi-turn reinforcement learning. The RL stage combines hierarchical outcome- and trajectory-level rewards with deviation-aware advantage modulation, jointly mitigating reward sparsity and credit assignment in long dialogues. On real customer-service sessions organized into reference cohorts, TRACER-7B surpasses the strongest baseline by 11.4 conversion F1, while also achieving the lowest group-level conversion-rate error and semantic trajectory distance, and generalizing to out-of-distribution scenarios. Human Turing tests yield identification accuracy close to chance, supporting the perceived naturalness of generated conversations. Building on this simulator, we further introduce the Dynamic Marketing Benchmark, which jointly evaluates persuasion effectiveness and response quality of LLMs through simulated interactions, revealing that higher response quality does not necessarily correspond to higher conversion rates.

---

*Source: [arXiv](https://arxiv.org/abs/2609.28690)*
