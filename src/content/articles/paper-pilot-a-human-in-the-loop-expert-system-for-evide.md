---
title: "Paper Pilot: A Human-in-the-Loop Expert System for Evidence-Traceable Scientific Manuscript Generation in Applied Scienc"
dek: "arXiv:2608.28596v1 Announce Type: new Abstract: Large language model (LLM) agents are increasingly embedded in scientific workflows for literature analysis, drafting, and review. Existing systems advance autonomous..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-09-01
featured: false
gradient: grad-4
---

arXiv:2608.28596v1 Announce Type: new Abstract: Large language model (LLM) agents are increasingly embedded in scientific workflows for literature analysis, drafting, and review. Existing systems advance autonomous discovery and manuscript generation, but do not resolve the governance problem that arises when ideas, methods, results, and claims propagate through AI-assisted workflows without mandatory human approval or artifact-level traceability. This paper proposes Paper Pilot, a human-in-the-loop expert system for evidence-traceable scientific manuscript generation in applied sciences. It adapts the Collaborative Agent Reasoning Engineering (CARE) methodology to manuscript development through manuscript-owner approval gates, explicit no-pass criteria, claim classification, audit logging, advisory LLM review, and evidence-locked revision control. The framework defines eight approval gates across the idea-to-claim pipeline and distinguishes literature-grounded from artifact-grounded claims, requiring reported numbers and interpretations to remain traceable to approved evidence; its system prompt is openly released for deployment in ChatGPT, Gemini, Claude, or institutional LLM environments. As a first empirical validation, we evaluate the citation-grounding layer with a controlled, mechanically scored benchmark (two commercial LLMs, real arXiv papers, no LLM judge): under coverage pressure ungated drafters fabricated up to 25% of their citations and never flagged an evidence gap, whereas the same models under Paper Pilot's evidence-locked rules produced zero fabricated citations and surfaced the planted gaps as explicit placeholders. Preliminary results for result grounding, revision, and adversarial robustness point the same way; full evaluation is left to future work

---

*Source: [arXiv](https://arxiv.org/abs/2608.28596)*
