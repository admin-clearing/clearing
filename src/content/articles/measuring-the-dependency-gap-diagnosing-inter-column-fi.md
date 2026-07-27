---
title: "Measuring the Dependency Gap: Diagnosing Inter-Column Fidelity in Tabular Generative Models"
dek: "arXiv:2607.21636v1 Announce Type: new Abstract: Synthetic tabular data is valued for preserving not only each column's marginal distribution but the dependencies between columns -- structure that carries much of the..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-27
featured: false
gradient: grad-4
---

arXiv:2607.21636v1 Announce Type: new Abstract: Synthetic tabular data is valued for preserving not only each column's marginal distribution but the dependencies between columns -- structure that carries much of the discriminative signal for minority classes in imbalanced domains such as fraud and clinical risk. Yet the metrics most commonly used to certify synthetic tabular data are, we show, largely blind to inter-column dependency: a baseline that models every column independently (and therefore destroys all dependency) is judged indistinguishable from real data by the logistic-regression C2ST, and the pairwise Trend score is only partially sensitive. We introduce a dependency-aware fidelity diagnostic that decomposes a strong classifier two-sample test (XGB-C2ST) into marginal, dependency, and numerical-categorical cross components, anchored between a worst-case fully-factorized reference (all dependency destroyed) and a best-case real-data oracle. Applying it to a state-of-the-art flow-matching generator (TabbyFlow/EF-VFM), we find a real dependency gap that standard metrics miss; destroying dependency outright collapses minority-class utility, and the generator's residual gap carries a smaller, consistent utility cost. We then ask whether this gap reflects a structural limitation of mean-field generative objectives. It does not: consistent with recent recovery results for variational flow matching, the objective is asymptotically exact. Yet the gap is stubborn -- a 16x increase in model capacity does not close it -- pointing to the absence of direct dependency supervision rather than a capacity or structural limit. Consistent with this, and because the residual gap is higher-order, no cheap intervention closes it: not an in-model dependency mechanism, not post-hoc

---

*Source: [arXiv](https://arxiv.org/abs/2607.21636)*
