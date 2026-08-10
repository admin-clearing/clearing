---
title: "Robust Average-Reward Markov Decision Processes: Minimax-Optimal Learning via Plug-in Reductions"
dek: "arXiv:2608.06545v1 Announce Type: new Abstract: Distributionally robust Markov decision processes provide a principled framework for sequential decision making under model uncertainty. We study how many samples are..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-10
featured: false
gradient: grad-4
---

arXiv:2608.06545v1 Announce Type: new Abstract: Distributionally robust Markov decision processes provide a principled framework for sequential decision making under model uncertainty. We study how many samples are necessary and sufficient to learn an $\varepsilon$-optimal robust policy under the average-reward criterion. A generative model provides samples from the nominal transition kernel, whereas policy performance is evaluated over $(s,a)$-rectangular total-variation uncertainty sets of radius at most $\sigma$. Let $H_0$ and $H_\sigma$ denote the nominal and robust optimal bias spans, respectively. We identify $\sigma H_0$ as the perturbation scale separating high- and low-tolerance regimes. Our matching upper and lower bounds show that, up to logarithmic factors, the minimax total sample complexity is $$ NSA \asymp \frac{SA}{\varepsilon^2}\begin{cases} \min\{H_0,H_\sigma\}, & \varepsilon\gtrsim\sigma H_0,\\ \min\{H_0,H_\sigma\}+\sigma H_\sigma^2, & \varepsilon\lesssim\sigma H_0. \end{cases} $$ Here $S$ and $A$ are the numbers of states and actions, and $N$ is the number of samples per state-action pair. The sample complexity consists of a linear-span term that resembles the nominal AMDP results and a robustness-specific term that appears only in the low-tolerance regime. We attain these rates using reduction-based plug-in procedures that select the reduction---nominal or robust---and its discount factor: a span-informed procedure that makes these choices using known span parameters, and a span-agnostic procedure that calibrates both choices from data.

---

*Source: [arXiv](https://arxiv.org/abs/2608.06545)*
