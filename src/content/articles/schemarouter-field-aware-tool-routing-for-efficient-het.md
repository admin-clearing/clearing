---
title: "SchemaRouter: Field-Aware Tool Routing for Efficient Heterogeneous Agentic RAG"
dek: "arXiv:2608.21375v1 Announce Type: new Abstract: Heterogeneous agentic retrieval-augmented generation (RAG) systems increasingly orchestrate external APIs, internal databases, vector stores, and graph stores. Exposing..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-08-25
featured: false
gradient: grad-4
---

arXiv:2608.21375v1 Announce Type: new Abstract: Heterogeneous agentic retrieval-augmented generation (RAG) systems increasingly orchestrate external APIs, internal databases, vector stores, and graph stores. Exposing all tool descriptions to an LLM agent, or selecting tools only by vector similarity, causes two costly failures: over-fetching, which increases payload size, token use, and latency, and under-fetching, which omits fields needed to answer the query. We present SchemaRouter, a lightweight routing layer that represents tools, endpoints, parameters, response fields, domain concepts, units, provenance, and license policies as a schema graph. Given a query, SchemaRouter emits an executable tool plan specifying which tools to call and which fields to retrieve. A small LLM extracts intent, concepts, and source constraints, while field selection is deterministic over the graph through intent-group projection and concept-field matching with an alias layer. On a materials-science benchmark of 110 queries, SchemaRouter achieves answer accuracy of 0.71, matching fetch-everything within overlapping confidence intervals and exceeding prompt-all's 0.66, though their intervals overlap. It uses 227 retrieved-context tokens versus 2,066 for fetch-everything and achieves 2.7x lower end-to-end latency than prompt-all. It also obtains the best tool-exact rate of 0.93 and parameter validity of 1.0. SchemaRouter grounds provenance and license information in 62 percent of answers, compared with approximately 0 percent for all baselines. We also find that minimizing selected-field count is counterproductive: it reduces answer accuracy to 0.56 with negligible token savings, while recall-preserving projection restores top accuracy. SchemaRouter improves efficiency, schema-size-indepen

---

*Source: [arXiv](https://arxiv.org/abs/2608.21375)*
