---
title: "Long-term User Engagement Optimization through Model-agnostic Downstream Rewards Learning"
dek: "arXiv:2607.14192v1 Announce Type: new Abstract: As recommender systems mature in the past few years, their optimization objectives have evolved from a primary focusing on short-term behavioral signals to a broader..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-17
featured: false
gradient: grad-4
---

arXiv:2607.14192v1 Announce Type: new Abstract: As recommender systems mature in the past few years, their optimization objectives have evolved from a primary focusing on short-term behavioral signals to a broader emphasis on long-term user engagement and retention. However, directly optimizing retention is difficult because return signals are sparse, delayed, and only partially attributable to earlier recommendations. Prior work has addressed this challenge with sequential modeling and reinforcement learning, but these approaches typically require task specific reward engineering, substantial computational overhead, and surface specific implementations that are difficult to generalize. In this paper, we present a unified, model-agnostic downstream reward framework for optimizing long-term user value in large-scale recommendation systems. First, we formulate the downstream reward learning problem and develop an offline screening framework to identify session level behaviors that are both observable early and predictive of future retention. We then propose several model-agnostic downstream rewards signals derived from observed user action patterns across multiple sources. We further discuss the engineering effort to productionize the proposed rewards derivations and challenges we faced when adding them to our ranking models. Online A/B experiments demonstrate consistent improvements in engagement and retention-related metrics, and the framework has been deployed across multiple Pinterest surfaces, including Homefeed, Related Pins, Search, and Notifications.

---

*Source: [arXiv](https://arxiv.org/abs/2607.14192)*
