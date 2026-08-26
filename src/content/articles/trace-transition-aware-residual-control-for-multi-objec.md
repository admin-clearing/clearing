---
title: "TRACE: Transition-Aware Residual Control for Multi-Objective Materials Discovery"
dek: "arXiv:2608.23631v1 Announce Type: new Abstract: Multi-objective materials discovery with LLM agents is often limited not only by how many candidates can be proposed, but by how effectively each costly property..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-26
featured: false
gradient: grad-4
---

arXiv:2608.23631v1 Announce Type: new Abstract: Multi-objective materials discovery with LLM agents is often limited not only by how many candidates can be proposed, but by how effectively each costly property evaluation informs the next search step. Existing agents mainly store evaluated candidates and their scores, so they know which materials succeeded but not which executable edits caused useful property changes. This makes local refinement difficult when objectives compete and an edit that improves one property may damage another. We propose TRACE, a transition-aware residual control framework that treats evaluated edits as the basic unit of feedback. TRACE records each local refinement as a parent-edit-child transition with observed property deltas, aggregates transition evidence to estimate reusable edit effects, and ranks future edits by their predicted ability to reduce the current candidate's remaining constraint violations while avoiding damage to already satisfied objectives. In a controlled same-backbone comparison, TRACE improves over LLEMA, the state-of-the-art LLM-agent baseline, raising macro-average hit rate from 18.13\% to 25.96\%.

---

*Source: [arXiv](https://arxiv.org/abs/2608.23631)*
