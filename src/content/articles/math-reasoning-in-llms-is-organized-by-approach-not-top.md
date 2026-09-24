---
title: "Math Reasoning in LLMs is Organized by Approach, Not Topic"
dek: "arXiv:2609.27041v1 Announce Type: new Abstract: Mathematical reasoning benchmarks are typically organized by topic, but language models may organize their internal computation by reusable reasoning approach instead. In..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-24
featured: false
gradient: grad-4
---

arXiv:2609.27041v1 Announce Type: new Abstract: Mathematical reasoning benchmarks are typically organized by topic, but language models may organize their internal computation by reusable reasoning approach instead. In this paper, we investigate whether open math-capable LLMs organize internally by topical sub-skill or by reasoning approach, and we present evidence that the approach is the key. We introduce a generation-replay protocol: a model first generates a solution, after which we replay the exact prompt-plus-generation trajectory and extract activation-importance signatures over the reasoning tokens. We cluster these signatures without supervision across eight models and five mathematical reasoning sources, then evaluate the recovered structure with structural, semantic, and intervention tests. Across all 40 model-source cells, the recovered clusters outperform matched-size random baselines. Two independent frontier-LLM judges find approach-level coherence in 77-82% of real clusters versus 6-11% in within-source controls, and topic-pure clusters usually receive labels finer than the topic itself. In approach-controlled prompting, changing the requested reasoning approach shifts cluster assignment in seven of eight model conditions, whereas paraphrases largely preserve it. These results indicate that math-capable LLMs organize internal mathematical computation by reasoning approach rather than benchmark topic. The implication is that topic-stratified benchmarks and topic-balanced training corpora can still miss the axis that matters: even deliberately topic-balanced corpora may remain imbalanced over reasoning approaches.

---

*Source: [arXiv](https://arxiv.org/abs/2609.27041)*
