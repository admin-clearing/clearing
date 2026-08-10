---
title: "Sharding Prevents LLM Oversight Failures and Adversarial Exploitation"
dek: "arXiv:2608.06422v1 Announce Type: new Abstract: Giving an LLM judge more compute does not necessarily make it check more requirements. When one call must return many verdicts, some decisions become weakly grounded in..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-10
featured: false
gradient: grad-4
---

arXiv:2608.06422v1 Announce Type: new Abstract: Giving an LLM judge more compute does not necessarily make it check more requirements. When one call must return many verdicts, some decisions become weakly grounded in the evidence, even when that call receives the same token or tool budget as a panel of separate calls. Across expert-graded research replications, legal work, and clinical-trial assessments, agreement with experts falls as the number of verdicts per call grows. We identify sharding as the intervention that mitigates this failure in model-based oversight. Sharding partitions the requirements into smaller groups, assigns each group to a separate call, and aggregates the verdicts. Against a single call with the panel's full budget, sharding improves agreement while holding the model, evidence, total budget, and per-decision budget fixed. Overall, we find that a sharded weaker judge can outperform a more capable holistic judge and match that judge even when the latter receives the panel's full budget. Additionally, we find that sharding exhibits robustness against adversaries. A best-of-N adversary can hold the underlying work fixed, vary only its presentation, and increase an overloaded judge's acceptance of genuinely unmet criteria severalfold. Wherever sharding reduces baseline error, it removes this adversarial advantage, keeping over-acceptance low even as the adversary's search widens. Sharding does not address attacks that persuade the judge separately on each criterion rather than exploiting overload. In that setting, we find that debate-style opposition on top of sharding withstands such adaptive re-optimization.

---

*Source: [arXiv](https://arxiv.org/abs/2608.06422)*
