---
title: "EdgeMem: LLM-Free Agent Memory Construction and Retrieval via Evidence-Preserving Multi-Anchor Hypergraph"
dek: "arXiv:2609.05553v1 Announce Type: new Abstract: Agent memory allows LLM agents to use earlier interactions when answering new queries. Existing methods often compress interaction histories into summaries or other..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-09-10
featured: false
gradient: grad-4
---

arXiv:2609.05553v1 Announce Type: new Abstract: Agent memory allows LLM agents to use earlier interactions when answering new queries. Existing methods often compress interaction histories into summaries or other LLM-generated representations. Repeated generation adds cost and can discard answer-bearing details before the system knows what a future query will require. We propose EdgeMem, an agent-memory method built around a simple principle: preserve original interaction turns and organize them through complementary content, temporal, and episodic cues. EdgeMem realizes this principle with a multi-anchor hypergraph constructed by lightweight local processing. Retrieval directly returns source evidence and reserves LLM use for final answer generation, combining structured access to multi-session histories with faithful retention of the original conversation. Experiments on LoCoMo and LongMemEval-S show strong retrieval and memory-grounded question answering; on LoCoMo, EdgeMem achieves the highest strict-judge score among seven reproduced systems under a shared prompt (61.01 versus 58.70), while construction and retrieval require no generative-LLM calls. Overall, EdgeMem shows that preserving and organizing source evidence provides an effective and efficient foundation for agent memory without generative memory management.

---

*Source: [arXiv](https://arxiv.org/abs/2609.05553)*
