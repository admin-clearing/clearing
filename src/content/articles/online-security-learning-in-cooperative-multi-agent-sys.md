---
title: "Online Security Learning in Cooperative Multi-Agent Systems under Hidden Byzantine Attacks"
dek: "arXiv:2608.06520v1 Announce Type: new Abstract: We study online cooperative control of a multi-agent system under Byzantine attacks. Namely, an unknown, fixed subset of agents are Byzantine comprised and can stealthily..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-10
featured: false
gradient: grad-4
---

arXiv:2608.06520v1 Announce Type: new Abstract: We study online cooperative control of a multi-agent system under Byzantine attacks. Namely, an unknown, fixed subset of agents are Byzantine comprised and can stealthily overwrite its own coordinates of the team's planned joint action after observing that plan. The learner observes planned actions, public rewards, and public states, but neither the overwrite nor the executed joint action. Our objective is security: to optimize the team performance against the worst overwrites and achieve the optimal security value. We first show that the attacker's information determines the geometry. An attacker that observes the planned action induces an exact $(s,a)$-rectangular robust Markov decision process (MDP) whose rows are convex hulls of overwrite-induced public-outcome laws, whereas a blind attacker induces an $s$-rectangular model. We then identify the information-theoretic limit of security learning, showing that the security regret decomposes exactly into return regret against the response generating the data and a cumulative response gap $D_K$. Two indistinguishable horizon-one instances force $\Omega(K)$ expected security regret while return regret is zero, showing that dependence on $D_K$ is unavoidable. Finally, we develop a stage-tied robust estimation-to-decisions learner and prove a regret bound of $\widetilde{\mathcal O}\!\left(H^2S\sqrt{AK}\right)+\mathbb E[D_K]$. Our studies thus provide comprehensive theoretical and algorithmic foundations of reliable multi-agent systems under Byzantine attacks.

---

*Source: [arXiv](https://arxiv.org/abs/2608.06520)*
