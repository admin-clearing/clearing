---
title: "Conservative Hybrid Graph Networks for Process Systems with Learned Routing"
dek: "arXiv:2608.28896v1 Announce Type: new Abstract: Industrial process networks do not maintain a single effective topology while operating: streams are throttled or bypassed, and units move between idle, transition, and..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-01
featured: false
gradient: grad-4
---

arXiv:2608.28896v1 Announce Type: new Abstract: Industrial process networks do not maintain a single effective topology while operating: streams are throttled or bypassed, and units move between idle, transition, and active regimes. Models of such systems are typically trained on measured state trajectories while the operating mechanisms that generated them remain latent, and an unconstrained graph network can fit such a trajectory without assigning stable physical meaning to the recovered routing. We address both problems with the Conservative Hybrid Graph Network (CHGN), which learns routing, regime assignment, and removal rates as data-driven surrogates and inserts them into a fixed transport equation, so that the mass balance holds by construction for any predicted routing. CHGN trained on networks of 10-20 nodes transfers zero-shot to unseen graphs of 25-40 nodes without retraining, reaching an RMSE of 2.1e-3 against 6e-2 to 9e-2 for GNN baselines under the same protocol, with a gate MAE of 7.9e-3 and regime accuracy of 94.3% (1.2e-2 and 96.4% respectively on the fixed training topology). On a fluid-mixing pilot plant, CHGN improves on a persistence baseline for held-out physical faults but does not predict manual interventions, for which the governing valve actions are unobserved. The model therefore transfers across process topologies without retraining and exposes the latent mechanisms governing plant behaviour to inspection.

---

*Source: [arXiv](https://arxiv.org/abs/2608.28896)*
