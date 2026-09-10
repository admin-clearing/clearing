---
title: "When and What to Teach: Budget-Aware Online Adaptation for Web Agents"
dek: "arXiv:2609.05513v1 Announce Type: new Abstract: Web agents have achieved significant success in automating complex internet tasks but deploying them in real-world environments requires continuous online adaptation...."
domain: research
relevance: 4
author: "arXiv"
readTime: 1
date: 2026-09-10
featured: false
gradient: grad-4
---

arXiv:2609.05513v1 Announce Type: new Abstract: Web agents have achieved significant success in automating complex internet tasks but deploying them in real-world environments requires continuous online adaptation. Given that deploying powerful proprietary models remains commercially cost-prohibitive, practitioners must rely on lightweight local models that evolve post-deployment via online teaching from a stronger teacher. However, standard interactive feedback imposes prohibitive costs. We show that conventional trajectory-level preference optimization wastes budget on both unresolvable episodes and redundant execution turns. To resolve these inefficiencies, we propose \textbf{Score-Guided Online Teaching with Budgeted Trajectory Trimming}, a budget-aware framework that systematically orchestrates \textbf{when} and \textbf{what} to teach. Specifically, our framework integrates a solvability-aware teacher gate to dictate \textbf{when} to query the teacher model and a score-guided turn selection mechanism to decide \textbf{what} informative turns to retain. Extensive experiments on MiniWoB and TimeWarp demonstrate that our method achieves comparable first-pass success while reducing teacher calls by 22.6\% and student training compute by 52.1\% on average. Our code is available at https://github.com/zjw131f1fc/budgeted-online-teaching.

---

*Source: [arXiv](https://arxiv.org/abs/2609.05513)*
