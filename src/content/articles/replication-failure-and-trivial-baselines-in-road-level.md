---
title: "Replication Failure and Trivial Baselines in Road-Level Crash Prediction"
dek: "arXiv:2609.35917v1 Announce Type: new Abstract: Graph neural networks are increasingly applied to road-level crash prediction, but the stability of their reported gains has received little scrutiny. We independently..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-01
featured: false
gradient: grad-4
---

arXiv:2609.35917v1 Announce Type: new Abstract: Graph neural networks are increasingly applied to road-level crash prediction, but the stability of their reported gains has received little scrutiny. We independently reconstruct the data pipeline of a recent uncertainty-aware model and evaluate eleven of its design decisions across three London boroughs under an expanding-window protocol. Four survive replication on a second borough; seven do not, and four of those reverse sign rather than attenuate. Multi-seed evaluation is decisive: one effect reverses sign between random seeds within a single borough, and the reference architecture exhibits per-borough seed spreads of up to 35.7 points against 4 points for ours. We further compare both networks against a parameter-free baseline that ranks segments by cumulative past crash count. At matched history depth our model is statistically indistinguishable from that baseline ($-0.90$ points, $p=0.61$), and the reference architecture loses to it on 18 of 18 held-out windows ($-17.37$, $p<10^{-6}$). Sweeping the baseline's lookback horizon shows it spans 22.71% to 83.94% accuracy on that variable alone, and that every published figure in this line of work is matched by the baseline at a horizon of one to five years. We argue that the apparent margin of graph networks over historical baselines in this task is substantially an artefact of the short horizons those baselines were computed over, and recommend horizon-matched baselines and multi-seed reporting as minimum practice.

---

*Source: [arXiv](https://arxiv.org/abs/2609.35917)*
