---
title: "Crystalis: Progressive Nucleation and Semantic Annealing for Coordinated Multi-View Visualization Generation"
dek: "arXiv:2607.24766v1 Announce Type: new Abstract: Large language models (LLMs) can generate individual charts, but coordinated multi-view visualizations (CMVs), where views share data flows and cross-view interactions,..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-29
featured: false
gradient: grad-4
---

arXiv:2607.24766v1 Announce Type: new Abstract: Large language models (LLMs) can generate individual charts, but coordinated multi-view visualizations (CMVs), where views share data flows and cross-view interactions, remain out of reach. Tight field-level coupling among data transformations, visual encodings, and interaction coordinations causes errors in one component to silently invalidate others. Rather than pursuing end-to-end analytical quality, which depends on model capability, domain knowledge, and user expertise, we target a foundational question: can LLMs reliably produce structurally correct CMVs, and what abstractions make this possible? We present Crystalis, a framework built on query-centric CMV modeling that decomposes a CMV into structured queries over a dependency graph spanning three component types (Data, Visualization, Interaction) and three abstraction levels (requirement, specification, executable object). Two complementary mechanisms operate over this structure: progressive nucleation crystallizes each query vertically from requirement to object along the dependency order, while semantic annealing enforces horizontal consistency across queries at each level through layered logical checks. On a 12-task benchmark across five frontier LLMs, Crystalis achieves up to 75% end-to-end success, substantially outperforming an agentic coding baseline (8.3% E2E with the same foundation model), and a user study with 12 practitioners confirms the usability of the decomposition and iterative refinement workflow.

---

*Source: [arXiv](https://arxiv.org/abs/2607.24766)*
