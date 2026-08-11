---
title: "TeXFix-Bench: An Empirically Grounded Multi-Format Benchmark for LLM-Based Document Source Repair"
dek: "arXiv:2608.07617v1 Announce Type: new Abstract: Scientific and technical writing depends on markup sources that must compile: LaTeX, Typst, and Markdown pipelines fail on missing delimiters, mismatched environments,..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-08-11
featured: false
gradient: grad-4
---

arXiv:2608.07617v1 Announce Type: new Abstract: Scientific and technical writing depends on markup sources that must compile: LaTeX, Typst, and Markdown pipelines fail on missing delimiters, mismatched environments, broken imports, or package conflicts. Existing document-repair evaluations inject faults with ad-hoc edits that lack an empirical fault model. We present TeXFix-Bench, a multi-format benchmark for LLM-based full-source document repair grounded in a mined fault taxonomy. A Grounded-Theory study of localized hard-crash LaTeX faults from TeX Stack Exchange, GitHub commits, and package documentation (168 verified faults, dual open coding at $\kappa$=0.34) yields an 18-category taxonomy instantiated as DocMut: 48 AST-aware operators across three formats. A three-model cross-benchmark shows DocMut faults are 5.6-9.2 pp harder to repair than pattern-based mutations on the same seeds, and a real-error case study (88 mined human crashes, 67.0% repair success) brackets both synthetic sets from below. We construct 10,437 instances from 743 openly licensed seeds and evaluate seven LLMs under a fixed zero-shot protocol with provider-pinned routing, collecting 48,651 attempts at about USD 200 total inference cost. A complete 6,613-instance x 7-model balanced matrix confirms all rankings. A pinned engine gate yields a 27.5-point intention-to-treat compile spread (56.7-84.2%). Typst is markedly harder than LaTeX and Markdown. A restoration oracle over 28,129 compiling repairs shows that 13.6-18.5% of compiling repairs materially alter document text, and restoration rank diverges from compile rank: the model with the lowest compile rate restores content best among its successes. Compile success alone overstates repair quality. We release the taxonomy, DocMut, and all campaig

---

*Source: [arXiv](https://arxiv.org/abs/2608.07617)*
