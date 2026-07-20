---
title: "From Black Box to Executable Logic: Explainable Reinforcement Learning through Prolog Expert Systems"
dek: "arXiv:2607.15459v1 Announce Type: new Abstract: A trained deep reinforcement learning policy is a black box, and we ask whether it can be made explainable by rewriting it as an executable logic program that reproduces..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-20
featured: false
gradient: grad-4
---

arXiv:2607.15459v1 Announce Type: new Abstract: A trained deep reinforcement learning policy is a black box, and we ask whether it can be made explainable by rewriting it as an executable logic program that reproduces its behaviour and that a person can read, a logic engine can run, and an optimizer can edit. We present a three-stage post-hoc transformation that extracts a frozen proximal policy optimization teacher, induces an ordered rule list from its decisions in the manner of classical relational learning, and emits the result as a Prolog program whose every decision is executed by an off-the-shelf logic engine; a subsequent expansion stage edits the rule base and accepts an edit only when policy evaluation certifies a return increase. We prove four guarantees. A return-loss bound makes the distilled program a machine-checkable certificate in a finite Markov decision process, and the expansion loop improves monotonically and terminates. For the continuous-observation setting we answer whether the conversion is possible at all: the propositional threshold instantiation converts the network to arbitrary fidelity as the resolution B grows, with disagreement O(1/B) and a return gap that closes at the same rate, and a matching lower bound shows the cost is exponential in the observation dimension for an oblique decision boundary. Empirically, on a two-room key-and-door task with 16,944 reachable states the expanded Prolog program attains exact optimal return in every seed and, in a budget-capped regime, exceeds the stochastic teacher on exact return in ten of ten seeds. On three continuous-control tasks the emitted program substitutes the network, matching the neural teacher within noise on Acrobot with eleven clauses and recovering about 97% of its return on CartPole, 

---

*Source: [arXiv](https://arxiv.org/abs/2607.15459)*
