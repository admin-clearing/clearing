---
title: "Who Should We Listen to More? Welfare-Aware Preference Acquisition for Pluralistic Alignment"
dek: "arXiv:2610.19035v1 Announce Type: new Abstract: Pluralistic alignment needs to accommodate diverse preferences under limited human feedback. Using AI simulators to label preference comparisons reduces annotation costs,..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-15
featured: false
gradient: grad-4
---

arXiv:2610.19035v1 Announce Type: new Abstract: Pluralistic alignment needs to accommodate diverse preferences under limited human feedback. Using AI simulators to label preference comparisons reduces annotation costs, but variation in simulation accuracy across individuals can leave some people's preferences poorly represented in training. We study how to allocate human feedback across people to construct training data for pluralistic alignment, and how this allocation affects the trained policy. To make this allocation explicit and controllable, we define a social welfare objective over individual supervision utilities that measure label quality. Each query's marginal welfare gain depends on its expected supervision improvement, the recipient's current utility, and application-designated priority. Welfare-Aware Preference Acquisition (WAPA) uses auxiliary reference models to estimate query gains and individual utilities, then selects queries by estimated marginal welfare gain while updating recipient utilities. We prove exact optimality of the acquisition algorithm for the estimated welfare objective under a fixed query budget and model predictions. Experiments on six Roleplay collections and four OpinionQA regions demonstrate improved supervision and controllable allocation tradeoffs. Policy training on four Roleplay collections improves preference prediction for both seen and unseen individuals. When prioritizing a designated group and poorly represented individuals, acquiring human labels for 20% of comparisons recovers 75-86% of the average predictive utility gap between policies trained entirely on AI-generated labels and entirely on ground-truth labels.

---

*Source: [arXiv](https://arxiv.org/abs/2610.19035)*
