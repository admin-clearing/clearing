---
title: "Do Mixture-of-Experts Routers Benefit from Ensembling?"
dek: "arXiv:2611.17472v1 Announce Type: new Abstract: Ensembles of neural networks have repeatedly been shown to outperform single networks. Ensemble theory attributes this gain to the accuracy of the individual members and..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-11-16
featured: false
gradient: grad-4
---

arXiv:2611.17472v1 Announce Type: new Abstract: Ensembles of neural networks have repeatedly been shown to outperform single networks. Ensemble theory attributes this gain to the accuracy of the individual members and the diversity among them. Mixture-of-experts models already combine many experts, but a single router decides how the experts are weighted for each input. Motivated by ensemble theory, we apply ensembling to the routing step: an ensemble of routers, trained jointly with the experts, proposes the expert weights. We systematically evaluate this approach using underparameterized networks on two image-classification and two tabular-regression tasks. We analyse each experiment with a performance-diversity decomposition of the router ensemble, which, to our knowledge, has not previously been developed for routers. We report four findings. First, more routers lower the validation loss. Second, training routers to explicitly maximize expert diversity improves the mean performance on three of the four tasks. Third, explicitly maximizing router diversity has no effect on performance. Fourth, combining router weights with the arithmetic mean works better than combining them with the geometric mean. Routing benefits mildly from ensembling, but this benefit is offset by the computational cost of training additional routers.

---

*Source: [arXiv](https://arxiv.org/abs/2611.17472)*
