---
title: "Expert-Guided Rubrics as Dense Reward Signals for Reinforcement Learning in Non-Verifiable Domains"
dek: "arXiv:2610.26932v1 Announce Type: new Abstract: Large language models (LLMs) are increasingly deployed as autonomous agents in non-verifiable domains such as financial services, where they must interpret user intent,..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-21
featured: false
gradient: grad-4
---

arXiv:2610.26932v1 Announce Type: new Abstract: Large language models (LLMs) are increasingly deployed as autonomous agents in non-verifiable domains such as financial services, where they must interpret user intent, rewrite queries, and retrieve information under domain-specific constraints. Although reinforcement learning (RL) can train such agents from the consequences of their actions, recent successes largely rely on verifiable tasks with automatically computed binary rewards. In non-verifiable retrieval tasks, assessing query quality requires scarce subject-matter expert (SME) judgment that is inherently graded rather than binary. With Group Relative Policy Optimization (GRPO), sparse rewards yield no useful learning signal when all sampled outputs within a group receive the same outcome, causing optimization to stall. We introduce a method that converts a small, fixed investment of SME judgment into a dense reward and combines it with retrieval-based metrics to form a hybrid, GRPO-compatible training signal. Experiments show improvements of up to 6\% in Recall@3 and 6.7\% in MRR@3 compared with sparse-reward baselines.

---

*Source: [arXiv](https://arxiv.org/abs/2610.26932)*
