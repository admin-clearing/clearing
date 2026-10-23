---
title: "A Quadratic Lens on Muon's Polar Update: Benefits, Pitfalls, and the Role of Newton-Schulz"
dek: "arXiv:2610.30280v1 Announce Type: new Abstract: Muon updates matrix-valued parameters along approximately orthogonalized directions and often trains large language models faster than AdamW, yet it remains unclear when..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-23
featured: false
gradient: grad-4
---

arXiv:2610.30280v1 Announce Type: new Abstract: Muon updates matrix-valued parameters along approximately orthogonalized directions and often trains large language models faster than AdamW, yet it remains unclear when and why orthogonalization helps. We study PolarGD, the orthogonalized update at the core of Muon, on matrix quadratics, where optimizers can be analyzed in closed form, and compare update directions under line search to remove the effect of learning-rate tuning. Orthogonalization pays off when the gradient is far from low rank and its largest singular directions see high curvature. PolarGD reaches the minimizer in one step whenever the rows of the error are orthogonal with equal norms, for any Hessian, whereas gradient descent needs all Hessian eigenvalues to be equal; and unlike sign descent, PolarGD is unaffected by rotations of the problem. Over many steps, PolarGD acts as gradient descent preconditioned by the current iterate, so its speed is governed by the conditioning of the iterate rather than of the Hessian. This explains fast regimes as well as a slow one, caused by tiny singular values of the iterate, in which PolarGD is much slower than gradient descent. Finally, the few Newton-Schulz iterations used in Muon treat these tiny singular values as gradient descent does, so fewer iterations can converge faster than exact orthogonalization; in a transformer trained with Muon, about a quarter of the singular values of the attention matrices fall in this regime.

---

*Source: [arXiv](https://arxiv.org/abs/2610.30280)*
