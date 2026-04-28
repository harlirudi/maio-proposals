# Maio Proposals: Frontend Master Templates

> **PROPRIETARY & CONFIDENTIAL** > This repository and its contents are the proprietary intellectual property of Maio Digital Marketing Agency. Intended strictly for internal commercial use. Unauthorized copying, modification, distribution, or public display is strictly prohibited.

## 🏗 System Architecture & Vision

This monolithic repository (Mono-repo) serves as the **Presentation Layer Blueprint** for the Maio Digital Marketing Agency. It is an extension and direct architectural counterpart to the core agentic backend, [`harlirudi/maio`](https://github.com/harlirudi/maio).

Designed with a scalable, Google Cloud-native approach, this repository provides highly dynamic, conversion-optimized frontend templates. It is specifically structured to be parsed, cloned, and hydrated by our **Gemini Enterprise Agent Platform (GEAP)** and **ADK 2.0 Agent CLI**.

### The Automation Pipeline (Agent-to-Agent Workflow)

Our ecosystem separates logic (AI Agentic operations) from presentation (Frontend Templates) for maximum scalability:

1. **Analyst Agent (maio backend):** Processes raw client meeting transcripts into structured `.md` client briefs.
2. **Creative Agent (maio backend):** Generates specialized AI visual assets (e.g., customized mascot states and hero images).
3. **Developer CLI Agent:** - Performs a sparse-checkout of specific templates within this `maio-proposals` repo.
   - Executes dynamic "Search & Replace" data injection based on the client brief.
   - Commits the hydrated codebase to a new client-specific repository.
4. **CI/CD to Google Cloud Run:** GitHub Actions handles automated build, linting, visual regression testing, and serverless deployment to Google Cloud Run.

## 📂 Repository Structure

This Mono-repo contains self-isolated frontend templates. Each directory is an independent Vite/React project tailored to specific industries or proposal strategies.

```text
maio-proposals/
├── template-a-retail/       # (Current) "Sprinting" Strategy for Physical Retail
├── shared-assets/           # (Planned) Centralized brand guidelines, logos, and global SVGs
└── README.md                # This documentation

⚙️ How to Add a New Template
To maintain consistency for the CLI Agents, any new template must follow the standard Vite + React (TypeScript) configuration and expose clear variable injection points within App.tsx.
