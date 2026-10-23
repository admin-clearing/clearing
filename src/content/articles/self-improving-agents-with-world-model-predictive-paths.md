---
title: "Self-Improving Agents with World Model Predictive Paths"
dek: "arXiv:2610.28945v1 Announce Type: new Abstract: Large language model (LLM) agents are increasingly expected to interact with environments and improve their decisions during deployment. However, how anticipating future..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-23
featured: false
gradient: grad-4
---

arXiv:2610.28945v1 Announce Type: new Abstract: Large language model (LLM) agents are increasingly expected to interact with environments and improve their decisions during deployment. However, how anticipating future outcomes and drawing on accumulated interaction experience can jointly support decision-making remains underexplored. We propose a test-time framework, inspired by Model Predictive Path Integral (MPPI) control, that combines multi-branch predictive analysis with experience-based adaptation. At each step, the agent proposes multiple candidate actions and imagines their outcomes with a world model, so that alternatives can be compared without being executed in the environment. Since language environments provide neither explicit dynamics nor costs, the predicted outcomes are evaluated for task progress and risk, and MPPI-style weights over the resulting costs guide the final decision. A dual-branch experience memory enables self-improvement: the planner branch refines candidate generation and action selection, while the world model branch improves next-observation prediction. Experiments on ALFWorld and ScienceWorld across three backbones demonstrate the strong overall performance of our method and the effectiveness of experience-guided predictive control. Our code will be made publicly available.

---

*Source: [arXiv](https://arxiv.org/abs/2610.28945)*
