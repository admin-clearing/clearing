---
title: "Cross-Anatomy Transfer Versus Sparse Interpolation in Digital-Twin-Oriented Aortic Fluid-Structure Interaction Surrogate"
dek: "arXiv:2609.16322v1 Announce Type: new Abstract: Surrogate credibility for fluid-structure interac- tion (FSI) requires distinguishing transfer across independent anatomies from interpolation within an already sampled..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-16
featured: false
gradient: grad-4
---

arXiv:2609.16322v1 Announce Type: new Abstract: Surrogate credibility for fluid-structure interac- tion (FSI) requires distinguishing transfer across independent anatomies from interpolation within an already sampled surface. Four de-identified human aortic models from the Vascular Model Repository were reconstructed into separate lumen and nominal 1.5-mm wall domains and analyzed under matched first-cycle two-way FSI. A geometry-only LightGBM prior, selected by leave-one-anatomy-out development on three anatomies, was zero-shot evaluated on a fourth, then probed with a post-zero- shot sparse field-completion case study over six targets. Zero-shot transfer was poor across all targets. At a five-percent anchor level (203 anchors, 3,852 evaluation nodes), prior-plus-adaptation reached an oscillatory shear index (OSI) R2 of 0.603. However, same-anchor controls tuned only on the three development anatomies were stronger for several outcomes: inverse-distance weighting reached R2 = 0.829 (OSI), 0.617 (peak von Mises stress), 0.676 (mean stress); radial basis function interpolation reached 0.917, 0.714, 0.778. Sparse within-anatomy labels thus support field completion, but this four-anatomy cohort gives no evidence the cross-anatomy prior adds value beyond direct interpolation. We frame this as a first computational stage toward a measurement-linked digital twin: the surrogate/update layer is evaluated here, while larger cohorts, converged FSI, measurable patient-side inputs, and physics-informed learning remain future work, not a claim of a complete clinical twin. Our code, data and computation files are available at https://github. com/ali-nourbakhsh2005/Aortic-FSI-Sparse-Field-Completion

---

*Source: [arXiv](https://arxiv.org/abs/2609.16322)*
