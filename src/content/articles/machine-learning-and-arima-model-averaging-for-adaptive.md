---
title: "Machine Learning and ARIMA Model Averaging for Adaptive Public Health Forecasting: Comparative Evaluation and an Ontario"
dek: "arXiv:2608.20406v1 Announce Type: new Abstract: Public health forecasts must respond to abrupt changes in surveillance data without over-extrapolating noise, reporting artifacts, or temporary trends. We evaluated..."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-08-24
featured: false
gradient: grad-4
---

arXiv:2608.20406v1 Announce Type: new Abstract: Public health forecasts must respond to abrupt changes in surveillance data without over-extrapolating noise, reporting artifacts, or temporary trends. We evaluated autoregressive integrated moving average (ARIMA), random forest, and extreme gradient boosting (XGBoost) models using 190 weekly observations of publicly available Ontario COVID-19 case counts from January 2020 to October 2023. Rolling-origin time-series cross-validation preserved temporal order during model tuning and evaluation. Performance was assessed across three operating dimensions: responsiveness following selected turning points, forecast horizons of one to six weeks, and the amount of historical training data. We also developed Machine Learning and ARIMA Model Averaging (MLAMA), a non-negative performance-weighted ensemble with weights that vary by forecast horizon and responsiveness setting. Retrospective comparisons showed that ARIMA adapted rapidly after turning points but its normalized error increased at longer horizons. Random forest and XGBoost were less responsive initially but maintained more stable normalized error over longer horizons. For two-week forecasts at the end of the study period, training on the most recent data outperformed using longer historical periods, particularly for XGBoost. MLAMA achieved the lowest normalized mean absolute percentage error across most forecast horizons and ranked among the best-performing methods across responsiveness settings. These findings support selecting forecasting models according to operating conditions rather than relying on a single universally preferred approach. MLAMA provides a practical framework for combining complementary statistical and machine-learning forecasts. The accompanying Pytho

---

*Source: [arXiv](https://arxiv.org/abs/2608.20406)*
