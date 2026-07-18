---
title: "Supervised Fine-Tuning vs. In-Context Learning: An Equilibrium Analysis of LLM Personalization under Congestion"
dek: "arXiv:2607.14371v1 Announce Type: new Abstract: Large Language Models (LLMs) have revolutionized AI services, but a critical tension emerges: while personalization improves model performance, it consumes scarce..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-07-18
featured: false
gradient: grad-4
---

arXiv:2607.14371v1 Announce Type: new Abstract: Large Language Models (LLMs) have revolutionized AI services, but a critical tension emerges: while personalization improves model performance, it consumes scarce computational resources that users must share. When should a user invest in expensive Supervised Fine-Tuning (SFT) versus lightweight In-Context Learning (ICL)? How does congestion from other users' personalization choices reshape these incentives? And what strategies should platforms adopt when offering multiple personalization algorithms? We develop a tractable framework for LLM serving that captures the statistical-economic trade-offs users face. Our analysis yields several surprising insights. First, we show that ICL and SFT dominate in different regimes, determined by an interplay between pretraining coverage and data signal-to-noise ratios, but congestion can flip these rankings. Second, equilibrium resource consumption exhibits pronounced non-monotonicity: improving pretraining precision reduces the congestion, while broader pretraining coverage and harder tasks sometimes increase it. Third, we prove that offering both personalization methods never hurts the platform's maximal profits, despite potentially increasing computational load. Experiments with GPT-2 on linear regression tasks validate our theoretical predictions about algorithm performance. Complementing these results, our review of documentation from 21 major AI platforms shows that the share offering both SFT and ICL increased from 9.5% in 2021 to 71.4% in 2025, consistent with our platform-design implications.

---

*Source: [arXiv](https://arxiv.org/abs/2607.14371)*
