---
title: "Beyond Low-Pass Dynamics: Frequency-Selective Spiking Reservoirs with Resonant Neurons"
dek: "arXiv:2610.37906v1 Announce Type: new Abstract: Spiking reservoir computing combines the training efficiency of fixed recurrent reservoirs with the energy efficiency of event-driven inference, where computation is..."
domain: research
relevance: 5
author: "arXiv"
readTime: 1
date: 2026-10-31
featured: false
gradient: grad-4
---

arXiv:2610.37906v1 Announce Type: new Abstract: Spiking reservoir computing combines the training efficiency of fixed recurrent reservoirs with the energy efficiency of event-driven inference, where computation is triggered by sparse spikes rather than executed densely at every timestep. However, existing spiking reservoirs almost exclusively rely on Leaky Integrate-and-Fire (LIF) neurons, whose low-pass dynamics limit their ability to distinguish information encoded at different temporal frequencies. We introduce HRF-Res, a liquid state machine in which LIF neurons are replaced by a heterogeneous population of Harmonic Resonate-and-Fire (HRF) neurons. These neurons exhibit intrinsic oscillatory dynamics and selectively respond to input frequencies, enabling the reservoir to capture frequency-specific temporal patterns. The result is more discriminative representations and higher classification accuracy than LIF-based reservoirs, achieved without sacrificing the energy efficiency of spiking computation, with up to 19x lower energy consumption than an equivalent non-spiking oscillatory reservoir. Evaluated on ten benchmarks spanning time series, sequential images, audio spike trains, and neuromorphic vision, HRF-Res achieves state-of-the-art accuracy among spiking reservoir methods. These results demonstrate that introducing frequency-selective dynamics into spiking reservoirs improves representational quality and classification performance while preserving their inherent energy efficiency.

---

*Source: [arXiv](https://arxiv.org/abs/2610.37906)*
