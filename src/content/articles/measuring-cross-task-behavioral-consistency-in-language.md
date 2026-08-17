---
title: "Measuring Cross-Task Behavioral Consistency in Language Model Agents"
dek: "arXiv:2608.13598v1 Announce Type: new Abstract: Agent evaluation relies almost entirely on outcome metrics such as success rate, which capture whether an agent succeeds but not how consistently it behaves. We argue that..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-17
featured: false
gradient: grad-4
---

arXiv:2608.13598v1 Announce Type: new Abstract: Agent evaluation relies almost entirely on outcome metrics such as success rate, which capture whether an agent succeeds but not how consistently it behaves. We argue that behavioral consistency across tasks is a distinct and measurable property, and we introduce the Behavioral Consistency Metric (BCM) to quantify it. BCM trains a model to predict task success from behavioral features of agent execution traces, derives a per-trajectory feature-attribution vector, and measures the mean pairwise similarity of these vectors within an agent system. Across roughly 9,000 trajectories from six language model agents on software engineering tasks, our central finding is that cross-task and within-task consistency are distinct axes that can diverge: some systems are locally reproducible, behaving similarly on repeated attempts at one task, yet globally fragmented, with no stable strategy across different tasks, while others are consistent at both scales. Prior work measures only same-task reproducibility and so cannot observe this separation. We further find that consistency is not reducible to success rate, since systems with comparable success can differ sharply in consistency, and that the frontier-versus-open-source consistency gap persists under a within-task control that holds task difficulty constant. We position BCM as a process-level reliability signal that complements outcome metrics, and we are explicit about the conditions under which it is meaningful.

---

*Source: [arXiv](https://arxiv.org/abs/2608.13598)*
