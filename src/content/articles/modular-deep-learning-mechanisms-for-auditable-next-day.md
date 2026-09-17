---
title: "Modular Deep Learning Mechanisms for Auditable Next-Day Wildfire Spread Prediction"
dek: "arXiv:2609.17763v1 Announce Type: new Abstract: Next-day wildfire prediction requires models whose forecasts can be evaluated alongside the assumptions and historical evidence used in their computation. Although deep..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-17
featured: false
gradient: grad-4
---

arXiv:2609.17763v1 Announce Type: new Abstract: Next-day wildfire prediction requires models whose forecasts can be evaluated alongside the assumptions and historical evidence used in their computation. Although deep learning can learn spatial patterns from remote-sensing data, predictive performance alone does not establish physical fidelity or operational trustworthiness. This study investigates three modular augmentations for next-day active-fire prediction: wind- and slope-conditioned attention biases, physics-feature retrieval-augmented output correction, and fire conditioned dual-stream gating. The attention biases expose prescribed directional preferences, while the retrieval module selects historical tiles using a nine-dimensional environmental and fire-state descriptor and applies a learned correction to a frozen model's logits. The modules are evaluated across five backbones on the Next Day Wildfire Spread benchmark, using staged ablations, directional audits, retrieval perturbations, calibration measures, and computational comparisons. The three-seed mean F1 score and area under the precision--recall curve (AUC-PR) of a SwinUNETR model with all three augmentations are 0.4216 and 0.3673. Then, a mixed ensemble (two augmented architectures and one non-augmented architecture) model achieves 0.4292 and 0.3790. Benefits vary across architectures, and retrieval-related improvements in AUC-PR do not consistently translate into higher F1. The constructed wind bias aligns closely with input wind, but its alignment with observed next-day fire displacement is much weaker, distinguishing prior inspectability from predictive physical fidelity. The study contributes a framework for exposing and evaluating selected domain-informed components within wildfire prediction model

---

*Source: [arXiv](https://arxiv.org/abs/2609.17763)*
