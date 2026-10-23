---
title: "A Small Model Asks Better: Fine-Tuning Query Clarification for Retrieval-Augmented Generation"
dek: "arXiv:2610.28686v1 Announce Type: new Abstract: Query clarification is essential for retrieval-augmented generation (RAG) systems that face ambiguous user queries. We consider multi-turn grounded conversational..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-23
featured: false
gradient: grad-4
---

arXiv:2610.28686v1 Announce Type: new Abstract: Query clarification is essential for retrieval-augmented generation (RAG) systems that face ambiguous user queries. We consider multi-turn grounded conversational scenarios where a user query is either ill-formed or ambiguous in the context of the prior dialog or, more interestingly, it may be well-formed but when posed against retrieved documents there are multiple relevant interpretations. The task is to recognize both such cases and then generate an appropriate clarification request to the user. We present ClariEdge, a new dataset of approximately 3,900 examples that include such ambiguous queries along with negative examples that do not require clarification. We also show that a lightweight fine-tuned LoRA achieves 96.6% classification accuracy and outperforms prompted baselines of many larger models on both classification and quality of clarification generation. Our study shows that hard negatives are an essential ingredient to separate out queries that are truly ambiguous from queries that may look ambiguous but are not (i.e., can be resolved from the context). The same LoRA achieves high performance in both pre-retrieval and post-retrieval scenarios; thus, it can be used in two places in a RAG pipeline as a check before answer generation. The ClariEdge dataset is available at https://huggingface.co/datasets/ibm-research/ClariEdge.

---

*Source: [arXiv](https://arxiv.org/abs/2610.28686)*
