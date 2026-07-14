---
title: "Reference-Based Distillation Detection in LLMs"
dek: "arXiv:2607.09692v1 Announce Type: new Abstract: Model distillation -- training on outputs from stronger third-party models -- is widely used to boost performance, but raises concerns about unfair advantages and policy..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-07-14
featured: false
gradient: grad-4
---

arXiv:2607.09692v1 Announce Type: new Abstract: Model distillation -- training on outputs from stronger third-party models -- is widely used to boost performance, but raises concerns about unfair advantages and policy violations. This motivates a fundamental question: can we detect whether a model was distilled from another? We show that, while identifying a teacher model from a student in isolation is highly challenging, it becomes tractable in a reference-based setting: given a model and an earlier-generation checkpoint from the same lineage, we can identify the teacher model used to train the later checkpoint. We introduce a distillation detection method based on reference-based membership inference. By comparing how strongly a student model preferentially aligns with outputs from different candidate teachers relative to a reference checkpoint, our method identifies the most likely teacher and detects evidence of distillation. To handle unknown distillation pipelines such as hidden prompts, we infer proxy prompt templates directly from model outputs. We additionally identify a distinctive glyph-level signal specific to o1/o3 models. Evaluating distillation detection is challenging because modern model lineages are already heavily entangled. To address this, we develop a hybrid evaluation spanning both controlled distillation experiments and real-world models. Across both settings, our approach recovers the true teacher with near-perfect accuracy in single-teacher distillation scenarios, even when the underlying distillation pipeline is largely unknown. We further introduce statistical tests for both teacher attribution and distillation detection, and extend our framework to open-world settings where no teacher is guaranteed to be present among the candidates. Applyin

---

*Source: [arXiv](https://arxiv.org/abs/2607.09692)*
