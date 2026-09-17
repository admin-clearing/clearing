---
title: "Imitation Learning for Autonomous Driving in CARLA"
dek: "arXiv:2609.17757v1 Announce Type: new Abstract: Behavioral cloning trains a policy offline on expert demonstrations, but deployment is closed loop: each action affects the observations the policy receives next. We study..."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-17
featured: false
gradient: grad-4
---

arXiv:2609.17757v1 Announce Type: new Abstract: Behavioral cloning trains a policy offline on expert demonstrations, but deployment is closed loop: each action affects the observations the policy receives next. We study how much closed-loop driving competence a compact multimodal policy can acquire from offline demonstrations in the CARLA simulator. The policy uses five-frame histories of RGB images, LiDAR, vehicle telemetry, and lane waypoints to predict throttle, brake, and steering at 20 Hz. Demonstrations were collected in three stages, ending with a systematic route-generation procedure that enumerates spawn points and feasible maneuvers and verifies completed autopilot routes. The released 1.36 million parameter policy was trained on 236,882 windows, representing about 3.3 hours of driving from 448 captures. The resulting policy drives autonomously for hours on training and held-out routes. In our runs, it did so without collisions and also transferred qualitatively to an unseen CARLA town with different road geometry. We also observed recovery from large trajectory deviations, although we do not claim systematic recovery without controlled evaluation. We report offline metrics and distinguish measured results from qualitative closed-loop observations. We release the code, trained checkpoint, ONNX model, data sample, and an evidence audit for the reported claims.

---

*Source: [arXiv](https://arxiv.org/abs/2609.17757)*
