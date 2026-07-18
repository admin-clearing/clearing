---
title: "A Noise-Robust Elicit-to-Optimize Framework for Distortion Riskmetrics via Inverse Reinforcement Learning"
dek: "arXiv:2607.14373v1 Announce Type: new Abstract: We propose a noise-robust elicit-to-optimize framework that integrates inverse reinforcement learning (IRL) and reinforcement learning (RL) for eliciting agents' risk..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-18
featured: false
gradient: grad-4
---

arXiv:2607.14373v1 Announce Type: new Abstract: We propose a noise-robust elicit-to-optimize framework that integrates inverse reinforcement learning (IRL) and reinforcement learning (RL) for eliciting agents' risk preferences and optimizing policies under a broad class of risk objectives characterized by distortion riskmetrics. On the elicitation side, we propose an adaptive Bayesian IRL method that infers agents' latent risk objectives from their noisy observed decisions, explicitly allowing agents to take stochastic and suboptimal actions. We establish the existence of a finite set of distinguishing questions that identifies the preferred distortion riskmetric within the candidate class and prove that the convergence rate of the algorithm is of order $O(\exp(-cm+O(\sqrt{m\log m})))$ under general settings, where $c>0$ is a constant and $m$ denotes the number of algorithm iterations. On the optimization side, we develop a model-free RL algorithm for optimizing policies under conditional distortion riskmetrics. By representing the objective as an integral of the conditional cost quantile function with respect to the distortion function, the method unifies distortion-riskmetric objectives. We optimize diverse risk objectives by extending the Proximal Policy Optimization (PPO) algorithm with policy, value, and quantile neural networks, where the quantile network estimates the full conditional cost quantile function and enables numerical evaluation of general risk objectives. A comprehensive empirical study demonstrates the framework's elicitation accuracy and effectiveness in complex financial environments.

---

*Source: [arXiv](https://arxiv.org/abs/2607.14373)*
