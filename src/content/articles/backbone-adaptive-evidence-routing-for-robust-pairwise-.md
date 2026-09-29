---
title: "Backbone-Adaptive Evidence Routing for Robust Pairwise LLM Judging"
dek: "arXiv:2609.30751v1 Announce Type: new Abstract: Pairwise language-model judges can gather evidence through direct comparison, reasoning, or reference-based verification, but no single protocol is best across benchmarks..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-29
featured: false
gradient: grad-4
---

arXiv:2609.30751v1 Announce Type: new Abstract: Pairwise language-model judges can gather evidence through direct comparison, reasoning, or reference-based verification, but no single protocol is best across benchmarks and judge backbones. We introduce Backbone-Adaptive Evidence Routing (BAER), which adapts the evidence mechanism while preserving candidate symmetry: swapping the two responses may reverse the preference but cannot change its strength. BAER separates each expert's signed preference from candidate-invariant reliability and builds three symmetric heads: evidence stacking, reliability-based expert routing, and candidate-blind reference verification. Development data select one head for each benchmark--backbone condition, and that choice is frozen before testing. Across four benchmarks and two 8B judge backbones, BAER achieves the highest test accuracy among the compared methods in all eight conditions, with full prediction coverage and gains of 0.87--7.32 points over the strongest external baseline. The results show that adapting how evidence is gathered is more reliable than fixing one judging protocol everywhere.

---

*Source: [arXiv](https://arxiv.org/abs/2609.30751)*
