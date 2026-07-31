---
title: "Benchmarking the Residual: What Long-Horizon Evaluations Add Beyond Matched Short-Task Performance"
dek: "arXiv:2607.27283v1 Announce Type: new Abstract: Long-horizon benchmarks often show that agents fail more as tasks become longer. This observation is useful for deployment, but it does not by itself explain why failure..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-07-31
featured: false
gradient: grad-4
---

arXiv:2607.27283v1 Announce Type: new Abstract: Long-horizon benchmarks often show that agents fail more as tasks become longer. This observation is useful for deployment, but it does not by itself explain why failure occurs. More stages create more opportunities for ordinary errors to compound; longer tasks may also contain harder individual decisions or become harder as conversation history, tool outputs, and environment changes accumulate. We use trajectory-induced degradation to mean this last possibility: earlier execution makes later work harder. When the harmful accumulation is specifically the text visible to the model, it is often called context rot. In this position paper, we argue that to claim a "long-horizon failure", benchmarks must compare actual full-task success against a baseline prediction built from short, individual stages. We call the log-ratio between this prediction and actual success the horizon residual. The comparison must use the same agent configuration and specify in advance how stages, checkpoints, information, and budgets will be chosen. The residual shows that the full rollout differs from the chosen baseline; targeted experiments are still needed to explain why.

---

*Source: [arXiv](https://arxiv.org/abs/2607.27283)*
