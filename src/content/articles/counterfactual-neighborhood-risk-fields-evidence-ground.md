---
title: "Counterfactual Neighborhood Risk Fields: Evidence-Grounded Selective Safety for Vision-Language Models"
dek: "arXiv:2610.20679v1 Announce Type: new Abstract: Representation-based safety defenses for vision-language models (VLMs) often learn to separate harmful from benign inputs, but separation alone does not establish what a..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-16
featured: false
gradient: grad-4
---

arXiv:2610.20679v1 Announce Type: new Abstract: Representation-based safety defenses for vision-language models (VLMs) often learn to separate harmful from benign inputs, but separation alone does not establish what a risk score means or when it should be trusted. We introduce Counterfactual Neighborhood Risk Fields (CNRF), an evidence-grounded framework for selective VLM safety. CNRF constructs context-matched benign-harmful counterfactual pairs, uses their representation differences as capability-related risk directions, and estimates neighborhood support separately from risk. This separation prevents unfamiliarity from being conflated with harmfulness and enables selective intervention rather than blanket rejection. A victim-adaptive interface accommodates different safety observations across VLM architectures and routes selected requests for same-victim response review, which either releases acceptable candidates or produces constrained alternatives with reduced harmful capability. Across three VLMs and five multimodal jailbreak families, CNRF achieves 86.06-89.30% macro defense success rate while retaining substantial benign-task utility. Controlled experiments further show that query-matched references and preserved context-direction correspondence materially improve risk ranking in the low-false-positive regime. CNRF thus reframes representation-based VLM safety from learning harmfulness boundaries to constructing applicable evidence for selective risk decisions.

---

*Source: [arXiv](https://arxiv.org/abs/2610.20679)*
