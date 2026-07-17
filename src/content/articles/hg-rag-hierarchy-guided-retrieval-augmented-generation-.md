---
title: "HG-RAG: Hierarchy-Guided Retrieval-Augmented Generation for Structured Knowledge Graphs"
dek: "arXiv:2607.14095v1 Announce Type: new Abstract: Retrieval Augmented Generation (RAG) has proven to be a widely successful process at improving the quality of outputs from a Large Language Model (LLM) for wider context...."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-07-17
featured: false
gradient: grad-4
---

arXiv:2607.14095v1 Announce Type: new Abstract: Retrieval Augmented Generation (RAG) has proven to be a widely successful process at improving the quality of outputs from a Large Language Model (LLM) for wider context. However, RAG systems typically retrieve context from flat document stores, which struggles when queries require hierarchical or relational reasoning across structured knowledge. I present HG-RAG (Hierarchy-Guided RAG), a framework that performs graph-traversal over a hierarchical knowledge graph to deliver structured context to a language model. My retrieval pipeline resolves a named entity anchor from the query, then expands context upward through parent nodes, laterally through relational neighbors, and downward through child nodes when needed. I evaluate HG-RAG against a dense retrieval baseline across three world scales (18-800 nodes) with four query types: local fact, hierarchical, neighborhood, and multi-hop. Results show HG-RAG consistently outperforms the flat baseline on hierarchical, relational, and multi-hop reasoning tasks, while reducing hallucination and maintaining locality coherence.

---

*Source: [arXiv](https://arxiv.org/abs/2607.14095)*
