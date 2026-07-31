---
title: "Position, Not Provenance: Separating Reasoning Mediation from Sycophancy in Medical Vision-Language Models"
dek: "arXiv:2607.27304v1 Announce Type: new Abstract: Medical vision-language models (VLMs) generate chain-of-thought (CoT) reasoning before answering clinical questions, but whether this reasoning causally influences..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-07-31
featured: false
gradient: grad-4
---

arXiv:2607.27304v1 Announce Type: new Abstract: Medical vision-language models (VLMs) generate chain-of-thought (CoT) reasoning before answering clinical questions, but whether this reasoning causally influences predictions remains unclear. We present CoT-Mediate, a behavioral framework that perturbs a single clinically meaningful attribute within a model's own generated reasoning and measures whether the resulting prediction follows the edited reasoning. Our framework combines a dual-arm protocol comparing re-prompted evidence with prefix-forced continuation, together with a provenance-controlled intervention that varies only the attributed source of identical reasoning to disentangle reasoning mediation from sycophancy. We evaluate LLaVA-Med and MedGemma on 1,000 VQA-RAD samples each. Prefix-forced continuation consistently yields higher mediation faithfulness than re-prompting, while the provenance analysis reveals distinct model-specific deference behaviors. Across both models, removing visual evidence increases reliance on injected reasoning, whereas laterality is the least faithfully tracked clinical attribute. These results show that the mechanism used to inject reasoning substantially affects measured faithfulness and that contextual position, rather than stated provenance, is the primary determinant of whether medical VLMs use their generated reasoning.

---

*Source: [arXiv](https://arxiv.org/abs/2607.27304)*
