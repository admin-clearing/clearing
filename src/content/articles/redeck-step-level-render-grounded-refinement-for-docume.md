---
title: "ReDeck: Step-Level Render-Grounded Refinement for Document-to-Slide Generation"
dek: "arXiv:2609.00194v1 Announce Type: new Abstract: Document-to-slide generation is challenging because slides are dense editable artifacts that require both faithful content selection and precise spatial layout. Recent..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-09-02
featured: false
gradient: grad-4
---

arXiv:2609.00194v1 Announce Type: new Abstract: Document-to-slide generation is challenging because slides are dense editable artifacts that require both faithful content selection and precise spatial layout. Recent slide agents adopt iterative reflection, but typically follow a monolithic "one version, one feedback" loop: a slide or deck is rewritten, rendered afterward, and critiqued only at the turn boundary. This delayed feedback makes local failures such as overflow, overlap, clipping, and off-canvas placement difficult to attribute and repair. We propose ReDeck, a step-level render-grounded refinement framework that decomposes slide revision into atomic edit actions and returns renderer-derived observations after each step, turning refinement into "one edit, one observation." To balance local repair with global quality, ReDeck uses multi-granular feedback: step-level render feedback for spatial errors, a turn-level adaptive critic for semantic and design guidance, and a submission-level gate for hard layout validation. We further introduce DeckQuiz, a benchmark that decouples content fidelity, spatial correctness, and design quality. Across GPT-5.4, Claude-4.6, and Gemini-3.1, ReDeck consistently outperforms existing slide-generation agents, and ablations confirm that feedback timing and granularity are critical for reliable slide refinement.

---

*Source: [arXiv](https://arxiv.org/abs/2609.00194)*
