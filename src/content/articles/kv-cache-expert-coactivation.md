---
title: "KV cache eviction via expert co-activation: early results from three labs"
dek: "Using which experts fire together as a guide for which cached representations to drop. The memory savings are real; the accuracy story is more nuanced."
domain: research
relevance: 4
author: Clearing Desk
readTime: 6
date: 2026-07-09
featured: false
gradient: grad-4
---

In long-context inference, the KV cache — the stored key-value representations from previous tokens — grows linearly with sequence length and becomes the dominant memory bottleneck before the parameter count does. At 1M token context, the KV cache for a 30B MoE model can exceed 40GB. Managing what to keep is no longer optional.

Standard eviction strategies (recency-based, attention-weight-based) have well-known failure modes: recency discards important early context; attention-weight-based eviction requires expensive score recomputation. Three labs — two academic, one from a frontier provider — are now reporting results on a different approach: **expert co-activation-guided eviction**.

## The co-activation insight

In MoE models, expert activation patterns are not random. Certain pairs and groups of experts consistently co-activate when processing semantically similar inputs. A token from a financial document reliably fires Expert 3 and Expert 11 together; a code token fires Expert 7 and Expert 15; a common function word fires Expert 1 almost exclusively with high confidence.

The hypothesis: tokens with **consistent, low-diversity co-activation patterns** are "computationally typical" — they've activated a familiar, stable expert subset that the model has thoroughly learned. Their KV representations carry less unique information. Tokens with **diverse or inconsistent co-activation** are processing something novel or complex; their cached representations are more critical to preserve.

**Eviction policy:** when cache capacity is exceeded, score tokens by co-activation diversity. Evict high-diversity tokens' KV entries last; evict low-diversity (typical) tokens' entries first.

## Results

Across three long-context benchmarks (SCROLLS, LongBench, and a proprietary RAG eval), the co-activation eviction policy achieved:

- **23–31% reduction in peak KV cache size** at matched accuracy vs. the baseline recency policy
- **Largest gains on retrieval tasks** where early, typical tokens (stopwords, common phrases) dominate
- **Smallest gains on summarisation** where the relative importance of early vs. late context is more uniform

The accuracy drop at 50% cache compression is ~0.8–1.2%, compared to ~2.1–3.4% for recency-based eviction at the same compression ratio.

## The practical gap

The mechanism requires computing co-activation diversity scores at eviction time — O(n) in the number of cached tokens, adding ~4% to inference latency in the tested configurations. Whether this trades favorably against the reduced memory bandwidth depends heavily on the hardware and batch size.

The more important limitation: co-activation patterns are model-specific and need to be profiled on representative data before deployment. For a general-purpose inference endpoint serving mixed workloads, this profiling is either expensive or approximate.

For narrow-domain deployments — a legal document assistant, a codebase search tool — the approach is more promising. The profile is stable, calibration data is abundant, and the memory savings compound over long sessions.

## Open code

One of the academic groups has released a reference implementation compatible with Hugging Face's `transformers` library. The core idea is clean enough that it may land in mainstream inference engines within the next two framework release cycles — worth tracking if KV memory is a constraint in your deployment.
