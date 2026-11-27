---
title: "Context Scaling: A New Frontier of AI Scaling"
dek: "arXiv:2611.33160v1 Announce Type: new Abstract: Many failures of deployed AI arise not from weak inference but from a mismatch between the state a task depends on and the context available when the system acts. Relevant..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-11-27
featured: false
gradient: grad-4
---

arXiv:2611.33160v1 Announce Type: new Abstract: Many failures of deployed AI arise not from weak inference but from a mismatch between the state a task depends on and the context available when the system acts. Relevant user state, repository revisions, tool traces, sensor readings, or environment changes may be unavailable, distorted, or poorly selected. We call the effort to reduce this bottleneck context scaling. We frame a model as $P_\theta(d\mid c)$ within a system governed by three budgets: training $B_\theta$, decision-time $B_d$, and context-infrastructure $B_c$. Pretraining scaling invests in $\theta$; decision-time scaling searches, refines, or verifies decisions under supplied context; context scaling improves the system's capacity to acquire, represent, deliver, evaluate, and persist deployment state for model use. The three programs interact, but only $B_c$ targets what the system can make available before a decision. This view makes the model-infrastructure pair the unit of analysis. We define effective-context value as a task- and intervention-dependent attribution, separate deployment state from model-visible context, and identify availability, fidelity, selection, and utilization failures. We then organize current mechanisms through a five-operation context lifecycle and propose controlled budget interventions and utility-cost curves for evaluation. The resulting agenda centers on grounded reporting, interaction-data and full-cost infrastructure, and safety and governance for persistent, adaptive systems.

---

*Source: [arXiv](https://arxiv.org/abs/2611.33160)*
