---
title: "Pistis Technical Report"
dek: "arXiv:2609.28554v1 Announce Type: new Abstract: We introduce the Pistis model family, comprising 27B- and 9B-parameter multimodal large language models built on Qwen3.6 and Qwen3.5, respectively, and developed through a..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-09-25
featured: false
gradient: grad-4
---

arXiv:2609.28554v1 Announce Type: new Abstract: We introduce the Pistis model family, comprising 27B- and 9B-parameter multimodal large language models built on Qwen3.6 and Qwen3.5, respectively, and developed through a general and scalable post-training framework. The framework first establishes a strong foundation through large-scale multimodal supervised fine-tuning (SFT). Building on this SFT foundation, we propose Interleaved Distillation and Reinforcement Learning (IDRL), a novel post-training paradigm that tightly integrates on-policy distillation and reinforcement learning within a single training loop. By alternating between the two objectives, rather than optimizing either in isolation or combining them in a static joint loss, IDRL enables more effective knowledge transfer, greater optimization stability, and more precise credit assignment for long-horizon agentic trajectories, leading to stronger performance while mitigating common capability trade-offs. At both model scales, the framework produces two specialized variants: Pistis-Thinking, designed to strengthen deep multimodal reasoning, and Pistis-Agentic, which additionally incorporates agentic trajectory data to support long-horizon planning, iterative reasoning, and tool use. Pistis-Agentic is particularly strong in multimodal search. Both scales outperform their corresponding base models. Beyond model-parameter optimization, we further introduce Pistis-Auto-Harnessing (PAH), a system-level method that automatically improves the agent's inference harness through iterative optimization. Experiments demonstrate that PAH enhances the model performance without updating the model parameters or increasing the interaction budget.

---

*Source: [arXiv](https://arxiv.org/abs/2609.28554)*
