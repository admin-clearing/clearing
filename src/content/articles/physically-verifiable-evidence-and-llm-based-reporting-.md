---
title: "Physically Verifiable Evidence and LLM-Based Reporting for Bearing Fault Diagnosis"
dek: "arXiv:2607.22797v1 Announce Type: new Abstract: Trustworthy deployment of AI-based diagnosis in safety-critical mechanical systems hinges on validation: whether a prediction can be checked against physical reality..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-07-29
featured: false
gradient: grad-4
---

arXiv:2607.22797v1 Announce Type: new Abstract: Trustworthy deployment of AI-based diagnosis in safety-critical mechanical systems hinges on validation: whether a prediction can be checked against physical reality before it is acted upon. Current intelligent fault diagnosers fail this standard in two ways. Their standard output, a class label with a softmax confidence score, is an internal statistic of the classifier, offering nothing checkable against independent physical knowledge; and the growing use of generative language models in maintenance reporting adds a second risk: hallucinated content entering reports on which decisions rest. Taking bearing fault diagnosis as the testbed, this work addresses both problems from the output side. The proposed Diagnostic Evidence Network (DENet) is an encoder-agnostic multi-task framework extending the output to a structured evidence record: the classification, a predicted characteristic frequency comparable against the theoretical value determined by bearing geometry and shaft speed, and a temporal localization of transient impulses inspectable on the raw waveform. Across four encoders and three public datasets, this evidence incurs no statistically significant accuracy cost, with a frequency error of about 6 Hz on 1,024-point segments where spectral estimation is structurally inapplicable. Centrally, the deviation between predicted and theoretical frequency constitutes a label-free, inference-time validation signal: it detects misclassifications with AUROC values of 0.970 and 0.871, and remains discriminative in the high-confidence regime where confidence-derived detectors are blind. Finally, a QLoRA-adapted language model is constrained to translate, but never generate, diagnostic content, reducing unsupported-claim rates fr

---

*Source: [arXiv](https://arxiv.org/abs/2607.22797)*
