---
title: "Scalable partial information decomposition for symptom networks via supervised embeddings"
dek: "arXiv:2609.13203v1 Announce Type: new Abstract: Pairwise relationships among mental-health symptoms are routinely summarised asscalar edge weights, which cannot express whether two symptoms carry overlapping information..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-15
featured: false
gradient: grad-4
---

arXiv:2609.13203v1 Announce Type: new Abstract: Pairwise relationships among mental-health symptoms are routinely summarised asscalar edge weights, which cannot express whether two symptoms carry overlapping information about a third or information that appears only in combination. Partial information decomposition (PID) addresses this gap but is computationally intractable beyond a few sources. We introduce embedding-based PID (ePID), a scalable pipeline that compresses all nonfocal symptoms into a low-cardinality discrete embedding and computes a tractable two-source PID, yielding source-unique, remainder-unique, redundant, and synergistic components for each ordered source-target pair. We benchmarked 13 candidate embeddings on synthetic Bayesian networks calibrated to PHQ-9 and on 83 real-world datasets across five PID measures. A supervised Agglomerative Conditional Information Bottleneck (ACIB) embedding recovered the reference decomposition most accurately of the 13 embeddings tested, and did so for every PID measure yielding non-negative atoms once four or more symptoms were compressed (synergy recovery r = 0.92). The two instruments then diverged sharply. In PHQ-9 networks (UK Biobank,N = 154,291; Xinxiang student sample, N = 24,292) the surrounding symptom context carried most pairwise dependence through redundant and remainder-unique channels; synergy contributed 6 to 9%, and no directed edge was synergy-dominated in either cohort. In the 28-item Interpersonal Reactivity Index, 45% of source pairs were. The identical pipeline, applied without parameter changes, therefore returned opposite profiles for the two instruments, each consistent with how that instrument was constructed. By separating overlapping from interaction-dependent information, ePID provides a 

---

*Source: [arXiv](https://arxiv.org/abs/2609.13203)*
