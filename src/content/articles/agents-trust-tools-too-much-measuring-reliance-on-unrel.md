---
title: "Agents Trust Tools Too Much: Measuring Reliance on Unreliable Tools"
dek: "arXiv:2609.05587v1 Announce Type: new Abstract: Existing evaluations of tool-using agents primarily measure whether an agent can successfully complete diverse tasks with tools. These evaluations generally assume that..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-10
featured: false
gradient: grad-4
---

arXiv:2609.05587v1 Announce Type: new Abstract: Existing evaluations of tool-using agents primarily measure whether an agent can successfully complete diverse tasks with tools. These evaluations generally assume that tools return reliable information. However, tool returns in real-world systems can be plausible yet incorrect. We investigate how agents respond to unreliable tool returns by evaluating fourteen LLMs using three tools-web search, LLM sub-agent delegation, and code execution. For each tool, we corrupt its returns and measure whether agents adopt the corrupted content in their final answers. Agents exhibit high levels of overtrust across all three settings: the mean adoption rate exceeds one third for every tool and reaches 68.0% for web search. Analysis of reasoning traces reveals a particularly concerning failure mode: agents often recognize conflicts and even recover the correct answer internally, yet present only the corrupted answer without warning the user. To mitigate agents' overtrust in tool returns, we intervene at three levels: prompting by the user, metadata from the tool provider, and post-training by the agent builder. Although some interventions help for particular models or tools, none consistently mitigates overtrust across tools. These findings identify overtrust in unreliable tools as a serious and persistent failure mode, motivating evaluations and interventions that enable agents to validate tool outputs and transparently communicate unresolved conflicts.

---

*Source: [arXiv](https://arxiv.org/abs/2609.05587)*
