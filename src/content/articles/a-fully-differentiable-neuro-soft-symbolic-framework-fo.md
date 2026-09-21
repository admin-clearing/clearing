---
title: "A Fully Differentiable Neuro-Soft-Symbolic Framework for Perceptual Task Planning"
dek: "arXiv:2609.21221v1 Announce Type: new Abstract: Perceptual planning tasks require two key capabilities: accurately perceiving uncertain scenes and planning valid action sequences following logical rules. Conventional..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-21
featured: false
gradient: grad-4
---

arXiv:2609.21221v1 Announce Type: new Abstract: Perceptual planning tasks require two key capabilities: accurately perceiving uncertain scenes and planning valid action sequences following logical rules. Conventional methods convert perception into discrete symbolic facts and then plan, discarding perceptual uncertainty and severing task-level feedback to perception. We introduce a generic, fully differentiable neuro-soft-symbolic framework that connects visual perception and task planning within a single computational graph. The framework maintains a continuous soft symbolic state, lifts domain rules into a differentiable soft-$T_P$ transition operator, and optimizes action logits over a short planning horizon. Gradients from the planning objective can also update the perception parameters, allowing task-relevant perceptual representations to be refined during planning. On Blocksworld, our method solves 40/40 LatPlan-40 tasks and 596/600 PlanBench-600 tasks, compared with 33/40 for LatPlan and 587/600 for the reasoning-model baseline, while requiring substantially less computation and time. In the perceptual-uncertainty ablation, our method improves the success rate from 59\% with frozen perception to 83\%. We further conduct task-and-motion simulations on Blocksworld scenes, providing an execution-level validation of the compatibility between decoded task plans and downstream robotic motion execution.

---

*Source: [arXiv](https://arxiv.org/abs/2609.21221)*
