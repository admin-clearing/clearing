---
title: "Edit, Don't Imitate: Minimal-Edit On-Policy Distillation for Multimodal Reasoning"
dek: "arXiv:2610.30231v1 Announce Type: new Abstract: Visual mathematical reasoning can fail before reasoning begins: when a vision-language model (VLM) misreads a diagram, subsequent reasoning proceeds from false premises...."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-10-23
featured: false
gradient: grad-4
---

arXiv:2610.30231v1 Announce Type: new Abstract: Visual mathematical reasoning can fail before reasoning begins: when a vision-language model (VLM) misreads a diagram, subsequent reasoning proceeds from false premises. This perceptual bottleneck is especially pronounced in smaller models, while accurate textual descriptions can substantially narrow the gap to larger models. Because obtaining such descriptions at inference requires additional annotation or model calls, we propose minimal-edit corrective on-policy distillation. Using reference figure descriptions and verified reference solutions as training-only information, a teacher scores incorrect student rollouts under a minimal-edit objective, and only teacher-disfavored tokens contribute to the corrective loss. Correct rollouts receive task-reward reinforcement learning. This preserves on-policy supervision while avoiding full-response imitation. Across model scales, the method requires no descriptions at test time and meets or exceeds the corresponding base model supplied with a reference figure description at inference. It also improves perception-oriented performance, particularly low-level geometric perception, and transfers to external mathematics and perception benchmarks. Because the minimal-edit teacher evaluates corrections rather than generating its own solution, the method remains effective with a frozen same-size teacher, although its gains are smaller than with a larger teacher on most metrics.

---

*Source: [arXiv](https://arxiv.org/abs/2610.30231)*
