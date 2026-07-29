---
title: "ProcAgent: An Agentic Framework for Procedural Task Guidance on Edge with Human-in-the-Loop"
dek: "arXiv:2607.24770v1 Announce Type: new Abstract: Procedural tasks such as furniture assembly and home repair impose substantial cognitive demands because users must interpret instructions, track task progress, reason..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-07-29
featured: false
gradient: grad-4
---

arXiv:2607.24770v1 Announce Type: new Abstract: Procedural tasks such as furniture assembly and home repair impose substantial cognitive demands because users must interpret instructions, track task progress, reason about spatial state, and recover from errors while performing physical actions. Prior multimodal assistants have shown promise for procedural guidance, but most rely on cloud inference and fixed always-on perception, making them poorly suited to privacy-sensitive, latency-critical domestic settings. We present ProcAgent, a fully on-device, agentic, vision-based procedural assistant for real-time adaptive guidances on a single NVIDIA Jetson AGX Orin. ProcAgent uses a propose-and-verify architecture that combines low-latency continuous perception, a symbolic task graph, on-demand vision-language verification, and an LLM-based interaction agent. The system continuously proposes user progress, invokes expensive visual reasoning only when ambiguity or likely deviation arises, and supports both reactive question answering and proactive intervention with human-in-the- loop confirmation. We evaluate ProcAgent along four dimensions: perception accuracy, reasoning, task-level performance, and user experience. Despite running entirely on-device, the system maintains responsive interaction, resolving text-only queries in approximately 2 seconds and visually grounded queries in approximately 8 seconds. In a user study with 10 participants completing assembly tasks, ProcAgent receives positive ratings for comprehensibility, actionability, and privacy comfort. These results show that adaptive procedural assistance can be achieved entirely on edge hardware without sacrificing usability.

---

*Source: [arXiv](https://arxiv.org/abs/2607.24770)*
