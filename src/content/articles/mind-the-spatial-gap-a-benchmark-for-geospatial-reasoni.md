---
title: "Mind the Spatial Gap: A Benchmark for Geospatial Reasoning and Constrained Spatial Editing"
dek: "arXiv:2610.12881v1 Announce Type: new Abstract: Understanding and manipulating spatial relations is fundamental to AI systems that reason about physical environments and construct grounded world models. However,..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-13
featured: false
gradient: grad-4
---

arXiv:2610.12881v1 Announce Type: new Abstract: Understanding and manipulating spatial relations is fundamental to AI systems that reason about physical environments and construct grounded world models. However, existing evaluations of multimodal large language models (MLLMs) for spatial reasoning rely predominantly on static question-answering (QA) over small-scale or synthetic scenes, rarely probing whether models can modify spatial configurations while satisfying explicit geometric constraints. We introduce GeoSpatialBench, a benchmark designed to evaluate an escalating progression of spatial cognition, ranging from spatial relation understanding and geometric reasoning to constrained spatial editing. Grounded in real-world urban data across six geographically diverse cities, GeoSpatialBench evaluates a comprehensive taxonomy of 28 topological, directional, metric, and ordering relations across structured GeoJSON and map image modalities, with ground-truth references and constraints verified via GIS operations. Our empirical evaluation across frontier MLLMs uncovers a stark spatial gap: structured GeoJSON consistently outperforms map images, with multimodal combinations offering no reliable gain over GeoJSON alone, and while models show reasonable competence on qualitative topological and ordering, performance drops on quantitative metric relations. Crucially, editing performance on ordering relations declines relative to QA, and most failed edits violate at least one specified spatial constraint. These results highlight a gap between passively recognizing spatial relations and actively manipulating geometric configurations. GeoSpatialBench provides an open, rigorous diagnostic testbed to benchmark these spatial limitations, laying essential empirical groundwork for 

---

*Source: [arXiv](https://arxiv.org/abs/2610.12881)*
