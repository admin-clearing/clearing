---
title: "An AI Scientist that Doesn't Drift: Taste, Structure, and Falsifiable Findings in a Quadruped Navigation Research Loop"
dek: "arXiv:2608.07542v1 Announce Type: new Abstract: Autonomous research loops driven by large language models can run machine-learning experiments at scale but tend to drift toward local refinements of whichever metric they..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-11
featured: false
gradient: grad-4
---

arXiv:2608.07542v1 Announce Type: new Abstract: Autonomous research loops driven by large language models can run machine-learning experiments at scale but tend to drift toward local refinements of whichever metric they optimise rather than testing the hypotheses that motivate the experiments. We address this structurally and present an AI Scientist for studying generalisation in quadruped robot navigation policies in simulation. Building on the autoresearch paradigm of Karpathy, our loop adds three components: an immutable experiment card that pairs each iteration's prediction with its outcome under a fixed schema, so a falsified hypothesis cannot be retconned; specialised subagents restricted to mechanical roles; and kkanbu, a preference oracle that holds the user's research taste as a typed knowledge graph and is the only component permitted to make subjective judgements. To isolate the oracle we run the identical loop twice across eleven research streams, with and without kkanbu. Neither arm drifts: both falsify roughly three quarters of their own hypotheses, and the best trained policy comes from the oracle-less arm. What the oracle changes is direction, not score: it alone explores test-time adaptation, it authored the winning designs where its arm led, and it carried lessons across streams that the other arm repeatedly re-derived. The scaffold keeps the loop honest; kkanbu decides where it looks.

---

*Source: [arXiv](https://arxiv.org/abs/2608.07542)*
