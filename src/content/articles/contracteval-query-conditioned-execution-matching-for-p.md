---
title: "ContractEval: Query-Conditioned Execution Matching for Procedural Instruction Conformance"
dek: "arXiv:2609.09458v1 Announce Type: new Abstract: As LLM agents move from answering questions to carrying out procedures, failures can be unwarranted rather than visibly wrong: the final response looks acceptable even..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-11
featured: false
gradient: grad-4
---

arXiv:2609.09458v1 Announce Type: new Abstract: As LLM agents move from answering questions to carrying out procedures, failures can be unwarranted rather than visibly wrong: the final response looks acceptable even though the system skipped the check, branch, dependency, or invariant that made the answer justified. Output-only evaluation sees the answer, and trace-aware judging sees activity, but neither identifies which obligations were active for the query. We introduce CONTRACTEVAL, a diagnostic framework for making those active obligations explicit. It represents procedural instructions as query-active obligations and matches them against response or trace evidence, turning omissions, wrong branches, ordering errors, extra actions, invariant breaches, and output-contract violations into distinct conformance failures. On a controlled suite of audited procedural contracts, output-only and trace-aware LLM judges miss many injected structural failures; under gold expected and observed graphs, ContractEval detects and localizes all of them. LLM-backed extraction preserves much of this signal but remains calibration-sensitive. ContractEval is therefore not a compliance guarantee; it makes procedural conformance auditable rather than implicit in final-answer quality.

---

*Source: [arXiv](https://arxiv.org/abs/2609.09458)*
