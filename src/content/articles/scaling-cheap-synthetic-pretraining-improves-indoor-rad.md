---
title: "Scaling Cheap Synthetic Pretraining Improves Indoor Radio-Map Prediction"
dek: "arXiv:2610.19015v1 Announce Type: new Abstract: Real measurements are too limited to train an accurate indoor pathloss predictor that works across a wide range of buildings. Large-scale synthetic pretraining offers a..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-15
featured: false
gradient: grad-4
---

arXiv:2610.19015v1 Announce Type: new Abstract: Real measurements are too limited to train an accurate indoor pathloss predictor that works across a wide range of buildings. Large-scale synthetic pretraining offers a way forward, but real building layouts are also scarce, and accurate ray-tracing simulators are slow, expensive, and often proprietary. We address both problems by introducing a generator that automatically creates diverse indoor layouts and a fast, open-source approximate ray tracer that computes radio maps for them. Using this pipeline, we generate 128M synthetic samples, pretrain ResNet-101 and Swin-T encoder-decoders, and fine-tune them on high-quality benchmark data. Despite simulator mismatch, our ResNet-101 model reduces error by 15% on average relative to the best known methods across five indoor radio-map prediction tasks and improves transfer on a small real-measurement dataset. Both architectures show predictable data-scaling trends: power laws fitted on 2M-16M samples predict the mean normalized downstream RMSE at 32M-128M with 3.33% mean absolute percentage error for ResNet-101 and 7.10% for Swin-T. These results show that pretraining on large amounts of cheap simulated data can improve indoor radio-map prediction, even when real measurements and high-quality simulations are limited.

---

*Source: [arXiv](https://arxiv.org/abs/2610.19015)*
