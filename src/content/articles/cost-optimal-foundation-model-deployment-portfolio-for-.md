---
title: "Cost-Optimal Foundation Model Deployment Portfolio for Transportation Management"
dek: "arXiv:2607.13239v1 Announce Type: new Abstract: Foundation models, including large language models (LLMs) and vision-language models (VLMs), are increasingly used for transportation management center (TMC) tasks such as..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-07-16
featured: false
gradient: grad-4
---

arXiv:2607.13239v1 Announce Type: new Abstract: Foundation models, including large language models (LLMs) and vision-language models (VLMs), are increasingly used for transportation management center (TMC) tasks such as anomaly detection, incident reporting, and traveler information. Deploying multiple such models across TMC functions raises a portfolio question: which model should serve each function, in which deployment mode, and under what shared hardware budget? We formulate this as the Foundation Model Deployment Portfolio (FMDP) problem, a mixed-integer program minimizing total cost of ownership (TCO) subject to per-function quality, latency, and safety constraints over shared GPU capacity. We prove the problem NP-hard by reduction from the 0-1 knapsack problem and propose a polynomial-time greedy heuristic. In an illustrative case study with five TMC functions and 19 candidate (model, mode) pairs, FMDP identifies a mixed portfolio costing $34/mo (97% below the cheapest feasible all-closed-API baseline) by routing four functions to open-source APIs and the one function whose quality floor no open-source model meets to a closed API. Break-even analysis shows that on-premise GPU investment becomes reasonable only above approximately 309 vision queries/hour or if API prices double.

---

*Source: [arXiv](https://arxiv.org/abs/2607.13239)*
