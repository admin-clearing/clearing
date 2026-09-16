---
title: "BLINDSPOT: A Benchmark for Safety and Refusal Calibration in Long-Horizon Tool-Using Agents"
dek: "arXiv:2609.16305v1 Announce Type: new Abstract: Large language model (LLM) agents increasingly operate over long-horizon interactions involving tool use, persistent state, evolving authorization, and external..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-16
featured: false
gradient: grad-4
---

arXiv:2609.16305v1 Announce Type: new Abstract: Large language model (LLM) agents increasingly operate over long-horizon interactions involving tool use, persistent state, evolving authorization, and external environment feedback. In such settings, safety failures may emerge only after multiple turns, yet existing evaluations often reduce agent behavior to task or attack success, obscuring whether an agent acts, refuses, or remains appropriately calibrated as the interaction evolves. We introduce Blindspot, a benchmark for trajectory-level safety calibration of long-horizon tool-using agents. Blindspot evaluates complete user-agent-environment trajectories through adaptive adversarial interaction, stateful tool execution, and execution-grounded adjudication. Its current instantiation contains 22 attack families and 35 scenarios across seven domains, yielding more than 2,500 long-horizon trajectories with an average interaction length of 14.7 turns. Each trajectory is assigned one of five outcomes: Safe Completion, Correct Refusal, Unsafe Completion, Over-Refusal, or Indeterminate. Unlike fixed attack datasets, Blindspot is an extensible live-simulation framework in which attacks, scenarios, tools, policies, domains, and agent configurations can be added without redesigning the evaluation pipeline. We evaluate 13 proprietary and open-weight LLMs using eight metrics covering unsafe completion, appropriate refusal, benign utility, over-refusal, repeated-run robustness, and post-refusal failure. Preliminary results reveal substantial differences in safety-utility calibration across models and show that failures can emerge only after several initially safe interaction steps. These findings motivate treating agent safety as a trajectory-level property rather than a single-tur

---

*Source: [arXiv](https://arxiv.org/abs/2609.16305)*
