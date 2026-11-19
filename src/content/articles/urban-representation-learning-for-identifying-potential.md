---
title: "Urban Representation Learning for Identifying Potential Disparities in Crime Reporting"
dek: "arXiv:2611.21825v1 Announce Type: new Abstract: Open crime data support urban safety analysis but reflect reported incidents rather than the complete distribution of criminal activity, potentially introducing spatial..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-11-18
featured: false
gradient: grad-4
---

arXiv:2611.21825v1 Announce Type: new Abstract: Open crime data support urban safety analysis but reflect reported incidents rather than the complete distribution of criminal activity, potentially introducing spatial distortions in downstream analysis. We propose a self-supervised urban representation learning framework for identifying unusual reporting patterns relative to representation-similar peers using only georeferenced crime records. The method constructs complementary hourly, weekly, and static reporting profiles, learns scale-specific representations under geographic self-supervision, and integrates them into a unified latent space. Neighbor Profile Divergence (NPD) is then used to quantify disagreement between each region's reporting profile and those of its retrieved peers. Experiments on more than 1.8 million crime records from Mexico City, aggregated into 1,058 H3 regions, show that the proposed representation achieves a mean Silhouette score of 0.4052, compared with 0.2863 for Hex2Vec. NPD rankings remain highly stable across neighborhood sizes, with Spearman correlations from 0.9720 to 0.9951, while most high-divergence candidates persist across configurations. The retrieved peers also extend substantially beyond immediate geographic neighborhoods, indicating that the learned representation captures structure beyond local spatial proximity. High-divergence regions exhibit spatially organized patterns and, in several cases, differences in incident volume relative to peer expectations. These results support NPD as an internal auditing and prioritization mechanism for identifying regions that warrant further investigation, rather than as direct evidence of underreporting.

---

*Source: [arXiv](https://arxiv.org/abs/2611.21825)*
