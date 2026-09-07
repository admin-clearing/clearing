---
title: "REFINE: LLM Refinement over Budgeted Text-Attributed Graphs for Personalized Medical Concept Representation"
dek: "arXiv:2609.04415v1 Announce Type: new Abstract: Learning rich medical concept representations is essential for EHR prediction. Text-attributed knowledge graphs (TKGs) provide a natural foundation by organizing..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-07
featured: false
gradient: grad-4
---

arXiv:2609.04415v1 Announce Type: new Abstract: Learning rich medical concept representations is essential for EHR prediction. Text-attributed knowledge graphs (TKGs) provide a natural foundation by organizing heterogeneous medical relations together with textual semantics. However, most existing encoders process concepts uniformly across patients, despite the fact that a code's meaning and predictive value depend on patient-specific clinical context and trajectory. Learning patient-personalized concept representations from TKGs introduces two key challenges: (1) deciding how much KG context to incorporate for each observed code, and (2) aligning semantic information with the patient-specific relational structure. We propose REFINE, a KG-aware budgeted LLM graph refinement framework for patient-personalized medical concept encoding. Starting from a global TKG, REFINE constructs patient-specific temporal graphs. A sequential reinforcement learning policy selects a personalized KG expansion budget for each observed code. The resulting patient graph is processed by a heterogeneous GNN to capture relation-aware structural dependencies, while a frozen LLM uses graph-aware soft prompts to semantically refine concept representations. Experiments on MIMIC-III and MIMIC-IV show that REFINE consistently improves diverse EHR backbones, outperforms strong baselines, and demonstrates robust gains across component ablation, KG selection, and data insufficiency.

---

*Source: [arXiv](https://arxiv.org/abs/2609.04415)*
