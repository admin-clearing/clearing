---
title: "When Reasoning Traces Conflict with Evidence: How Answer Configuration Shapes Evidence Following"
dek: "arXiv:2610.20805v1 Announce Type: new Abstract: A reasoning trace retained at answer time plays two roles: it can raise accuracy, and it can compete with the current evidence when the two disagree. We disentangle these..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-10-16
featured: false
gradient: grad-4
---

arXiv:2610.20805v1 Announce Type: new Abstract: A reasoning trace retained at answer time plays two roles: it can raise accuracy, and it can compete with the current evidence when the two disagree. We disentangle these roles by crossing verified evidence versions with the traces generated from each and answering from the same traces and evidence under two configurations: continuation of the model's own thinking and a separate answer call. Across three model families (gpt-oss, Gemma4, Qwen3) on HotpotQA and MuSiQue, the separate call raises evidence-following over continuation by 29.9 to 60.6 points. On the same pairs, removing the trace lowers accuracy by similar amounts under both configurations. Yet continuation repeats the stale conclusion in most conflicts, and the separate call follows the current evidence far more often. Benefiting from a trace and deferring to it are therefore distinct properties. Further analyses show that the final line of a trace carries most of its value, gold evidence helps most before the trace is written, distractors weaken correction under a separate call, and renewed reasoning, unlike a verification instruction, follows the current evidence in most conflicts. Because trace deletion alone cannot reveal which source an answer follows, evaluations should report both properties together with the answer configuration.

---

*Source: [arXiv](https://arxiv.org/abs/2610.20805)*
