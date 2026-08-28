---
title: "Beyond Capability Benchmarks: Learning Operational Fingerprints of LLM Cloud Services from Production Incident Metadata"
dek: "arXiv:2608.26332v1 Announce Type: new Abstract: Managed LLM services are now part of real production systems, but model selection and service planning still rely heavily on capability benchmarks that reveal little about..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-28
featured: false
gradient: grad-4
---

arXiv:2608.26332v1 Announce Type: new Abstract: Managed LLM services are now part of real production systems, but model selection and service planning still rely heavily on capability benchmarks that reveal little about operational behavior after deployment. We present Operational Embedding (OpEmbed), a framework for learning compact operational fingerprints of LLM cloud services from structured, privacy-preserving support-case metadata, without using case text. OpEmbed aggregates model--time windows into an eight-channel operational signature and learns a low-dimensional representation via temporal contrastive learning, cross-view reconstruction, and generational-ordinality regularization. Evaluated on more than 33,000 production support cases spanning seven LLM families over 26 months at Google Cloud, OpEmbed recovers interpretable family- and version-level structure, improves leave-one-model-out operational forecasting over non-learned baselines, remains useful under limited early-window data, and supports cross-model fault-type transfer. We report the practical lessons learned from building and evaluating this tool for model onboarding, support readiness assessment, and operational monitoring.

---

*Source: [arXiv](https://arxiv.org/abs/2608.26332)*
