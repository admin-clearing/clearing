---
title: "SLED: Sensor SLicing from Edge to Datacenter"
dek: "arXiv:2611.21937v1 Announce Type: new Abstract: Modern sensing systems generate large volumes of heterogeneous data streams from multiple sensor modalities, increasing reliance on datacenters for computation, artificial..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-11-18
featured: false
gradient: grad-4
---

arXiv:2611.21937v1 Announce Type: new Abstract: Modern sensing systems generate large volumes of heterogeneous data streams from multiple sensor modalities, increasing reliance on datacenters for computation, artificial intelligence/superintelligence (AI/SI) inference, and AI/SI training. Each sensor stream may have different network and compute requirements depending on its type and data volume. However, current wireless systems typically allocate resources at the device level, leading to contention among co-located sensor streams, where bulk data transfers may starve latency-critical telemetry. To this end, this paper introduces Sensor Slicing (SL). SL provides deterministic, medium access control (MAC)-level isolation for individual sensors within a single user equipment (UE) in open radio access networks (O-RAN). Using agentic coding techniques, SL is implemented in two O-RAN-compliant packages, reducing development time by 400 times (2 h 40 min [OCUDU] vs. 6.5 weeks [OAI]), 228-fold fewer human prompts (4 vs. 913), and less than half the tokens (0.64B vs. 1.43B). An associated end-to-end framework, SLED, is implemented to establish per-sensor radio and network isolation across edge, campus, and remote high-performance computing (HPC) tiers. Over-the-air wireless experiments demonstrate that while conventional network slicing causes critical delays to increase more than 2,300-fold under high traffic load, SLED maintains stable latency. Scaling evaluations on the two RAN stacks show that throughput remains within 0.9% and 1.4% of expected allocations even as the number of sensor slices increases. The results demonstrate that SLED preserves latency-critical telemetry while effectively utilizing resources across the sensor-to-HPC pipeline. The SLED software and evaluat

---

*Source: [arXiv](https://arxiv.org/abs/2611.21937)*
