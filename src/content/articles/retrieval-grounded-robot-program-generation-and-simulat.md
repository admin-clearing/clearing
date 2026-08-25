---
title: "Retrieval-grounded robot program generation and simulation-based correction via Model Context Protocol"
dek: "arXiv:2608.21417v1 Announce Type: new Abstract: Flexible manufacturing requires industrial robots to be reprogrammed rapidly as product variants change. This paper presents a language-model-based workflow that..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-25
featured: false
gradient: grad-4
---

arXiv:2608.21417v1 Announce Type: new Abstract: Flexible manufacturing requires industrial robots to be reprogrammed rapidly as product variants change. This paper presents a language-model-based workflow that generates, validates, and iteratively corrects ABB RAPID robot programs from natural language task descriptions. A dual-stream retrieval-augmented generation (RAG) pipeline grounds code generation in verified technical documentation and production templates, reducing domain-specific errors produced by ungrounded language models. A custom Model Context Protocol (MCP) server connects the language-model client directly to ABB RobotStudio for automated code upload, simulation execution, and diagnostic feedback. The evaluation combines a 30-query retrieval benchmark, scoped code-generation checks, and RobotStudio case studies in a simulated pickand- place manufacturing cell. The simulation loop exposes execution failures that static and semantic checks alone cannot catch, including suction release-height errors, unreachable placement targets, and configuration-dependent recovery motions. The results show how RAG and MCP can connect grounded code generation with executable feedback from industrial robot simulation software, while reducing but not eliminating expert setup and final supervision.

---

*Source: [arXiv](https://arxiv.org/abs/2608.21417)*
