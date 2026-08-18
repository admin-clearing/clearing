---
title: "Your Probabilistic JEPA Is Secretly a Hidden Markov Model: A State-Space Interpretation of Joint-Embedding Predictive Le"
dek: "arXiv:2608.13621v1 Announce Type: new Abstract: A hidden Markov model (HMM) combines three roles: inference of a hidden-state belief from observations, propagation through a Markov transition, and emission back to..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-08-17
featured: false
gradient: grad-4
---

arXiv:2608.13621v1 Announce Type: new Abstract: A hidden Markov model (HMM) combines three roles: inference of a hidden-state belief from observations, propagation through a Markov transition, and emission back to observation space. We show that full, time-indexed Predictive Information Bottleneck VJEPA (PIB-VJEPA) exposes the same computational structure: a stochastic context encoder plays the role of an amortized filtering distribution, a probabilistic predictor defines latent-state dynamics, and a decoder, inverse target encoder, or induced implicit conditional supplies the emission direction. We distinguish 4 progressively stronger levels of correspondence and give sufficient conditions for exact sequence-level HMM equivalence. To make the connection concrete, we introduce Markov-Chain JEPA (MCJEPA), which replaces the latent predictor by a learned transition matrix; in the finite time-homogeneous case, matrix powers guarantee exact multi-horizon Chapman--Kolmogorov consistency. Conditioned discrete-state transitions, continuous-state Markov kernels, and continuous-time dynamics extend this construction, while deterministic temporal JEPA appears as a degenerate Dirac-kernel special case. We further interpret predictive information-bottleneck learning as seeking a compact predictive state: compression promotes minimality, while residual predictability tests sufficiency. Controlled experiments support transition composition, the filtering interpretation, predictive Markovization in a known synthetic process, and the distinction between JEPA latent prediction and HMM-style sequence learning. Together, these results give temporal JEPA a principled state-space interpretation.

---

*Source: [arXiv](https://arxiv.org/abs/2608.13621)*
