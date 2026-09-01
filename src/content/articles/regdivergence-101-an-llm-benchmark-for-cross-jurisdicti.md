---
title: "RegDivergence-101: An LLM Benchmark for Cross-Jurisdiction Regulatory Contradiction Detection in Life Sciences"
dek: "arXiv:2608.28607v1 Announce Type: new Abstract: Pharmaceutical sponsors developing a drug for both the United States and the European Union must reconcile guidance issued independently by the FDA and the EMA. Where the..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-09-01
featured: false
gradient: grad-4
---

arXiv:2608.28607v1 Announce Type: new Abstract: Pharmaceutical sponsors developing a drug for both the United States and the European Union must reconcile guidance issued independently by the FDA and the EMA. Where the two agencies require substantively the same thing, a sponsor can file once; where they diverge, a single trial design risks rejection in one region; where one agency is silent on a point the other regulates, the sponsor must infer obligations. Today this reconciliation is performed manually by regulatory-affairs experts. We introduce cross-jurisdiction regulatory divergence detection: given an FDA requirement and an EMA requirement on the same topic, classify their relationship as AGREE, DIVERGE, or SILENT. SILENT is inherently directional (SILENT_FDA vs. SILENT_EMA); we record direction per pair and report per-direction F1 alongside the collapsed label. We release RegDivergence-101, a 101-pair expert-grounded pilot evaluation benchmark (labels grounded in three peer-reviewed FDA/EMA comparison studies and primary FDA/EMA/ICH guidance text; dual-annotation inter-annotator kappa = 0.85), and systematically characterise a four-method baseline hierarchy: lexical heuristic (0.511 macro-F1, 95% CI [0.411-0.605]), NLI cross-encoder (0.233), obligation-level Graph-RAG (0.663 [0.570-0.747]), and flat LLM judge / Claude Haiku (0.830 [0.747-0.908]). Three directional observations emerge at pilot scale (n = 101): SILENT is semantically detectable but invisible to entailment-only formulations; pair-level obligation graphs improve over lexical methods but trail flat-LLM context (CIs partially overlapping); and corpus-level graph construction is the indicated architectural target for large-scale silent-detection. RegDivergence-101 is a pilot release establishing the ta

---

*Source: [arXiv](https://arxiv.org/abs/2608.28607)*
