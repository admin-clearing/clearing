---
title: "Human-AI-Powered Hypothesis Testing: Cost-Aware Selective AI Scoring and Sequential Human Escalation"
dek: "arXiv:2609.28859v1 Announce Type: new Abstract: Large language models are increasingly used as inexpensive judges to evaluate outputs, label data, and assess whether a system meets a desired quality standard. Yet using..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-09-25
featured: false
gradient: grad-4
---

arXiv:2609.28859v1 Announce Type: new Abstract: Large language models are increasingly used as inexpensive judges to evaluate outputs, label data, and assess whether a system meets a desired quality standard. Yet using AI judgments for formal statistical inference is fundamentally different from simply treating them as ground-truth labels: AI evaluations can be biased or noisy, and rigorous hypothesis testing requires explicit control of type-I and type-II errors. We study how to use AI judgments, together with selective human verification, to conduct a valid hypothesis test at minimum cost. We consider a population of items with hidden binary labels. After choosing a fixed pool of items, the decision maker can selectively query AI, send an item directly to a human, escalate an AI-scored item to a human after observing the AI report, or stop once sufficient evidence has accumulated. We derive an information-theoretic lower bound that captures the minimum cost of achieving prescribed testing errors and characterizes the value of AI information and human verification through a report-dependent information frontier. Motivated by this characterization, we develop SCALE, a sequential cost-aware policy that combines selective AI scoring with adaptive human escalation. SCALE is valid at finite sample sizes and matches the lower bound to first order as the target error probabilities vanish. We further extend the framework to an unknown AI-output model using paired AI-human pilot data. Numerically, SCALE approaches Human-only or AI-only testing when one source clearly dominates, while achieving its largest savings when inexpensive AI judgments and selective human verification are both valuable.

---

*Source: [arXiv](https://arxiv.org/abs/2609.28859)*
