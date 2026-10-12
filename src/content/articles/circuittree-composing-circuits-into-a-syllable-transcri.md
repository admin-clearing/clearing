---
title: "CircuitTree: Composing Circuits into A Syllable Transcriber"
dek: "arXiv:2610.12520v1 Announce Type: new Abstract: The goal of circuit discovery is to decompose a monolithic neural network into tiny modular subnetworks which are interpretable in the sense that each does an identifiable..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-12
featured: false
gradient: grad-4
---

arXiv:2610.12520v1 Announce Type: new Abstract: The goal of circuit discovery is to decompose a monolithic neural network into tiny modular subnetworks which are interpretable in the sense that each does an identifiable subtask. We develop a practical method for composing arbitrarily many circuits into a single model. We propose a greedy, density-scaled composition algorithm that overcomes limitations of previous attempts to compose circuits by naive union, then generalize it to $N$ circuits via CircuitTree, a new data structure built on a $\Theta(N\log N)$ tree-compose schedule. We compose circuits pruned from HuBERT for classifying individual phonemes into a syllable classifier, a capability none of the 39 phoneme circuits has individually. Chaining CircuitTrees into a hierarchy-of-circuits pipeline, we transcribe open syllables at 64.8\% accuracy, within 1.2 points of a 66.0\% ceiling that shares no circuitry at all, with 99.5\% of circuit components shared.

---

*Source: [arXiv](https://arxiv.org/abs/2610.12520)*
