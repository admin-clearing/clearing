---
title: "GradRepair-ODE: Certified Gradient Repair for Neural ODE Training"
dek: "arXiv:2609.13204v1 Announce Type: new Abstract: Neural ordinary differential equations use numerical solvers inside the training loop. The solver determines the forward trajectory and also affects the gradient passed to..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-15
featured: false
gradient: grad-4
---

arXiv:2609.13204v1 Announce Type: new Abstract: Neural ordinary differential equations use numerical solvers inside the training loop. The solver determines the forward trajectory and also affects the gradient passed to the optimizer. That coupling creates a reliability problem for scientific machine learning and continuous-time generative modeling, including diffusion probability-flow ordinary differential equations and flow-matching models. Under loose step sizes, stiff dynamics, chaotic sensitivity, or event discontinuities, a differentiable ODE pipeline can return a finite gradient whose direction is numerically suspect. We introduce GradRepair-ODE, a reliability framework for checking, repairing, and rejecting ODE gradients at the optimizer step. The method computes several gradient candidates, compares them with directional finite-difference checks and solver diagnostics, diagnoses likely numerical failure modes, repairs selected gradients through path switching or stricter recomputation, and rejects steps whose descent direction cannot be certified. In six synthetic ODE systems, GradRepair-ODE leaves low-risk systems unchanged, repairs Robertson and Lorenz gradients to cosine similarity 1.000 against a strict reference, reduces unsafe accepted steps from 37 to 0, and rejects an event-discontinuous case instead of applying an uncertified update. The paper argues for a simple change in the training contract: an ODE gradient should reach the optimizer with numerical evidence attached.

---

*Source: [arXiv](https://arxiv.org/abs/2609.13204)*
