---
title: "A Formalization of the Mean-Field Derivation of the Vlasov Equation: AI-Assisted Lean Formalization as a Strategy Game"
dek: "arXiv:2607.08986v1 Announce Type: new Abstract: We formalize a research result in the Lean 4 proof assistant by having a mathematician direct an AI system, and frame the activity as a formalization game. The objective..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-13
featured: false
gradient: grad-4
---

arXiv:2607.08986v1 Announce Type: new Abstract: We formalize a research result in the Lean 4 proof assistant by having a mathematician direct an AI system, and frame the activity as a formalization game. The objective is to turn a LaTeX document into Lean. The game is won when the development compiles, contains no sorry, and a machine check shows the target theorems rest on Lean's foundational axioms alone. Reuse is a second check, by a definition we introduce: whether the development yields a self-contained layer of general mathematics the wider library could absorb. The case study is a complete, axiom-clean formalization of well-posedness for the nonlinear Vlasov equation via Dobrushin's mean-field route -- existence, uniqueness, the stability estimate and mean-field limit, and a short-window superposition principle (weak solutions are Lagrangian). The human's role was to direct, not to write proofs: to scope the definitions, steer the decompositions, and triage the library's gaps; the AI agent executed. The formalization certifies the proof of each statement as written; whether the written statement is the intended theorem stays the mathematician's judgment. The optimal-transport machinery that fell out of the build (in particular, properties of the Wasserstein-1 metric and the Kantorovich-Rubinstein duality theorem) separates into a self-contained layer that compiles against Mathlib alone: about a sixth of the development (49 of 299 declarations), behind a 22-declaration interface with no reverse dependency. The headline theorems ran in about a week, the full development in about a month. We report the quantitative claims as observations of one game, not as general laws. The game's rules name no particular system, so the methodological framing is meant to outlast th

---

*Source: [arXiv](https://arxiv.org/abs/2607.08986)*
