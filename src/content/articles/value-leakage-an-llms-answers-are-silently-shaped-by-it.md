---
title: "Value Leakage: An LLM's Answers Are Silently Shaped by Its Own Values"
dek: "arXiv:2607.14345v1 Announce Type: new Abstract: People use language models for practical questions whose answers are difficult to verify. We show that models exhibit covert value leakage: the information they provide is..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-07-18
featured: false
gradient: grad-4
---

arXiv:2607.14345v1 Announce Type: new Abstract: People use language models for practical questions whose answers are difficult to verify. We show that models exhibit covert value leakage: the information they provide is influenced by their own values, without this influence being disclosed to the user. In one of our evaluations, the user is considering investing in an AI company and wants to know how likely the AI bubble is to pop. Claude Opus 4.8 gives a lower probability when the company under consideration is Anthropic rather than OpenAI. Yet Claude mostly fails to disclose this influence to the user. Covert value leakage is a form of misalignment because it goes against the user's preferences and is likely to mislead them. To investigate this phenomenon, we introduce a suite of evaluations to quantify value leakage and whether models disclose it. We find that models are influenced by different types of values, including preferences for morally good outcomes, for the company that developed them, and for some human leisure activities over others. We often observe large differences among frontier models on the same evaluation. For example, on a Fermi-estimation task, Claude models falsely claim to give unbiased answers in their chain-of-thought, while Qwen models explain how their values bias their answers. Value leakage is a failure mode distinct from sycophancy and reward hacking, and current alignment training and evaluations do not adequately address it.

---

*Source: [arXiv](https://arxiv.org/abs/2607.14345)*
