---
title: "Allocating Recurrent Compute in Looped Language Models"
dek: "arXiv:2608.18230v1 Announce Type: new Abstract: Looped language models improve reasoning and knowledge manipulation by applying shared computation repeatedly. Existing systems usually repeat an entire layer stack,..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-20
featured: false
gradient: grad-4
---

arXiv:2608.18230v1 Announce Type: new Abstract: Looped language models improve reasoning and knowledge manipulation by applying shared computation repeatedly. Existing systems usually repeat an entire layer stack, although a mixer and a dense feed-forward network (FFN) perform different operations and have different costs. We ask a narrower question: what should loop? We view recurrence as repeated composition of a state update and argue that an application is valuable when it exposes a new cross-position influence direction that remains observable at the task readout. Iterative Transport Rank (ITR) describes the cumulative influence trajectory; marginal ITR describes the nonredundant influence contributed by successive applications. This view motivates MixerLoop, which repeats each Gated DeltaNet mixer while applying its dense FFN once. We compare MixerLoop with no recurrence and full-block recurrence at 15M and 110M parameters under the same data, initialization, and architecture. A finite context-off intervention tests whether later mixer applications produce distinct, non-negligible, and beneficial changes at the final language-model readout. MixerLoop surpasses FullLoop on aggregate CORE at 15M and retains 41.5% of its CORE improvement at 110M while reducing recurrent-backbone projection FLOPs by 45.9%. These results show that the benefits of recurrent depth can be retained without repeatedly executing the dense FFN.

---

*Source: [arXiv](https://arxiv.org/abs/2608.18230)*
