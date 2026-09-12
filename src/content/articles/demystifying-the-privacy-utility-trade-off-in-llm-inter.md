---
title: "Demystifying the Privacy-Utility Trade-off in LLM Interactions"
dek: "arXiv:2609.10992v1 Announce Type: new Abstract: The integration of Large Language Models into daily tasks relies on context-rich instructions, inevitably exposing sensitive user information. Current privacy-preserving..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-12
featured: false
gradient: grad-4
---

arXiv:2609.10992v1 Announce Type: new Abstract: The integration of Large Language Models into daily tasks relies on context-rich instructions, inevitably exposing sensitive user information. Current privacy-preserving methods typically employ context-agnostic static rules, causing severe utility degradation. However, the specific mechanisms governing how sanitization impacts downstream performance remain largely underexplored. To address this, we conduct a systematic analysis to deconstruct the privacy-utility trade-off, uncovering three underlying mechanisms: (1) Context-Dependent Utility, which first establishes when to sanitize by revealing that data value shifts from critical constraints to dispensable noise based on user intent; (2) Strategic Adaptation, which subsequently determines how to sanitize by dictating that the choice between removal and replacement depends on the task's reliance on factual integrity versus structural coherence; and (3) Combinatorial Interplay, which finally extends the protection scope by demonstrating that attributes form a semantic web of synergistic dependencies or antagonistic redundancies. Guided by these insights, we introduce an intent-driven local protection framework. By distilling a lightweight model Veilmind-4B to drive a dynamic extraction-sanitization-restoration pipeline, our approach reaches a low-leakage privacy point while preserving substantially higher response utility than existing privacy-oriented baselines, advancing the privacy-utility trade-off toward the Pareto frontier.

---

*Source: [arXiv](https://arxiv.org/abs/2609.10992)*
