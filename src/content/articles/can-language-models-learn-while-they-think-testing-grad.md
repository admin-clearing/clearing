---
title: "Can Language Models Learn While They Think? Testing Gradient Adaptation Across Architectures"
dek: "arXiv:2610.33025v1 Announce Type: new Abstract: Letting a language model take gradient steps on the text it is reading, known as dynamic evaluation, lowers its loss on the rest of the document. Its behaviour on hybrid..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-28
featured: false
gradient: grad-4
---

arXiv:2610.33025v1 Announce Type: new Abstract: Letting a language model take gradient steps on the text it is reading, known as dynamic evaluation, lowers its loss on the rest of the document. Its behaviour on hybrid linear-attention architectures, on diffusion language models, and on standard long-context benchmarks has not been measured. We measure it. With one SGD step per 128-token chunk on the MLP output projections of the last quarter of blocks, no training, and a 2k-token window, softmax-attention models (Qwen3-1.7B, Qwen3-4B, Gemma-4-E4B) lose 5-8% of their next-token loss over a document and outperform the same frozen model given the full 32k-token context. Hybrid Gated-DeltaNet models (Qwen3.5-4B, Qwen3.8-27B) gain under 1% at every learning rate: the linear-attention blocks already perform the adaptation. The mechanism transfers to masked-diffusion models with a larger effect, 8% on Nemotron-Diffusion-8B and 17-20% on DiffusionGemma-26B, once the rate is lowered and updates are clipped. Across RULER, BABILong, LongBench-v2, SCOTUS, HotpotQA, MuSiQue, ContractNLI and citation completion, at 100 or more items on two model sizes, weights updated on the full document recover none of the accuracy lost to context truncation: the adaptation is style and vocabulary, not retrieval. Writing facts with the next-token loss stores the prompt format rather than the fact (30% recall under chat prompting against 80% in context) and costs 36-38 GSM8K points at every dose. Writing a conclusion as behaviour instead, by distilling the model's own conclusion-conditioned judgments into a low-rank adapter, reaches the in-context ceiling (0.83 and 0.88 against 0.84 and 0.88 on 100 games) with GSM8K unchanged, and the conclusion can come from an inquiry loop that found it by asking 

---

*Source: [arXiv](https://arxiv.org/abs/2610.33025)*
