---
title: "Composable Trust Infrastructure for Manufacturing Knowledge Graphs: Cross-System Provenance, Temporal Reasoning, and Dec"
dek: "arXiv:2608.21418v1 Announce Type: new Abstract: Manufacturing knowledge graphs that integrate data from heterogeneous industrial systems face a trust deficit: consumers cannot determine whether queried data is valid,..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-25
featured: false
gradient: grad-4
---

arXiv:2608.21418v1 Announce Type: new Abstract: Manufacturing knowledge graphs that integrate data from heterogeneous industrial systems face a trust deficit: consumers cannot determine whether queried data is valid, whether it was valid when a decision was made, where it originated, or how it was acted upon. We argue that four trust capabilities -- SHACL validation, PROV-O provenance, domain-aware bi-temporal versioning, and graph-native decision objects -- compose through shared correlation identifiers to produce emergent trust properties that no single capability delivers alone. We present a composable trust infrastructure that integrates these four capabilities into a unified RDF architecture. Capabilities compose through shared entity URIs, ingestion activity identifiers, and temporal correlation keys, enabling compound queries spanning all four dimensions. An experimental ablation confirms that removing any single capability causes exactly three of six composition queries to fail, demonstrating that all four are equally load-bearing. Analysis of higher-order compositions reveals four emergent three-way properties and one irreducible four-way property (full-chain auditability, 31ms execution). The infrastructure is validated on a testbed integrating eleven industrial sources -- OPC UA, TIA Portal, eClass, AAS, ISA-95, ISA-18.2, SAP S/4HANA, Teamcenter, Opcenter EX, Insights Hub, and SCM -- under an 89-class ISA-95-aligned ontology. The unified graph contains 8,743 triples across five named graphs, stitched by 81 owl:sameAs identity edges. Evaluation uses simulated but structurally realistic data from purpose-built emulators; data structures and cross-system linkage patterns are representative of real industrial installations.

---

*Source: [arXiv](https://arxiv.org/abs/2608.21418)*
