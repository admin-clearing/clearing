---
title: "Spatial Memory Agent: Experience-Grounded Procedure Memory for Spatial Intelligence"
dek: "arXiv:2608.12743v1 Announce Type: new Abstract: Spatial intelligence is becoming a foundation for embodied agents, robotic planning, and multimodal assistants. To improve the spatial reasoning ability of VLM agents,..."
domain: research
relevance: 5
author: "arXiv"
readTime: 2
date: 2026-08-15
featured: false
gradient: grad-4
---

arXiv:2608.12743v1 Announce Type: new Abstract: Spatial intelligence is becoming a foundation for embodied agents, robotic planning, and multimodal assistants. To improve the spatial reasoning ability of VLM agents, existing work has mainly followed two lines. One line uses post-training methods, such as supervised fine-tuning and reinforcement learning. Another line adopts an agentic paradigm in which the model calls external spatial tools, such as depth estimation and 3D reconstruction tools, to gather intermediate spatial evidence. We study a complementary and underexplored route: Can a frozen VLM agent improve its spatial reasoning through \textbf{parameter-update-free self-evolution}, without depending on external expert spatial tools at inference time? We present \textbf{Spatial Memory Agent (SMA)}, an \textbf{experience-grounded runtime framework} that converts verified spatial experience into reusable transferable lessons. In a verifiable spatial environment, SMA queries the frozen VLM, obtains a predicted answer and reward, and uses \textbf{verifier-guided reflection} to distill compact transferable lessons from spatial experience. SMA further assigns each lesson a \textbf{Transfer Reliability Score (TRS)}, which is initialized uniformly and calibrated from later retrieval outcomes as visit evidence of future transfer reliability. During \textbf{read-only deployment}, SMA retrieves lessons by semantic filter and similarity-TRS combined ranking, allowing the retrieved memory to guide frozen model inference. Across five representative spatial benchmarks and four base VLMs, SMA achieves the highest macro average in every base-model block and the best accuracy among the evaluated methods in most of the 20 evaluations, establishing a practical parameter-update-free 

---

*Source: [arXiv](https://arxiv.org/abs/2608.12743)*
