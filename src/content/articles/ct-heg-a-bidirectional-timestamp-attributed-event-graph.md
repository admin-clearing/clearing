---
title: "CT-HEG: A Bidirectional, Timestamp-Attributed Event Graph for ICU In-Hospital Mortality Prediction - An Architectural Ab"
dek: "arXiv:2608.02663v1 Announce Type: new Abstract: Accurate ICU mortality prediction requires modeling irregular clinical observations across heterogeneous entity types. Existing sequence models handle irregular sampling..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-05
featured: false
gradient: grad-4
---

arXiv:2608.02663v1 Announce Type: new Abstract: Accurate ICU mortality prediction requires modeling irregular clinical observations across heterogeneous entity types. Existing sequence models handle irregular sampling but ignore typed relational structure; existing graph models assume fixed-interval inputs. We introduce the Continuous-Time Heterogeneous EHR Graph (CT-HEG) schema and evaluate which architectural choices drive predictive performance. CT-HEG encodes each ICU stay as a typed, timestamped graph with three node types (visit, vital, lab_event) and 2D edge attributes (t_hours/48, value_norm) encoding timing and value without imputation. We instantiate CT-HEG as CHIRP-Net, a four-layer heterogeneous GATv2Conv network, evaluated on MIMIC-IV v3.1 (31,142 ICU stays, LOS>=48h, 13.4% mortality) with five seeds and bootstrapped confidence intervals, against logistic regression, mTAND, a Transformer, and GRU-D, plus an ablation study. CHIRP-Net achieved 5-seed mean AUROC 0.8449+/-0.0071 (AUPRC 0.4958+/-0.0209); the ensemble achieved AUROC 0.8618 (95% CI: 0.8485-0.8745). Removing reverse edges disconnected observation nodes from the visit readout, cutting AUROC by 0.1968+/-0.0073. Time-attentive edge features contributed 0.0247+/-0.0093 AUROC. Collapsing heterogeneous edge types into one relation (7x fewer parameters) outperformed the full model on all seeds. Post-calibration ECE was 0.0307. Temporal and demographic subgroup analyses were explored but not reported here, pending follow-up work. Bidirectional connectivity was necessary for the model to use its inputs at all, and CT-HEG was reasonably well calibrated after validation-fitted temperature scaling. These results support CT-HEG for irregular EHR data, while external validation, a pre-specified temporal evaluati

---

*Source: [arXiv](https://arxiv.org/abs/2608.02663)*
