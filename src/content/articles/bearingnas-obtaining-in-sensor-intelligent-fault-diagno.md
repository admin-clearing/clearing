---
title: "BearingNAS: Obtaining In-Sensor Intelligent Fault Diagnosis Systems for Bearings Using a Laptop"
dek: "arXiv:2607.18287v1 Announce Type: new Abstract: This paper introduces BearingNAS, a Hardware-Aware Neural Architecture Search (HW-NAS) framework designed to shift the intelligence directly onto the sensor die via..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-07-22
featured: false
gradient: grad-4
---

arXiv:2607.18287v1 Announce Type: new Abstract: This paper introduces BearingNAS, a Hardware-Aware Neural Architecture Search (HW-NAS) framework designed to shift the intelligence directly onto the sensor die via in-sensor processing. BearingNAS frames the search as a constrained optimization problem targeting extreme micro-budgets (4 to 8 kiB of RAM and 16 to 32 kiB of Flash). To eliminate the reliance on expensive discrete GPUs, we propose a lightweight, derivative-free search strategy paired with a single data-flow search space that leverages a decaying kernel growth formulation to prevent parameter explosion. We evaluate our framework on the Case Western Reserve University (CWRU) bearing benchmark, optimizing architectures for three STMicroelectronics targets: two commodity microcontrollers and the LSM6DSO16IS Intelligent Sensor Processing Unit (ISPU). Running entirely on a laptop CPU, the search converges in less than an hour. The resulting best in-sensor architecture achieves a highly competitive diagnostic accuracy of 99.50\% on the ISPU. These results demonstrate the viability of shifting the machine learning workload inside the sensor package, enabling low-cost, production-scale bearing fault diagnosis.

---

*Source: [arXiv](https://arxiv.org/abs/2607.18287)*
