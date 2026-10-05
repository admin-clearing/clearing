---
title: "Choosing Before Acting: Comparative Value Estimation for Long-Horizon Tool-Use Agents"
dek: "arXiv:2610.02330v1 Announce Type: new Abstract: Large language models (LLMs) rely on long-horizon tool invocation sequences for complex tasks, where each invocation can alter the task state and condition subsequent..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-10-05
featured: false
gradient: grad-4
---

arXiv:2610.02330v1 Announce Type: new Abstract: Large language models (LLMs) rely on long-horizon tool invocation sequences for complex tasks, where each invocation can alter the task state and condition subsequent decisions. In long-horizon tool use, final-outcome rewards provide weak credit assignment over long interaction traces. Step-level rewards can offer more targeted feedback, but obtaining reliable step supervision often requires human or LLM judgment, or additional rollouts to estimate the downstream effect of an intermediate decision. In this paper, we argue that effective tool-use agents should estimate the long-horizon value of a possible next tool invocation before executing it. This objective requires comparative supervision over alternative invocations under the same context, while logged trajectories only contain the invocation that was actually taken. Therefore, we propose Comparative Inference for Tool-use Agents (CITA). CITA trains a Comparative Inference Model (CIM) from paired signals that combine observed tool behavior, scalable supervision from a Bayesian tool-graph simulator, and semantic judgments from LLM-based comparison. The resulting CIM learns to estimate how likely a possible next tool invocation is to support final task success under the current context. Across three tool-use benchmarks and multiple backbone LLMs, CITA consistently improves Tool F1 and task success. Additional analysis shows that CIM learns accurate step-level value estimates for comparative tool choices.

---

*Source: [arXiv](https://arxiv.org/abs/2610.02330)*
