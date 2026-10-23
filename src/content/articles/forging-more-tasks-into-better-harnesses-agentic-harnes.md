---
title: "Forging More Tasks into Better Harnesses: Agentic Harness Evolution via Successive Scale Racing"
dek: "arXiv:2610.28815v1 Announce Type: new Abstract: Agentic harness evolution optimizes an agent's instructions, tools, and control flow by using its task execution experiences as evolving evidence. While more evolution..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-23
featured: false
gradient: grad-4
---

arXiv:2610.28815v1 Announce Type: new Abstract: Agentic harness evolution optimizes an agent's instructions, tools, and control flow by using its task execution experiences as evolving evidence. While more evolution tasks should intuitively improve performance, our preliminary study reveals a paradoxical failure mode: the performance of existing methods degrades as the task pool expands. Our further analysis demonstrates that this degradation stems from suboptimal evidence selection during optimization, as different evidence combinations lead to substantially different evolution outcomes. To address this issue, we propose Successive Scale Racing (SSR), a framework that adaptively searches for optimal evidence combinations in each evolution round. SSR constructs diverse evidence combinations based on the corresponding task quality and coverage, and efficiently races the resulting candidate harnesses under a small compute budget. Empirically, across three distinct benchmarks, SSR achieves state-of-the-art results in all six configurations. Notably, as the task pool grows from 40 to 200, SSR steadily improves the pass rate from 64.3% to 68.3%, while the baselines' performances all drop. Furthermore, its racing mechanism identifies near-optimal candidates while reducing validation executions by 60%.

---

*Source: [arXiv](https://arxiv.org/abs/2610.28815)*
