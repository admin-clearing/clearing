---
title: "AutoScientist-Quant: Self-Evolving Coding Agents for Automatic Research in Quantitative Investment"
dek: "arXiv:2608.28632v1 Announce Type: new Abstract: Large language model agents can discover alphas, yet current methods have three weaknesses. The search cannot adapt during the run, automation usually ends at alpha..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-01
featured: false
gradient: grad-4
---

arXiv:2608.28632v1 Announce Type: new Abstract: Large language model agents can discover alphas, yet current methods have three weaknesses. The search cannot adapt during the run, automation usually ends at alpha generation while library selection and model choice stay manual, and alpha discovery can read the test window through loop feedback or code problems. We present AutoScientist-Quant, a self evolving search process that regards quantitative research as one budgeted search problem. A single controller conditions every decision on the remaining budget, choosing at each round whether to improve, combine, pivot, or stop, which node to expand, how many alphas to generate, and how to retrieve past trajectories from the shared memory. The same core then selects from the library and tunes the model, closing the loop from hypothesis to deployable strategy. We also review the evaluation pipeline reused from prior work, fix two lookahead problems, and keep the feedback window disjoint from the held out test window, so every comparison tests true generalization. On CSI universes, the framework attains the best value of nearly every metric in every setting, and these conclusions hold across several backbones and markets.

---

*Source: [arXiv](https://arxiv.org/abs/2608.28632)*
