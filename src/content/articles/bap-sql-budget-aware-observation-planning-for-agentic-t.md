---
title: "BAP-SQL: Budget-Aware Observation Planning for Agentic Text-to-SQL"
dek: "arXiv:2608.02876v1 Announce Type: new Abstract: Tool-using agents do not merely consume observations: their actions determine what arrives next. In agentic text-to-SQL, a broad query can spend context and database work..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-05
featured: false
gradient: grad-4
---

arXiv:2608.02876v1 Announce Type: new Abstract: Tool-using agents do not merely consume observations: their actions determine what arrives next. In agentic text-to-SQL, a broad query can spend context and database work before useful evidence appears, while post-hoc compression cannot recover omitted rows or expended work. We present BAP-SQL, which treats observation formation as a budget-control stage: it estimates query risk, rewrites SQL when useful, and delegates hard limits to an independent runtime shield. Across general 4B, specialized FINER-SQL 4B, and 7B backbones, BAP-SQL improves tight-budget success. On the primary BIRD-derived setting, it gains 3.4/3.6 percentage points over matched SFT while using 4.5/5.0% fewer tokens. Matched retraining and task-level transfer associate the gain with policy-visible planning and budget-sensitive rescue. The benefit attenuates as model capability and budget increase, reverses at the loosest setting, and does not reduce database work.

---

*Source: [arXiv](https://arxiv.org/abs/2608.02876)*
