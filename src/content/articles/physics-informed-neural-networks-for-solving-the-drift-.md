---
title: "Physics Informed Neural Networks for Solving the Drift-Diffusion Equations"
dek: "arXiv:2610.33133v1 Announce Type: new Abstract: The drift-diffusion equations are the fundamental building block for the modeling, design, and optimization of modern semiconductor devices. Solutions of the..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-28
featured: false
gradient: grad-4
---

arXiv:2610.33133v1 Announce Type: new Abstract: The drift-diffusion equations are the fundamental building block for the modeling, design, and optimization of modern semiconductor devices. Solutions of the drift-diffusion equations rarely give way to analytical forms, and exhibit strong nonlinearity, with the solutions ranging over several orders of magnitude. These attributes have led to research into numerical solvers, and while many commercial Technology Computer Aided Design (TCAD) packages now exist, they may require long simulation times, exhibit sensitivity to initial guesses, and rely on mesh generation. Further, these solvers are not well suited for inverse problems where the design parameters of a device are retrieved from its desired functional characteristics. To address all these challenges, this work demonstrates the usage of Physics Informed Neural Networks (PINNs) for the solution of the drift-diffusion equations with errors comparable to traditional simulation software using advanced training techniques to solve problems beyond the well-behaved equilibrium regime. For this study, we specifically choose an abrupt PN-junction in both one and two dimensions that features extreme gradients of the carrier concentrations at the Ohmic contacts and an abrupt discontinuity in the doping profile. Using the proposed PINN architecture, we are able to retrieve accurate results for all observables under all bias conditions. Additionally, we apply the PINN solver towards the inverse problem of retrieving doping profiles directly from desired electric field distributions or electrostatic potentials under non-zero applied biases. Our work establishes a powerful PINNs-based approach for semiconductor device modeling with the ability to solve inverse problems under non-eq

---

*Source: [arXiv](https://arxiv.org/abs/2610.33133)*
