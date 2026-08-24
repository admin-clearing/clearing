---
title: "Interpretable Multimodal Classification with Linear Discriminant Tree Ensembles"
dek: "arXiv:2608.20384v1 Announce Type: new Abstract: Multimodal affect and behaviour classifiers that fuse heterogeneous text, audio, and visual streams must simultaneously achieve competitive accuracy and produce..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-24
featured: false
gradient: grad-4
---

arXiv:2608.20384v1 Announce Type: new Abstract: Multimodal affect and behaviour classifiers that fuse heterogeneous text, audio, and visual streams must simultaneously achieve competitive accuracy and produce human-understandable explanations of the cues driving their decisions -- a dual objective that current high-capacity models, notably Transformers, only partially address. While Transformers attain strong predictive performance, their distributed representations and deep nonlinearity make it difficult to assign meaningful importance weights to individual multimodal features, limiting their use in trust-sensitive applications such as clinical affect monitoring and educational assessment. We address this gap by developing a framework based on tree-based ensembles that balances accuracy and interpretability. The framework encodes each modality into tokens, extracts and clusters concepts to reduce dimensionality, routes the fused modalities through tree-based ensemble classifiers, and interprets trends using a novel modified feature importance metric. The modified importance reduces the influence of the negative class in binary classification tasks, thereby improving indicator or marker detection. The proposed tree-based ensembles -- Linear Discriminant Tree (LDT), Linear Discriminant Forest (LDF), and Linear Discriminant AdaBoost (LDAB) -- achieve F1-mod gains of 4.3\% over the Multimodal Transformer and accuracy gains of 3.0\% over the primary interpretable multimodal baseline, Interpretable Multimodal Routing (IMR). The proposed multimodal feature importance extracts salient inter-modal concepts with substantially higher human-annotator agreement scores than default feature importance (62.2\% vs.\ 43.2\% on IEMOCAP; 46.7\% vs.\ 32.1\% on CMU-MOSI).

---

*Source: [arXiv](https://arxiv.org/abs/2608.20384)*
