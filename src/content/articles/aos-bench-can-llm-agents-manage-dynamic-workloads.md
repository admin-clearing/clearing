---
title: "AOS-Bench: Can LLM Agents Manage Dynamic Workloads?"
dek: "arXiv:2610.33178v1 Announce Type: new Abstract: Coding agents are moving from handling one request at a time to serving as persistent assistants to which users hand a stream of work: a build, a data-processing job and a..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-27
featured: false
gradient: grad-4
---

arXiv:2610.33178v1 Announce Type: new Abstract: Coding agents are moving from handling one request at a time to serving as persistent assistants to which users hand a stream of work: a build, a data-processing job and a bug fix may all be pending on the same machine at once. Such an agent must decide when to take on new tasks, how to delegate and overlap them, and how to stay within the machine's CPU and memory. Existing benchmarks cannot measure this, because they evaluate each task in isolation. We introduce \benchname{}, which evaluates an agent system as a workload manager: verified tasks arrive over time and must be delivered under shared CPU and memory limits, and the same tasks run one at a time serve as a per-system reference. Across five model--harness pairs, isolated task success does not carry over evenly. On heavy workloads every system loses 13 to 23 points. On medium workloads, systems span 11 points in isolated success but 26 points in stream success, and two systems 0.6 points apart in isolation deliver 54\% and 68\% of the same tasks. Execution-policy interventions trace much of this gap to task intake: serial dispatch leaves 73\% of heavy-workload tasks unclaimed. Yet more elaborate management does not necessarily help. A fixed concurrency of two comes within four points of the best agent-managed policy on both medium and heavy workloads, and under every policy median CPU use stays below 30\% of the provisioned cores while tasks wait. These results identify workload management as a distinct capability for agents, and \benchname{} as a way to measure it.

---

*Source: [arXiv](https://arxiv.org/abs/2610.33178)*
