---
title: "CoDiffGRN: Rethinking Gene Regulatory Network Inference via the BEELINE-KGC Benchmark and Co-evolutionary Discrete Diffu"
dek: "arXiv:2607.13120v1 Announce Type: new Abstract: Inferring gene regulatory networks (GRNs) from single-cell transcriptomic data is crucial for biological discovery, yet existing approaches suffer from a fundamental..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-07-16
featured: false
gradient: grad-4
---

arXiv:2607.13120v1 Announce Type: new Abstract: Inferring gene regulatory networks (GRNs) from single-cell transcriptomic data is crucial for biological discovery, yet existing approaches suffer from a fundamental misalignment with real-world needs. Researchers typically seek a small set of high-confidence regulatory interactions for experimental validation, often involving previously unseen genes. However, current benchmarks rely on transductive splits with global classification metrics, while prevailing models struggle to generalize under inductive settings. To bridge this gap, we reformulate GRN inference as an inductive, ranking-centric graph completion problem and introduce \textbf{\benchmark}, a new benchmark that incorporates an inductive gene-holdout split together with knowledge graph completion metrics to better evaluate top-ranked predictions. Building on this, we propose \textbf{\method}, the first co-evolutionary discrete diffusion framework that jointly models biologically coherent discretized gene expression states and regulatory interactions for robust inductive generalization and improved top-ranked regulatory discovery. We further introduce TF-ALL Subgraph Sampling (TASS) for scalable training. Extensive experiments on {\benchmark} show that {\method} establishes new state-of-the-art performance, significantly outperforming existing methods in novel regulatory discovery, and ablation studies further verify the effectiveness of our design.

---

*Source: [arXiv](https://arxiv.org/abs/2607.13120)*
