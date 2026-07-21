---
title: "Masked Diffusion Language Models are Strong and Steerable Text-Based World Models for Agentic RL"
dek: "arXiv:2607.16204v1 Announce Type: new Abstract: Recent growth in reinforcement learning (RL) has surfaced a need for diverse, specialized training environments. Hand-curated environments with fixed task and reward..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-07-21
featured: false
gradient: grad-4
---

arXiv:2607.16204v1 Announce Type: new Abstract: Recent growth in reinforcement learning (RL) has surfaced a need for diverse, specialized training environments. Hand-curated environments with fixed task and reward difficulties become ineffective signals as model performance improves, and sparse rewards over long horizons induce mode collapse on specific workflows or tool structures. World models that simulate environment states have matched pure rollout performance, making them promising for scaling diversity on-demand. However, autoregressive (AR) world models suffer from a left-to-right bias preventing conditioning on globally interdependent state anchors such as tool schemas, prior turns, and expected outcomes. We (i) formalize text-based world modeling as a steerable transition-dynamics problem decomposed into initial state, task context, tool schemas, domain rules, and steering directives, and (ii) curate 239,403 grounded state-action trajectories spanning nine open-source environments and twelve frontier model families. We compare AR LMs and masked diffusion language models (MDLMs), showing MDLMs, via bidirectional anchor-aware denoising, achieve better coherence, groundedness, and empirically validated rollout diversity than LLMs over 4x their parameter size, at comparable inference latency. We introduce a plug-and-play GRPO training framework with deterministic state checks, and perform zero-shot transfer ablations on three OOD environments (ScienceWorld, ALFWorld, AppWorld) across three 1.2B-7B agent backbones (LFM2.5, Qwen3, Mistral), achieving up to 47% absolute gains over baselines without environment-specific fine-tuning. We further conduct behavioral analysis of failure modes under adversarial scenarios and human evaluation on realism, outcome correctness,

---

*Source: [arXiv](https://arxiv.org/abs/2607.16204)*
