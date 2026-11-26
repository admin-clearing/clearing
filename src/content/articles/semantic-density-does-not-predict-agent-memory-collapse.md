---
title: "Semantic Density Does Not Predict Agent-Memory Collapse"
dek: "arXiv:2611.33184v1 Announce Type: new Abstract: Persistent textual memory can improve LLM agents, but repeated updates can erode task performance. We ask whether memory-store statistics warn before held-out accuracy..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-11-26
featured: false
gradient: grad-4
---

arXiv:2611.33184v1 Announce Type: new Abstract: Persistent textual memory can improve LLM agents, but repeated updates can erode task performance. We ask whether memory-store statistics warn before held-out accuracy declines. We registered mean pairwise cosine similarity ($\rho$) and 13 additional geometry, retrieval, and graph statistics on 805 snapshots from 13 memory methods across ALFWorld, AppWorld, ScienceWorld, WebShop, and two ARC-AGI settings. These methods store trajectories, rules, workflows, strategies, or linked records, using selective retrieval or whole-store prompting. No such statistic reliably predicted early signs of task accuracy decline, and $\rho$ had zero median lead. With the checkpoint after peak accuracy as a secondary decline point, measures of highly similar pairs and nearest-neighbor crowding changed earlier but did not consistently outperform stored-item count. We trained classifiers on this corpus and applied them unchanged to PropWorld runs of up to 5,000 crafting tasks. They falsely flagged 56.9% of checkpoints from size-limited stores with stable accuracy and detected only 18% of checkpoints after task success fell to zero. Thus, global semantic density did not provide a reliable warning, while local crowding did not transfer consistently across memory designs. In these long-horizon runs, size-limited stores remained stable, while the sole failure arose when unbounded whole-store prompting exceeded model input capacity, which token growth predicted directly.

---

*Source: [arXiv](https://arxiv.org/abs/2611.33184)*
