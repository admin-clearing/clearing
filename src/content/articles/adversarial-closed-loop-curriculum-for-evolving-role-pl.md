---
title: "Adversarial Closed-Loop Curriculum for Evolving Role-Playing Agents"
dek: "arXiv:2609.28609v1 Announce Type: new Abstract: Role-playing agents based on large language models have been widely applied in areas such as personalized assistance and social simulation. Recent RL methods typically..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-25
featured: false
gradient: grad-4
---

arXiv:2609.28609v1 Announce Type: new Abstract: Role-playing agents based on large language models have been widely applied in areas such as personalized assistance and social simulation. Recent RL methods typically train on a fixed scenario pool collected before learning begins. This creates a distributional bottleneck: as the agent improves, the scenarios where it performs poorly also change, while the training distribution remains static. Therefore, we propose AdvRole, an adversarial context rewriting framework that turns role-playing RL into a closed-loop curriculum. AdvRole alternates between an Actor that learns to role-play and a Rewriter that edits character profiles and dialogue contexts into actor-specific hard scenarios. The Rewriter is trained with a performance-gap reward, which favors rewrites that reduce the current Actor's score relative to the original scenario. As a result, the scenario pool evolves with the Actor and continuously targets under-mastered regions of the character-context space. Experiments on three role-playing benchmarks covering English and Chinese, as well as a new multilingual benchmark we release, show that AdvRole consistently outperforms baselines.

---

*Source: [arXiv](https://arxiv.org/abs/2609.28609)*
