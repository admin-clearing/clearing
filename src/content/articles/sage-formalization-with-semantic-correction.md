---
title: "Sage: Formalization with Semantic Correction"
dek: "arXiv:2609.35790v1 Announce Type: new Abstract: While neural theorem provers have achieved impressive milestones in formal mathematics, they largely operate on the assumption that faithful Lean 4 formal statements are..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-30
featured: false
gradient: grad-4
---

arXiv:2609.35790v1 Announce Type: new Abstract: While neural theorem provers have achieved impressive milestones in formal mathematics, they largely operate on the assumption that faithful Lean 4 formal statements are already provided. Translating informal natural language into a formal language is a critical data bottleneck plagued by an "illusion of rigor": standard type-checkers accept statements that compile but drop hypotheses, introduce vacuous truths, or subtly alter mathematical bounds. To resolve this, we introduce Sage (Semantic Agent-Guided Formalization Engine), an agentic framework that replaces monolithic translation with a four-stage decomposed generation pipeline coupled with a dual-signal semantic correction loop. By pairing Lean 4 compiler diagnostics with multi-dimensional semantic feedback, our correction loop enforces mathematical fidelity alongside syntactic validity. By explicitly accounting for the gap between open-ended queries and declarative formal targets, our pipeline prevents models from achieving high formalization rates by guessing unverified answers (exhibiting a 70.9% answer leakage rate). Consequently, Sage suppresses leakage to 2.7% while achieving 73.3% pass@4 joint compilation and semantic fidelity on the Omni-MATH without proofs (compared to 42.0% for a fine-tuned Goedel-Formalizer-V2 baseline). Finally, on IMO-Unformalized, a novel frontier of 175 unformalized International Mathematical Olympiad problems, Sage demonstrates effective zero-shot generalization with 87.4% pass@4 verified fidelity compared to just 19.4% for the baseline, winning over 79% of blind pairwise evaluations.

---

*Source: [arXiv](https://arxiv.org/abs/2609.35790)*
