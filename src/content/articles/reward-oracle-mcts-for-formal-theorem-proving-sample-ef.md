---
title: "Reward-Oracle MCTS for Formal Theorem Proving: Sample-Efficient Search and the Need for Kernel-Level Proof Auditing"
dek: "arXiv:2608.28639v1 Announce Type: new Abstract: Formal theorem proving with large language models remains challenging due to the difficulty of navigating large proof search spaces efficiently. Existing tree search..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-09-01
featured: false
gradient: grad-4
---

arXiv:2608.28639v1 Announce Type: new Abstract: Formal theorem proving with large language models remains challenging due to the difficulty of navigating large proof search spaces efficiently. Existing tree search approaches either feed verbose compiler error messages directly into the generation context, increasing context usage during search, or employ non-standard evaluation protocols that prevent direct comparison with established baselines. We propose a three-role Monte Carlo Tree Search (MCTS) framework that treats the Lean 4 compiler purely as a reward oracle using compiler output as a scalar signal for UCB-guided tree updates without feeding error content into the generation context. Our framework decomposes proof search into three roles: a generator for proof attempts, a decomposer for subgoal decomposition, and a critic for subgoal quality evaluation. We evaluate across 4 benchmarks spanning competition mathematics and physics (MiniF2F, PutnamBench, LeanPhysBench, PhysLeandata) with three prover models at standard proof attempt budgets (PAB@16 to PAB@256). Our method achieves 87.1\% on MiniF2F with Goedel-Prover-V2-8B at PAB@256 and solves 26/659 PutnamBench problems at PAB@32 surpassing base sampling 18/659 at same proof attempt budget. Through an exhaustive axiom-level audit of every compiled proof, we further identify reward hacking in search-based theorem proving: DeepSeek-Prover-V2-7B produces proofs on PutnamBench that pass compilation and the standard sorry-token scan while depending on sorryAx. The audit removes 4 and 8 such proofs from whole-proof sampling at PAB@32 and PAB@128, and 11 and 19 from MCTS. We do not attribute these counts to the search procedure; we report them to establish that kernel-level auditing is necessary for compiler-verified ev

---

*Source: [arXiv](https://arxiv.org/abs/2608.28639)*
