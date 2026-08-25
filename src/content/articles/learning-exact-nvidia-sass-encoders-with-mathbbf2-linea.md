---
title: "Learning Exact NVIDIA SASS Encoders with $\\mathbb{F}_2$ Linear Algebra"
dek: "arXiv:2608.20532v1 Announce Type: new Abstract: NVIDIA provides a SASS disassembler but no public SASS assembler for recent data-center GPUs, limiting controlled machine-code rewriting. We present F2Asm, which learns..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-24
featured: false
gradient: grad-4
---

arXiv:2608.20532v1 Announce Type: new Abstract: NVIDIA provides a SASS disassembler but no public SASS assembler for recent data-center GPUs, limiting controlled machine-code rewriting. We present F2Asm, which learns exact 128-bit SASS encoders from paired disassembly and original CUBIN instruction words. To our knowledge, F2Asm is the first system to learn SASS instruction encoders as vector-valued affine maps over F2 and the first open-source NVIDIA SASS assembler to support Rubin SM107. F2Asm uses Gaussian elimination over F2 to incrementally build a compact basis, detect inconsistencies, and reject inputs outside the learned span. F2Asm separates target-specific control bits, relocation rules, and CUBIN metadata from its learning algorithm. We train encoders for Hopper SM90/SM90a, Blackwell SM100, and Rubin SM107 using 3,225 CUBINs from pinned NVIDIA and third-party production libraries, CUDA 13.3 packages, and CUDA 13.4 Developer Preview archives. In round-trip tests, F2Asm reassembles the disassembled SASS for each CUBIN, and all compared executable text sections match the originals exactly.

---

*Source: [arXiv](https://arxiv.org/abs/2608.20532)*
