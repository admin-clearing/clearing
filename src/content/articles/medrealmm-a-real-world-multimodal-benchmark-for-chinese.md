---
title: "MedRealMM: A Real-World Multimodal Benchmark for Chinese Online Medical Consultation"
dek: "arXiv:2607.09142v1 Announce Type: new Abstract: Large language models (LLMs) are increasingly deployed in online medical consultation, yet existing benchmarks remain poorly aligned with real clinical practice. Many rely..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-13
featured: false
gradient: grad-4
---

arXiv:2607.09142v1 Announce Type: new Abstract: Large language models (LLMs) are increasingly deployed in online medical consultation, yet existing benchmarks remain poorly aligned with real clinical practice. Many rely on synthetic conversations or patient simulators, omit patient-uploaded medical images, or evaluate open-ended clinical responses using multiple-choice or lexical-overlap metrics that poorly reflect clinical quality. We introduce \textbf{MedRealMM}, a large-scale benchmark for multimodal online medical consultation built from de-identified patient-doctor interactions collected from a nationwide Chinese internet hospital. MedRealMM uses a Multimodal Clinical Challenge Point (MCCP) extraction framework to identify clinically demanding moments in authentic consultation trajectories and converts each into a standardized next-response generation task while preserving the preceding text-image context. Each instance is paired with a case-specific rubric refined by physicians that rewards clinically desirable behaviors and penalizes unsafe, unsupported, or contradictory responses. The current release contains 5,620 real-world multimodal cases spanning 64 clinical departments. We evaluate 19 general-purpose and medical-specialized LLMs, including text-only and multimodal systems. Our results show that image information is critical for reliable clinical performance and that current frontier models remain below the online physician response. Although some frontier models satisfy as many or more positive clinical criteria than physicians, they trigger more negative criteria, indicating that safety-sensitive error avoidance remains a central bottleneck. MedRealMM offers a realistic and reproducible benchmark for evaluating multimodal medical reasoning in real-world o

---

*Source: [arXiv](https://arxiv.org/abs/2607.09142)*
