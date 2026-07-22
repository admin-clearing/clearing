---
title: "Beyond Accuracy and Cost: Latency-Aware LLM Query Routing for Dynamic Workloads"
dek: "arXiv:2607.18253v1 Announce Type: new Abstract: Modern language query routers improve inference efficiency by assigning each query to a model that balances response quality and monetary cost. However, current query..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-07-22
featured: false
gradient: grad-4
---

arXiv:2607.18253v1 Announce Type: new Abstract: Modern language query routers improve inference efficiency by assigning each query to a model that balances response quality and monetary cost. However, current query routers are largely latency-agnostic and do not consider the generation latency experienced by queries at model instances. In practice, latency is often controlled by load-balancing policies such as round-robin or join-the-shortest-queue, which do not account for model accuracy or inference cost. Incorporating query latency into routing is challenging as it depends not only on the query's prompt length, but also on the current prefill and decode workload at the model instance and the scheduling and batching policy of the serving framework. We design a lightweight latency estimator that simulates autoregressive token batch processing in the serving framework and estimates the time-to-first-token (TTFT) of queries. We incorporate this latency estimator into a latency-aware router that jointly optimizes latency, accuracy, and cost when assigning queries to model instances. Our experimental results indicate that this joint optimization yields up to 40% improvement in accuracy--cost utility while maintaining the same latencies as standard load-balancing approaches.

---

*Source: [arXiv](https://arxiv.org/abs/2607.18253)*
