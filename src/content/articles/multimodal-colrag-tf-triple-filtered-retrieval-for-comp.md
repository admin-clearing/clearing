---
title: "Multimodal CoLRAG-TF: Triple-Filtered Retrieval for Complex PDFs"
dek: "arXiv:2607.20517v1 Announce Type: new Abstract: Retrieval-augmented generation (RAG) over heterogeneous PDF collections remains challenging due to multimodal content, domain-specific terminology, and the need for..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-24
featured: false
gradient: grad-4
---

arXiv:2607.20517v1 Announce Type: new Abstract: Retrieval-augmented generation (RAG) over heterogeneous PDF collections remains challenging due to multimodal content, domain-specific terminology, and the need for multi-hop reasoning across dispersed evidence. We present Multimodal CoLRAG-TF, a four-axis fusion architecture that integrates dense text embeddings, BM25 keyword matching, knowledge-graph triple filtering, and image-based similarity for robust retrieval over complex documents. Our system constructs a multimodal index of 2,403 blocks extracted from 43 Japanese disaster lesson PDFs, supported by a hybrid OCR pipeline and LLM-based caption generation. To enhance compositional reasoning, we extract 11,414 OpenIE triples and index them with FAISS, enabling sub-second triple lookup and hierarchical propagation of relevance signals. A HippoRAG2-inspired coarse-to-fine retriever (volume $\to$ chapter $\to$ block) narrows the search space before final fusion scoring. Bayesian optimization over fusion weights reveals that the triple axis must dominate ($\alpha_\text{triple} = 0.44$) to counteract lexical bias and sustain multi-hop retrieval quality. Evaluated on a 457-pair benchmark, Multimodal CoLRAG-TF achieves a Retrieval Recall of 0.9909 and a 71.6$\%$ improvement in multi-hop answer similarity over single-hop queries. An image-to-lesson pipeline using a vision LLM further demonstrates the applicability of the approach to visual inputs. These results show that triple-filtered multimodal fusion is essential for structured reasoning over noisy, heterogeneous PDFs and provides a general framework applicable beyond the disaster domain.

---

*Source: [arXiv](https://arxiv.org/abs/2607.20517)*
