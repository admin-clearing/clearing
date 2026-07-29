---
title: "Multimodal Domain Generalization for Depression Detection: An Attention-Based BiLSTM Network with Domain-Adversarial Tra"
dek: "arXiv:2607.22794v1 Announce Type: new Abstract: Automatic depression detection with deep learning has shown promise but often suffers from limited generalization due to domain shift arising from inter-speaker..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-29
featured: false
gradient: grad-4
---

arXiv:2607.22794v1 Announce Type: new Abstract: Automatic depression detection with deep learning has shown promise but often suffers from limited generalization due to domain shift arising from inter-speaker variability. To address this critical issue, we present the first patient-independent multimodal depression detection framework that incorporates domain generalization (DG), jointly leveraging both acoustic and textual modalities. The proposed model integrates bidirectional Long Short-Term Memory (BiLSTM) with intra- and cross-modal attention mechanisms, accompanied by segment-level fusion for decision-making. Generalization is further enhanced by applying a gradient reversal layer inspired by Domain-Adversarial Training of Neural Networks (DANN), which promotes domain-invariant representations by adversarially limiting the model's ability to identify individual speakers, effectively reducing patient-specific bias. Conducting experiments on the Androids-Corpus dataset with a 5-fold cross-validation (CV) protocol, various pairings of audio and text feature extractors were evaluated over different segment durations, determining MelSpec and ItalianBERT as the optimal baseline at a 30-second segment duration. The addition of DG to this baseline yields a 2.5% increase in accuracy and 3.3% in F1-score, achieving 93.2% accuracy, 93.2% precision, 96.2% recall, and 94.2% F1-score, surpassing all existing benchmarks. Extensive ablation studies assess the impact of multimodal fusion, deep architectural choices, and DG, highlighting their combined contribution to robust and generalizable depression detection.

---

*Source: [arXiv](https://arxiv.org/abs/2607.22794)*
