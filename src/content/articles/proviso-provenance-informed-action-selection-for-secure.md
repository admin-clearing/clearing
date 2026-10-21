---
title: "PROVISO: Provenance-Informed Action Selection for Secure LLM Agents"
dek: "arXiv:2610.27115v1 Announce Type: new Abstract: LLM agents act on the external world through tools and third-party skills, so a single executed action can cause irreversible harm. Existing defenses judge a proposed..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-21
featured: false
gradient: grad-4
---

arXiv:2610.27115v1 Announce Type: new Abstract: LLM agents act on the external world through tools and third-party skills, so a single executed action can cause irreversible harm. Existing defenses judge a proposed action without tracking whether its content comes from the user or from external sources such as tool outputs, and they judge it in isolation rather than against an available alternative, which forces a trade-off between security and utility. We present PROVISO, a controller that decides which action to commit after the agent proposes an action and before it is executed. PROVISO encodes trusted observations, external observations, the proposed action, and an alternative into provenance-typed memory, relates them through role-specific queries, and commits the action with the highest calibrated value learned from outcomes. On four agent security tasks spanning the agent lifecycle, no baseline exceeds PROVISO in both security and utility. PROVISO improves F1 over the strongest baseline by 13.84 points on SkillsBench and by 7.07 points on ToolSafe, and it reaches 88-99 F1 on three additional skill detection benchmarks.

---

*Source: [arXiv](https://arxiv.org/abs/2610.27115)*
