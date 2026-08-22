---
title: "GenMatch: An End-to-End Generative Matching Framework for Micro-View Order-Dispatching in Ride-Hailing"
dek: "arXiv:2608.19751v1 Announce Type: new Abstract: Micro-View Order-Dispatching assigns available drivers to passenger orders within each dispatch batch and is critical to the service quality and operational efficiency of..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-08-21
featured: false
gradient: grad-4
---

arXiv:2608.19751v1 Announce Type: new Abstract: Micro-View Order-Dispatching assigns available drivers to passenger orders within each dispatch batch and is critical to the service quality and operational efficiency of ride-hailing platforms. Mainstream industrial solutions follow a multi-stage paradigm of model prediction, value calculation, and dispatch matching. Although dispatch quality is determined by the final batch-level assignment, these stages optimize different intermediate objectives. This cross-stage objective inconsistency means that improving a single stage does not necessarily improve the overall dispatch result. We therefore formulate Micro-View Order-Dispatching as a generative matching problem and propose GenMatch, an end-to-end Generative Matching framework and the first such framework deployed in a real-world production environment. Applying generative modeling to this problem introduces three challenges. First, each dispatch batch forms a dynamic sparse bipartite graph, requiring efficient structured batch-level encoding. Second, replacing the hand-crafted value function requires learning unified business utility from heterogeneous feedback. Third, directly generating an assignment requires tracking the evolving matching state because each selected order-driver pair changes the remaining feasible candidates. GenMatch addresses these challenges with a Context-Aware Bipartite Encoder, a Business-Aware Utility Learner, and a State-Aware Pointer Decoder. Extensive offline evaluations and online A/B tests in five cities across DiDi's international ride-hailing markets show consistent improvements over competitive baselines, confirming the effectiveness and practicality of GenMatch for industrial order-dispatching.

---

*Source: [arXiv](https://arxiv.org/abs/2608.19751)*
