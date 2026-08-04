---
title: "Library Reachability in LSR-Synth: How Anti-Memorization Design Changes the Measurement of Symbolic Discovery"
dek: "arXiv:2607.28684v1 Announce Type: new Abstract: Existing benchmarks for scientific equation discovery are largely composed of well-known equations available in the public domain, making it difficult to determine whether..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-04
featured: false
gradient: grad-4
---

arXiv:2607.28684v1 Announce Type: new Abstract: Existing benchmarks for scientific equation discovery are largely composed of well-known equations available in the public domain, making it difficult to determine whether a model is discovering laws from data or merely recalling answers from its training corpus. LSR-Synth mitigates this problem by introducing novel synthetic terms into established scientific mechanisms and filtering the resulting tasks for novelty, solvability, and scientific plausibility. This paper examines a narrower measurement question: can these tasks further distinguish scientific priors supplied by language models from conventional operator search that does not access task semantics? We construct a semantics-free baseline using a fixed vocabulary with publicly documented provenance, and assess the role of candidate coverage through semantic blinding, library weakening, and matched operator-family knockouts. Under the current task snapshot, search budget, and scoring protocol, the fixed vocabulary already covers most tasks, while language-model-generated candidates rarely expand the set of solvable instances. Their marginal contribution becomes substantial only when vocabulary coverage is selectively disrupted. Strict out-of-distribution evaluation lowers the absolute success rates of all methods but does not alter this relationship. These findings neither invalidate LSR-Synth's controls against memorization of complete formulas nor imply that language-model priors are generally unhelpful. Rather, they support a more limited conclusion: most current tasks remain suitable for evaluating the fitting and recombination of previously unseen expressions, but are insufficient on their own to identify contributions from priors beyond a fixed search space.

---

*Source: [arXiv](https://arxiv.org/abs/2607.28684)*
