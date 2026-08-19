---
title: "MultiSigBERT: Beyond Survival Analysis through Multimodal and Sequential Modeling in Oncology"
dek: "arXiv:2608.16972v1 Announce Type: new Abstract: Machine learning has become an essential component of modern healthcare, where the integration of heterogeneous data sources offers unprecedented opportunities to improve..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-19
featured: false
gradient: grad-4
---

arXiv:2608.16972v1 Announce Type: new Abstract: Machine learning has become an essential component of modern healthcare, where the integration of heterogeneous data sources offers unprecedented opportunities to improve clinical decision-making. Electronic Health Records (EHR) contain complementary information -- including narrative clinical reports, numerical measurements, and structured variables -- yet most survival models remain limited to a single modality or fail to exploit the temporal nature of patient trajectories. We propose MultiSigBERT, a unified framework for multimodal sequential survival modeling in oncology based on path signature representations. Here, narrative medical reports (free-text) are converted into sentence embeddings by extracting and averaging contextual word embeddings. These representations are then compressed via modality-specific PCA and concatenated with structured covariates to form joint temporal trajectories which are then encoded using the Signature transform, a tool from Rough Paths theory that efficiently captures higher-order temporal interactions across modalities without supervision needed. The computed Signature features are finally incorporated as high dimensional features into a LASSO-regularized Cox model to estimate individualized risk scores. The performance of our novel MultiSigBERT pipeline is illustrated on the analysis of a real-world oncology cohort from the L\'eon B\'erard Center, comprising over 120,000 medical reports and structured records from more than 2,500 patients. The model achieves a concordance index of 0.743 (sd 0.029) on an independent test set, demonstrating the benefit of jointly modeling multimodal temporal dynamics together with patient-level geometric structure for survival prediction.

---

*Source: [arXiv](https://arxiv.org/abs/2608.16972)*
