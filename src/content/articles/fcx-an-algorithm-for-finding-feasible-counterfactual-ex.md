---
title: "FCx: An algorithm for finding Feasible Counterfactual Explanations"
dek: "arXiv:2609.19383v1 Announce Type: new Abstract: Counterfactual (CF) explanations identify changes that alter an input's classification. While existing methods produce realistic and low-cost CFs, they often fail to..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-09-18
featured: false
gradient: grad-4
---

arXiv:2609.19383v1 Announce Type: new Abstract: Counterfactual (CF) explanations identify changes that alter an input's classification. While existing methods produce realistic and low-cost CFs, they often fail to ensure feasibility, by suggesting non-constructive modifications or incompatible with future changes (e.g., changing an individual's race to secure a job offer). We introduce a refinement of CF explanations that explicitly enforces feasibility. Our approach is the first to efficiently generate CFs that are realistic, low-cost and feasible. We accommodate both hard feasible constraints, specified by domain knowledge users, and soft feasible constraints, inferred automatically via causal inference from the dataset. Our method, Feasible Counterfactual Explanations (FCx), is based on a modified Variational Autoencoder (VAE) optimized with a multi-factor loss function. We measure the cost of a change based on the absolute change in values (proximity) as well as the number of features changed (sparsity) while realism is measured based on the LOF for density estimation, guaranteeing that CFs reside in densely populated regions. Extensive experiments on four public datasets show that our approach matches state-of-the-art performance across multiple metrics while guaranteeing feasibility.

---

*Source: [arXiv](https://arxiv.org/abs/2609.19383)*
