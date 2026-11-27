---
title: "The Platonic Representation Hypothesis in Jacobian-Space: Language and Vision Models Agree Approximately Up to a Rotatio"
dek: "arXiv:2611.33304v1 Announce Type: new Abstract: The Platonic Representation Hypothesis (PRH) posits that AI models converge toward a shared representation of the world, even when trained on different data modalities...."
domain: research
relevance: 4
author: "arXiv"
readTime: 2
date: 2026-11-27
featured: false
gradient: grad-4
---

arXiv:2611.33304v1 Announce Type: new Abstract: The Platonic Representation Hypothesis (PRH) posits that AI models converge toward a shared representation of the world, even when trained on different data modalities. Previous work has found evidence for the PRH in the activations of vision and language models. In this work, we ask whether vision and language models also converge in how they act on these representations: precisely, in how these internal representations affect the models' output. At a chosen layer of a transformer, the Jacobian lens gives every word in the vocabulary (or class in an image classifier) a vector in the hidden state: the vector that most increases the model's tendency to generate that word, at that position or later, or to predict that class. Collectively, these vectors make up what is referred to as the model's J-space. We find evidence of the PRH in J-space across vision and language models, and furthermore, we find that J-spaces mostly converge up to a rotation. That is, a single rotation, fitted on a subset of words, approximately maps one model's J-space onto another's, and so applies to words and classes it was not fitted on. A word's vector, rotated from a text-only language model's J-space into the visual patch tokens of a vision-language model, changes the object the vision-language model says is in the image (and only in the image region where it is added). Rotated into an image generator's text conditioning, a word's vector changes the object in the generated image. Rotated into an ImageNet classifier (trained without text), it raises that object's class score above almost all others, and vice versa. This suggests that models converge not only in how they represent the world, but also in how they act on it.

---

*Source: [arXiv](https://arxiv.org/abs/2611.33304)*
