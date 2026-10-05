---
title: "Keep It CALM: Analyzing the Limits of Global Unsafety in Text-to-Image Generation"
dek: "arXiv:2610.02300v1 Announce Type: new Abstract: Training-free safeguards for text-to-image generation often rely on a reusable safety signal, such as an unsafe direction or global toxic subspace, applied broadly across..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-05
featured: false
gradient: grad-4
---

arXiv:2610.02300v1 Announce Type: new Abstract: Training-free safeguards for text-to-image generation often rely on a reusable safety signal, such as an unsafe direction or global toxic subspace, applied broadly across prompts. We provide a controlled geometric analysis of this global-unsafety assumption and reveal a consistent coverage-selectivity trade-off: compact unsafe subspaces fail to cover heterogeneous unsafe semantics, whereas broader aggregation increasingly distorts safety-adjacent benign prompts. Motivated by this finding, we propose CALM (Counterfactual Adaptive Local Modulation), a training-free safeguard that replaces uniform global removal with prompt-local counterfactual correction. Using matched unsafe-benign anchors, CALM routes each prompt to active unsafe categories, minimally edits only violating token representations toward the safe side, and suppresses positively aligned unsafe residual components. Across broad evaluation, CALM significantly improves unsafe content suppression while preserving benign utility, demonstrating that local counterfactual correction provides a more selective alternative to global unsafe signal removal.

---

*Source: [arXiv](https://arxiv.org/abs/2610.02300)*
