---
title: "Low-Latency Relay Selection in NR-V2X Vehicular Communications via Graph Isomorphism Networks with Edge Features"
dek: "arXiv:2607.14176v1 Announce Type: new Abstract: Reliable, low-latency uplink connectivity is a key requirement for C-V2X networks in dense urban environments, where fast channel variations and blockages often degrade..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-07-17
featured: false
gradient: grad-4
---

arXiv:2607.14176v1 Announce Type: new Abstract: Reliable, low-latency uplink connectivity is a key requirement for C-V2X networks in dense urban environments, where fast channel variations and blockages often degrade direct vehicle-to-infrastructure links. Multi-hop relaying can restore coverage, but relay-link activation under radio, capacity, and routing constraints results in an NP-hard optimisation problem, typically solved via Mixed-Integer Linear Programming (MILP), whose runtime scales poorly with graph size. This paper introduces an edge-aware Learning-to-Optimise framework for real-time relay selection. Each V2X snapshot is modelled as a directed graph: node features encode vehicle state and traffic demand, while edge features capture radio-link capacity. An offline MILP oracle generates optimal relay configurations that supervise a Graph Isomorphism Network with Edge Features (GINE), enabling edge-level relay activation through a single forward pass, with tightly bounded inference latency. To bridge learning and exact optimisation, we also propose a hybrid GINE-Pruned MILP (GP-MILP) strategy in which GINE predictions prune the MILP search space. Experiments on a large-scale dataset generated via an OSM-SUMO-GEMV$^2$ pipeline show that GINE closely matches MILP decisions at the link level (accuracy 0.9589), F1-score (0.9544) on validation) and yields consistent end-to-end connectivity gains over a 1-hop MILP baseline (up to 9.2% with four RSUs and 12% with two RSUs). Inference latency remains tightly bounded, with all evaluated instances completing within 5~ms. Moreover, GP-MILP preserves MILP-equivalent solutions (same objective value) while achieving solver runtimes below 30~ms for more than 98%) of the graph instances, making MILP-grade optimisation compatib

---

*Source: [arXiv](https://arxiv.org/abs/2607.14176)*
