---
title: "Predicting Privileged Information Effectiveness for On-Policy Self-Distillation"
dek: "arXiv:2610.22512v1 Announce Type: new Abstract: On-policy self-distillation (OPSD) enables large language models (LLMs) to learn from privileged information (PI) without a separate teacher model. However, prior work..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-19
featured: false
gradient: grad-4
---

arXiv:2610.22512v1 Announce Type: new Abstract: On-policy self-distillation (OPSD) enables large language models (LLMs) to learn from privileged information (PI) without a separate teacher model. However, prior work largely treats PI as a fixed design choice, leaving the effects of its content and construction poorly understood. This challenge is particularly important in multi-turn agentic settings, where trajectories contain actions, observations, and reasoning that can be transformed into PI in many ways. We systematically evaluate 16 PI configurations across three multi-turn agentic benchmarks and three student models that vary in scale and reasoning mode. We find that PI effectiveness depends on its content, generation source, and the student model. Information-dense trajectories and PI produced by more capable generators generally yield larger gains, whereas thinking models benefit less consistently. To assess PI before training, we compare PI utility with two KL-based metrics: sampled-token reverse KL ($D$) and error-step KL contrast ($\Delta d^{-}_{\mathrm{err}}$). The KL-based metrics track post-training performance more consistently than PI utility, which can be distorted by information leakage. Empirically, selecting each task's PI by $\Delta d^{-}_{\mathrm{err}}$ also improves post-training performance over random selection, most when the PI candidates differ widely. Finally, effective PI remains beneficial when combined with GRPO, allowing the combined objective to outperform a strong GRPO baseline. Overall, our results provide practical guidance for constructing and evaluating PI in OPSD training.

---

*Source: [arXiv](https://arxiv.org/abs/2610.22512)*
