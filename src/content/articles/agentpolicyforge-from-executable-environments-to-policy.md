---
title: "AgentPolicyForge: From Executable Environments to Policy Benchmarks and Adaptive Guards"
dek: "arXiv:2610.28989v1 Announce Type: new Abstract: Customized agent deployments define policies over tools, resources, and execution conditions. Providing these policies in the task agent's prompt does not reliably prevent..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-23
featured: false
gradient: grad-4
---

arXiv:2610.28989v1 Announce Type: new Abstract: Customized agent deployments define policies over tools, resources, and execution conditions. Providing these policies in the task agent's prompt does not reliably prevent violations. Training a guard requires examples of tool calls that comply with or violate those policies. We introduce AgentPolicyForge, a framework that uses executable environments to construct policy benchmarks and iteratively train policy guards. With this framework, we construct PolicyGym, a dataset across ten policy families using 698 scenarios for training data generation and 254 separate held-out scenarios for human-reviewed test sets. Tool calls are executed and their outcomes recorded to help determine whether they comply with the policy. Every violating case uses a permitted tool, requiring checks of arguments, resources, and context rather than tool identity alone. The case construction process supports iterative guard training: an attacker generates requests using retrieved strategies, and the guard is fine-tuned on balanced, environment-verified examples. Training improves policy enforcement even with a fixed archive. Updating the archive further reduces in-domain attack success compared with keeping it fixed. We compare policy-aware task agent self-regulation with a trained policy guard. On PolicyGym, the final guard-based configuration achieves a 40-44% relative reduction in attack success rate and fewer benign rejections than policy prompting alone.

---

*Source: [arXiv](https://arxiv.org/abs/2610.28989)*
