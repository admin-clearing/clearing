---
title: "When to Rethink: Learning Multi-Perspective Self-Verification for Vision-Language Models"
dek: "arXiv:2610.07018v1 Announce Type: new Abstract: Vision-language models (VLMs) have achieved strong performance in multimodal reasoning, yet they remain prone to generating plausible but incorrect answers...."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-10-07
featured: false
gradient: grad-4
---

arXiv:2610.07018v1 Announce Type: new Abstract: Vision-language models (VLMs) have achieved strong performance in multimodal reasoning, yet they remain prone to generating plausible but incorrect answers. Self-verification offers a practical way to improve answer reliability without relying on external judges, but existing methods typically depend on a single verification criterion or fixed prompt, resulting in incomplete and unstable reliability estimates. We first systematically analyze how verifier capability and prompt design affect verification performance. Our findings show that stronger verifiers provide more reliable judgments, while verification performance is highly sensitive to prompt choice, with no single prompt consistently dominating across tasks. Guided by these findings, we propose \texttt{MOTIVE}, a \textbf{M}ulti-View Self-Verificati\textbf{O}n wi\textbf{T}h Rel\textbf{I}ability-Guided Selecti\textbf{VE} Rethinking framework for reliable multimodal reasoning. \texttt{MOTIVE} evaluates each candidate answer from complementary verification perspectives and learns a correctness-aligned reliability score through correctness-grounded multi-view verification learning. During inference, this score governs an accept-or-rethink decision, allowing reliable answers to be returned directly while uncertain ones trigger history-guided rethinking. Extensive experiments across diverse multimodal benchmarks and VLM backbones demonstrate that \texttt{MOTIVE} consistently outperforms strong self-verification and self-correction baselines. Further results show that reliable verification improves accept-or-rethink decisions and reduces unnecessary reasoning turns, enabling more reliable and efficient self-verification without an external judge.

---

*Source: [arXiv](https://arxiv.org/abs/2610.07018)*
