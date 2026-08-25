---
title: "The Abstention Protocol: RCA for Clos Fabrics"
dek: "arXiv:2608.21412v1 Announce Type: new Abstract: Root cause analysis (RCA) in large datacenter networks is challenging because telemetry is noisy, partial, and asynchronous. Score-based approaches degrade under these..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-25
featured: false
gradient: grad-4
---

arXiv:2608.21412v1 Announce Type: new Abstract: Root cause analysis (RCA) in large datacenter networks is challenging because telemetry is noisy, partial, and asynchronous. Score-based approaches degrade under these conditions, often yielding unstable or incorrect attributions. We present \textsc{CoreSec}, a production RCA system that replaces weighted fusion with a PAM-style abstention algebra. Telemetry agents are composed using control flags that yield deterministic decisions and explicit abstention when evidence is ambiguous. CoreSec combines this algebra with topology-aware configurations that capture failure surfaces across Clos fabrics and converge monotonically as evidence accumulates. Deployed at hyperscale, CoreSec provides stable and explainable RCA behavior across diverse environments without retuning. Our experience shows that structured composition with abstention forms a practical foundation for automated RCA in real-world cloud networks.

---

*Source: [arXiv](https://arxiv.org/abs/2608.21412)*
