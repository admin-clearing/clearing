---
title: "Diagnosing Faults in Reinforcement Learning Simulators and World Models with Canonical Polynomial Invariants"
dek: "arXiv:2609.13194v1 Announce Type: new Abstract: A large literature builds physical structure into learned dynamics on the premise that models respecting the underlying physics predict better. We test that premise using..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-15
featured: false
gradient: grad-4
---

arXiv:2609.13194v1 Announce Type: new Abstract: A large literature builds physical structure into learned dynamics on the premise that models respecting the underlying physics predict better. We test that premise using exact polynomial invariants recovered from trajectories and canonicalised as reduced Gr\"obner bases over $\mathbb{Q}$. On Acrobot, exactness provides little benefit for prediction: a consistency regulariser reduces algebraic residual while leaving rollout fidelity essentially unchanged, and a shaping potential recovered from a system with a 100% mass error accelerates learning as effectively as the correct potential. Exact canonical invariants instead prove valuable for diagnosis. We develop two procedures: screening, which identifies the violated physical constraint, and attribution, which recovers the faulty invariant and identifies the responsible physical parameter. To enable this, we introduce normal-form deflation and quotient-space recovery. Across fifteen injected faults, screening localises every broken constraint with no false alarms, whereas observation-space baselines do not localise any; attribution recovers the responsible parameter on all seven parameter faults. Paired difference tests detect all faults, showing that the advantage is localisation rather than detection. Perturbing reference generators by $10^{-4}$ preserves 14--15/15 localisations, showing that screening does not require exactness, whereas ideal-equality decisions distinguish perturbations of only $10^{-12}$, showing that exactness is required for algebraic comparison. Applied to 350 release pairs across eleven RL environments, the diagnostic finds no evidence of changed simulator dynamics, instead revealing properties of the benchmark implementations themselves.

---

*Source: [arXiv](https://arxiv.org/abs/2609.13194)*
