---
title: "Uncertainty-Aware RL-Controlled Adaptive 3D Mapping"
dek: "arXiv:2610.00188v1 Announce Type: new Abstract: Voxel-based volumetric mapping is fundamental to 3D reconstruction, yet fixed-resolution grids remain inherently inefficient - wasting memory in uniform regions and losing..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-10-03
featured: false
gradient: grad-4
---

arXiv:2610.00188v1 Announce Type: new Abstract: Voxel-based volumetric mapping is fundamental to 3D reconstruction, yet fixed-resolution grids remain inherently inefficient - wasting memory in uniform regions and losing detail in complex ones. Existing adaptive methods, such as MAP-ADAPT, partially address this by varying resolution based on geometry and user-defined semantic class lists, but these heuristics require expert tuning, lack generalization to unseen objects, and provide no explicit mechanism to control memory usage. We propose an adaptive framework that refines voxels based on semantic entropy, which captures label uncertainty, together with geometric curvature and texture richness as scene complexity cues, yielding principled resolution allocation without reliance on semantic taxonomies. To make the accuracy-memory trade-off explicit and user-controlled, we further introduce a reinforcement learning agent that learns voxel subdivision policies under a user-specified target memory budget, replacing hand-tuned thresholds with a single intuitive control parameter. The resulting multi-resolution TSDF achieves higher geometric accuracy, better semantic consistency, and improved memory-accuracy trade-offs compared to MAP-ADAPT and fixed-resolution baselines on both synthetic and real-world datasets. Our code and models are available at https://github.com/alpayozkan/UnRL.

---

*Source: [arXiv](https://arxiv.org/abs/2610.00188)*
