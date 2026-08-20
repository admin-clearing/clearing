---
title: "Safe Domain Adaptation for Physics: Overcoming Nuisances, Label Shifts, and Simulation Priors"
dek: "arXiv:2608.18190v1 Announce Type: new Abstract: Domain adaptation is widely used to make neural networks trained on simulations applicable to experimental data. Its premise is that the two domains differ only in..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-08-20
featured: false
gradient: grad-4
---

arXiv:2608.18190v1 Announce Type: new Abstract: Domain adaptation is widely used to make neural networks trained on simulations applicable to experimental data. Its premise is that the two domains differ only in nuisances, and that the quantity of interest is distributed identically in both. In physics neither assumption holds: simulations can be wrong about the physics, and the distribution of the target quantity - an energy spectrum, a redshift distribution - is often the measurement itself. We study the consequences of such mismatches on a toy air-shower benchmark in which a detector-response nuisance, a physical simulation shift, and an energy-spectrum shift can be switched on separately or together. Standard adversarial adaptation handles the conditional shifts, but once the two spectra differ it aligns them, replacing an uncontrolled bias by one anchored on the simulation prior. We present adaptive domain adaptation, which reweights the simulated events so as to focus domain adaptation on the genuine physical mismatch alone. Since the predicted spectrum depends on model training configuration, we provide a label-free model selection rule for selecting the near-the-best operation point.

---

*Source: [arXiv](https://arxiv.org/abs/2608.18190)*
