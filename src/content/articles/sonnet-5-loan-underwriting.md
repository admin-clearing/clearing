---
title: "Sonnet 5's 1M-token window quietly kills the 'AI can't see the whole loan file' excuse"
dek: "Anthropic's newest model can hold a full quarter of transaction history in one pass. Here's what that unlocks for underwriting and fraud review — and what compliance will ask first."
domain: fintech
relevance: 5
author: Clearing Desk
readTime: 4
date: 2026-07-11
featured: true
gradient: grad-1
---

For the past three years, the honest answer to "why isn't AI doing full loan decisioning?" has been a technical one: the documents don't fit in context. A complete mortgage application packet — 1003 form, two years of bank statements, W-2s, pay stubs, title documents, credit report — runs 150–300 pages and well over 100,000 tokens. AI systems chunked it, ran retrieval, and hoped the relevant passages surfaced.

The retrieval assumption created a ceiling. Cross-document fraud patterns — income stated in the 1003 that doesn't appear in any bank statement across 24 months of transactions — required human review precisely because no AI system could hold the whole picture. Compliance teams wrote it into policy.

The 1M token window doesn't incrementally improve that architecture. It replaces it.

## What holistic context actually enables

**Cross-document fraud detection** is the highest-value unlock. Loan stacking, stated income inflation, and synthetic identity fraud all leave traces that are individually ambiguous but collectively diagnostic. When the model compares every statement in the 1003 against every transaction across 24 months of bank statements in one pass — not retrieved chunks — the pattern recognition is categorically different.

**Regulatory document comparison** becomes synchronous rather than sequential. Checking an application against current CFPB guidance, state-level lending regs, and the institution's own credit policy simultaneously, without RAG, removes the "did retrieval surface the right policy section?" failure mode.

**Adverse action compliance** gets more defensible. FCRA requires specific, accurate reasons for adverse action. When the model has seen the whole file and made a holistic decision, the explanation can cite specific cross-document patterns rather than the top-retrieved factor. That's both more accurate and more compliant.

## What compliance will ask first

The first question won't be about accuracy. It will be about **auditability**: when a 1M-token model denies a loan application, which 1,000 tokens actually drove that decision?

Current interpretability tools do not scale to 1M token contexts in any operationally useful way. The working answer in most enterprise deployments right now is structured outputs: the model is prompted to return its decision with explicit citation to the document sections it weighted most heavily. This is prompt-engineering-level auditability, not model-level — a distinction that regulators are beginning to draw.

The second question will be about **disparate impact testing**. A model that sees 1M tokens per application decision needs to be evaluated not just on aggregate accuracy but on demographic performance parity. The larger context window gives the model more opportunities to use correlated proxies, not fewer.

**Third: data retention.** Holding 150 pages of personal financial documents in model context during inference is not the same as holding them in a database, but the legal status of transient model context under CCPA and GLBA is not yet settled.

These are solvable problems — not excuses to slow down, but the compliance checklist for deployment. The institutions working through them now will have a durable advantage when regulatory guidance catches up.
