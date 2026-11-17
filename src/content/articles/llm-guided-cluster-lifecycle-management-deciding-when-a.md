---
title: "LLM-Guided Cluster Lifecycle Management: Deciding When and How to Evolve Behavioral Clusters"
dek: "arXiv:2611.17616v1 Announce Type: new Abstract: Behavioral clusters learned over user or item interactions drift as behavior evolves: some fragment into sub-behaviors, some converge, some disappear, and new patterns..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-11-16
featured: false
gradient: grad-4
---

arXiv:2611.17616v1 Announce Type: new Abstract: Behavioral clusters learned over user or item interactions drift as behavior evolves: some fragment into sub-behaviors, some converge, some disappear, and new patterns emerge. Two paradigms dominate the maintenance of evolving clusterings. Threshold triggers fire a pre-specified action when a hardcoded statistic crosses a cutoff; refit-and-track (MONIC-style) re-clusters every window and infers transitions from how the new clusters align with the previous window's. Both hardwire the decision into a threshold or a re-clustering rule. We study an alternative in which a large language model (LLM) makes the lifecycle decision in place. Given a threshold-free, whole-population view of the current cluster set (statistical health, labels, member texts, residual mass), the LLM decides per cluster whether and how to act (split, merge, retire, create, or no-action) without re-clustering. Because the useful signal channel depends on how informative the labels are, we fix a richness-conditioned policy in advance: statistics when label distinctiveness is low, fused statistics+semantics when it is high. On three public datasets spanning label richness (YooChoose 0.17, MOOC 0.50, News-Category 0.70), the policy-selected LLM mode obtains the highest F1 on all three, with far fewer interventions and stronger restraint than tuned threshold heuristics and a MONIC steelman (paired Wilcoxon p <= 0.003, bootstrap 95% CIs excluding zero). The gain is concentrated more in precision than recall. The useful modality shifts from statistics to semantics/fusion as richness rises. Semantics hurt on YooChoose, fusion is roughly neutral on MOOC, and the semantic channel is required on News. One base prompt template and one fixed policy serve all three da

---

*Source: [arXiv](https://arxiv.org/abs/2611.17616)*
