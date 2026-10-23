---
title: "Escaping the Phylogenetic Trap: Persistent Homology Enables Cross-Species Ion Channel Classification via Multimodal Grap"
dek: "arXiv:2610.30394v1 Announce Type: new Abstract: Protein classifiers are highly sensitive to evaluation protocol: random train/test splits induce phylogenetic leakage, allowing models to exploit taxon-specific..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-23
featured: false
gradient: grad-4
---

arXiv:2610.30394v1 Announce Type: new Abstract: Protein classifiers are highly sensitive to evaluation protocol: random train/test splits induce phylogenetic leakage, allowing models to exploit taxon-specific correlations and substantially overestimate out-of-distribution performance. This issue is particularly acute for venom compound classification by ion-channel target (Ca2+, K+, Na+), where reported accuracies of 80-90% do not reflect generalization to unseen taxa. We formulate cross-species prediction as a structured distribution shift in which taxonomic identity acts as a confounder, requiring representations that capture structural features invariant across phylogeny. Using a shared multimodal backbone that fuses ESM-2 sequence embeddings with a disulfide-aware graph attention network, we systematically compare five structural inductive biases (spectral, Riemannian, SE(3)-invariant, statistical-manifold, and persistent-homology representations) under a leave-one-taxon-out evaluation protocol on a benchmark of 1,373 ColabFold-predicted venom compounds spanning five taxa. The persistent-homology representation summarizes backbone geometry through topological descriptors that are robust to local structural perturbations, providing an inductive bias toward phylogenetically invariant learning. Under conventional i.i.d. splits, all models achieve similar accuracy (81-86%), masking differences in inductive bias. Under taxonomic shift, this parity collapses: a sequence-only baseline drops to approximately 30%, the remaining geometric priors cluster at 54-55%, while our persistent-homology model (PH-GNN) achieves 63.4%, outperforming the next-best method by over 8 percentage points. These results demonstrate that random-split evaluation obscures meaningful differences in 

---

*Source: [arXiv](https://arxiv.org/abs/2610.30394)*
