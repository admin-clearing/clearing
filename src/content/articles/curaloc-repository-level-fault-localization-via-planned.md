---
title: "CuraLoc: Repository-Level Fault Localization via Planned Code Inspection"
dek: "arXiv:2610.31809v1 Announce Type: new Abstract: A bug report describes what went wrong, but rarely where the code should change. Existing repository-level localization methods often let language models iteratively..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-10-27
featured: false
gradient: grad-4
---

arXiv:2610.31809v1 Announce Type: new Abstract: A bug report describes what went wrong, but rarely where the code should change. Existing repository-level localization methods often let language models iteratively decide what code to inspect next, requiring repeated model calls and substantial token usage. We investigate whether these inspection decisions can instead be planned before source retrieval. In this research, we introduce CuraLoc, which first selects candidate files and represents their symbols using compact behavioral and structural descriptions. In a single planning decision, the model jointly selects starting symbols, chooses code relationships to inspect from each, and forms hypotheses about likely edits. Deterministic retrieval collects the requested source for a final ranking informed by those hypotheses, concentrating model reasoning on choosing and comparing code rather than directing each retrieval step. We demonstrate the efficacy of our proposed approach on the SWE-Bench Lite and Verified datasets. On SWE Bench Verified with GPT-5.2, CuraLoc raises Func@1 from LocAgent's 53.8% to 59.3% while using 90.3% fewer recorded tokens, and also outperforms RepoSearcher (56.2%) and Agentless (39.6%) on Func@1. On SWE-bench Lite, CuraLoc achieves a high 83.8% Func@5 accuracy improving on Agentless by more than 15% in relative accuracy. Additionally, CuraLoc supports different model backbones, with strong localization accuracy demonstrated using both GPT-5.2 and GPT-6 Astra. These results provide evidence that repository-level code inspection can be planned effectively without iterative model-controlled navigation.

---

*Source: [arXiv](https://arxiv.org/abs/2610.31809)*
