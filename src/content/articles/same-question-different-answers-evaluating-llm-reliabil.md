---
title: "Same Question, Different Answers: Evaluating LLM Reliability Beyond Accuracy"
dek: "arXiv:2607.22554v1 Announce Type: new Abstract: Large language models (LLMs) often achieve strong accuracy on benchmarks, yet it remains unclear how reliably they apply this knowledge when the same question is phrased..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-07-28
featured: false
gradient: grad-4
---

arXiv:2607.22554v1 Announce Type: new Abstract: Large language models (LLMs) often achieve strong accuracy on benchmarks, yet it remains unclear how reliably they apply this knowledge when the same question is phrased in different but equivalent ways. In this work, we study how model answers change under meaning-preserving paraphrases across factual question answering and mathematical reasoning tasks. Across four benchmarks and 13 models, we find that model outputs frequently depend on the exact wording of the prompt. While overall accuracy typically changes only modestly across paraphrases, instance-level behavior is far less stable: for many questions, models alternate between correct and incorrect answers depending on phrasing, with mismatch rates reaching more than 23%. Conditioning on questions that are answered correctly in their original form reveals even larger failures measured by answer flip rates, showing that single-prompt correctness is often a poor indicator of reliability. At the same time, we find that models often produce a correct answer for at least one paraphrase of a question, suggesting that the underlying knowledge is present but inconsistently retrieved. Building on this observation, we show that a simple self-paraphrasing strategy can partially recover this latent knowledge and improve performance at inference time. Together, these findings suggest that standard accuracy metrics can mask substantial instability, and that evaluating consistency across equivalent inputs provides a clearer picture of LLM reliability.

---

*Source: [arXiv](https://arxiv.org/abs/2607.22554)*
