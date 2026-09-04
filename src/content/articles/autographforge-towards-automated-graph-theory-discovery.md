---
title: "AutoGraphForge: Towards Automated Graph Theory Discovery"
dek: "arXiv:2609.03478v1 Announce Type: new Abstract: We report on our ongoing project to develop a computational pipeline, AutoGraphForge, for an automated graph-theoretic conjecturing-refuting-formalizing-proving system...."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-04
featured: false
gradient: grad-4
---

arXiv:2609.03478v1 Announce Type: new Abstract: We report on our ongoing project to develop a computational pipeline, AutoGraphForge, for an automated graph-theoretic conjecturing-refuting-formalizing-proving system. Conjecture generation is counterexample-guided and runs in rounds: a Graffiti3 generator proposes conjectures over a small, evolving snapshot table $T$ (initially a few hundred graphs with their computed invariants) that grows only by counterexamples to its own conjectures. A novelty filter of $559$ classical and folklore relations, closed under transitive composition and linear identity substitution, decides via a linear program whether a candidate is already implied by known results. Surviving candidates are tested against a dataset of about $348,000$ graphs, unioning the complete House of Graphs invariant export, the exhaustive census of all connected graphs on at most nine vertices, several extremal families (strongly regular, minimal Ramsey, Cayley, cages, barbells, lollipops, spiders), and random models. Counterexample-search algorithms then attack the remainder. Run for several rounds on an HPC cluster, the loop yields $6,522$ conjectures that survived the refutation dataset, the novelty filter and every active-search run -- among them nontrivial relations between the annihilation number and the edge-cover number for bipartite and regular graphs, which we prove by hand. A subsequent formalization and proving stage deterministically translates each surviving conjecture into a Lean 4 statement skeleton; every candidate proof is kernel-verified against a pinned mathlib4 and our custom invariant preamble. This stage integrates two neural provers -- DeepSeek-Prover-V2-671B (served with vLLM) and the Lean-specialised OProver-32B -- behind the independent k

---

*Source: [arXiv](https://arxiv.org/abs/2609.03478)*
