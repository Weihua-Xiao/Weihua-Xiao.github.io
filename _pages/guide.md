---
layout: archive
title: "GUIDE: GenAI Units In Digital Design Education"
permalink: /guide/
author_profile: true
---

> **GUIDE is an open, modular platform for teaching and advancing GenAI-driven digital design.** It connects generative-AI methods with free electronic design automation tools and open-source hardware benchmarks so that students can generate, analyze, and validate hardware in reproducible end-to-end workflows.

GUIDE was introduced in our DATE 2026 work, *Special Day — GUIDE: GenAI Units In Digital Design Education*. It is designed for two complementary purposes:

- **Instructional Use:** instructors select and assemble self-contained units to build courses for different student backgrounds and learning goals.
- **Innovation Use:** students extend and combine units through projects, competitions, and research, then evaluate their contributions with shared tools and benchmarks.

![Overview of the GUIDE platform, its open foundation, standard unit materials, and two educational uses](/images/guide-overview.png)

Why GUIDE?
======

GenAI-driven digital design education faces three practical challenges:

1. **Rapid change.** New models and design methods appear quickly, so monolithic course materials become outdated.
2. **End-to-end validation.** Generating RTL is not enough; students must compile, simulate, synthesize, formally verify, and analyze the resulting hardware.
3. **Accessible infrastructure.** Commercial EDA licenses can limit reproducibility and access across institutions.

GUIDE addresses these challenges with modular learning units, free EDA tools, open hardware benchmarks, and evidence-based evaluation.

Platform Architecture
======

GUIDE currently organizes its units into three topics:

- **LLM-aided RTL generation**
- **LLM-aided RTL verification**
- **LLM-aided hardware security**

Each topic contains subtopics and individual teaching units. All units share a standard structure:

- **Slides** that explain the problem, workflow, inputs and outputs, key ideas, and common pitfalls
- **Short video** for self-study and review
- **Runnable lab** that executes end-to-end in Google Colab
- **Related papers** that connect the activity to current research

The common foundation includes Icarus Verilog, Yosys, Verilator, SymbiYosys, and cocotb, together with benchmarks such as VerilogEval, ChipBench, FVEval, and Trust-Hub.

Teaching-Ready Unit Requirements
======

Before a unit is added to GUIDE, it should satisfy four requirements:

- Run from a clean environment without private files or commercial licenses
- Complete at least one benchmark-based, end-to-end example
- Produce clear evidence for grading, such as logs, waveforms, reports, or verification results
- Explain the workflow in language accessible to students with different backgrounds

GUIDE-Driven Courses
======

### GUIDE4ChipDesign I

This 14-week course introduces LLM-aided RTL generation, simulation-based verification, assertion generation, and hardware-security awareness. Twenty-five students completed the course; the final scores averaged **92.9/100**, and **80%** of the students scored at least 90.

### GUIDE4ChipDesign II

The second course moves from individual units to team-based projects and full implementations, including FPGA deployment. Thirteen two-student teams proposed and developed their own projects using GUIDE-based design, verification, and security workflows.

### GUIDE4HardwareSecurity

This course combines foundational RTL generation with GenAI-assisted hardware attacks and defenses. An offering at Rensselaer Polytechnic Institute enrolled **34 undergraduate and graduate students** and used team projects to connect structured learning units with open-ended attack-and-defense workflows.

Projects and Competitions
======

### LLM-Aided Digital Adder Optimization

Students generate, verify, and optimize open-source adder architectures. An LLM iteratively modifies RTL while Yosys returns area and timing feedback. Candidates are accepted only after simulation and equivalence checking.

### IEEE HOST 2026 AHA! Challenge

The AI-based Hardware Attacks Challenge used a red-team/blue-team format for GenAI-assisted hardware-Trojan insertion and detection. It registered **122 participants across 53 teams**, with eight teams advancing to the final judging round.

### NYU Cognichip Hackathon

The hackathon engaged **72 students across 24 teams** from the United States, Canada, and India. Teams combined RTL-generation and verification units to build and evaluate their own AI-assisted hardware-design workflows.

Future Directions
======

### Unit Agents

Each GUIDE unit can become the knowledge base for a focused LLM agent. Multiple unit agents can exchange design artifacts and EDA-tool feedback, compare alternatives, and produce a candidate solution package containing a document, slides, and a runnable lab. Human review remains responsible for correctness, reproducibility, and research value.

### Closing the Loop to Silicon

GUIDE can extend from GenAI-aided RTL to fabricated chips through open flows such as Tiny Tapeout. Students could package RTL, testbenches, and constraints, generate a layout with an open PDK, and contribute post-silicon results back as a new unit.

### Maintaining Reproducibility

Because models and APIs evolve quickly, GUIDE emphasizes versioned environments, provider-independent interfaces, automated lab testing, saved outputs, and pretested alternative models so that learning goals remain stable even as tools change.
