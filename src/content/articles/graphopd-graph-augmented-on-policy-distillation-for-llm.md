---
title: "GraphOPD: Graph-Augmented On-Policy Distillation for LLM Agents"
dek: "arXiv:2610.08959v1 Announce Type: new Abstract: On-policy distillation post-trains large language model agents by supplying dense, step-level guidance from a teacher policy when the reinforcement-learning reward is..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-08
featured: false
gradient: grad-4
---

arXiv:2610.08959v1 Announce Type: new Abstract: On-policy distillation post-trains large language model agents by supplying dense, step-level guidance from a teacher policy when the reinforcement-learning reward is sparse and arrives only once per trajectory. Existing instantiations allocate this guidance by the size of the teacher-student divergence at each step, on the single-turn intuition that a large disagreement marks a mistake worth correcting. Once decisions chain over many turns, that rule misfires, since an early drift enters every later context both policies condition on, leaving the teacher consistent with the drifted trajectory instead of flagging its cause, while interchangeable steps register large but outcome-irrelevant divergences. We demonstrate this on an agentic benchmark, where distilling the highest-divergence steps brings no consistent benefit over random selection. To this end, we introduce GraphOPD, the first method to bring graph-based structural augmentation into on-policy distillation for agent capabilities. It reads which steps enabled which later ones from the environment's own record of state changes, immune to the drift that corrupts the teacher-student gap, organizes them into a dependency graph, scores each step by a random-walk stationary distribution over it, and fuses that structural credit with the divergence signal into a trajectory-relative mask concentrating supervision on each rollout's highest-aptitude steps. Across three model scales and eleven baselines on ALFWorld, WebShop, and SearchQA, GraphOPD shows competitive performance throughout, improving over the strongest baseline by up to +5.8 pp. An executed-replay audit further shows that this structural credit score tracks true causal impact far above chance, that both fused s

---

*Source: [arXiv](https://arxiv.org/abs/2610.08959)*
