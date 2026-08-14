---
title: "Learning Under Treatment-Induced Label Indeterminacy with Expert Annotations of Counterfactual Outcomes: A Case Study in"
dek: "arXiv:2608.12477v1 Announce Type: new Abstract: Clinical prediction models are often developed as if the outcome of interest were cleanly observed for every patient. This assumption fails when treatment decisions make..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-14
featured: false
gradient: grad-4
---

arXiv:2608.12477v1 Announce Type: new Abstract: Clinical prediction models are often developed as if the outcome of interest were cleanly observed for every patient. This assumption fails when treatment decisions make the clinically relevant outcome permanently unobservable. As a case study of this problem, we consider post-cardiac-arrest neurological prognostication using a cohort of 2,497 patients, including 1,429 patients whose outcomes were rendered indeterminate by treatment decisions. These patients with indeterminate outcomes were reviewed by independent clinical experts, who provided their guesses of counterfactual outcomes about what would have happened to the patients. We refer to these patients as uncertain cases. We also have patients for whom we observe their clinically relevant outcomes; we refer to these patients as certain cases. We propose a framework for evaluating prediction models that explicitly splits the evaluation between certain and uncertain cases. Here, we cannot easily evaluate both types of cases in a uniform manner as the available target labels differ. We then propose a simple prediction model that uses target labels from both certain and uncertain cases in a manner that allows us to trade off between them. Across the proposed neural model and a collection of tabular baselines, models with similar certain-case AUROC can nevertheless differ substantially in both certain-case Brier score and their probability estimates for uncertain cases. Improving alignment with target labels of uncertain cases for our proposed model generally comes at the cost of worse accuracy on certain cases, highlighting an explicit tradeoff that standard evaluation conceals. These results show that when treatment decisions determine whether clinically meaningful outc

---

*Source: [arXiv](https://arxiv.org/abs/2608.12477)*
