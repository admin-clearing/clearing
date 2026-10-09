---
title: "StoreBench: A Live-Commerce Environment for Evaluating and Training Autonomous Operator Agents"
dek: "arXiv:2610.10942v1 Announce Type: new Abstract: Reinforcement learning environments are now a primary lever for improving large language model (LLM) capabilities in post-training, yet most agentic benchmarks remain..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-10-09
featured: false
gradient: grad-4
---

arXiv:2610.10942v1 Announce Type: new Abstract: Reinforcement learning environments are now a primary lever for improving large language model (LLM) capabilities in post-training, yet most agentic benchmarks remain static: the world moves only when the agent acts, the reward is a terminal verdict, and the pass bar is set arbitrarily. We introduce StoreBench, a live-commerce environment in which an agent runs a mid-size online apparel store on a production-grade commerce backend, testing long-horizon planning and economic judgment under uncertainty. Customers order around the clock, suppliers reprice and fail, and market shocks arrive with partial or no warning. The agent acts through the same 29 merchant tools a human operator would use, under a windowed operation budget that makes simulated time a function of actions taken, so model latency cannot influence simulated time. Pass thresholds are calibrated against scripted anchor policies, the reward is hardened against a catalogue of reward hacks, and every episode replays identically given a sequence of actions. We evaluate seven frontier LLMs on 11 scenarios of 30 to 45 days and a full simulated year, over three world seeds at matched reasoning effort. No model matches the scripted smart-triage policy on average: the best, DeepSeek-V4-Pro, passes 49% of task-seed cells against the heuristic's 97%. Human experts working through the same tools and budgets outscore every model (mean composite 0.708 vs. 0.700). Over a full simulated year under the Claude Code harness, most models show dramatic performance improvement. In a GRPO post-training run, Qwen3.5-27B trained on only five disjoint tasks raises its mean composite on the held-out evaluation tasks from 0.136 to 0.373. We release five example training-split tasks, ten s

---

*Source: [arXiv](https://arxiv.org/abs/2610.10942)*
