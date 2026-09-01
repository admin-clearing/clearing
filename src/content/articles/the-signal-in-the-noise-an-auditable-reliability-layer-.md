---
title: "The Signal in the Noise: An Auditable Reliability Layer for Biomedical Text Classification"
dek: "arXiv:2608.28595v1 Announce Type: new Abstract: Biomedical NLP pipelines routinely presuppose clean input text, yet large-scale corpora assembled through automated PDF parsing harbour pervasive OCR-like artifacts, token..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-01
featured: false
gradient: grad-4
---

arXiv:2608.28595v1 Announce Type: new Abstract: Biomedical NLP pipelines routinely presuppose clean input text, yet large-scale corpora assembled through automated PDF parsing harbour pervasive OCR-like artifacts, token splits and merges, hyphenation remnants, and character-level corruption, that systematically erode lexical evidence and degrade downstream classifiers. We introduce a conservative, fully auditable spell-correction reliability layer conceived as a safety-oriented preprocessing module rather than a maximal-accuracy corrector: under conditions of uncertainty, the system abstains from editing, in accordance with a medical do-no-harm philosophy. The deterministic architecture couples bounded edit-distance candidate generation with corpus-derived n-gram scoring and a suite of biomedical safety gates that protect domain-critical terminology. We evaluate the layer both intrinsically, on a manually curated benchmark of 2,104 token-level cases, and extrinsically, on a tri-class CORD-19 topic classifier (Prevention, Treatment, Epidemiology) spanning 10,000 examples under a principled four-run protocol (Clean, Noisy, Restored, Safety). Intrinsically, the layer attains 94.61% error-fix recall on synthetic errors with zero harmful edits on negative controls. Downstream, it recovers approximately 80.45% of the noise-induced macro-F1 degradation, elevating macro-F1 from 0.7654 (Noisy) to 0.7717 (Restored) while preserving near-clean performance (Safety: 0.7721). A supplementary case study on 103 real-world OCR-extracted abstracts classified with BioBERT confirms that transformer encoders appeared relatively robust to mild noise, motivating a future grey-box architecture that integrates bounded neural signals and UMLS lexicons without compromising auditability. The syste

---

*Source: [arXiv](https://arxiv.org/abs/2608.28595)*
