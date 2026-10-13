---
title: "An all-transistor physical-learning transformer can be trained to perform in-context learning"
dek: "arXiv:2610.12571v1 Announce Type: new Abstract: Most systems trained by equilibrium propagation or coupled learning are in the same class as multi-layer perceptrons: while they may be universal function approximators,..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-12
featured: false
gradient: grad-4
---

arXiv:2610.12571v1 Announce Type: new Abstract: Most systems trained by equilibrium propagation or coupled learning are in the same class as multi-layer perceptrons: while they may be universal function approximators, they struggle to learn associative tasks which are easy for transformers. Equilibrium propagation relies on a bidirectional flow of information through the physical system between input and output. The reverse flow is broken by more complex nonlinear systems, such as those performing multiplication which is needed to express dot-product attention. Here we explicitly restore this bidirectional flow by introducing extra circuit elements for this purpose into a double or dyadic circuit. We then use these ideas to construct an attention mechanism exploiting the exponential current law of sub-threshold MOSFET devices. We show that in simulations this circuit can be trained to perform a simple in-context learning task, despite using realistic reverse components which transmit only an approximate gradient. For this training to succeed we need cross-entropy loss (not mean squared error). We generate nudges appropriate for this loss using a novel floating circuit element, based on the same MOSFET sub-circuit used for softmax. We train the resistors in this circuit using the Lion optimiser, which can be implemented using one capacitor per parameter to store local memory of past gradient estimates.

---

*Source: [arXiv](https://arxiv.org/abs/2610.12571)*
