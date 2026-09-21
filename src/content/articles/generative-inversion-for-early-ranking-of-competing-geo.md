---
title: "Generative inversion for early ranking of competing geologic interpretations"
dek: "arXiv:2609.20978v1 Announce Type: new Abstract: High-consequence subsurface decisions are often made under severe data scarcity. Experts may arrive at competing interpretations of the same subsurface system, yet early..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-21
featured: false
gradient: grad-4
---

arXiv:2609.20978v1 Announce Type: new Abstract: High-consequence subsurface decisions are often made under severe data scarcity. Experts may arrive at competing interpretations of the same subsurface system, yet early in a project there is rarely a practical way to determine which one is most realistic. This uncertainty can persist until several wells are drilled, often costing millions of dollars. Existing approaches for evaluating geologic interpretations rely either on subjective judgment or on dense data that are rarely available in early-stage investigations. We present a workflow that addresses this challenge by translating competing geologic interpretations into alternative spatial priors and ranking them according to their consistency with hydraulic-head observations. For each interpretation, a text-to-image foundation model generates an ensemble of 1600 geologic images, and a separately trained variational autoencoder provides an interpretation-specific latent representation. A supervised inverse network maps the head observations into this latent space, and the frozen decoder produces an image that is mapped to a log-conductivity field. Steady-state flow simulation then provides predicted heads, and the resulting mismatch is converted into a Gaussian-form compatibility score. We evaluate the framework using a synthetic benchmark based on the Johansen Formation and three interpretations of decreasing consistency with the reference representation. Across 925 test cases, the mean head RMSE increases from 0.197 for the Precise \& Accurate interpretation to 0.227 for the Accurate interpretation and 0.280 for the Mismatched interpretation. We subsequently apply the workflow to two published conceptual models of the Culebra Dolomite Member at the Waste Isolation Pilo

---

*Source: [arXiv](https://arxiv.org/abs/2609.20978)*
