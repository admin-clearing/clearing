---
title: "From Connectivity to Rewards: Dense Reward Learning with Directed State Graphs"
dek: "arXiv:2609.10781v1 Announce Type: new Abstract: The integration of graphs with Goal-Conditioned Hierarchical Reinforcement Learning (GCHRL) has received increasing attention, as graphs naturally encode task hierarchies..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-09-11
featured: false
gradient: grad-4
---

arXiv:2609.10781v1 Announce Type: new Abstract: The integration of graphs with Goal-Conditioned Hierarchical Reinforcement Learning (GCHRL) has received increasing attention, as graphs naturally encode task hierarchies for effective subgoal sampling. However, existing methods often overlook intrinsic connectivity information, failing to fully leverage the underlying topology for efficient learning. Most graph-based GCHRL methods use the graph as a stochastic sampling tool rather than as an environmental model that encodes connectivity and state-accessibility information. This limitation is particularly acute in quasimetric environments, where the inherent asymmetry of state transitions poses a fundamental challenge to stable policy learning and robust path planning. In this paper, we address these problems by introducing a state connectivity model designed to predict pairwise state connectivity strength in asymmetric environments. We transform these connectivity strengths into scalar auxiliary dense rewards, providing continuous guidance across multiple hierarchical levels. We demonstrate that our proposed framework, Graph-Guided Quasimetric Dense Reward (G2QDR), can theoretically be integrated into any existing GCHRL architecture, and the state connectivity model is efficiently implemented via a neural network trained on a directed state graph generated during exploration. Empirical results across a wide range of sparse reward environments indicate that, in general, G2QDR can enhance the performance of baseline GCHRL approaches with acceptable computational overhead.

---

*Source: [arXiv](https://arxiv.org/abs/2609.10781)*
