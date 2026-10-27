---
title: "Estimation of Propagated Risk in LLM-based Multi-Agent Systems"
dek: "arXiv:2610.33282v1 Announce Type: new Abstract: Large Language Model (LLM) based multi-agent systems introduce a distinctive reliability challenge in which actions taken by upstream agents can affect the correctness of..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-27
featured: false
gradient: grad-4
---

arXiv:2610.33282v1 Announce Type: new Abstract: Large Language Model (LLM) based multi-agent systems introduce a distinctive reliability challenge in which actions taken by upstream agents can affect the correctness of downstream agents. While prior work has investigated error propagation and developed methods for estimating uncertainty inherited from upstream agents, existing approaches do not explicitly model how realized sender-receiver interactions contribute to downstream error risk under different sender correctness states. In this work, we study agent-level error-risk estimation from multi-agent execution traces. We propose Interaction-Effect Propagation (IE-Prop), an interaction-conditioned model that learns separate effects for correct and incorrect upstream agents. For each sender-receiver interaction, the model combines these conditional effects using the sender's estimated error risk, and recursively propagates the resulting risk estimates through the execution graph. We evaluate our approach across three multi-agent architectures and three benchmarks. Across all evaluated architectures, our approach raises the final-node AUROC over the established baseline by approximately 0.05 points on average. Furthermore, tracking risk across multiple agent steps contributes a distinct +0.03 AUROC gain in sequential systems. These results show that realized inter-agent interactions provide predictive information beyond receiver-local evidence, while the value of multi-step risk tracking depends on the system's information-flow structure.

---

*Source: [arXiv](https://arxiv.org/abs/2610.33282)*
