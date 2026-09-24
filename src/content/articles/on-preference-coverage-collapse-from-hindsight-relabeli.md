---
title: "On Preference Coverage Collapse from Hindsight Relabeling in Multi-Objective Reinforcement Learning"
dek: "arXiv:2609.26918v1 Announce Type: new Abstract: Hindsight relabeling which retroactively replacing a transition's goal with the outcome the agent actually achieved is an effective tool for improving sample-efficiency in..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-09-24
featured: false
gradient: grad-4
---

arXiv:2609.26918v1 Announce Type: new Abstract: Hindsight relabeling which retroactively replacing a transition's goal with the outcome the agent actually achieved is an effective tool for improving sample-efficiency in Reinforcement Learning (RL). A natural extension to preference-conditioned multi-objective RL (MORL) relabels transitions with the preference direction the agent achieved rather than the one asked for. We show that this extension is frequently harmful: across four preference-conditioned off-policy algorithms spanning two critic backbones and two preference-sampling schemes on the continuous-control MO-Gymnasium suite, it degrades 19 of 36 algorithm-environment settings by as much as four standard deviations, improves only one, and leaves the rest unaffected. The harm is not a symptom of noisy relabels; denoising the target recovers almost nothing, and neither prioritized sampling nor any buffer-structural choice reproduces it. Instead, repeated relabeling collapses the critic's coverage onto whatever narrow region of the preference space the agent happened to visit. We name this failure mode \emph{Preference Coverage Collapse}, and quantify it with abandoned preference mass (APM), a value-aware statistic that tracks the harm ($\rho = -0.73$) where a purely structural coverage count does not. We then introduce \texttt{her\_mix}, a single-parameter convex combination pulling the achieved direction back towards the requested preference. At one fixed value across every algorithm and environment, it returns 16 of the 19 harmed settings to baseline, preserves and even improves the one setting in which relabeling helps, and cuts abandoned preference mass from $69\%$ to $6\%$. Protecting coverage over the preference simplex, not filtering noisy relabels, is what

---

*Source: [arXiv](https://arxiv.org/abs/2609.26918)*
