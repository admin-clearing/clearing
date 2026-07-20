---
title: "Precise but Uncoupled: Reviewer Precision Does Not Guarantee Critique Uptake in Multi-Agent Math Reasoning"
dek: "arXiv:2607.15388v1 Announce Type: new Abstract: Many math- and science-oriented agent systems use hierarchical designs with specialized reviewer roles, assuming that a dedicated review stage should help turn wrong..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-07-20
featured: false
gradient: grad-4
---

arXiv:2607.15388v1 Announce Type: new Abstract: Many math- and science-oriented agent systems use hierarchical designs with specialized reviewer roles, assuming that a dedicated review stage should help turn wrong candidates into correct ones. We test this assumption on 4,181 verifier-grounded Omni-MATH problems using matched gpt-oss-120b actors. Collaboration adds little on the easiest tiers, but from tier 4 onward the gains open sharply; in this harder regime, broadcast-style peer discussion reaches higher final accuracy than a planner-executor-reviewer pipeline (PER). We ask whether this gap is explained by reviewer quality or by whether critique changes the next answer the protocol carries forward. It is not explained by reviewer precision alone: PER's reviewer is more precise than broadcast's (0.861 vs. 0.644), yet evaluator-verified useful critique is much less likely to change the next candidate and produces lower reviewer-guided repair. These results show that reviewer detection quality and critique uptake are empirically separable. Within matched PER interventions, forcing explicit acknowledgment lowers final accuracy, while embedding reviewer guidance directly in the solver's working context partially improves follow-through without closing the gap. Overall, reviewer-centric evaluation can overstate system quality: a protocol may spot errors well yet still fail to solve more problems if it does not act on those critiques.

---

*Source: [arXiv](https://arxiv.org/abs/2607.15388)*
