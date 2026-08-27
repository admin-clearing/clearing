---
title: "AgentRoom: Concurrent Multi-Agent Coding in a CRDT-Backed Shared Workspace"
dek: "arXiv:2608.23740v1 Announce Type: new Abstract: Concurrent multi-agent coding promises division of labor across modules, robustness through redundancy, and parallel exploration at the natural granularity of multi-file..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-27
featured: false
gradient: grad-4
---

arXiv:2608.23740v1 Announce Type: new Abstract: Concurrent multi-agent coding promises division of labor across modules, robustness through redundancy, and parallel exploration at the natural granularity of multi-file projects. Realtime collaborative editing protocols solve this coordination problem for human teams via Conflict-free Replicated Data Types (CRDTs), but the LLMs underneath generate one token at a time and existing multi-agent coding systems inherit this serial limit: they either sequence agents through phase handoffs or pool independent samples without coordination, and a single agent abandons up to half of hard tasks with a one-file stub-and-exit. AgentRoom is a realtime collaborative editing protocol for concurrent coding agents. Its runtime layer exposes file-level claim, status, and broadcast as MCP tools on a CRDT-merged shared filesystem. Five frontier coding-CLI models ran four backend coding tasks, with cross-language checks in Python DevBench and Rust+axum. For CLI-stable models, AgentRoom with 2 agents abandons fewer tasks than Solo and has less run-to-run variation. At matched-compute, one positive mean LLM-judge contrast puts AgentRoom over parallel-merge. The other contrast, a bundle probe, puts full AgentRoom above each partial case: an ordering rather than a percentage split. Coordination, not parallelism or CRDT-merge, bears the load.

---

*Source: [arXiv](https://arxiv.org/abs/2608.23740)*
