---
title: "Beyond Policy Discrepancy: Capability-Aware Multi-Teacher On-Policy Distillation"
dek: "arXiv:2610.26950v1 Announce Type: new Abstract: Multi-teacher on-policy distillation (MOPD) integrates domain specialists into a shared student, but determining how strongly each teacher should supervise remains..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-21
featured: false
gradient: grad-4
---

arXiv:2610.26950v1 Announce Type: new Abstract: Multi-teacher on-policy distillation (MOPD) integrates domain specialists into a shared student, but determining how strongly each teacher should supervise remains challenging. Existing discrepancy-based allocation can assign strong supervision even when the student already matches or exceeds the teacher's task performance, since behavioral mismatch does not necessarily imply a remaining capability deficit. We propose Capability-Aware Multi-Teacher On-Policy Distillation (CA-MOPD), which combines specialist merging with capability-guided allocation to account for what the student has already learned. CA-MOPD first merges reinforcement-learning specialists into a strong student initialization, then uses verifier-estimated teacher--student capability gaps to adjust domain-level distillation strength. Supervision decreases as capability gaps close and increases when estimated student capability regresses, while dense token-level guidance remains provided by the teachers. Across six benchmarks spanning mathematics, code generation, and instruction following, CA-MOPD achieves an average score of 32.22, outperforming naive MOPD, Open-MOPD, and the merged initialization by 0.86, 0.83, and 0.74 points, respectively. Controlled comparisons further support the benefits of merged initialization and capability-gap guidance under matched training budgets.

---

*Source: [arXiv](https://arxiv.org/abs/2610.26950)*
