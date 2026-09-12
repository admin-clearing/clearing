---
title: "Decoupling Readiness from Release for Tail-Aware Scheduling of Agentic LLM Workflows"
dek: "arXiv:2609.10964v1 Announce Type: new Abstract: Agentic LLM workflows consist of sequences of model turns interleaved with tool interactions, so their end-to-end completion time depends not only on inference speed but..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-09-12
featured: false
gradient: grad-4
---

arXiv:2609.10964v1 Announce Type: new Abstract: Agentic LLM workflows consist of sequences of model turns interleaved with tool interactions, so their end-to-end completion time depends not only on inference speed but also on when ready turns are released. Most runtimes release each turn immediately upon readiness. Under contention, this eager release policy can accumulate released but unfinished work; once submitted, those turns can no longer be reordered by the workflow-level policy, increasing tail latency. We present a tail-risk-aware turn release scheduling method that jointly decides which ready turn to release next and how much released but unfinished work to maintain. The method uses a mean--Conditional Value-at-Risk (CVaR) objective to capture the evolving tail risk of unfinished workflows, incorporates online estimates of turn work when prioritizing ready turns, and adapts the released work budget to observed queue pressure. We evaluate the method using real agent execution traces from software engineering tasks across multiple LLMs and workflow arrival rates. The method performs comparably to eager release under light load and substantially reduces the P95 of workflow flow time under contention, achieving up to a \(3.50\times\) speedup.

---

*Source: [arXiv](https://arxiv.org/abs/2609.10964)*
