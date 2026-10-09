---
title: "Coverage-Aware Reasoning with Medical Tokens for Diagnosis Prediction"
dek: "arXiv:2610.10641v1 Announce Type: new Abstract: Large language models (LLMs) offer promising potential for next-visit diagnosis prediction, owing to their ability to integrate longitudinal clinical evidence and reason..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-10-09
featured: false
gradient: grad-4
---

arXiv:2610.10641v1 Announce Type: new Abstract: Large language models (LLMs) offer promising potential for next-visit diagnosis prediction, owing to their ability to integrate longitudinal clinical evidence and reason over it in natural language. However, reinforcement learning for LLM reasoning commonly rewards each trajectory according to the correctness of its final answer. In next-visit diagnosis prediction, multiple diagnoses can be simultaneously valid, but independently rewarding one diagnosis per trajectory does not distinguish repeated hits from coverage of different diagnoses. The policy can therefore concentrate on a few correct diagnoses, leaving others uncovered. Meanwhile, LLM tokenizers can split ICD codes into several generic tokens with limited clinical meaning, requiring multiple decoding steps to predict each diagnosis and hindering reasoning over a large disease vocabulary. To address both challenges, we propose CARing, a framework that represents diagnoses with compositional Semantic IDs (SIDs) and optimizes reasoning trajectories for multi-label coverage. Concretely, we first encode ontology-enriched disease semantics into compact SIDs through residual quantization, and ground the resulting SID tokens in natural language and longitudinal EHR contexts through multi-task alignment and reasoning-enriched training to unlock transferable LLM reasoning. CARing further improves unordered multi-label prediction through a coverage reward for reinforcement learning and multi-positive supervision. At inference time, the model supports both efficient direct constrained decoding and multi-chain reasoning with rank fusion. On MIMIC-III and MIMIC-IV, CARing exceeds all EHR-trained baselines in weighted F1 and attains the highest top-k recall at every reported cut

---

*Source: [arXiv](https://arxiv.org/abs/2610.10641)*
