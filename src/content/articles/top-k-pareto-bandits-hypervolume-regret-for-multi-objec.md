---
title: "Top-$k$ Pareto Bandits: Hypervolume Regret for Multi-Objective Slate Selection"
dek: "arXiv:2607.26273v1 Announce Type: new Abstract: We consider a stochastic multi-objective bandit problem where, at each round, the agent selects a slate of $k$ arms and observes their $d$-dimensional reward vectors under..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-07-30
featured: false
gradient: grad-4
---

arXiv:2607.26273v1 Announce Type: new Abstract: We consider a stochastic multi-objective bandit problem where, at each round, the agent selects a slate of $k$ arms and observes their $d$-dimensional reward vectors under semi-bandit feedback. We do not aim at identifying a single optimal arm; instead, we consider the problem of maintaining a small set of actions that jointly approximate the Pareto frontier. We formalize this objective through the dominated hypervolume induced by the selected subset of arms, and define an $\alpha$-approximate hypervolume regret with respect to the best size-$k$ subset achievable in hindsight, where $\alpha = 1 - 1/e$ reflects the approximation guarantee of greedy maximization for monotone submodular functions. To address this problem, we introduce \textit{THV-UCB}, an optimistic algorithm that selects arms greedily based on optimistic estimates of their marginal hypervolume contributions. We establish a gap-free regret bound $\tilde{O}(d\sqrt{nkT})$ that holds on every instance, together with a gap-dependent bound $\tilde{O}(nk^{2.5}/\Delta_{\min})$ that becomes polylogarithmic in $T$ once the arms are sufficiently well separated. Our results provide theoretical support for using small subsets to approximate Pareto fronts in various multi-objective applications.

---

*Source: [arXiv](https://arxiv.org/abs/2607.26273)*
