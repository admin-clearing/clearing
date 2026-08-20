---
title: "Think Shallow, Solve Deep: Controlling Recurrent Dynamics for Reliable Test-Time Depth"
dek: "arXiv:2608.18222v1 Announce Type: new Abstract: Recurrent-depth reasoners aim to solve harder problems by iterating their update longer at test time, but additional iterations can improve, preserve, or degrade an..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-20
featured: false
gradient: grad-4
---

arXiv:2608.18222v1 Announce Type: new Abstract: Recurrent-depth reasoners aim to solve harder problems by iterating their update longer at test time, but additional iterations can improve, preserve, or degrade an answer. We show that a measurable property of the trained operator, its finite-time dynamical regime (estimated as settling, marginal, or drifting), indicates which of these occurs. We give a sufficient condition for depth-safety: once an operator's per-step displacement is small relative to the decoder margin, the decoded answer cannot change under further iterations. Empirically, on algorithmic tasks trained from $800$ unaugmented examples per difficulty tier, settling operators do not degrade with added depth, and on some tasks convert it into higher accuracy on harder unseen instances (Sudoku, $0.19$ to $0.34$ past the training horizon). A single terminal fixed-point objective moves the regime and the depth behavior together: removing it induces drift and removes the gains, and adding it to a generic recurrence yields depth-safe extrapolation on carry propagation. We give four operational criteria for useful test-time depth, use them to catalogue failure modes, and, as a consistency check, apply the same measurements to Huginn-3.5B, which falls in the non-settling family.

---

*Source: [arXiv](https://arxiv.org/abs/2608.18222)*
