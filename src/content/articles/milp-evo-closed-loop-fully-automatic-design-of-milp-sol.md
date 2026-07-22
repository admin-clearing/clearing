---
title: "MILP-Evo: Closed-Loop Fully Automatic Design of MILP Solvers"
dek: "arXiv:2607.18252v1 Announce Type: new Abstract: Machine learning methods have shown that data-driven policies can accelerate mixed-integer linear programming (MILP) solvers, but many such approaches remain difficult to..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-07-22
featured: false
gradient: grad-4
---

arXiv:2607.18252v1 Announce Type: new Abstract: Machine learning methods have shown that data-driven policies can accelerate mixed-integer linear programming (MILP) solvers, but many such approaches remain difficult to inspect, adapt, and deploy because the learned policy is represented as an external predictor or other opaque model. By contrast, explicit solver logic is easier to understand and integrate, but is usually hand-designed rather than learned from solver feedback. We study whether the automatic design of MILP solver logic can instead be cast as LLM-guided closed-loop search over executable white-box components evaluated directly by end-to-end solver behavior. To this end, we propose a closed-loop program evolution framework for MILP solver auto-design, implemented through PySCIPOpt, and instantiate it on the joint design of a cut selector and a branching rule. Candidate programs are iteratively generated, loaded into SCIP, and evaluated by direct execution on MILP instances, with the resulting feedback guiding performance-based selection, targeted repair, diagnostic reflection, and diversity-aware population maintenance. The method outputs explicit solver components that can be inspected, modified, and deployed within standard solver workflows. Across four benchmark families, we find that LLM-guided program evolution can discover competitive domain-specialized policies in several settings.

---

*Source: [arXiv](https://arxiv.org/abs/2607.18252)*
