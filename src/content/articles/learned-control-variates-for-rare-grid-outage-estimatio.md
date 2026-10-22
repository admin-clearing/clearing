---
title: "Learned Control Variates for Rare Grid-Outage Estimation at Electric Vehicle Charging Stations"
dek: "arXiv:2610.27159v1 Announce Type: new Abstract: Public charging of electric vehicles (EVs) adds a large and synchronized load to the distribution feeders. In most networks, it is rare to overload a feeder at the same..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-22
featured: false
gradient: grad-4
---

arXiv:2610.27159v1 Announce Type: new Abstract: Public charging of electric vehicles (EVs) adds a large and synchronized load to the distribution feeders. In most networks, it is rare to overload a feeder at the same time. When it does happen, the consequences can be severe: an overloaded feeder stresses its transformers and can trigger cascading outages across a city. Planners who design for high reliability therefore need to estimate very small outage probabilities. To that end, plain Monte Carlo estimation with an expensive grid simulator can require a prohibitively large number of runs for this task. To reduce the number of runs, we propose a control variate (CV) built from a learned classifier of the outage, trained on cheap observable features such as temperature and load forecasts. We show that for any binary learner, the variance reduction is an explicit function of its recall and false-positive rate. Furthermore, we show that control variate based on a Gaussian proxy of the load loses its effect as outages become rarer, while a learner with non-vanishing precision keeps removing a fixed fraction of the variance even in the extreme rare-event regime. We verify these results in numerical experiments using a feeder-overload simulator across three orders of magnitude of outage probability and obtain that even weak learner with a single feature can remove a quarter of the variance, while a boosted-tree learner is able to remove about 60%. We then apply the estimator to the feeder network of Surabaya, Indonesia, in which the Gaussian load model leaves every feeder three to seven times the one-day-in-ten-years blackout target. At the same simulation budget, planning the reserve with the learned CV and a 95% confidence limit reduces the city-wide blackout days by a thi

---

*Source: [arXiv](https://arxiv.org/abs/2610.27159)*
