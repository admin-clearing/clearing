---
title: "Second Thoughts: Exploring and Planning through Comparative Imagination in World Models"
dek: "arXiv:2610.28779v1 Announce Type: new Abstract: World models let agents compare imagined outcomes before acting, but an agent must still decide which alternatives to explore and when a proposed plan should replace its..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-22
featured: false
gradient: grad-4
---

arXiv:2610.28779v1 Announce Type: new Abstract: World models let agents compare imagined outcomes before acting, but an agent must still decide which alternatives to explore and when a proposed plan should replace its learned policy. We introduce SDI (Sibling Disagreement in Imagination), which connects these decisions through a shared actor-based reference. SDI compares action sequences imagined from the same model state, using repeated rollouts of the actor's own sequence to measure variation under fixed behavior. This reference scales both the spread across candidate returns, which provides an exploration signal, and a proposed plan's predicted advantage, which governs action acceptance. The agent executes a planned action when its advantage exceeds the reference variability by a fixed factor; otherwise, it follows the actor. SDI reuses the base agent's world model, actor, and critic without requiring an additional disagreement ensemble. Exploration and planning guide training data collection, while evaluation uses the learned actor alone. Across Meta-World, Adroit, and DM-Control, SDI achieves a higher observed task-average score than every compared baseline in each suite and matches or exceeds the strongest baseline's performance on 15 of 18 tasks. Component ablations and robustness analyses further examine the roles of exploration, planning exposure, and action acceptance. Paired evaluations from identical simulator states show that the gate improves both recovery from actor failures and preservation of successful behavior relative to ungated planning, while substantially reducing return degradation. Together, these results support comparing imagined alternatives against a shared actor reference as a unified approach to exploring and planning with world models.

---

*Source: [arXiv](https://arxiv.org/abs/2610.28779)*
