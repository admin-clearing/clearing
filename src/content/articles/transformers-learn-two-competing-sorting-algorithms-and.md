---
title: "Transformers Learn Two Competing Sorting Algorithms, and Only One Length-Generalizes"
dek: "arXiv:2610.26974v1 Announce Type: new Abstract: We show that two-layer transformers trained to near-zero loss on a sorting task converge to one of two mechanistically distinct solution classes depending on their..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-21
featured: false
gradient: grad-4
---

arXiv:2610.26974v1 Announce Type: new Abstract: We show that two-layer transformers trained to near-zero loss on a sorting task converge to one of two mechanistically distinct solution classes depending on their initialization. One solution class consists of solutions that do not use the second attention layer to sort, but also fail to length-generalize. The other, which uses both attention layers, length-generalizes perfectly, despite only being trained to sort sequences of a fixed length. By carefully choosing the weight initialization, we demonstrate that we can steer the model toward learning one solution or the other. We identify input types that are rare at the training length but increasingly common at longer sequence lengths as a source of this disparity in length-generalization, and find that layer-wise specialization of the second class of solutions allows them to handle these rare sequences more accurately. In the second class, we discover a mechanism by which the second layer attention can use the contextual information gathered by the first layer attention to reduce its search space. On the related task of finding the minimum of a sequence, we find a similar two solution-type phenomenon, but with the opposite generalization pattern, where a different form of layer-wise specialization causes the two-layer solution to length-generalize worse than the single-attention solution.

---

*Source: [arXiv](https://arxiv.org/abs/2610.26974)*
