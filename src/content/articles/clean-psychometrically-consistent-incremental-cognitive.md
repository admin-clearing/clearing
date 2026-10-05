---
title: "CLEAN: Psychometrically Consistent Incremental Cognitive Diagnosis under Concept-Space Expansion via Architectural Isola"
dek: "arXiv:2610.02278v1 Announce Type: new Abstract: Cognitive diagnosis (CD) is a fundamental task in intelligent education that profiles learner proficiency over knowledge concepts. In real-world learning platforms, newly..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-05
featured: false
gradient: grad-4
---

arXiv:2610.02278v1 Announce Type: new Abstract: Cognitive diagnosis (CD) is a fundamental task in intelligent education that profiles learner proficiency over knowledge concepts. In real-world learning platforms, newly added items continually introduce previously unseen concepts, necessitating dynamic expansion of the underlying concept space. Yet existing incremental CD models assume a fixed concept space, allowing gradients from new items to overwrite historical pathways and induce catastrophic forgetting. More critically, these methods rely solely on soft constraints to preserve historical diagnoses. Such constraints may fail to satisfy the requirement of diagnostic invariance after incremental updates, a requirement known as psychometric consistency in cognitive diagnosis. Therefore, we propose CLEAN (Continual Learning with Expandable and Architecturally Isolated Networks), a novel incremental CD framework supporting concept-space expansion while providing structural guarantees for pointwise invariance of historical diagnoses. Specifically, CLEAN first introduces a strict topological bipartition protocol, freezes historical diagnostic functions and applies deterministic orthogonal column masking to sever gradient interference. Second, to accommodate concept expansion, expandable full-rank branches with micro-variance initialization are deployed to learn novel concepts. Finally, to verify that this architectural design achieves invariance by construction, we formalize Representation Drift (RD) to quantify the perturbation of historical traits. Extensive experiments on three large-scale educational datasets demonstrate that CLEAN achieves zero RD, preserving old-item metrics identically to static anchors through architectural isolation while remaining competitive wit

---

*Source: [arXiv](https://arxiv.org/abs/2610.02278)*
