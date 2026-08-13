---
title: "MaSRead: Content-Addressed Reading of Replicated Latent Stores"
dek: "arXiv:2608.11218v1 Announce Type: new Abstract: Independent agents that reason in latent space can share computed state as key-value cache fragments rather than text. Merged by a conflict-free replicated data type,..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-13
featured: false
gradient: grad-4
---

arXiv:2608.11218v1 Announce Type: new Abstract: Independent agents that reason in latent space can share computed state as key-value cache fragments rather than text. Merged by a conflict-free replicated data type, these fragments form a store that converges under any delivery order or duplication. Yet a later query, unknown at encode time, cannot reliably read the merged cache: colocated fragments interfere, so colocation is not addressability. MaSRead addresses the read to content. It routes through opaque keyed tag sets derived from fragment words and decodes each selected fragment under a hard attention mask that hides the rest. Under lexical connectivity, a graph walk reaches the fragments required by a multi-hop query. Across chain, pipeline, symmetric, hub, and natural-language stores, MaSRead recovers visited fragments in isolation, remains effective as unrelated fragments accumulate, and transfers to another model family. After routing, materialized decoding depends on fragment length rather than total store size; end-to-end work still includes store-dependent routing and one read per visited fragment. The limits are explicit: lexical routing can miss disconnected evidence, and answer composition remains bounded by the frozen reader. Thus a replicated latent store becomes selectively readable for later queries when the needed fragments connect to the query through content.

---

*Source: [arXiv](https://arxiv.org/abs/2608.11218)*
