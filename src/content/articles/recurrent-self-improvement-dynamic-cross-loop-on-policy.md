---
title: "Recurrent Self-Improvement: Dynamic Cross-Loop On-Policy Distillation for Looped Language Models"
dek: "arXiv:2610.10623v1 Announce Type: new Abstract: Looped Language Models (LoopLMs) offer a parameter efficient approach to scaling reasoning by reusing shared parameters across recurrent computation steps. Despite their..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-10-09
featured: false
gradient: grad-4
---

arXiv:2610.10623v1 Announce Type: new Abstract: Looped Language Models (LoopLMs) offer a parameter efficient approach to scaling reasoning by reusing shared parameters across recurrent computation steps. Despite their promise, effective post-training of LoopLMs remains challenging. Existing approaches either provide reward based supervision that is sparse or costly to extend across loops, or rely on external teachers or privileged information, leading to limited teacher availability or teacher-student context mismatch. To address these limitations, we introduce LoopOPD, a cross-loop on-policy distillation framework that uses additional recurrent computation within a LoopLM as its own source of supervision. LoopOPD uses a frozen terminal loop policy as a compute privileged teacher for an intermediate loop student on student generated rollouts, providing dense supervision without an external teacher or privileged information. We further propose Dynamic LoopOPD (D-LoopOPD), which continually refreshes the terminal loop teacher as the shared model parameters are updated, enabling recurrent self-improvement. We characterize how distillation updates propagate across loop depths and derive sufficient conditions under which a single update yields simultaneous local improvement at both loop depths. Experiments on Ouro-Thinking models show that LoopOPD improves mathematical reasoning, while D-LoopOPD yields further gains through dynamic teacher updates. Despite being trained only on mathematical data, the resulting models also improve on general reasoning and code generation benchmarks, demonstrating that recurrent computation can serve as an effective source of supervision for LoopLMs. Our code and model checkpoints will be released upon acceptance.

---

*Source: [arXiv](https://arxiv.org/abs/2610.10623)*
