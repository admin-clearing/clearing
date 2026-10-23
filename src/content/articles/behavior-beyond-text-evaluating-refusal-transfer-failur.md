---
title: "Behavior Beyond Text: Evaluating Refusal Transfer Failure in LLM Agents"
dek: "arXiv:2610.28982v1 Announce Type: new Abstract: While large language models are increasingly deployed as tool-calling agents, their safety evaluations still focus primarily on their ability to refuse harmful requests in..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-10-23
featured: false
gradient: grad-4
---

arXiv:2610.28982v1 Announce Type: new Abstract: While large language models are increasingly deployed as tool-calling agents, their safety evaluations still focus primarily on their ability to refuse harmful requests in text. We investigate whether the refusal behavior in text transfers to tool use. We construct a benchmark of 2,304 prompts across four domains, consisting of matched triplets that present the same harmful or benign request in text-only, standard tool-enabled, and adversarially framed tool-enabled settings. We then assess tool-call safety using 20 predefined forbidden actions. Testing five models of varying sizes and families, we find that requests refused in text frequently result in unsafe tool calls. Under standard tool-enabled prompting, this divergence occurs for 10-52 percent of harmful requests refused in chat. To mechanistically investigate this gap, we identify a refusal-associated direction in the residual stream of each of the five models. We find that in tool-enabled contexts, the activations along this direction decrease in four of five models. Furthermore, lower activation predicts unsafe tool calls across all five models (AUC 0.76-0.86). However, restoring the signal to the respective text-only value through activation patching only prevents a subset of unsafe calls, primarily by suppressing tool use rather than by producing safer calls. Steering along the refusal direction nearly eliminates unsafe calls only at strengths that also suppress benign tool use or degrade the output quality. Our findings indicate that the identified refusal direction contributes to whether a model acts, but only partially explains the refusal divergence. Therefore, evaluating the safety of tool-calling agents requires directly examining their actions along with 

---

*Source: [arXiv](https://arxiv.org/abs/2610.28982)*
