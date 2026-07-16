---
title: "What Your Model Threw Away and Why You'll Want It Back: Masking, Fingerprinting, and Privacy from Discarded Geometry"
dek: "arXiv:2607.13046v1 Announce Type: new Abstract: We develop a framework for the information discarded by machine learning models whose inputs carry a Lie group action. Given a representation $\\pi$ of a Lie group $G$ on a..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-16
featured: false
gradient: grad-4
---

arXiv:2607.13046v1 Announce Type: new Abstract: We develop a framework for the information discarded by machine learning models whose inputs carry a Lie group action. Given a representation $\pi$ of a Lie group $G$ on a space $V$ and a learned function $f\colon V \to \mathbb{R}$, we define two objects measuring the symmetry invisible to $f$. The null fiber at a point $x \in V$ is the set $N_G(f,x) = \{g \in G : f(\pi(g^{-1}) \cdot x) = f(x)\}$ of group elements whose inverse action on $x$ is undetectable by $f$. When $N_G(f,x)$ is independent of $x$, it coincides with the stabilizer $\mathrm{Stab}_G(f)$, the largest subgroup of $G$ under which $f$ is invariant. For smooth maps to $\mathbb{R}$, the preimage theorem guarantees that null fibers have dimension at least $\dim G - 1$ at generic inputs, regardless of architecture. For compact groups acting on themselves, the Peter--Weyl theorem yields a spectral characterization of both objects in terms of the Fourier coefficient matrices of $f$. We show that null fiber elements can be computed efficiently via Newton iteration on the orbit map, at a cost comparable to a few gradient evaluations. Applications to data masking, model fingerprinting, and privacy-preserving computation are developed and tested experimentally on molecular property prediction under $\mathrm{SO}(3)$ and spherical image classification under the M\"obius group $\mathrm{PSL}(2, \mathbb{C})$. The framework applies uniformly to classical neural networks and variational quantum circuits.

---

*Source: [arXiv](https://arxiv.org/abs/2607.13046)*
