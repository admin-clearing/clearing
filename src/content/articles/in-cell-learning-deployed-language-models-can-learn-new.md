---
title: "In-Cell Learning: Deployed Language Models Can Learn New Knowledge Without Changing a Single Stored Bit"
dek: "arXiv:2608.20873v2 Announce Type: new Abstract: A deployed language model is a file that many things depend on - a benchmark report, a certification, a fleet of devices - and every way of teaching it something new..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-25
featured: false
gradient: grad-4
---

arXiv:2608.20873v2 Announce Type: new Abstract: A deployed language model is a file that many things depend on - a benchmark report, a certification, a fleet of devices - and every way of teaching it something new produces a different file. We show that this is not necessary. A 4-bit release stores each weight as an integer code and a shared scale, and leaves between the stored values an interval the quantizer discards; we call in-cell learning the paradigm in which new knowledge is written only into that interval, so that re-quantizing the served weights reproduces the released codes and scales exactly. The guarantee is checked in the integer domain on every weight, the update is a separate file (a fill) that can be withdrawn by subtraction, and drift is bounded by radii the grid fixes before training. CellFill realizes the paradigm by construction: a low-rank position inside the cell, trained on the vendor's own 4-bit release. On those releases - NF4, QAT and GPTQ-style grids, Qwen3 and Gemma, 1.7B to 31B - CellFill writes 83 to 97 percent of a corpus of real facts the models verifiably did not know, with zero violations over up to 2.4 x 10^10 constrained weights. We demonstrate the knowledge is usable: injected drugs compose with injected ingredients at the model's own two-hop ceiling, and a post-cutoff software library is used in code at 2.6 times chance. Against retrieval on PopQA's long tail, the fill answers 82 to 90 percent of questions the released model could not, at 75 tokens per question against 90 to 1008. Several writers can share one release, sequential updates consume a constant fraction of the remaining room, and the archived result files behind every table are at https://github.com/sumsliu/cellfill.

---

*Source: [arXiv](https://arxiv.org/abs/2608.20873)*
