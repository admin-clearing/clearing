---
title: "How to Guide Your Language Flow"
dek: "arXiv:2609.19356v1 Announce Type: new Abstract: We introduce a new method to guide flow matching models. Our approach, which we call probe guidance, uses the frozen internal states of an existing diffusion model to..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-09-18
featured: false
gradient: grad-4
---

arXiv:2609.19356v1 Announce Type: new Abstract: We introduce a new method to guide flow matching models. Our approach, which we call probe guidance, uses the frozen internal states of an existing diffusion model to construct a guidance signal. This works using a similar principle as autoguidance, but eliminates the need for an additional forward pass at inference time and provides a reliable path to ensure that the weak and strong model share similar dynamics. We apply and benchmark this method on continuous diffusion language models, where probe guidance sets a new state-of-the-art performance on unconditional generation. When applied to a 1.7B diffusion language model, probe guidance consistently improves on multiple choice question answering benchmarks. Using our probes, we study the traditional autoguidance setting where the strong model is a weak checkpoint, and find that the weak model must come from a low-entropy region of training. These findings both provide a practical way to improve diffusion language models and shed light on the actual mechanism behind autoguidance, which is currently poorly understood.

---

*Source: [arXiv](https://arxiv.org/abs/2609.19356)*
