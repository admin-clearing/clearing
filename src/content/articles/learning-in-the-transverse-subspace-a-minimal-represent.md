---
title: "Learning in the Transverse Subspace: A Minimal Representation for Divergence-Free Operator Learning"
dek: "arXiv:2609.35884v1 Announce Type: new Abstract: Divergence-free vector fields are fundamental state variables in incompressible flows and many PDE systems. Redundant parameterizations, including Neural Conservation Law..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-09-30
featured: false
gradient: grad-4
---

arXiv:2609.35884v1 Announce Type: new Abstract: Divergence-free vector fields are fundamental state variables in incompressible flows and many PDE systems. Redundant parameterizations, including Neural Conservation Law (NCL) potentials, map multiple auxiliary representations to the same physical field. Our experiments show that this redundancy can reduce static representation-fitting error by enlarging the set of equivalent solutions, but the resulting many-to-one mapping does not provide a unique state for operator learning. We introduce a minimal representation that encodes a real \(D\)-component divergence-free vector field on a \(D\)-dimensional domain as a real \((D-1)\)-component field on the same domain. Exploiting the transverse structure imposed by incompressibility in Fourier space, we use a Householder orthogonal transformation to construct the reduced coordinates directly. For periodic and closed impermeable fields, the transform is invertible, isometric, and angle-preserving. For open nonperiodic flows, Fourier extension constructs a compatible periodic field, and a minimum-energy rule selects a unique reduced representation. Neural operators then learn temporal evolution entirely in this reduced space. At inference, the predicted \((D-1)\)-component field is decoded directly into a physical divergence-free \(D\)-component field, without predicting an ambient field or applying post-hoc projection. Experiments on static fitting and temporal prediction reveal a task-dependent trade-off: redundancy facilitates static optimization, whereas unique invertible coordinates provide a well-defined state for temporal dynamics. By removing unconstrained longitudinal or null directions from the learned state space, the proposed formulation achieves lower prediction erro

---

*Source: [arXiv](https://arxiv.org/abs/2609.35884)*
