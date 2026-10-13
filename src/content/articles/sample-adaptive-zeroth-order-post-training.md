---
title: "Sample-Adaptive Zeroth-Order Post-Training"
dek: "arXiv:2610.12566v1 Announce Type: new Abstract: Zeroth-order (ZO) optimization offers a memory-efficient alternative to backpropagation for fine-tuning large language models. However, existing ZO methods typically..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-10-12
featured: false
gradient: grad-4
---

arXiv:2610.12566v1 Announce Type: new Abstract: Zeroth-order (ZO) optimization offers a memory-efficient alternative to backpropagation for fine-tuning large language models. However, existing ZO methods typically sample training examples uniformly, overlooking their evolving importance and leaving avoidable estimation variance. To address this limitation, we propose Sample-Adaptive Zeroth-Order Optimization (SAZO), which learns sample importance online and adaptively allocates queries to accelerate convergence. SAZO extracts gradient-norm information from existing directional differences to estimate sample importance without access to true gradients. Furthermore, to track evolving importance from sparse minibatch feedback, SAZO maintains per-example exponential moving averages that aggregate observations across updates. The method requires no additional model evaluations and only $O(N)$ additional scalar state compared with MeZO. We prove that SAZO asymptotically matches the leading convergence term of the minimum-variance sampling oracle, and achieves a strictly faster convergence rate than standard methods. Extensive experiments across four model families demonstrate improved average downstream performance and up to $6\times$ faster convergence to the same training loss in terms of query count.

---

*Source: [arXiv](https://arxiv.org/abs/2610.12566)*
