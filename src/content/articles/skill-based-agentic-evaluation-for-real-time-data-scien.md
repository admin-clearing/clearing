---
title: "Skill-based Agentic Evaluation for Real-time Data Science Tasks"
dek: "arXiv:2609.16487v1 Announce Type: new Abstract: We present a framework for evaluating data-science agents on live, continuously updated data using executable ground truth and format-agnostic factoid scoring. Consider..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-16
featured: false
gradient: grad-4
---

arXiv:2609.16487v1 Announce Type: new Abstract: We present a framework for evaluating data-science agents on live, continuously updated data using executable ground truth and format-agnostic factoid scoring. Consider this example query: "what were last week's audience sizes"---the reference answer changes as the underlying data changes, so static references become outdated and standard LLM-as-a-judge pipelines cannot verify responses against a fixed ground truth. Our central contribution, ground-truth-as-code, encodes each expected answer as an executable reference function that recomputes the answer directly from live data at evaluation time, ensuring the reference remains consistent with the system it describes. We combine this with a factoid-level, format-agnostic judge that decomposes both the agent's response and the computed ground truth into atomic claims and scores precision, recall, and accuracy over them, irrespective of the response format (prose, list, table, HTML, etc.). The approach is applicable to agents whose expected outputs can be expressed as executable data computations. We validate the framework through a human--LLM agreement study on an internally developed machine learning skill deployed in production, using a synthetic database constructed to reproduce production schemas and entity relationships. Relative to a natural-language ground-truth baseline, our method achieves a 29% improvement in the Matthews Correlation Coefficient (MCC)---a class-balanced measure of agreement between expert annotators and LLM-as-a-judge predictions---and a 16% reduction in token consumption per test case, while a self-directed baseline lacking explicit ground truth is anti-correlated with human judgment. Agents that perform multi-source data integration and computati

---

*Source: [arXiv](https://arxiv.org/abs/2609.16487)*
