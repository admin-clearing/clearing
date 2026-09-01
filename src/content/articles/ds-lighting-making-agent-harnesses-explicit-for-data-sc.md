---
title: "DS-Lighting: Making Agent Harnesses Explicit for Data-Science Automation"
dek: "arXiv:2608.28590v1 Announce Type: new Abstract: Large Language Model (LLM) agents have shown promise for automating data-science workflows, yet their end-to-end performance depends critically on the agent harness that..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-01
featured: false
gradient: grad-4
---

arXiv:2608.28590v1 Announce Type: new Abstract: Large Language Model (LLM) agents have shown promise for automating data-science workflows, yet their end-to-end performance depends critically on the agent harness that represents tasks, manages execution state, constrains output artifacts, and provides evaluation feedback. Existing data-science agents often leave this harness implicit, making results difficult to reproduce, compare, and attribute across heterogeneous tasks. We introduce DS-Lighting, a unified harness toolkit that makes harness design explicit for data-science automation. DS-Lighting decomposes the harness into four reusable layers: data, workflow, execution, and evaluation, and represents diverse agents as executable operator programs that support both predefined pipelines and adaptive search. We further integrate multiple open-source data-science benchmarks into an MLE-Bench-style task format, enabling controlled comparison under a shared task interface, sandboxed runtime, and metric protocol. Experiments across agents, harnesses, models, and ablations show that explicit harness design improves reproducibility, comparability, and reliability, while reducing avoidable system-level failures in end-to-end data-science workflows. Our code is available at https://github.com/usail-hkust/dslighting

---

*Source: [arXiv](https://arxiv.org/abs/2608.28590)*
