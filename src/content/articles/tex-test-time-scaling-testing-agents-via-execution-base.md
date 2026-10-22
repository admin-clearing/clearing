---
title: "TEX: Test-Time Scaling Testing Agents via Execution-based Cross-Validation"
dek: "arXiv:2610.27290v1 Announce Type: new Abstract: Test-case generation is critical but remains challenging for language models. Existing test-time scaling methods either isolate candidates or aggregate traces, which do..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-22
featured: false
gradient: grad-4
---

arXiv:2610.27290v1 Announce Type: new Abstract: Test-case generation is critical but remains challenging for language models. Existing test-time scaling methods either isolate candidates or aggregate traces, which do not scale to long-horizon tasks. We present TEX, a collaborative test-time scaling framework based on execution-driven cross-validation. TEX parallelizes agents to generate tests and patches, cross-executing each test against every patch to form a $K \times K$ feedback matrix. Agents use their matrix slices for refinement, enabling objective validation without verbose trace sharing. On SWT-Bench Verified, TEX achieves 86.4%, establishing a new state-of-the-art and improving +9.0% over single-agent baselines. Moreover, even random selection from TEX outputs (84.4%) surpasses the previous SOTA (84.0%), showing collaborative execution feedback improves solution quality, not just best-case samples. Our results highlight execution-grounded feedback as an effective scaling mechanism for long-horizon agentic tasks.

---

*Source: [arXiv](https://arxiv.org/abs/2610.27290)*
