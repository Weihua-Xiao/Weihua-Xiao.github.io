---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

LLM-aided EDA for RTL Synthesis, Verification, and Security
======

My current research develops large-language-model-based methods for hardware design and analysis. I study how reasoning, retrieval, fine-tuning, formal verification, and iterative EDA-tool feedback can improve RTL generation, assertion generation, design-space exploration, and hardware security.

Representative projects include:

- **VeriThoughts** — reasoning models and a synthetic data pipeline for verified Verilog generation (NeurIPS 2025).
- **Hybrid-NL2SVA** — a RAG and fine-tuning framework for generating SystemVerilog assertions from natural-language specifications (MLCAD 2025). [[Code]](https://github.com/FCHXWH823/RAG-aided-Assertion-Generation)
- **TrojanLoC** — an LLM-based framework for RTL Trojan detection, classification, and line-level localization (ICCAD 2026).
- **VeriDispatcher** — difficulty-aware multi-model dispatching for RTL generation.

Approximate Computing for Energy-Efficient AI Hardware
======

My Ph.D. research explored controlled arithmetic approximation to reduce hardware energy and area while preserving application-level accuracy. This work includes ILP-based approximate multiplier synthesis and Ising-model-based approximate logic decomposition.

- Approximate multiplier synthesis achieved an average **24.4% reduction in power-delay product** and **8.4% reduction in mean error distance** over prior work. [[Code]](https://github.com/FCHXWH/ApproximateMult)
- Ising-model-based approximate decomposition achieved an **11% reduction in mean error distance** and a **1.16× speedup** over the state of the art (DAC 2024).

Logic and Transistor-Level Synthesis
======

I develop exact and optimization-based methods for logic networks, arithmetic circuits, and standard cells.

- **MiniTNtk** introduced the first SAT formulation of transistor-network synthesis and reduced transistor count by up to **9.39%**. [[Code]](https://github.com/FCHXWH/MiniTNtk-An-Exact-Synthesis-based-Method-for-Minimizing-Transistor-Network)
- **GOMIL** used global ILP-based multiplier optimization to reduce power-delay product by up to **71%** over industry designs. [[Code]](https://github.com/SJTUECTL/GOMIL)
- **ASPPLN** developed a linear-complexity symbolic probability propagation method with a **29× speedup**.
