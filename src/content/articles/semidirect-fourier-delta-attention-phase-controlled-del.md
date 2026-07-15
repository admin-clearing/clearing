---
title: "Semidirect Fourier Delta Attention: Phase-Controlled Delta Memory with Constructive Chunk-WY Kernels"
dek: "arXiv:2607.11897v1 Announce Type: new Abstract: Linear attention replaces softmax attention's growing KV cache with a fixed recurrent state, but this compression limits exact state tracking and long-context memory. We..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-07-15
featured: false
gradient: grad-4
---

arXiv:2607.11897v1 Announce Type: new Abstract: Linear attention replaces softmax attention's growing KV cache with a fixed recurrent state, but this compression limits exact state tracking and long-context memory. We introduce \emph{Semidirect Fourier Delta Attention} (SFDA), a phase-controlled generalization of Kimi Delta Attention that replaces real diagonal decay with block-rotational Fourier control: \[ S_t=(I-\beta_t k_tk_t^*)\Lambda_tS_{t-1}+\beta_tk_tv_t^*, \qquad \Lambda_t=\diag(\alpha_t\odot e^{i\theta_t}). \] Our main result is a constructive chunk-WY factorization for products \(A_t=\Lambda_t-u_tr_t^*\), giving \[ A_t\cdots A_1=\Gamma_t-Y_tM_tW_t^* \] with rank growth bounded inside fixed chunks. This yields an exact affine chunk transfer, formal stability and complexity bounds, and a compact characterization of phase-plus-low-rank memory. We verify the algebra numerically and show in toy state-tracking experiments that SFDA learns cyclic memory where the phase-disabled KDA baseline remains near chance. Fused kernels and large-scale language-model comparisons are left to future work.

---

*Source: [arXiv](https://arxiv.org/abs/2607.11897)*
