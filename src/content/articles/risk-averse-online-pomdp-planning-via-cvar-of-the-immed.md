---
title: "Risk-Averse Online POMDP Planning via CVaR of the Immediate Cost with Performance Guarantees"
dek: "arXiv:2609.35874v1 Announce Type: new Abstract: Online POMDP planners optimize the expected cumulative cost, which can mask dangerous states when the belief places significant mass on high-cost states. Existing..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-30
featured: false
gradient: grad-4
---

arXiv:2609.35874v1 Announce Type: new Abstract: Online POMDP planners optimize the expected cumulative cost, which can mask dangerous states when the belief places significant mass on high-cost states. Existing risk-averse methods apply static or dynamic Conditional Value at Risk (CVaR) to the value function, capturing trajectory-level risk, but share two gaps: (i) by retaining the immediate cost as an expectation of a state-dependent cost over the belief, the risk \emph{within} the belief is left unaddressed; and (ii) by modifying the value function, they require new tailored algorithms rather than reusing existing expectation-based planners. We instead apply CVaR to the immediate cost over the belief at each step, directly targeting per-step uncertainty about the current state. The standard expected cumulative return is retained as the objective, so the resulting problem has a standard MDP structure: any expectation-based POMDP planner can be made risk-sensitive by changing only the cost computation. We inherit finite-time guarantees for policy evaluation and sparse sampling---with estimation error independent of the risk level---and, as our central theoretical result, prove a finite-time bound on the gap between the particle belief MDP surrogate and the original POMDP, which together yield an end-to-end guarantee from the true POMDP value to the algorithmic estimate. In the risk-neutral limit, the formulation recovers standard expectation-based planning.

---

*Source: [arXiv](https://arxiv.org/abs/2609.35874)*
