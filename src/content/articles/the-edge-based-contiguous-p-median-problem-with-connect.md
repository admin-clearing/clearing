---
title: "The Edge-based Contiguous p-median Problem with Connections to Logistics Districting"
dek: "arXiv:2608.11230v1 Announce Type: new Abstract: This paper introduces the edge-based contiguous p-median (ECpM) problem to partition the roads in a network into a given number of compact and contiguous territories. Two..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-13
featured: false
gradient: grad-4
---

arXiv:2608.11230v1 Announce Type: new Abstract: This paper introduces the edge-based contiguous p-median (ECpM) problem to partition the roads in a network into a given number of compact and contiguous territories. Two binary programming models are introduced, both of which incorporate a network distance. The first model requires an exponential number of cut set-based constraints to model contiguity; it is paired with a separation scheme that usually generates only a small number of these constraints, namely, a branch-and-cut (B&C) algorithm. The second model utilizes a polynomial number of shortest-path constraints to model contiguity and can be solved with off-the-shelf solvers. The respective solution approaches are tested on road networks with over 2,700 nodes and close to 3,400 edges, yielding models with over 9.6 million binary variables. Solving the model based on shortest path contiguity (SPC) constraints via standard branch and bound attains speedups in computational time of up to 17x relative to the cut set-based B&C implementation. In addition, the SPC constraints are demonstrated to be supervalid inequalities of the edge-based p-median (EpM) model (i.e., for which contiguity is not explicitly required), meaning that they may cut off integer-feasible solutions and some, but not all, of the optimal solutions of this simpler problem. Finally, the paper explores structural insights and connections between ECpM and the edge-based districting (EBD) problem, which enforces an additional work balance criterion. An existing model that utilizes cut set-based contiguity constraints was unable to find a feasible solution within 12 hours for any of the tested instances, while an SPC-based EBD model was able to solve most of these to optimality.

---

*Source: [arXiv](https://arxiv.org/abs/2608.11230)*
