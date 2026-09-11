---
title: "Conformal Calibration Transfer"
dek: "arXiv:2609.10737v1 Announce Type: new Abstract: Conformal prediction converts point predictions into set-valued predictions with coverage guarantees under exchangeability between calibration and deployment data. We..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-11
featured: false
gradient: grad-4
---

arXiv:2609.10737v1 Announce Type: new Abstract: Conformal prediction converts point predictions into set-valued predictions with coverage guarantees under exchangeability between calibration and deployment data. We study conformal calibration transfer, where this requirement fails because labeled calibration is available only in a source space, while prediction sets are needed in a target space linked to the source through unlabeled paired observations (e.g., paired modalities or sensor changes). We propose Transported Conformal Calibration (TCC): we transport labeled source calibration into the target space using the paired data, and then correct residual post-transport mismatch using only unlabeled target inputs. We instantiate this correction with two complementary methods: TCC-KS, which uses a label-free uncertainty surrogate to detect mismatch and adjust calibration conservatively, and weighted-TCC, which reweights transported calibration toward the target domain for improved efficiency when weights are stable. We provide finite-sample target-domain coverage guarantees that adapt to an observable measure of mismatch. Across CIFAR-100-C, Tiny-ImageNet-C, and SEN12MS, we show reliable target-domain coverage transfer without labeled target calibration data, with label-free diagnostics that predict when correction is needed.

---

*Source: [arXiv](https://arxiv.org/abs/2609.10737)*
