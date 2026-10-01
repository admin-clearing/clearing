---
title: "KernelOnet: An Interpretable Neural Operator Based on Kernel Functions"
dek: "arXiv:2609.35938v1 Announce Type: new Abstract: This paper proposes an interpretable neural operator framework, the Kernel Operator Network (KernelOnet), which incorporates kernel functions explicitly into the neural..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-10-01
featured: false
gradient: grad-4
---

arXiv:2609.35938v1 Announce Type: new Abstract: This paper proposes an interpretable neural operator framework, the Kernel Operator Network (KernelOnet), which incorporates kernel functions explicitly into the neural operator architecture, so that the operator structure matches the kernel-expansion form used in boundary-type kernel-expansion methods. Unlike traditional neural operators such as DeepONet, which learn basis functions implicitly through deep networks, KernelOnet replaces the trunk network with explicit kernels and offers three complementary kernels: a data-driven learnable kernel, in which a neural network parameterizes a radial basis function learned from data, and which for constant-coefficient linear problems can be regarded as a non-singular fundamental solution; a physics-informed kernel, which embeds physical information such as analytic fundamental solutions into the network structure, so that the expansion satisfies the governing equation automatically and can be trained without supervision on boundary conditions alone, with no interior solution data; and a hybrid kernel, which splits the solution, according to the linear principal part of the governing equation, into a homogeneous part spanned by analytic fundamental solutions and a source part carried by low-rank learned correction kernels, thereby balancing physical priors against data fitting on nonlinear problems lacking an analytic fundamental solution. On three benchmarks and one engineering problem in a shallow-water waveguide, KernelOnet attains high accuracy; where comparable with DeepONet, it is more accurate with fewer learnable parameters. Its unsupervised configuration needs no interior solution labels, and its per-query inference cost is far below that of per-instance solvers, offerin

---

*Source: [arXiv](https://arxiv.org/abs/2609.35938)*
