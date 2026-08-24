---
title: "When Clean Data Hurts: Learning with Monotone Corruptions Beyond Binary Classification"
dek: "arXiv:2608.20480v1 Announce Type: new Abstract: Optimal learners are tailored to exploit the i.i.d.\\ data assumption underlying the classic PAC model. What if an i.i.d.\\ training sample were corrupted with correctly..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-24
featured: false
gradient: grad-4
---

arXiv:2608.20480v1 Announce Type: new Abstract: Optimal learners are tailored to exploit the i.i.d.\ data assumption underlying the classic PAC model. What if an i.i.d.\ training sample were corrupted with correctly labeled examples drawn from an otherwise unrelated, even adversarial source? This model of learning with monotone adversarial corruptions was recently introduced by Larsen et al. (2026), who demonstrated that all known optimal binary learners suffer increased error rates in this setting, from $O(d / n)$ in the PAC model to $\Omega (d \log(n / d) / n)$ under monotone corruption. Mehrotra (2026) proved this logarithmic factor to be necessary for binary classification, but left open the consequences of corruption for more general learning settings, such as multiclass classification and partial binary concept classes. As our primary result, we demonstrate that monotone adversaries are frighteningly more powerful in each of these settings. We exhibit a learnable multiclass problem, of DS dimension only 2, that becomes altogether unlearnable under a monotone adversary, and show an analogous result for partial binary concept classes. These results are achieved by an adaptive adversary permitted to view the original i.i.d.\ training set $S$ and to insert $b < \infty$ corrupted datapoints into $S$. In the multiclass example, the adversary need only insert a linear number $b = |S| = n$ of datapoints. We complement these impossibility results by proving that every class remains learnable when the number of adaptive additions is $o(n)$, which our previous multiclass lower bound proves to be tight. We further observe that the classic multiclass error rate of $O(d_{\mathrm{DS}} / n)$ remains achievable against adaptive adversaries restricted to a known constant budget $b 

---

*Source: [arXiv](https://arxiv.org/abs/2608.20480)*
