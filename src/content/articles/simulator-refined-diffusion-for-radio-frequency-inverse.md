---
title: "Simulator-Refined Diffusion for Radio-Frequency Inverse Design"
dek: "arXiv:2609.38363v1 Announce Type: new Abstract: Diffusion models have shown potential in inverse design of printed circuit boards (PCBs), enabling the generation of layouts conditioned on target S-parameters. Despite..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-02
featured: false
gradient: grad-4
---

arXiv:2609.38363v1 Announce Type: new Abstract: Diffusion models have shown potential in inverse design of printed circuit boards (PCBs), enabling the generation of layouts conditioned on target S-parameters. Despite this promise, applying diffusion models to PCB layout generation remains challenging due to their difficulty in meeting the quantitative electromagnetic specifications. A common approach is gradient-based guidance, which biases the diffusion sampling process with the gradient of an objective used for evaluation. However, full-wave electromagnetic simulators are accurate but expensive and typically non-differentiable, whereas differentiable surrogates are informative but not always reliable. To address these limitations, this paper proposes Simulator-Refined Diffusion (SRD), a novel combination of a low-fidelity differentiable surrogate and a high-fidelity non-differentiable simulator within the diffusion sampling process. Unlike standard zeroth-order optimization, which requires a great number of random perturbations, our approach uses the surrogate's gradient to propose the perturbation direction while the simulator then searches based on this direction to identify an effective design update. Experimental results across different settings show that this method consistently outperforms current state-of-the-art methods, producing layouts whose simulated S-parameters match the target specifications up to 21.2% closer for in-distribution targets and up to 19.8% for out-of-distribution targets.

---

*Source: [arXiv](https://arxiv.org/abs/2609.38363)*
