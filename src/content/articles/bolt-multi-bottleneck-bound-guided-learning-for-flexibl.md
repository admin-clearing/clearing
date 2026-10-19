---
title: "BOLT: Multi-Bottleneck Bound-Guided Learning for Flexible Job-Shop Scheduling with Time Lags and Resource-Coupled Transp"
dek: "arXiv:2610.22433v1 Announce Type: new Abstract: Flexible job-shop scheduling becomes resource-coupled when a scarce vehicle fleet moves jobs between stations, because the schedule sets the transport waits. BOLT..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-19
featured: false
gradient: grad-4
---

arXiv:2610.22433v1 Announce Type: new Abstract: Flexible job-shop scheduling becomes resource-coupled when a scarce vehicle fleet moves jobs between stations, because the schedule sets the transport waits. BOLT (bound-oriented learning for transport-coupled scheduling) builds a lower bound from chain, machine-capacity, and fleet-capacity relaxations. The bound equals the makespan at termination, so its per-step changes form a reward that sums to a constant minus the makespan. Because it never exceeds the attainable makespan, each candidate's bound increase is a proven rise of the makespan floor, which the policy reads as a price. The root bound certifies a completed schedule's suboptimality gap without a solver. On industry-motivated 10-module prefabricated-construction instances, explicit transport coupling outperforms a transport-penalty policy in every tested cell where loaded moves occupy at least 66% of fleet time and in none at or below 56%. Across five zero-shot 50- and 80-module production batches, BOLT outperforms the best dispatching-rule pair on four and the penalty policy on the three with long moves. In the three-vehicle 80-module batch, its mean makespan is 13.0% below the best pair and 4.2% below an hour-budget constraint-programming solver whose proven gap averages 34%. BOLT decides in 2.3-5.9 ms per event on one processor core and re-plans a disruption in seconds.

---

*Source: [arXiv](https://arxiv.org/abs/2610.22433)*
