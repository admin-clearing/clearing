---
title: "CLEAR: Cross-Source Evidence Adjudication for Large Language Models in Medicine"
dek: "arXiv:2609.16301v1 Announce Type: new Abstract: Medical knowledge evolves continuously, whereas the parametric knowledge encoded in large language models (LLMs) is fixed at training time. External retrieval, including..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-16
featured: false
gradient: grad-4
---

arXiv:2609.16301v1 Announce Type: new Abstract: Medical knowledge evolves continuously, whereas the parametric knowledge encoded in large language models (LLMs) is fixed at training time. External retrieval, including retrieval-augmented generation (RAG), can provide access to newly available evidence, but retrieved information may be irrelevant, incomplete, or conflicting. As a result, external retrieval can in turn degrade the factual accuracy and evidence grounding of LLM outputs. To address this challenge, we propose \textbf{CLEAR}, an agentic framework for cross-source evidence adjudication in LLMs in medicine. CLEAR independently generates candidate answers from three complementary pathways---parametric knowledge, locally curated corpora, and dynamically retrieved evidence---reflecting three common sources of information available to LLMs. An aggregation verifier jointly evaluates the candidates, supporting evidence, provenance, and source-quality information to identify agreement and conflict across sources. An adjudication module then determines whether the current conclusion should be preserved or revised through complementary override-guard and challenge-audit mechanisms, while unresolved conflicts trigger targeted follow-up search and re-adjudication.

---

*Source: [arXiv](https://arxiv.org/abs/2609.16301)*
