---
title: "TEDDY: A Pediatric Foundation Model for Risk Forewarning from ICD-Coded Diagnostic Histories"
dek: "arXiv:2607.14191v1 Announce Type: new Abstract: Pediatric electronic health records capture developmentally structured clinical trajectories, yet their potential for generative healthcare foundation models remains..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-17
featured: false
gradient: grad-4
---

arXiv:2607.14191v1 Announce Type: new Abstract: Pediatric electronic health records capture developmentally structured clinical trajectories, yet their potential for generative healthcare foundation models remains largely unexplored. Here we present TEDDY (Temporal Event Decoder for Disease in Youth), a 1.84-million-parameter decoder transformer trained on approximately 73 million ICD-10 diagnoses from 1.6 million children at a single pediatric institution. TEDDY models longitudinal diagnosis trajectories and visit timing. Predictions were made before visit codes were revealed, limited to first occurrences, and evaluated against sex- and age-matched controls. Across 797 disease-onset prediction tasks spanning 16 ICD-10 chapters, TEDDY achieved a median AUC of 72.0%, outperforming same-data DenseNet (50.0%), CNN (57.2%), RNN (60.1%), and LSTM (62.7%) baselines on 96-99% of tasks. Performance held across sex and age and was strongest among lower-prevalence diagnoses; 202 of the 225 rarest conditions (90%) had 95% confidence intervals above chance. Predictive signal remained detectable more than two years before first recorded diagnosis, with median AUCs of 59.7% in the unrestricted analysis and 64.4% in a fixed-cohort sensitivity analysis. In asthma and attention-deficit/hyperactivity disorder benchmarks, AUCs were 79.3% and 84.7%, compared with 62.7% and 71.7% for the strongest comparators, including a general-purpose language model three orders of magnitude larger. Visit-timing predictions had a 3.0-day mean absolute restricted mean survival-time error over 365 days, although median and long-tail return intervals remained miscalibrated. Together, these results establish pediatric diagnostic histories as a substrate for compact generative models supporting broad, rare-di

---

*Source: [arXiv](https://arxiv.org/abs/2607.14191)*
