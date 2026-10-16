---
title: "Temporal Specification Guidance for Text-to-Video Generation"
dek: "arXiv:2610.20822v1 Announce Type: new Abstract: Text-to-video models often generate the visual concepts requested in natural language prompts but fail to satisfy their intended ordering, timing, and persistence..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-10-16
featured: false
gradient: grad-4
---

arXiv:2610.20822v1 Announce Type: new Abstract: Text-to-video models often generate the visual concepts requested in natural language prompts but fail to satisfy their intended ordering, timing, and persistence requirements. We propose representing these requirements as specifications in a formal Temporal Logic, and introduce Temporal Specification Guidance (TSG), a training-free inference-time framework that turns temporal specifications into executable objectives for guiding video generation during sampling. TSG scores traces of visual concept evidence using differentiable quantitative semantics and uses the score's gradients to construct a specification-guided denoising direction. We instantiate this framework with video-text attention traces, efficient differentiable scores for Metric Temporal Logic, and gradient-derived attention biases. This instantiation requires neither an external concept classifier nor backpropagation through the video transformer. Its attention-steered forward pass yields a denoising direction that augments classifier-free guidance (CFG). On a benchmark of 220 prompts spanning 11 categories of temporal constraints, including ordered object entry and state transitions, this instantiation improves specification satisfaction accuracy over CFG by 9.5-20 percentage points across five models, with minimal memory overhead. These results demonstrate the potential of temporal specifications and differentiable satisfaction objectives as a flexible interface for controlling video generation.

---

*Source: [arXiv](https://arxiv.org/abs/2610.20822)*
