---
title: "LP Mining with LP2Graph: A Use Case for Railway Rescheduling"
dek: "arXiv:2607.11980v1 Announce Type: new Abstract: Like many optimization-driven domains, railway rescheduling relies on Mixed-Integer Linear Programming (MILP), yet the field's modeling knowledge is scattered across..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-15
featured: false
gradient: grad-4
---

arXiv:2607.11980v1 Announce Type: new Abstract: Like many optimization-driven domains, railway rescheduling relies on Mixed-Integer Linear Programming (MILP), yet the field's modeling knowledge is scattered across hundreds of papers in incompatible notations, and narrative surveys organize it subjectively: they classify models by vocabulary rather than by structure, and reproduce neither. We present LP Mining with LP2Graph, a method that mines the structure of published LP and MILP formulations into a reproducible dataset and an induced taxonomy. Its core, LP2Graph, represents each formulation admitted by its canonical grammar as a typed variable--equation graph derived from a single canonical model; once a source is extracted into that model, everything downstream is deterministic. Each source is parsed into this model, homologized, and clustered bottom-up (over variables, then constraints and the objective, then whole-model structure) and, separately, by application domain and solution approach; the resulting groups are labeled by a rule-seeded, self-updating classifier. We validate the representation rather than assume it: per-cluster representatives are regenerated as independent LaTeX and re-solved across CBC, HiGHS and Gurobi against the optimum reported in the source paper. The outcome is an objective, repeatable taxonomy of variables, constraints and model types: the principled foundation on which our raiLPminer line of automated railway-rescheduling model development builds.

---

*Source: [arXiv](https://arxiv.org/abs/2607.11980)*
