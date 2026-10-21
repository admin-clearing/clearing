---
title: "Latent Projection for Latent Planning"
dek: "arXiv:2610.26979v1 Announce Type: new Abstract: Latent world models let an agent plan in latent space. The planner searches for an action sequence that minimizes a cost, and that cost is often the $\\ell_2$ distance..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-21
featured: false
gradient: grad-4
---

arXiv:2610.26979v1 Announce Type: new Abstract: Latent world models let an agent plan in latent space. The planner searches for an action sequence that minimizes a cost, and that cost is often the $\ell_2$ distance between the predicted terminal latent and the goal latent. The latent, however, is partly noise: the regularizer that prevents collapse during world model training promotes variance in the directions carrying no signal. We show that the same regularizer also supplies the structure to prune that noise in the latent. SIGReg drives the latent marginal to a standard Gaussian at every step, and assuming further that the latent sequence is a Gauss-Markov process, the transition is linear with its covariance pinned by the map itself, $z' \mid z \sim \mathcal{N}(Az,\, I - AA^\top)$. Fitting the state dynamics $A$ therefore yields the covariance at no additional cost, and in its eigenbasis each latent direction carries its own uncertainty. Furthermore, constraining $A$ to be a normal matrix fixes that basis across timesteps, so one eigenbasis measures the uncertainty over an arbitrary number of steps and serves as a stable basis to compute the planning cost on. We then restrict the $\ell_2$ cost to the $k$-dimensional subspace the state dynamics carry forward with the least uncertainty. The correction is post hoc: the encoder, the predictor, the rollout, and the planner are all left untouched, and only a single constrained matrix, $A$, is fit. We evaluate across six environments and show large gains on the 2D navigation tasks, TwoRoom and PointMaze, raising success rate over the plain $\ell_2$ cost by up to $+54.7$ points under a harder planning setting. Code is available at https://github.com/yjang43/lp2.

---

*Source: [arXiv](https://arxiv.org/abs/2610.26979)*
