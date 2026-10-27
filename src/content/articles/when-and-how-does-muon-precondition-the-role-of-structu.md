---
title: "When and How Does Muon Precondition? The Role of Structured Gradient Noise"
dek: "arXiv:2610.31728v1 Announce Type: new Abstract: Muon has become a popular optimizer for large language model training, yet its theoretical foundations remain poorly understood. In this work, we study how gradient noise..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-27
featured: false
gradient: grad-4
---

arXiv:2610.31728v1 Announce Type: new Abstract: Muon has become a popular optimizer for large language model training, yet its theoretical foundations remain poorly understood. In this work, we study how gradient noise geometry shapes Muon's preconditioning benefits. We first show, theoretically and empirically, that under the classical isotropic noise assumption, Muon offers no acceleration beyond a rescaling of the learning rate. This motivates us to investigate structured noise arising from mini-batch sampling in associative memory with heterogeneous task frequencies. We establish an exact balancing threshold for two tasks and extend the analysis to multiple tasks, revealing how task coverage and gradient reliability jointly shape learning. Our analysis shows that Muon can soften the dependence on task frequency from linear to square-root, helping balance the learning of frequent and rare tasks. We further identify rotation-induced negative transfer in SignSGD that Muon avoids, and explain how momentum reduces sampling noise while tracking changing gradients. Controlled numerical experiments validate these mechanisms, and a preliminary LLM pretraining study illustrates the practical promise of fast-slow momentum.

---

*Source: [arXiv](https://arxiv.org/abs/2610.31728)*
