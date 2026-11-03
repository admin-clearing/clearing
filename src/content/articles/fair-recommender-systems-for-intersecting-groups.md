---
title: "Fair Recommender Systems for Intersecting Groups"
dek: "arXiv:2610.40936v1 Announce Type: new Abstract: Recommendation systems that optimize for the average user can fail to capture the preferences of diverse demographic groups. We consider a dynamic recommendation system,..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-11-02
featured: false
gradient: grad-4
---

arXiv:2610.40936v1 Announce Type: new Abstract: Recommendation systems that optimize for the average user can fail to capture the preferences of diverse demographic groups. We consider a dynamic recommendation system, where arriving users can belong to different demographic groups. Importantly, these groups can intersect, and a user may belong to several groups. We first show that over time, any group-blind policy (which excludes all current-user group information) recommending $K \geq 1$ items incurs linear total regret under mild conditions. In turn, we introduce three group-aware algorithms based on the classical Upper Confidence Bound algorithm (UCB): i) Intersection-Fitting, which runs UCB on each intersection, but has a sublinear group- and intersection-level regret guarantee with an exponential dependence in the number of groups; and ii) two group-level heuristics, Inner-Outer UCB and Group-Item UCB which allocate different arms to different groups, and use a sleeping expert meta-learner to choose which active group's recommendation an intersection should inherit at any given time step. We provide experimental results on two datasets, Goodreads and BoardGameGeek, and highlight that our heuristics can be preferable to the intersection-fitting algorithm when intersection-level preferences are closely related to group-level preferences, but that intersection-fitting performs better when different intersections within a same group prefer different items.

---

*Source: [arXiv](https://arxiv.org/abs/2610.40936)*
