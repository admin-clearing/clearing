---
title: "Operator-Aware Mixed-Precision Tolerance Calibration for Tensor Kernels"
dek: "arXiv:2607.16228v1 Announce Type: new Abstract: Most tensor-kernel correctness tests go through a fixed-shape all close-style check with hand-picked absolute and relative tolerances. The thresholds are copied across the..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-07-21
featured: false
gradient: grad-4
---

arXiv:2607.16228v1 Announce Type: new Abstract: Most tensor-kernel correctness tests go through a fixed-shape all close-style check with hand-picked absolute and relative tolerances. The thresholds are copied across the corpus and rarely revisited. We mine the element-wise error distribution of every test case from accumulated cloud GPU runs across the 26-entry gpuemu corpus and 2 dtypes (8,076 result rows). We then ask one empirical question: what absolute tolerance would the kernel itself, observed under its correct implementation, justify? The answer is much tighter than the current hand-picked atol. The largest tightening is attention_triton fp16 at $2{,}184\times$. Restricted to the seven LLM-style buggy variants for which the corpus ships a paired correct counterpart, calibrated per-(op, dtype) tolerances raise bug-detection recall from 73.2% (1,805 of 2,467) to 82.4% (2,034 of 2,467), an absolute gain of 9.3 percentage points (+229 new detections). The control false-positive count rises from 0 to 20 out of 1,882 correct-control cases (+1.1 percentage points).

---

*Source: [arXiv](https://arxiv.org/abs/2607.16228)*
