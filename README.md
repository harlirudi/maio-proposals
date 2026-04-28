# Maio Proposals: Frontend Master Templates

> **PROPRIETARY & CONFIDENTIAL**
> This repository and its contents are the proprietary intellectual property of Maio Digital Marketing Agency. Intended strictly for internal commercial use.

## 🏗 System Architecture & Vision

This monolithic repository (Mono-repo) serves as the **Presentation Layer Blueprint** for the Maio Digital Marketing Agency. It is an extension and direct architectural counterpart to the core agentic backend, [`harlirudi/maio`](https://github.com/harlirudi/maio).

Designed with a scalable, Google Cloud-native approach, this repository provides highly dynamic, conversion-optimized frontend templates. It is specifically structured to be parsed, cloned, and hydrated by our **Gemini Enterprise Agent Platform (GEAP)** and **ADK 2.0 Agent CLI**.

## 📂 Repository Structure

```text
maio-proposals/
├── template-a-retail/       # "Sprinting" Strategy for Physical Retail
├── shared-assets/           # Centralized brand guidelines, logos, and global SVGs
└── README.md                # This documentation
```

## 🛠 How to Add a New Template

To maintain consistency for the CLI Agents, any new template must follow the standard Vite + React (TypeScript) configuration.

Requirements:
1. Create a new folder (e.g., template-b-corporate).

2. Variable Injection: Ensure clear variable injection points are marked within App.tsx.

3. Standardization: Standardize the package.json for seamless Google Cloud Run builds.

### Example for CLI Agent:
```bash
git clone --sparse https://github.com/harlirudi/maio-proposals
git sparse-checkout set template-a-retail
```