---
title: "ConsMSA: Semantic Distribution Consistency Learning for Multimodal Sentiment Analysis"
dek: "arXiv:2610.31731v1 Announce Type: new Abstract: Multimodal sentiment analysis (MSA) aims to predict human sentiments by integrating signals from different modalities such as text, video, and audio. However, raw..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-10-27
featured: false
gradient: grad-4
---

arXiv:2610.31731v1 Announce Type: new Abstract: Multimodal sentiment analysis (MSA) aims to predict human sentiments by integrating signals from different modalities such as text, video, and audio. However, raw multimodal sequences often suffer from semantic inconsistency--exhibiting redundancy or conflicts within and across modalities--which hinders robust understanding and increases computational cost. To this end, we introduce ConsMSA, which explicitly formalizes semantic distribution consistency across both $\textit{intra}$- and $\textit{inter}$-modality, providing a consistency-aware mechanism for robust and efficient multimodal sentiment prediction. Specifically, ConsMSA projects multimodal token features into a shared sentiment space to compute an Intra- and Inter-modality Consistency Score ($I^2CS$). By coupling this score with predictive relevance, we formulate consistency-aware importance signals that are utilized: (i) as a consistency regularizer to align latent distributions during training, (ii) to derive semantic-aware weights for adaptive multimodal token reweighting, and (iii) as a practical criterion to prune redundant or conflicting tokens. Extensive experiments on CMU-MOSI, CMU-MOSEI, and CH-SIMS demonstrate that ConsMSA achieves state-of-the-art performance while remaining robust under aggressive token compression--retaining only 10% of tokens yields comparable accuracy. These results establish semantic distribution consistency as a promising foundation for synergizing predictive robustness with computational efficiency.

---

*Source: [arXiv](https://arxiv.org/abs/2610.31731)*
