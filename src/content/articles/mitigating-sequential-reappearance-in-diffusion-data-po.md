---
title: "Mitigating Sequential Reappearance in Diffusion Data-Point Unlearning"
dek: "arXiv:2609.25166v1 Announce Type: new Abstract: Diffusion data-point unlearning is typically evaluated immediately after each deletion, even though subsequent requests may repeatedly update the same model. We identify..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-23
featured: false
gradient: grad-4
---

arXiv:2609.25166v1 Announce Type: new Abstract: Diffusion data-point unlearning is typically evaluated immediately after each deletion, even though subsequent requests may repeatedly update the same model. We identify sequential reappearance, a failure mode in which an instance that is initially judged to be forgotten later returns to the memorized regime without reuse of the deleted data or adversarial fine-tuning. To capture this behavior, we introduce a target-level evaluation protocol that tracks whether each target is forgotten immediately, remains forgotten at the end of the sequence, or reappears during subsequent deletions. We further find that targets that later reappear exhibit sharper local denoising-loss geometry after deletion than targets that remain forgotten.

---

*Source: [arXiv](https://arxiv.org/abs/2609.25166)*
