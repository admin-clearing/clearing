---
title: "When Does Reward Teach State? A Hidden-Automaton Instrument and the Group-Language Boundary"
dek: "arXiv:2607.11953v1 Announce Type: new Abstract: Does a reinforcement-learning agent that earns high reward represent its task's latent state, or only a reward-correlated shortcut? The question is usually unanswerable:..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-15
featured: false
gradient: grad-4
---

arXiv:2607.11953v1 Announce Type: new Abstract: Does a reinforcement-learning agent that earns high reward represent its task's latent state, or only a reward-correlated shortcut? The question is usually unanswerable: the "true state" is undefined. We make it exactly answerable with a white-box instrument: express the task as a hidden deterministic finite automaton (DFA), let the agent observe a symbol stream and intermittently choose the next symbol under partial control, and grant one sparse terminal reward for acceptance. Knowing the automaton gives two things for free: the optimal return (so reward becomes an interpretable normalized score) and the exact latent state at every step (so we can probe the agent's representation without ever showing it). Reward success and latent-state learning thus become separately measured quantities whose coupling is governed by three controllable axes. Optimizer strength: under weak on-policy RL the agent earns reward with the state probe at chance for every architecture, tempting the conclusion that sparse RL cannot install latent state; a pre-registered control overturns it -- PPO+GAE recovers the state, but only partially and with high seed variance. Task structure: permutation (group-language) structure is a warning sign computable from the transition function before any training, and held out on 153 capacity-controlled fresh automata it flags perception gaps at precision 0.86 (89 of 103), in one direction only. Observation informativeness: a label-free auxiliary is vacuous when observations carry no state and recovers it in proportion to how much they reveal. The payoff is a distinction reward-only evaluation cannot make: a perception gap (latent state not linearly recoverable, though representable) versus a planning gap (state

---

*Source: [arXiv](https://arxiv.org/abs/2607.11953)*
