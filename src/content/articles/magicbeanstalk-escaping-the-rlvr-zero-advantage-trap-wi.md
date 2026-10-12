---
title: "MagicBeanStalk: Escaping the RLVR Zero Advantage Trap with Recursive Data Synthesis"
dek: "arXiv:2610.12659v1 Announce Type: new Abstract: Data-centric scaling of RLVR has focused on collecting or generating verifiable training problems. However, corpus size alone does not determine whether the dataset..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-10-12
featured: false
gradient: grad-4
---

arXiv:2610.12659v1 Announce Type: new Abstract: Data-centric scaling of RLVR has focused on collecting or generating verifiable training problems. However, corpus size alone does not determine whether the dataset provides a useful learning signal for a target policy. To guide the synthesis of effective RLVR data, we experimentally characterize dataset effectiveness as a function of its problems, the target policy, and the training rollout budget. Under this characterization, we show that a large open-source math corpus pooled from widely used RLVR datasets falls almost entirely into a zero-advantage trap: for a fixed target policy and rollout budget, roughly 88% of its problems are solved in every rollout or failed in every rollout. Filtering concentrates what remains, but it can only select, discarding the hard problems. Effective synthetic problems should therefore require the reasoning operations and compositions required to solve those hard problems. Yet their difficulty must be calibrated, so that some rollouts succeed, some fail, and at least one correct solution fits within the training budget. Prompting a teacher to vary hard problems directly does not achieve this. Guided by these empirical principles, we introduce MagicBeanStalk, a top-down decomposition and bottom-up recursive data-synthesis algorithm that grows seed problems into families of substantively new, policy- and budget-calibrated training problems while preserving the seeds' reasoning blueprints. Across 8 math benchmarks, continual RLVR on MagicBeanStalk problems improves gpt-oss-120b from 61.2 to 69.8 (+8.6) and DeepSeek v4Flash from 72.4 to 77.9 (+5.4) on a 16K-token budget. Training on the full 78K source corpus improves by only +1.1 and its best filtered real data subset by +5.8. In finance, we

---

*Source: [arXiv](https://arxiv.org/abs/2610.12659)*
