---
title: "MOSAIC-SR: Transformer-Guided Symbolic Regression for Scientific Equation Recovery"
dek: "arXiv:2609.20997v1 Announce Type: new Abstract: Symbolic regression aims to recover closed-form equations from observations, providing interpretable models for scientific discovery. Existing approaches struggle to..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-09-21
featured: false
gradient: grad-4
---

arXiv:2609.20997v1 Announce Type: new Abstract: Symbolic regression aims to recover closed-form equations from observations, providing interpretable models for scientific discovery. Existing approaches struggle to combine flexible structural search with efficient inference. Search-based methods can refine expression structure but often rely on costly combinatorial optimization with random initialization. Pretrained neural models generate formulas almost instantly, but their predictions often contain symbolic errors. We introduce MOSAIC-SR, which uses a pretrained Transformer to propose multiple initial sketches. These sketches initialize searches in several promising regions, avoiding random starts in the vast expression space. Each search jointly recovers structure and constants through scale-aware constant optimization and local symbolic repair. We evaluate MOSAIC-SR on the SRSD-Feynman dataset with and without dummy variables and on six additional benchmarks. MOSAIC-SR obtains the highest symbolic solution rate on every dataset while ranking among the top two methods in predictive accuracy. This advantage persists in the presence of irrelevant dummy inputs. The results show that learned priors can focus search on promising equation structures, and that numerical optimization and symbolic repair are important for recovery.

---

*Source: [arXiv](https://arxiv.org/abs/2609.20997)*
