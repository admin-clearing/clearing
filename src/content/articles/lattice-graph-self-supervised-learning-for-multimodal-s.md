---
title: "LATTICE: Graph Self-Supervised Learning for Multimodal Spatial Omics Integration"
dek: "arXiv:2607.14410v1 Announce Type: new Abstract: Spatially resolved omics studies increasingly combine transcriptomic and epigenomic assays, yet downstream analysis is often still performed using single-modality..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-18
featured: false
gradient: grad-4
---

arXiv:2607.14410v1 Announce Type: new Abstract: Spatially resolved omics studies increasingly combine transcriptomic and epigenomic assays, yet downstream analysis is often still performed using single-modality pipelines. We present LATTICE (Latent Alignment of Tissue-level and Transcriptomic Information for Cross-modal Embedding), a graph-based self-supervised framework that learns spot-level representations from harmonized multimodal features. LATTICE integrates five aligned modality blocks per Visium spot: Visium RNA, scMultiome RNA, scMultiome ATAC, spatial ATAC, and spatial CUT\&Tag. These modalities capture spatial transcriptomic measurements, single-cell inferred regulatory activity, and in situ chromatin and histone states within a unified lattice representation. LATTICE constructs a spatial neighborhood graph and trains a TransformerConv encoder using masked reconstruction, cross-modal alignment, and spatial smoothness objectives. On a private 11-sample melanoma cohort from an anonymized clinical collaborator comprising 54{,}912 total spots, LATTICE demonstrated stable optimization behavior, reproducible embeddings across analysis seeds, and complete multimodal integration across all samples. Adding scMultiome RNA to Visium RNA alone substantially improved concordance with Space Ranger clusters across 11 runs (adjusted Rand index [ARI] +0.157, normalized mutual information [NMI] +0.143, and spatial contiguity +0.174). Additional modalities further improved spatial contiguity and multimodal utility score (MUS), although they sometimes reduced agreement with RNA-derived reference labels, likely because the learned embeddings captured chromatin and regulatory structure beyond transcriptomic similarity alone. These results position LATTICE as a practical and empiri

---

*Source: [arXiv](https://arxiv.org/abs/2607.14410)*
