---
title: "Linear Probes to Bayesian Manifolds: Geometry of Arithmetic in Large Language Models"
dek: "arXiv:2611.12998v1 Announce Type: new Abstract: Linear probes are a standard method to study geometric structures, such as helices and circles, from the activations of large language models (LLMs), and such structure is..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-11-11
featured: false
gradient: grad-4
---

arXiv:2611.12998v1 Announce Type: new Abstract: Linear probes are a standard method to study geometric structures, such as helices and circles, from the activations of large language models (LLMs), and such structure is often taken as evidence that the model computes with it. Probe accuracy alone cannot establish this, because it conflates four separate claims. These are (1) that the concept is decodable from the activations, (2) that they form a specific shape, (3) that the shape belongs to the probed concept rather than to a related concept the model also represents, and (4) that the output of the model depends on the shape. We call these claims decodability, shape, ownership, and causal use, and we test them separately with a four-stage Bayesian pipeline. Stage 2 compares candidate shapes and selects the best one only when its evidence passes a predefined threshold. Stage 3 removes a set of related concepts, specified in advance, and tests whether the shape is owned or inherited. Stage 4 intervenes on the shape to test whether the output of the model depends on it. We apply the pipeline to two-digit addition and multiplication in GPT-J 6B, Llama 3.1 8B, and Pythia 6.9B. Nearly every concept is decodable, but the decoded directions overlap substantially across concepts. Every strongly supported comparison selects a ribbon, which is a helix whose radius changes with the value, or a torus. Of 1,330 cells with an ownership verdict, 19% of shapes are owned and 81% are inherited. Owned and inherited shapes move the output about equally often. Intervening on the shape retains approximately 61% of the effect of intervening on the full probe while using at most five dimensions, against a median of nine for the probe. Our results indicate that a probe verdict alone overstates 

---

*Source: [arXiv](https://arxiv.org/abs/2611.12998)*
