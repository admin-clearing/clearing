---
title: "Improving Molecular Property Prediction in Small Language Models Using Graph-based Tools"
dek: "arXiv:2607.13115v1 Announce Type: new Abstract: Small language models (SLMs) have shown promise for zero-shot molecular property prediction from SMILES strings, yet they often suffer from structural blindness because..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-07-16
featured: false
gradient: grad-4
---

arXiv:2607.13115v1 Announce Type: new Abstract: Small language models (SLMs) have shown promise for zero-shot molecular property prediction from SMILES strings, yet they often suffer from structural blindness because sequence representations under-specify key graph-topological cues. We propose a modular Context-Augmented Prompting framework that enables agentic tool use at inference time: a trained GNN expert model provides a predictive hint with confidence, and a GNN extracts an instance-specific explanatory subgraph (e.g., a subgraph SMILES and an accompanying explanatory paragraph). We evaluate three commonly used SLMs on MUTAG and Tox21 under five prompting configurations ranging from SMILES-only to using all available tools at hand. Across two datasets, enriching prompts with graph-derived context yields substantial accuracy gains, often exceeding 25% relative improvement and up to 74% on Tox21. We further validate the functional relevance of the extracted motifs via a necessity-based edge-drop intervention. Despite the observed gains, a persistent gap remains to specialized GNN models, highlighting both the value and limits of text-conditioned reasoning for molecular structure.

---

*Source: [arXiv](https://arxiv.org/abs/2607.13115)*
