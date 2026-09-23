---
title: "MAWILE: Multi-Axis Workbench for Inspecting LLM Evaluators"
dek: "arXiv:2609.22599v1 Announce Type: new Abstract: Large language model (LLM) judges provide a flexible and scalable method for evaluating model and agent outputs, but their verdicts can be sensitive to incidental changes..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-23
featured: false
gradient: grad-4
---

arXiv:2609.22599v1 Announce Type: new Abstract: Large language model (LLM) judges provide a flexible and scalable method for evaluating model and agent outputs, but their verdicts can be sensitive to incidental changes in the evaluated response, judge instructions, and scoring rubric. Existing systems examine important subsets of these failure modes, but auditing a configured judge requires testing both the judge instrument and the items it evaluates. We introduce MAWILE, a developer-facing workbench for auditing judge sensitivity across four surfaces: the judge prompt, judge rubric, target-system input, and target-system output. Given a user-supplied judge and representative evaluation items, MAWILE constructs and validates controlled perturbations, re-executes the judge, and localizes the resulting sensitivity. Each perturbation declares whether the verdict should remain invariant or change in a specified direction, allowing the same system to measure both robustness to irrelevant variations and sensitivity to meaningful changes. MAWILE audits binary, ordinal, and pairwise judges without requiring gold labels. The code for this tool is available at: github.com/megagonlabs/mawile-judge.

---

*Source: [arXiv](https://arxiv.org/abs/2609.22599)*
