---
title: "Neural-DISCO: Source-Conditioned Counterfactual Editing of Neural Population Activity"
dek: "arXiv:2610.33145v1 Announce Type: new Abstract: Understanding how neural activity encodes behavioral and sensory variables is a key challenge in systems neuroscience. This requires models that go beyond predicting..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-28
featured: false
gradient: grad-4
---

arXiv:2610.33145v1 Announce Type: new Abstract: Understanding how neural activity encodes behavioral and sensory variables is a key challenge in systems neuroscience. This requires models that go beyond predicting activity from labels and instead support source-conditioned counterfactual editing: given a recorded source response, we should be able to edit one measured behavioral or stimulus label and predict how neural activity would change while preserving other observed labels and source-specific variability not explained by the labels. Here, we introduce \textbf{Neural-DISCO}, a disentangled representation learning framework for counterfactual modeling of neural activity. Neural-DISCO partitions the latent space into label-specific components, each associated with an observed behavioral or stimulus label, together with a residual latent that captures variability not supplied through observed labels. Across simulated and real neural recording datasets, we show that this structure enables selective editing of measured labels to generate counterfactual neural responses while preserving the remaining content of the original activity. Further, to gain insight into how behavioral and stimulus labels are encoded at single-neuron resolution, we pair this disentangled framework with feature attribution methods that identify which neurons are most important for each label. We find that disentanglement enhances the recovery of known functional cell roles in both synthetic and real data. Together, these results support Neural-DISCO as a framework for counterfactual modeling of neural activity and provide a practical interface for probing how neural populations encode behavior and sensory information. Code is available at https://github.com/TangLab-UBC/Neural-DISCO-neurips.

---

*Source: [arXiv](https://arxiv.org/abs/2610.33145)*
