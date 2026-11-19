---
title: "What Does an Agent Need? Bundle-Aware Agent Resource Composition"
dek: "arXiv:2611.22030v1 Announce Type: new Abstract: An agent resource's value depends on its backbone and companion resources and is known only after execution. Token-based generators remain tied to their training catalog,..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-11-19
featured: false
gradient: grad-4
---

arXiv:2611.22030v1 Announce Type: new Abstract: An agent resource's value depends on its backbone and companion resources and is known only after execution. Token-based generators remain tied to their training catalog, while independent resource scoring misses complementarities and reused bundles target other tasks. We formulate Task-Conditioned Agent Resource Composition (AgentComposition): jointly selecting a backbone model and a tool-skill bundle to maximize end-to-end execution utility. Our Retrieval-Grounded Bundle-Aware Agent Generation retrieves candidate resources and past configurations of similar tasks. A fine-tuned generator reads resource descriptions and recombines candidates through constrained beam search, allowing new resources without retraining. A bundle-aware critic ranks complete configurations using a large language model (LLM) teacher and historically successful configurations as execution proxies, and adapts to execution feedback when available. We evaluate reference recovery, offline execution with judged and native rewards, and online recommendation with real execution, building AgentSelect-Exec with 5,060 executed configurations. Our method recovers the complete reference configuration within ten candidates for 67.73% of AgentSelect queries, nearly twice the strongest baseline, and leads all baselines on SkillsBench. The proxy-trained critic raises the top-ranked agent's execution score from 7.58 to 8.37 out of 10; execution feedback increases it to 8.78, above the strongest baselines. Four target-domain queries suffice to adapt the generator to SkillsBench. Agents recommended online outperform the strongest baselines under both an LLM judge and native verifiers. These results support learning and transferring joint resource composition from ta

---

*Source: [arXiv](https://arxiv.org/abs/2611.22030)*
