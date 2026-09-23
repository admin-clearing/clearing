---
title: "Agreement Overstates Evidence: Error Dependence in LLM Judge Consensus"
dek: "arXiv:2609.22512v1 Announce Type: new Abstract: Consensus among LLM judges is often taken as strong evidence that a decision is correct. This assumes that judges make their errors independently. In practice, LLM judges..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-23
featured: false
gradient: grad-4
---

arXiv:2609.22512v1 Announce Type: new Abstract: Consensus among LLM judges is often taken as strong evidence that a decision is correct. This assumes that judges make their errors independently. In practice, LLM judges are often trained and evaluated in similar ways, so they can make the same mistakes. We study how this dependency affects the reliability of consensus. We find substantial error correlation across both open-weight and frontier LLM judges. In our main bank of ten judges, the average pairwise correlation between judge errors is 0.21. As a result, the ten judges only provide roughly as much statistical information as 3.5 independent judges. The dependency is even stronger among the high-accuracy frontier judges we evaluate, including judges from different providers. In up to 28% of our comparisons, ignoring shared errors leads to the conclusion that one system is significantly better, while accounting for them does not. We also find that the pattern of errors matters. Errors shared by most judges and errors concentrated among a smaller group affect consensus differently and favor different voting methods. Measuring the overall amount of correlation alone is therefore insufficient. Our results suggest a simple approach: use a small set of trusted examples to estimate judge accuracy and identify shared mistakes. These shared errors should then be considered when analyzing the results, and the voting method should be chosen using trusted examples before it is applied to new data.

---

*Source: [arXiv](https://arxiv.org/abs/2609.22512)*
