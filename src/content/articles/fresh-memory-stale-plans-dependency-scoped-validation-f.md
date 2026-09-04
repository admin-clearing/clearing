---
title: "Fresh Memory, Stale Plans: Dependency-Scoped Validation for Distributed LLM-Agent Memory"
dek: "arXiv:2609.03340v1 Announce Type: new Abstract: Distributed LLM-agent teams can read the latest shared facts and still act on an obsolete plan. A planner may derive an action from requirement $r_3$, another agent may..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-04
featured: false
gradient: grad-4
---

arXiv:2609.03340v1 Announce Type: new Abstract: Distributed LLM-agent teams can read the latest shared facts and still act on an obsolete plan. A planner may derive an action from requirement $r_3$, another agent may commit $r_4$, and an executor may receive $r_4$ without replacing the plan derived from $r_3$. We call this \emph{stale-plan execution}: state freshness does not establish that the plan authorizing an action remains valid. We introduce PlanFence, a dependency-scoped action-validation protocol. Plans cite the exact public records they used, and an executor validates only the records that can affect the pending external action, replanning once or blocking when validation is incomplete. In 30 controlled live workflows with a post-plan revision, a freshness-only executor acts on the obsolete plan in every task, whereas PlanFence completes all tasks without an invalid action. Controlled replay reveals two conditional boundaries: proactive synchronization yields lower coordination stall at low churn, while PlanFence avoids repeated update-path coordination as churn grows and avoids validating unrelated state as the shared keyspace grows. These are controlled safety and systems-cost results, not general task-accuracy gains.

---

*Source: [arXiv](https://arxiv.org/abs/2609.03340)*
