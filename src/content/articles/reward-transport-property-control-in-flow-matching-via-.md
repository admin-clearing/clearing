---
title: "Reward Transport: Property Control in Flow Matching via Noise-Space Alignment"
dek: "arXiv:2607.08781v1 Announce Type: new Abstract: The coupling in flow matching -- the rule pairing noise vectors with data points -- is typically treated as a computational choice. We show that this coupling can instead..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-07-13
featured: false
gradient: grad-4
---

arXiv:2607.08781v1 Announce Type: new Abstract: The coupling in flow matching -- the rule pairing noise vectors with data points -- is typically treated as a computational choice. We show that this coupling can instead serve as an alignment interface: by matching noise and data according to a target molecular property, it embeds controllable structure directly into the learned flow field. Building on this view, we introduce Reward Transport, which uses optimal transport coupling at training time to align a scalar noise-space coordinate with molecular rewards; at inference, varying this coordinate steers the generated distribution without requiring an oracle, reward model, gradient guidance, or additional computation. In the coupling-preserving limit, thresholding this coordinate recovers the Cross-Entropy Method's truncated reward distribution, providing a principled, continuously adjustable distribution-level control knob. Empirically, on ZINC-250K and GuacaMol, sweeping the scalar induces monotone control of logP and consistent QED control over its operating range; most tellingly, the same knob produces opposite structural responses for different targets, growing molecules for logP but shrinking them for QED, which rules out a generic size bias. The interface is complementary to classifier-free guidance and conditional flow matching, while a negative result under epsilon-prediction diffusion clarifies where coupling-level alignment is structurally absent. Code: https://github.com/KehanGuo2/reward-transport

---

*Source: [arXiv](https://arxiv.org/abs/2607.08781)*
