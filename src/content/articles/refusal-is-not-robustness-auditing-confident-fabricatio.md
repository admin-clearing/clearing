---
title: "Refusal Is Not Robustness: Auditing Confident Fabrication in Large Language Models on a Provably Uninformative Clinical "
dek: "arXiv:2608.26167v1 Announce Type: new Abstract: Hallucination and abstention benchmarks rarely establish that a model could not have known the correct answer, making it difficult to distinguish appropriate abstention..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-08-29
featured: false
gradient: grad-4
---

arXiv:2608.26167v1 Announce Type: new Abstract: Hallucination and abstention benchmarks rarely establish that a model could not have known the correct answer, making it difficult to distinguish appropriate abstention from an unsupported prediction. Seven large language models were evaluated on the TAME Pain speech corpus. Participants read phonetically balanced Harvard Sentences while one hand was immersed in cold or warm water and reported pain only during periodic pain statements. This protocol generated 5,750 no signal Harvard Sentence utterances whose transcripts contained no lexical pain information and 1,294 signal pain statement utterances in which the pain rating was explicitly spoken. In the no signal arm, pain was recoverable from acoustic features (AUC 0.622, 95% CI 0.553 to 0.662), whereas transcript based prediction was near chance (AUC 0.489, 95% CI 0.418 to 0.504). Because automatic speech recognition removes the acoustic pain cues, any pain score inferred solely from the transcript is unsupported by the available evidence. Under cooperative prompting, six models abstained on nearly all no signal transcripts, correctly extracted spoken pain ratings in the positive control task with accuracies ranging from 0.939 to 1.00, and maintained an expected calibration error of at most 0.100. Under authority framed prompts, abstention became prompt dependent, with the same model ranging from 0.18 to 1.00 across equivalent prompt phrasings. Most models produced low confidence estimates when forced to answer, whereas Gemini 2.5 Flash and Llama 3.1 8B consistently generated confident pain scores with confident fabrication rates of 0.53 and 0.76, compared with at most 0.15 for all other models. No significant demographic effects were observed in forced responses, with a

---

*Source: [arXiv](https://arxiv.org/abs/2608.26167)*
