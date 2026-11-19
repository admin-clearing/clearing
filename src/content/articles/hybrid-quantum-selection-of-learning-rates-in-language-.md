---
title: "Hybrid Quantum Selection of Learning Rates in Language-Model Training: Termination Criteria and an Interaction-Guided Sc"
dek: "arXiv:2611.21701v1 Announce Type: new Abstract: Learning-rate choices strongly affect language-model fine-tuning, but the best joint profile across layer groups is generally unknown. This paper studies quantum minimum..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-11-18
featured: false
gradient: grad-4
---

arXiv:2611.21701v1 Announce Type: new Abstract: Learning-rate choices strongly affect language-model fine-tuning, but the best joint profile across layer groups is generally unknown. This paper studies quantum minimum finding for layer-group learning-rate selection within a hybrid classical-quantum training framework. It combines Durr-Hoyer minimum finding with BBHT search and compares fixed-budget and confidence-based stopping policies using a lookup oracle built from measured profile scores at fixed training checkpoints. The paper then introduces an Interaction-Guided Schedule Oracle that scores and marks joint schedules in superposition without a precomputed score table. Classical one-step loss measurements supply the main, pairwise and three-way interaction effects between layer groups. The circuit adds the effects for each schedule, compares the resulting score with the current baseline score, and marks improving schedules for amplitude amplification. Measured candidates are checked classically before acceptance. Uniform-rate training supplies the initial baseline; using schedules from classical adaptive methods as baselines for joint refinement is left for future work. In closed-loop fine-tuning of a 1.5-billion-parameter language model, each selected schedule drives the next 200 classical training steps. Benchmark accuracies lie within the range observed across five uniform-rate seeds. The results give a working example of how quantum superposition can support adaptive learning-rate selection during training; the remaining quantum limitations are discussed in the paper.

---

*Source: [arXiv](https://arxiv.org/abs/2611.21701)*
