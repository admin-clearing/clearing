---
title: "Event-Driven ML Pipeline Orchestration for Manufacturing: An AWS Industry Experience"
dek: "arXiv:2610.06890v1 Announce Type: new Abstract: We present an industry experience report on three years of operating an event-driven cloud infrastructure for continuous machine learning training in automotive..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-07
featured: false
gradient: grad-4
---

arXiv:2610.06890v1 Announce Type: new Abstract: We present an industry experience report on three years of operating an event-driven cloud infrastructure for continuous machine learning training in automotive manufacturing. Our system orchestrates GPU-accelerated training of product-specialized model pairs, a physics prediction model and a reinforcement-learning control policy, across multiple plants, coordinating long-running GPU workloads triggered by manufacturing events. The architecture combines Amazon ECS with EC2 GPU capacity providers, SQS-based messaging with dead-letter queues, and an admission-controlled Lambda dispatcher that enforces cluster concurrency limits. A Conductor orchestrator on ECS Fargate initiates dependency-aware retraining chains on a weekly schedule. The entire infrastructure is codified in modular Terraform with multi-account separation. From 40000+ production training jobs we report a 72-78% cost reduction versus always-on GPU infrastructure. A discrete-event simulation confirms that admission control is necessary (naive dispatch loses 65% of jobs) and that queue-draining matches AWS Step Functions latency while eliminating per-job startup overhead. We provide lessons learned and release the simulator and Terraform module skeletons as open-source artifacts.

---

*Source: [arXiv](https://arxiv.org/abs/2610.06890)*
