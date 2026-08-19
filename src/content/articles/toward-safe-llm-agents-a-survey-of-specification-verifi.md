---
title: "Toward Safe LLM Agents: A Survey of Specification, Verification, and Enforcement"
dek: "arXiv:2608.14590v1 Announce Type: new Abstract: LLM agents increasingly perform irreversible real-world actions, including database updates, API calls, file operations, and autonomous use of tools. However, no existing..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-18
featured: false
gradient: grad-4
---

arXiv:2608.14590v1 Announce Type: new Abstract: LLM agents increasingly perform irreversible real-world actions, including database updates, API calls, file operations, and autonomous use of tools. However, no existing system provides formally grounded, task-level safety guarantees for the plans these agents generate. Research remains fragmented across specification, verification, and enforcement, limiting understanding of the strengths and limitations of existing approaches. To address this gap, we conducted a PRISMA 2020 systematic review of 38 studies published between 2022 and 2026 and retrieved from six academic databases. Our analysis reveals four key findings. First, the specification bottleneck remains the primary challenge: natural-language-to-formal translation achieves only 24% to 35% semantic correctness, undermining downstream verification. Second, runtime monitoring is the most mature enforcement strategy, reducing unsafe actions by 40% to 65% in controlled settings, but it does not provide complete safety guarantees. Third, the verifier tax shows that blocking 94% of unsafe actions can still result in less than 5% safe task completion because agents exploit alternative unsafe paths. Finally, no existing approach simultaneously achieves soundness, scalability, semantic correctness, and task-level safety preservation. We contribute a three-level taxonomy, a comparative analysis of existing techniques, a synthesis of evidence on the verifier tax, and a ten-problem research agenda for trustworthy agentic AI.

---

*Source: [arXiv](https://arxiv.org/abs/2608.14590)*
