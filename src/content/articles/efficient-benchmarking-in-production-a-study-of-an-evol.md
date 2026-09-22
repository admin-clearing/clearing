---
title: "Efficient Benchmarking in Production: A Study of an Evolving LLM Agent"
dek: "arXiv:2609.21267v1 Announce Type: new Abstract: Production LLM agents are evaluated repeatedly as they evolve, but full agent benchmarks are costly to rerun. We study efficient recurring evaluation for a production..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-09-22
featured: false
gradient: grad-4
---

arXiv:2609.21267v1 Announce Type: new Abstract: Production LLM agents are evaluated repeatedly as they evolve, but full agent benchmarks are costly to rerun. We study efficient recurring evaluation for a production analytics agent serving tens of thousands of monthly active users and report first-hand deployment experience. Using 574 historical runs of the production benchmark, split chronologically into calibration and held-out periods, we compare random sampling, historical caching, fixed representative subsets, and IRT-based adaptive testing. The results show that multidimensional 2PL adaptive testing achieves the best overall score fidelity: executing 200 questions, 38.5% of a full run, yields 1.03 pp of MAE. We nevertheless deployed difficulty-stratified fixed subsets because of their operational simplicity, and show they transfer without recalibration to five other agent families and remain stable across calibration windows as short as one day. Drawing on this deployment experience, we report practical recommendations for recurring production-agent evaluation.

---

*Source: [arXiv](https://arxiv.org/abs/2609.21267)*
