---
title: "GVPO++: Group Variance Policy Optimization for LLM Post-Training and On-Policy Distillation"
dek: "arXiv:2609.21432v1 Announce Type: new Abstract: Post-training plays a pivotal role in enhancing the reasoning capabilities and task-specific expertise of large language models (LLMs). Despite recent advances in..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-22
featured: false
gradient: grad-4
---

arXiv:2609.21432v1 Announce Type: new Abstract: Post-training plays a pivotal role in enhancing the reasoning capabilities and task-specific expertise of large language models (LLMs). Despite recent advances in post-training methods, such as Group Relative Policy Optimization (GRPO), their practical deployment remains impeded by training instability arising from the reliance on importance sampling. We introduce Group Variance Policy Optimization (GVPO), a novel post-training method that integrates the analytical solution of KL-constrained reward maximization into its gradient weighting scheme. This formulation provides an intuitive interpretation: GVPO's gradient corresponds to the mean squared error between the central distance of implicit rewards and that of actual rewards. GVPO offers two key advantages: (1) it guarantees a unique optimal solution, exactly to the KL-constrained reward maximization objective, and (2) it enables flexible sampling distributions without requiring importance sampling. Beyond general post-training, we show that GVPO naturally extends to on-policy distillation (OPD). Furthermore, GVPO enables the optimization of a broad family of extended OPD objectives, providing a principled foundation for diverse objective design. By unifying theoretical guarantees with practical adaptability, GVPO establishes a new paradigm for reliable and versatile LLM post-training and on-policy distillation.

---

*Source: [arXiv](https://arxiv.org/abs/2609.21432)*
