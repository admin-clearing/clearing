---
title: "Correcting Within-Group Self-Selection Bias in Prioritized Replay"
dek: "arXiv:2609.25297v1 Announce Type: new Abstract: Prioritized experience replay (PER) improves sample efficiency by replaying high-priority transitions, usually according to absolute temporal-difference error. In..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-23
featured: false
gradient: grad-4
---

arXiv:2609.25297v1 Announce Type: new Abstract: Prioritized experience replay (PER) improves sample efficiency by replaying high-priority transitions, usually according to absolute temporal-difference error. In stochastic environments, PER can distort the distribution of realized outcomes replayed from transitions with the same state-action pair. We call this within-group self-selection. We quantify the resulting changes in within-group outcome frequencies and mean Bellman targets. We decompose PER into between-group allocation and conditional sibling selection, and derive fixed-buffer corrections that preserve current group-level priority mass: SAMPLE selects a group through PER and trains on a uniformly sampled sibling; AVG averages sibling Bellman targets; and MODEL samples from an empirical full-outcome model. In exact state-action environments with rare high-magnitude outcomes, sibling-aware replay improves learning efficiency over PER, although matched parameter sweeps show that tuning can narrow some gaps. In MinAtar, approximate VQ-VAE groups with SAMPLE mitigate degradation under mean-preserving reward tails in four of five games. Sibling-aware replay thus retains the focus on high-priority state-action regions while recovering their empirical outcome frequencies.

---

*Source: [arXiv](https://arxiv.org/abs/2609.25297)*
