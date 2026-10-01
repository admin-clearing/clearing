---
title: "Fine-Tuning Diffusion Language Models with Context Selection and Target Weighting"
dek: "arXiv:2609.38385v1 Announce Type: new Abstract: Supervised fine-tuning of discrete diffusion language models masks some response tokens and trains the model to recover their original values from the visible context. The..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-01
featured: false
gradient: grad-4
---

arXiv:2609.38385v1 Announce Type: new Abstract: Supervised fine-tuning of discrete diffusion language models masks some response tokens and trains the model to recover their original values from the visible context. The masking pattern therefore determines both the context available to the model and the tokens it learns to predict. Uniform random masking does not explicitly account for the interaction between these choices. We introduce GoldiMask, which selects tokens to reveal as context by approximately maximizing a submodular objective. This objective uses model signals to balance the benefit of revealing tokens against their value as prediction targets. GoldiMask then weights the remaining targets according to how they benefit from the selected context and their remaining learning potential. Across three backbones and three training datasets, GoldiMask achieves the highest average accuracy in most evaluated settings, demonstrating gains on both reasoning and code generation. Component ablations show that both context selection and target weighting contribute to the gains. GoldiMask also reduces decoding iterations on GSM8K and MATH-500 under confidence-threshold parallel decoding, while maintaining comparable accuracy at higher confidence thresholds.

---

*Source: [arXiv](https://arxiv.org/abs/2609.38385)*
