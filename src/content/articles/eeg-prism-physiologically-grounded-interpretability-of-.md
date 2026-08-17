---
title: "EEG-PRISM: Physiologically-Grounded Interpretability of Predictions by EEG Foundation Models"
dek: "arXiv:2608.13676v1 Announce Type: new Abstract: Objective: Foundation models represent the next advancement in AI for EEG analysis; however current explainable AI techniques provide attribution scores in the..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-17
featured: false
gradient: grad-4
---

arXiv:2608.13676v1 Announce Type: new Abstract: Objective: Foundation models represent the next advancement in AI for EEG analysis; however current explainable AI techniques provide attribution scores in the time-channel input space, which is mismatched to clinical intuition about EEG. Thus, there is a critical need for a universal method that can extend the interpretability of any foundation model to alternative and physiologically relevant domains without modifying or retraining the underlying model. Methods: EEG-PRISM leverages linear transformations and established backpropagation rules to map time-channel attribution scores into alternative domains. We derive mappings to the frequency domain via an invertible DFT and to the source domain via an approximately invertible EEG generative model. We evaluate EEG-PRISM in simulated and real data, assessing recovery of ground-truth phenomena across domains with five foundation models and four AI explainers. Results: In simulation, EEG-PRISM achieves near-perfect spectral recovery and 69.2% spatial accuracy. In epilepsy, EEG-PRISM correctly determines that delta-theta activity is most salient and correctly localizes the seizure onset region with 50% accuracy. In autism, EEG-PRISM localizes the predictive delta-alpha biomarkers to frontal and temporal regions, consistent with prior work. Conclusion: EEG-PRISM is a theoretically-grounded post-hoc attribution method with accurate mapping into the spectral and spatial domains. It supports window-level analysis of transient events (e.g., seizures) and group-level identification of clinically relevant biomarkers (e.g., autism), thus advancing interpretable EEG foundation models. Significance: This work enables physiologically-grounded interpretation of EEG foundation models and s

---

*Source: [arXiv](https://arxiv.org/abs/2608.13676)*
