---
title: "AdaKP: Online Adaptive Knowledge-Point Selection for Reasoning-Oriented Reinforcement Learning"
dek: "arXiv:2607.24833v1 Announce Type: new Abstract: Reinforcement learning with verifiable rewards is a powerful paradigm for eliciting reasoning in large language models, yet it suffers from severe reward sparsity on..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-30
featured: false
gradient: grad-4
---

arXiv:2607.24833v1 Announce Type: new Abstract: Reinforcement learning with verifiable rewards is a powerful paradigm for eliciting reasoning in large language models, yet it suffers from severe reward sparsity on competition-level mathematics. A common remedy injects atomic knowledge points (KPs) - short natural-language hints distilled from gold solutions - into the prompt. Existing methods, however, either fix this selection once offline or merely scale the monolithic quantity of injected text, leaving untouched the most informative axis of choice: which subset of atomic KPs to inject, and when. We introduce AdaKP, an online selector that re-chooses each problem's KP subset over the course of RL training. At its core is an entropy proxy that scores a KP by the reduction in next-token entropy it induces - a single inexpensive forward pass, with a provable bound on its truncation bias - in place of expensive rollout-based estimation. Three lightweight mechanisms make this signal usable online: a momentum smoother that absorbs per-step noise, a retirement-and-revival manager that prunes weak KPs while preserving exploration, and an adaptive scheduler that front-loads re-evaluations into early training. AdaKP further contributes a pre-flight validation gate that certifies the proxy against a leave-one-out ground truth before any expensive run is launched, turning method-level risk into a falsifiable check. Realized as a fully additive fork of a standard DAPO+GRPO trainer with no optimizer changes, AdaKP improves over a strong static-selection baseline on all eight competition-mathematics benchmarks at negligible added cost, positioning online, validated KP-subset selection as a practical and as-yet under-explored axis for reasoning-oriented reinforcement learning.

---

*Source: [arXiv](https://arxiv.org/abs/2607.24833)*
