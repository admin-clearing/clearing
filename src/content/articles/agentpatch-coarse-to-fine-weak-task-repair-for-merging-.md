---
title: "AgentPatch: Coarse-to-Fine Weak-Task Repair for Merging Agentic Multimodal Large Language Models"
dek: "arXiv:2608.06699v1 Announce Type: new Abstract: Agentic multimodal large language models (MLLMs) extend multimodal perception and reasoning with planning, tool use, and interaction in dynamic environments. Yet current..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-10
featured: false
gradient: grad-4
---

arXiv:2608.06699v1 Announce Type: new Abstract: Agentic multimodal large language models (MLLMs) extend multimodal perception and reasoning with planning, tool use, and interaction in dynamic environments. Yet current models are specialized for particular tools or environments, complicating consolidation into a single generalist. We formulate Agentic MLLM Merging and identify two challenges: asymmetric capability preservation, whereby capabilities with different interaction complexity are retained unevenly, producing weak tasks after merging, and behavior-critical forgetting, whereby losing decisive actions can derail long-horizon execution. We propose AgentPatch, a training-free coarse-to-fine repair framework. It selects a stable merged backbone, restores diluted weak-task-specific signals through Weak-Task Unique Residual Recovery, and applies an Agent-Guided Behavior-Critical Patch that recovers decisive behaviors under explicit capability protection. AgentPatch produces a single static checkpoint without routing or ensembles. Experiments across six agentic and multimodal benchmarks show that AgentPatch improves diverse merged backbones, alleviates weak-task degradation, and better balances weak-task recovery with the preservation of complementary search and agentic visual processing capabilities. Code is available at https://github.com/ziboshao/AgentPatch.

---

*Source: [arXiv](https://arxiv.org/abs/2608.06699)*
