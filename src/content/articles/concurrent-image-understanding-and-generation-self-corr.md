---
title: "Concurrent Image Understanding and Generation: Self-Correcting Coupled Markov Jump Processes"
dek: "arXiv:2607.13188v1 Announce Type: new Abstract: Human cognition does not separate understanding and generation. A teacher at a whiteboard speaks and draws $\\textit{together}$, each modality reshapes the other. In this..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-16
featured: false
gradient: grad-4
---

arXiv:2607.13188v1 Announce Type: new Abstract: Human cognition does not separate understanding and generation. A teacher at a whiteboard speaks and draws $\textit{together}$, each modality reshapes the other. In this paper, we bring this coupled loop to artificial systems. Masked Diffusion Models (MDMs) are ideally suited to this task, yet existing samplers either decode text and image interleavedly or independently update them in parallel branches that share only previous-step history, but not the other modality's latest decisions $\textit{within}$ the same step; combined with MDMs' inability to remask, cross-modal contradictions are neither detected nor repaired. We introduce $\textbf{Self-Correcting Coupled Markov Jump Processes (SC-CMJP)}$, a framework in which one modality's transition rates are functionals of the other modality's confidence score, as weighted by cross-modal attention. Furthermore, a remasking jump retracts commitments the moment cross-modal evidence turns against them. In conjunction with SC-CMJP, we introduce $\texttt{CO}_\texttt{2}\texttt{Jump}$ (Self-$\underline{\text{CO}}$rrecting $\underline{\text{CO}}$upled $\underline{\text{Jump}}$), a novel training-free single-pass sampler for joint multimodal geneneration. For training and evaluation purposes, we have created and will release three large-scale joint multimodal generation corpora: $\text{JEdit-1M}$, $\text{JMaze-200K}$, $\text{JNono-200K}$, with matching in- and out-of-distribution benchmarks. $\texttt{CO}_\texttt{2}\texttt{Jump}$ achieves best joint performance for image understanding and editing as well as visual reasoning (maze and nonogram solving). The performance of the sampler scales monotonically with the number of denoising steps, evidence that the benefits of cross-modal coupli

---

*Source: [arXiv](https://arxiv.org/abs/2607.13188)*
