---
title: "Near-Optimal First-Order Regret for Bandits with Feedback Graphs"
dek: "arXiv:2610.40861v1 Announce Type: new Abstract: We study first-order regret guarantees for adversarial bandits with a fixed, known directed feedback graph. For strongly observable graphs, [ACBDK15] establishes a minimax..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-11-02
featured: false
gradient: grad-4
---

arXiv:2610.40861v1 Announce Type: new Abstract: We study first-order regret guarantees for adversarial bandits with a fixed, known directed feedback graph. For strongly observable graphs, [ACBDK15] establishes a minimax regret of $\widetilde{\Theta}(\sqrt{\alpha T})$, where $\alpha$ denotes the independence number of the graph and $T$ denotes the horizon. On the other hand, the best existing first-order bound scales as $\widetilde{O}(\sqrt{(\kappa+1) L^\star})$ [LLZ20], where $\kappa$ denotes the clique partition number, satisfying $\kappa+1\geq\alpha$, and $L^\star$ denotes the cumulative loss of the best arm, leaving a gap between the graph dependence in worst-case and first-order guarantees. In this paper, we bridge this gap by obtaining an expected regret bound of $\widetilde{O}(\sqrt{\alpha L^\star}+\alpha)$. Our first result is an algorithm for the special case of self-aware graphs, in which every vertex has a self-loop. The algorithm combines the update of EXP3 [ACBFS02] with a sampling rule inspired by exploration by optimization [LS20]. More specifically, we construct a map whose fixed points yield sampling distributions that control the one-round regret remainder in terms of the learner's loss and the graph's independence number, which is crucial in deriving optimal first-order guarantees. We further show that a sufficiently accurate fixed point can be computed in polynomial time by a geometrically convergent iteration. Finally, we extend the algorithm to general strongly observable graphs and achieve the same $\widetilde{O}(\sqrt{\alpha L^\star}+\alpha)$ guarantee by adapting the two-level aggregation approach of [LLZ20].

---

*Source: [arXiv](https://arxiv.org/abs/2610.40861)*
