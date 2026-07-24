---
title: "DecodeShare: Tracing the Shared Subspace of LLM Decode-Time Decisions"
dek: "arXiv:2607.20469v1 Announce Type: new Abstract: Large language models (LLMs) handle many tasks with one set of parameters, but under KV-cached inference it is unclear what task-general structure, if any, is used at..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-07-24
featured: false
gradient: grad-4
---

arXiv:2607.20469v1 Announce Type: new Abstract: Large language models (LLMs) handle many tasks with one set of parameters, but under KV-cached inference it is unclear what task-general structure, if any, is used at decode time rather than during prefill. We propose DecodeShare, a protocol that identifies a low-dimensional subspace consistently shared across tasks in decode-time hidden states, and then tests its causal role by removing that subspace only during decoding. In our experiments, disturbing the discovered shared subspace degrades decision performance far more than disturbing either a prefill-derived or random subspace under the same intervention budget. We further show this decode-shared subspace has practical consequences for activation steering: common steering directions can overlap the task-general decode channel. Projecting out this shared subspace directly separates the functional roles of the two components, while evaluating steering vectors at decode-time yields more reliable signal for downstream deployment than prefill-based proxies. Despite its compactness, the shared subspace can serve as a high-leverage causal channel at decode time. Code is available at: https://github.com/Zishan-Shao/decodeshare.git.

---

*Source: [arXiv](https://arxiv.org/abs/2607.20469)*
