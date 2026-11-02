---
title: "Unsupervised Feature Selection Using Local Intrinsic Dimensionality -- Extended Version"
dek: "arXiv:2610.40736v1 Announce Type: new Abstract: High dimensionality degrades both the efficiency and the effectiveness of learning algorithms, and in many applications no class labels are available to guide..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-11-02
featured: false
gradient: grad-4
---

arXiv:2610.40736v1 Announce Type: new Abstract: High dimensionality degrades both the efficiency and the effectiveness of learning algorithms, and in many applications no class labels are available to guide dimensionality reduction. This paper proposes LIDFS, an unsupervised feature selection method based on Local Intrinsic Dimensionality (LID). The method builds on the formal equivalence between LID and the indiscriminability of distance measures. The data matrix is transposed so that each feature is treated as a point, and the LID of each feature is estimated by maximum likelihood from the distances to its $k$ nearest neighboring features. Features with lower LID exhibit greater local discriminability and receive higher importance scores. A refinement step then retains one representative per feature neighborhood and demotes locally redundant features. The result is a complete ranking from which any number of features can be selected without rerunning the procedure. LIDFS does not use any information about labels or the number of classes, and runs in $\mathcal{O}(d^2 n)$ time for $n$ instances and $d$ features. LIDFS is compared with classic and state-of-the-art methods and a random baseline on 23 high-dimensional datasets, the classic benchmark collection. The evaluation uses classification accuracy and AUC with five downstream classifiers, as well as clustering accuracy and normalized mutual information, over both full and aggressive selection ranges. LIDFS ranks first in the supervised evaluations and first or tied second in the clustering-based evaluations. It belongs to the top statistical group together with methods that require the number of classes, and it runs faster than its closest competitor. Several recent methods, by contrast, fail to outperform the rando

---

*Source: [arXiv](https://arxiv.org/abs/2610.40736)*
