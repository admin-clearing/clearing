---
title: "Uncertainty-Aware Learning from Multi-Expert Interval Targets"
dek: "arXiv:2610.00102v1 Announce Type: new Abstract: Many machine learning (ML) applications rely on expert labels, and qualified experts may provide different but plausible interpretations of the same observation. Such..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-03
featured: false
gradient: grad-4
---

arXiv:2610.00102v1 Announce Type: new Abstract: Many machine learning (ML) applications rely on expert labels, and qualified experts may provide different but plausible interpretations of the same observation. Such variation across expert labels may reflect genuine disagreement or ambiguity rather than annotation error. When individual experts additionally report intervals rather than exact values, the supervision contains two distinct sources of label uncertainty: within-label imprecision and between-expert variation. Existing methods treat these forms separately: multi-expert approaches collapse labels to a consensus, interval-target methods often yield a single prediction, and predictive-uncertainty methods rarely validate their uncertainty estimates against observed expert disagreement. To address this problem, we propose an approach that preserves individual expert intervals, separates within-label imprecision from between-expert variation, and validates the corresponding predictive uncertainty components. First, heterogeneous label vocabularies are harmonized into a common probabilistic label space, separating encoding differences from expert judgement. Second, individual label intervals are retained and modeled with a mixture of Beta distributions trained using a proper Cram\'er-distance objective, preserving distinct expert-reported labels. Third, we decompose predictive uncertainty into within-component, between-component, and model uncertainty, and evaluate whether these components correspond to within-label uncertainty, between-label uncertainty, and model error, respectively. Because this correspondence is not guaranteed, we introduce decomposition matching, which aligns the predictive components to their intended label-side sources. On sea-ice concentration

---

*Source: [arXiv](https://arxiv.org/abs/2610.00102)*
