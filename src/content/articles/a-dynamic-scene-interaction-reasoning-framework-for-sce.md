---
title: "A Dynamic Scene Interaction Reasoning Framework for Scene-level Lane-Change Intention and Trajectory Prediction of Multi"
dek: "arXiv:2607.09740v1 Announce Type: new Abstract: Safe motion planning in advanced driver-assistance systems and autonomous vehicles requires an accurate understanding of how the surrounding traffic scene is likely to..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-07-14
featured: false
gradient: grad-4
---

arXiv:2607.09740v1 Announce Type: new Abstract: Safe motion planning in advanced driver-assistance systems and autonomous vehicles requires an accurate understanding of how the surrounding traffic scene is likely to evolve. However, many existing lane-change prediction methods remain centered on a single target vehicle, while multi-agent forecasting approaches often describe scene evolution only through future positions and provide limited explicit information about the maneuver associated with each vehicle. This study proposes a dynamic scene graph attention framework that predicts the lane-change intention and future trajectory of every relevant vehicle within a local traffic scene. The scene is represented as a time-varying interaction graph in which vehicles are modeled as nodes and their spatial and kinematic relationships are encoded through explicit edge features. Temporal graph-attention message passing captures evolving inter-vehicle dependencies and pre-maneuver cues, while an intention-guided decoder links each predicted maneuver to its corresponding future motion. A scene-level consistency objective further encourages compatible multi-vehicle futures. Experiments on the NGSIM I-80, NGSIM US-101, and highD datasets demonstrate consistent improvements over competing baselines. DSiGAT achieves intention prediction accuracies of 90.12% and 90.97% on NGSIM I-80 and US-101, respectively, and reduces trajectory RMSE by up to 52.94% relative to the strongest baseline. It also produces lower inter-agent collision rates and joint displacement errors, indicating more coherent scene-level predictions. Ablation, sensitivity, robustness, and qualitative analyses further validate the contribution of the proposed components and the effectiveness of the scene-focused formula

---

*Source: [arXiv](https://arxiv.org/abs/2607.09740)*
