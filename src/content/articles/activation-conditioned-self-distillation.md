---
title: "Activation-Conditioned Self-Distillation"
dek: "arXiv:2609.38342v1 Announce Type: new Abstract: On-policy self-distillation uses a model as its own teacher to provide dense supervision for reasoning, often through reference-solution conditioning. Providing privileged..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-10-02
featured: false
gradient: grad-4
---

arXiv:2609.38342v1 Announce Type: new Abstract: On-policy self-distillation uses a model as its own teacher to provide dense supervision for reasoning, often through reference-solution conditioning. Providing privileged information does not by itself ensure effective token-level supervision throughout long responses. We introduce Activation-Conditioned Self-Distillation (ACSD), which extracts a steering vector by contrasting activations of self-generated trajectories that reach verified correct answers within a generation budget with those of all remaining trajectories. A frozen copy of the base model applies this vector at each prediction position, and the student learns from its next-token distributions on student-generated prefixes. Outcome verification is used for direction construction and calibration; distillation requires neither problem-specific reference text nor teacher parameter updates. The distilled student is used alone at inference. On each of five models, ACSD achieves the highest mean accuracy over four mathematical benchmarks among the evaluated methods. On DeepSeek-R1-0528-Qwen3-8B, mean mathematical accuracy reaches 71.9\% and LiveCodeBench v6 pass@12 reaches 70.9\%, compared with 69.0\% and 66.3\% for the reference-conditioned OPSD baseline. Contrasts among correct trajectories also support distillation, and extracted directions can be reused across mathematical training datasets. On fixed student trajectories, ACSD maintains more stable late-position logit-update magnitudes than OPSD.

---

*Source: [arXiv](https://arxiv.org/abs/2609.38342)*
