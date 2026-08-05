---
title: "Interpreting Black-Box Large Language Models with Sentence-Level Energy Landscapes"
dek: "arXiv:2608.02879v1 Announce Type: new Abstract: The widespread adoption of proprietary Large Language Models (LLMs) accessed strictly through closed APIs has created a critical challenge for responsible deployment: a..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-05
featured: false
gradient: grad-4
---

arXiv:2608.02879v1 Announce Type: new Abstract: The widespread adoption of proprietary Large Language Models (LLMs) accessed strictly through closed APIs has created a critical challenge for responsible deployment: a fundamental lack of interpretability. To address this, we propose a model-agnostic, post-hoc attribution interpreter operating at the sentence level. Our approach trains an Energy-Based Model (EBM) as a surrogate to capture the LLM's internal conceptual consistency between prompts and responses. This energy landscape guides the training of a lightweight interpreter network. Uniquely, our interpreter operates as a standalone tool; once trained, it quantifies the influence of prompt sentences on a user-specified target output without requiring further API queries to the LLM. By globally training a local interpreter across diverse inputs, our framework captures broader generation patterns and mitigates instance-specific biases. Experiments demonstrate that our EBM accurately simulates the target LLM, allowing the interpreter to effectively identify the prompt sentences most influential in generating specific target outputs.

---

*Source: [arXiv](https://arxiv.org/abs/2608.02879)*
