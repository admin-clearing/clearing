---
title: "MolBioKG: Grounding Out-of-Graph Molecules in Biomedical Knowledge Graphs via Multi-Resolution Structural Anchoring"
dek: "arXiv:2608.06713v1 Announce Type: new Abstract: Biomedical knowledge graphs (KGs) accelerate drug discovery, but standard pipelines assume query molecules already exist as graph entities, leaving unregistered molecules..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-08-10
featured: false
gradient: grad-4
---

arXiv:2608.06713v1 Announce Type: new Abstract: Biomedical knowledge graphs (KGs) accelerate drug discovery, but standard pipelines assume query molecules already exist as graph entities, leaving unregistered molecules disconnected. We address this cold-start challenge, termed the out-of-graph molecule problem, by introducing MolBioKG. This two-layer system grounds unseen molecules in biomedical evidence via multi-resolution structural anchoring. It connects an index of 2.74 million molecules (represented by scaffolds, fragments, functional groups, and fingerprints) to a 9.6-million-edge KG. Given only a SMILES string, MolBioKG retrieves structurally related graph entities and traverses their biomedical neighborhoods without task-specific training. It features two inference mechanisms: static multi-anchor retrieval using Reciprocal Rank Fusion, and Adapt-KG, a tool-using LLM policy for adaptive traversal. Evaluated across in-graph link recovery, complex multi-hop reasoning, and out-of-graph generalization, MolBioKG outperforms strong baselines. Notably, it raises Hits@10 from 0.585 to 0.876 in multi-hop reasoning and out-of-graph target recall from 0.145 to 0.269, all while ensuring predictions retain traceable structural anchors and source-attributed KG evidence.

---

*Source: [arXiv](https://arxiv.org/abs/2608.06713)*
