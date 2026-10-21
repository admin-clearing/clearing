---
title: "Navalia: Advancing Cowork Agents through Verifiable Task Synthesis and Long-Horizon Post-Training"
dek: "arXiv:2610.26887v1 Announce Type: new Abstract: Large language model (LLM) agents are evolving from conversational assistants into Cowork Agents capable of autonomous planning, tool use, and complex task execution...."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-21
featured: false
gradient: grad-4
---

arXiv:2610.26887v1 Announce Type: new Abstract: Large language model (LLM) agents are evolving from conversational assistants into Cowork Agents capable of autonomous planning, tool use, and complex task execution. Financial analysis requires these agents to integrate cross-document evidence and perform multistep numerical reasoning, but expert task authoring is costly, while direct LLM synthesis struggles to produce challenging tasks with reliable answers. We introduce Navalia, a framework for Cowork Agents that combines verifiable task synthesis with long-horizon post-training. Using corporate financial reports as its data source, Navalia semantically selects supporting evidence from complete fact sets and constructs executable computation chains to generate analytical tasks with traceable evidence and actual data dependencies between steps. We further use independent LLM review and programmatic checks to verify evidence consistency and answer correctness. The verified tasks are then used for trajectory collection, cold-start supervised fine-tuning (SFT), and reinforcement learning (RL) to improve long-horizon task execution. Navalia, initialized from Qwen3.6-35B-A3B, achieves consistent gains over the base model across all five benchmarks: OfficeQA Pro, FinSearchComp, Finance Agent Benchmark, APEX-Agents-AA, and Workspace-Bench-Lite. These results demonstrate that Navalia improves evidence integration, tool use, and long-horizon task execution capabilities and generalizes to broader Cowork settings, including general office tasks.

---

*Source: [arXiv](https://arxiv.org/abs/2610.26887)*
