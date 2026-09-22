---
title: "GRRR: The Geometry of Reshaping, Rotation, and Routing in Decoder LLM post-training"
dek: "arXiv:2609.22146v1 Announce Type: new Abstract: We study how post-training changes the weights of Large Language Models (LLMs) relative to their pretrained weights. Across 12 post-training chains with supervised..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-22
featured: false
gradient: grad-4
---

arXiv:2609.22146v1 Announce Type: new Abstract: We study how post-training changes the weights of Large Language Models (LLMs) relative to their pretrained weights. Across 12 post-training chains with supervised fine-tuning (SFT) and reinforcement learning (RL), we express each weight update in the pretrained matrix's singular value decomposition (SVD) frame. This decomposition separates the changes of three geometrically distinct components: diagonal values, which reshapes singular values; off-diagonal values, which rotates the coupling between pretrained input and output directions; and null-space values, which routes outside the matrix's original nonzero SVD core. On a math evaluation suite, we find that removing the diagonal component usually preserves most of the gains from post-training. These results suggest that post-training gains are carried primarily by reconfiguring and extending pretrained pathways rather than by substantially changing singular values of pre-trained models.

---

*Source: [arXiv](https://arxiv.org/abs/2609.22146)*
