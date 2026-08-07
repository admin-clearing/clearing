---
title: "Project2Task: Graph-Guided Project-Level Planning for Autonomous Research"
dek: "arXiv:2608.05225v1 Announce Type: new Abstract: Research agents can increasingly search literature, propose hypotheses, generate code, run experiments, and draft manuscripts from a single topic. However, a research..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-07
featured: false
gradient: grad-4
---

arXiv:2608.05225v1 Announce Type: new Abstract: Research agents can increasingly search literature, propose hypotheses, generate code, run experiments, and draft manuscripts from a single topic. However, a research project is not merely a larger task: it is a long-horizon agenda that must be advanced through multiple bounded tasks with distinct but related objectives, parallel alternatives, and dependency-aware sequences. Existing single-task systems often treat the project as one oversized task, produce a flat set of vague or overlapping tasks, or leave task boundaries and execution order to manual coordination. We introduce Project2Task, a graph-guided project-level planning layer for autonomous research. Given a project brief, it represents candidate contributions as innovation atoms and organizes them in a directed lineage graph. A lightweight Bernoulli block-model objective selects among horizontal, vertical, and hybrid portfolio decompositions. Project2Task then generates bounded tasks with explicit contribution ownership, repairs overlaps and missing execution fields, and emits dependency-aware task contracts that specify objectives, inputs, expected artifacts, evaluation requirements, boundary constraints, dependencies, and execution order. The contracts are independent of any particular downstream research executor and support integration of task outputs into a coherent project-level result. On a benchmark of ten project briefs yielding roughly 30 tasks, manuscript-based portfolio evaluation gives Project2Task an average quality score of 7.15, compared with 4.58 for the Brief Baseline and 5.31 for the Topic-only Setting. Integrating its contracts with AutoResearchClaw increases average downstream task accuracy from 0.536 to 0.759. These results demonstrate the 

---

*Source: [arXiv](https://arxiv.org/abs/2608.05225)*
