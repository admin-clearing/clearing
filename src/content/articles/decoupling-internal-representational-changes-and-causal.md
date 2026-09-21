---
title: "Decoupling Internal Representational Changes and Causal Importance in Fine-Tuned Large Language Models"
dek: "arXiv:2609.21113v1 Announce Type: new Abstract: Fine-tuning has emerged as a widely adopted approach for adapting LLMs to a variety of downstream tasks. However, how it reshapes their internal mechanisms remains poorly..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-21
featured: false
gradient: grad-4
---

arXiv:2609.21113v1 Announce Type: new Abstract: Fine-tuning has emerged as a widely adopted approach for adapting LLMs to a variety of downstream tasks. However, how it reshapes their internal mechanisms remains poorly understood. To address this, we investigate how fine-tuning alters internal representations in LLMs, including attention patterns and layer-wise activations, and examine whether these changes are linked to task-relevant components identified by EAP (e.g., attention heads and logit-level activations) that drive task performance. We find that EAP-identified components are concentrated within specific layers, indicating a degree of functional localisation in how models internalise task-specific behavior. Notably, the distribution of these components across layers is largely uncorrelated with the layers undergoing the most substantial representational changes during fine-tuning. Furthermore, we observe that overlap in EAP-identified components across tasks does not translate into cross-task performance transfer if the tasks are different in nature (e.g. classification vs. generative tasks). More specifically, fine-tuning on one task can lead to a degradation of performance on another when the two tasks exhibit a high degree of overlap in their EAP-identified components.

---

*Source: [arXiv](https://arxiv.org/abs/2609.21113)*
