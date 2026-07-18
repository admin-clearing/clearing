---
title: "NeuroGRIP: Retrieval-Augmented Graph Refinement for Knowledge-Grounded EEG Seizure Diagnosis"
dek: "arXiv:2607.14314v1 Announce Type: new Abstract: Seizure diagnosis from EEG signals is a critical yet persistently challenging task, due to the complicated neural dynamics and the spurious connections in inter-channel..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-18
featured: false
gradient: grad-4
---

arXiv:2607.14314v1 Announce Type: new Abstract: Seizure diagnosis from EEG signals is a critical yet persistently challenging task, due to the complicated neural dynamics and the spurious connections in inter-channel modeling. While spatial-temporal graph neural networks (STGNNs) have advanced EEG brain network representation learning, the resulting graph structures suffer from low clinical plausibility and limited interpretability due to their purely data-driven nature. To this end, we introduce NeuroGRIP, a retrieval-augmented graph refinement framework that incorporates external medical knowledge to calibrate noisy EEG graphs. We first construct a large-scale, domain-specific knowledge base derived from authoritative clinical guidelines. Leveraging large language models, we extract structured biomedical entities and relations to form a textual knowledge graph (KG), which serves as external knowledge source of clinical priors. Our framework performs alignment-aware query construction by projecting STGNN-generated EEG node embeddings into the semantic space of KG. Semantic queries are then executed via FAISS-based similarity search over knowledge triplets to retrieve relation evidence. Each predicted edge is assigned a confidence score based on retrieved similarity, relation type, and source reliability, enabling us to prune medically implausible edges from the originally predicted graph. Extensive experiments on TUSZ and CHB-MIT demonstrate that NeuroGRIP not only improves seizure detection accuracy but also enhances interpretability by grounding each prediction in clinically validated knowledge. This work provides the first unified framework that tightly couples brain dynamics with external medical expertise via retrieval-augmented reasoning, paving the way for knowl

---

*Source: [arXiv](https://arxiv.org/abs/2607.14314)*
