---
title: "The Orthogonalized Read Is a Removable Training Scaffold for Recurrent Memory"
dek: "arXiv:2607.19390v1 Announce Type: new Abstract: A recent report finds that orthogonalizing the mLSTM memory matrix at read time (five Newton-Schulz iterations, trained through) substantially improves noisy associative..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-07-23
featured: false
gradient: grad-4
---

arXiv:2607.19390v1 Announce Type: new Abstract: A recent report finds that orthogonalizing the mLSTM memory matrix at read time (five Newton-Schulz iterations, trained through) substantially improves noisy associative recall. The effect replicates, but it is not a memory improvement. Training on this task is a long chance plateau followed by a sharp escape, and the orthogonalized read acts by re-conditioning the learning problem during the plateau. Three properties establish this. It must be self-consistent: an exact recursive least-squares read (the Mesa layer) reproduces it, while straight-through halves, delta-rule writes, frozen random keys, and plain normalization all fail. It is uniform: across a learning-rate x hardness grid it multiplies the escape hazard roughly six-fold with no detectable hardness dependence, widening the workable learning-rate corridor that narrows for the baseline. And it is removable: applied to failed models at inference it rescues none, and annealed away on an escape-triggered schedule it leaves numerically stock mLSTMs at full accuracy. Much of the published gain needs no architecture at all -- solved-rate at a fixed budget measures escape hazard, which follows a heat/noise law (learning-rate elasticity +3.0, gradient-noise elasticity -1.65) under which the original vocab-96 result is a large-batch noise condition rather than a capacity one. Decoding the memory state directly shows failed models carry roughly half their associations in linearly recoverable form: the plateau is a readout failure over half-written storage. Two conclusions travel beyond the intervention: recall benchmarks used for architecture selection partly measure trainability, and the system is a fully instrumented model organism of "emergence," in which a sharp behavi

---

*Source: [arXiv](https://arxiv.org/abs/2607.19390)*
