---
title: "Correcting Attribution Patching with a Few Exact Measurements"
dek: "arXiv:2610.27393v1 Announce Type: new Abstract: Mechanistic interpretability asks which language model components matter for a behavior, and activation patching answers by changing one component's activation and..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-22
featured: false
gradient: grad-4
---

arXiv:2610.27393v1 Announce Type: new Abstract: Mechanistic interpretability asks which language model components matter for a behavior, and activation patching answers by changing one component's activation and measuring its effect, at a cost growing with components and prompts. Attribution patching estimates these effects from one gradient pass, but its estimates can be far off, and verifying each one restores the cost. Can the structure of these errors reduce this cost? We propose Guided-AP, which uses a few exact measurements to reveal attribution patching's errors and correct unmeasured estimates. On a single prompt, many components' errors share one sign, so a small exact sample yields one correction for the rest. Over many prompts of one task, components are misestimated similarly, so a few measured prompts show what to verify and how to correct each component's average effect. Our analysis shows that choosing what to verify needs error size, while correction also needs sign. On a single prompt, the correction lowers error by up to 26% across three behaviors at the compute of verifying the largest estimates and also on larger models. Over many prompts, learned corrections cut the error of average effects on factual completion by 75% to 79%, repaying their cost in long analyses.

---

*Source: [arXiv](https://arxiv.org/abs/2610.27393)*
