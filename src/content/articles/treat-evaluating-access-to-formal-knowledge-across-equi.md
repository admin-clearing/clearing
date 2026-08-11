---
title: "TREAT: Evaluating Access to Formal Knowledge across Equivalent Mathematical Representations"
dek: "arXiv:2608.07540v1 Announce Type: new Abstract: AI systems increasingly operate between flexible input representations and formal objects used by downstream tools. A key challenge is recognizing when an unfamiliar..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-11
featured: false
gradient: grad-4
---

arXiv:2608.07540v1 Announce Type: new Abstract: AI systems increasingly operate between flexible input representations and formal objects used by downstream tools. A key challenge is recognizing when an unfamiliar formulation denotes a known formal object. We study this challenge through theorem recognition: given an equivalence-preserving transformation of a theorem condition, a model must recover the theorem identity associated with the standard statement. We introduce TREAT, a benchmark for evaluating whether large language models can recover known theorem identities from equivalence-preserving formula-level transformations. Rather than paraphrasing theorem text, TREAT changes the mathematical form of theorem conditions themselves, expressing known results through residual equations, witness statements, optimization identities, set relations, operator forms, and proof-intermediate characterizations. Starting from scraped theorem pages, we filter for entries with usable mathematical expression forms, extract canonical theorem conditions, and generate transformed variants with recorded assumptions and inverse mappings. The final corpus contains 737 theorem identities and 29,480 transformed rows. On a test panel, the best model retrieves the correct theorem identity in only 60.73% of cases. Other systems reveal different failure modes, including abstention, wrong detection, and malformed outputs. These suggest that theorem knowledge can be fragile under equivalent changes in representation. TREAT therefore provides a controlled testbed for evaluating representation-robust access to formal knowledge, with broader relevance to domains that require stable target objects, explicit equivalence relations, validation procedures, and auditable scoring.

---

*Source: [arXiv](https://arxiv.org/abs/2608.07540)*
