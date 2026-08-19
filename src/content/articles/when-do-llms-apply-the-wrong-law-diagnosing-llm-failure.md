---
title: "When Do LLMs Apply the Wrong Law? Diagnosing LLM Failures in Temporal Legal Reasoning"
dek: "arXiv:2608.14610v1 Announce Type: new Abstract: Legal reasoning tasks such as legal judgment prediction (LJP) require identifying the temporally correct version of the law governing a case -- a capability we term..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-18
featured: false
gradient: grad-4
---

arXiv:2608.14610v1 Announce Type: new Abstract: Legal reasoning tasks such as legal judgment prediction (LJP) require identifying the temporally correct version of the law governing a case -- a capability we term temporal applicable-law determination. However, whether large language models (LLMs) can reliably perform this task remains unexplored. In this paper, we construct a benchmark to evaluate LLMs on temporal applicable-law determination, and systematically investigate why they fail at temporal legal reasoning. Our experiments reveal four key findings. First, LLMs exhibit a strong bias toward applying the most recently enacted law, regardless of when the legally relevant facts occurred. Second, this bias does not stem from an inability to understand that laws have temporal scope, nor from a lack of knowledge about historical statutes. Third, we provide behavioral evidence that reinforcement-learning-shaped explicit reasoning may be a key mechanism: while improving general reasoning ability, it reduces the diversity of reasoning paths, causing models to converge on applying the current law. Fourth, this produces a counterintuitive inverse relationship: models with stronger general reasoning ability tend to perform worse on temporal legal reasoning. Our findings offer concrete guidance for future work on improving LLM performance in temporally grounded legal reasoning.

---

*Source: [arXiv](https://arxiv.org/abs/2608.14610)*
