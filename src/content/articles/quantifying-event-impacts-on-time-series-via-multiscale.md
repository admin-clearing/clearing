---
title: "Quantifying Event Impacts on Time Series via Multiscale Contrastive Learning"
dek: "arXiv:2608.19447v1 Announce Type: new Abstract: Shocks that spread through the web, such as cybersecurity breach disclosures, can abruptly disrupt financial time series and cause substantial abnormal losses. While these..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-21
featured: false
gradient: grad-4
---

arXiv:2608.19447v1 Announce Type: new Abstract: Shocks that spread through the web, such as cybersecurity breach disclosures, can abruptly disrupt financial time series and cause substantial abnormal losses. While these events are disclosed as discrete records through news reports, regulatory filings, or public databases, their consequences unfold through continuous market dynamics. This creates an event-conditioned impact prediction problem: given pre-event market history and limited event metadata, the goal is to estimate short-term post-disclosure abnormal loss rather than reconstruct the full post-event trajectory. However, most time-series forecasting models focus on endogenous regularities such as trend, seasonality, and autocorrelation, and thus struggle with rare and heterogeneous external events. The challenge is further amplified by sparse high-impact events and background market noise. We introduce EventTime, a multi-resolution framework that combines long-horizon market context, short-horizon pre-event dynamics, and event metadata. It incorporates an event fusion module that couples temporal representations with event attributes to identify relevant recent market patterns. To mitigate sparse supervision, EventTime further introduces a dynamic contrastive objective that constructs event- and time-series-aware positive and negative pairs during training. We also construct SECURE, a real-world dataset aligning cybersecurity incidents with stock-market time series and structured and LLM-derived semantic features. Experiments show that EventTime consistently outperforms state-of-the-art time-series and event-aware baselines in estimating post-event financial losses. Further analyses demonstrate more event-sensitive representations, greater robustness to incomplet

---

*Source: [arXiv](https://arxiv.org/abs/2608.19447)*
