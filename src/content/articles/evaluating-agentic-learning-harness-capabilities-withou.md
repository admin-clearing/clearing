---
title: "Evaluating Agentic Learning Harness Capabilities Without Labels via the Scaling Hypothesis"
dek: "arXiv:2608.13608v1 Announce Type: new Abstract: Agentic \"Continual Learning Harnesses\", systems that pair an LLM with retrieval or memory to improve from feedback without retraining, have shown growing value in..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-17
featured: false
gradient: grad-4
---

arXiv:2608.13608v1 Announce Type: new Abstract: Agentic "Continual Learning Harnesses", systems that pair an LLM with retrieval or memory to improve from feedback without retraining, have shown growing value in cybersecurity. But their value is conventionally measured by gains against labeled benchmarks, an approach that often fails in operational security settings. Benchmark labels are scarce, stale, and unrepresentative, so a practitioner often cannot tell whether a given harness helps at all or which of two is better for their task. Traditional LLM-as-a-judge offers little signal because it is no stronger than the agent it evaluates, and distillation is unreliable on scarce, sporadic, and biased labels. We propose a framework for evaluating learning harnesses end-to-end without a labeled benchmark, grounded in the scaling hypothesis. A stronger teacher model provides sparsely sampled corrections to a smaller student with a continual learning harness. We score a harness by how much its student converges toward the teacher over time. Across security tasks, model families, and harness designs, we show that improvement relative to the teacher correlates with improvement relative to a held-out gold standard, validating teacher-relative lift as a proxy for true harness uplift when labels are absent. We further show that LLM-as-a-judge between similarly powered models yields no usable signal. These results suggest that a teacher-sized model can be improved through the same harness when humans provide the same kind of sparse, high-precision corrections.

---

*Source: [arXiv](https://arxiv.org/abs/2608.13608)*
