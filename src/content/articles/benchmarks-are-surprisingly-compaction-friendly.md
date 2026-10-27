---
title: "Benchmarks Are Surprisingly Compaction-Friendly"
dek: "arXiv:2610.31778v1 Announce Type: new Abstract: Long horizon agentic tasks are now pushing LLM agents past their context window. To continue the task, the agent scaffold has to free up the context window, a process..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-10-27
featured: false
gradient: grad-4
---

arXiv:2610.31778v1 Announce Type: new Abstract: Long horizon agentic tasks are now pushing LLM agents past their context window. To continue the task, the agent scaffold has to free up the context window, a process known as context compaction. Compaction is generally lossy by design: agents can silently lose task constraints, instructions, or their reasoning behind earlier decisions. Although compaction is a standard component of coding agent scaffolds, it has not been studied systematically with frontier models on realistic, long horizon agentic tasks. Previous work evaluate smaller open weight models on toy or synthetic trajectories. We fix the agent scaffold (OpenCode), implement five compaction strategies inside it, and evaluate three frontier models on three long horizon benchmarks (PaperBench, ProgramBench, PostTrainBench). For the two 1M context models, the compaction threshold does not measurably affect the task performance, whereas GPT-5.3-Codex, the model with the smallest context window, performs worse at lower thresholds on PaperBench and, less clearly, on PostTrainBench. No compaction method outperforms default self-summarization, and methods that discard more content cost some models up to 20 points while leaving other models the same. Compaction can, however, silently remove task constraints: on ProgramBench, the first compaction summary already drops about one third of the task's anticheating rules on average, and this rises monotonically with the number of compactions. On real user-agent sessions from SWE-chat, instructions about how the agent should work and what it should not do are dropped around 6 times more than specifications of what to build. We argue that current benchmarks are compaction-friendly: i.e., the objective is fixed and the agent's pr

---

*Source: [arXiv](https://arxiv.org/abs/2610.31778)*
