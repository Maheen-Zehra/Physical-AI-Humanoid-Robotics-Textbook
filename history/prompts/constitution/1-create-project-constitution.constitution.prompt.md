----
id: 1
title: Create Project Constitution
stage: constitution
date: 2025-12-12
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: NOOR
command: /sp.constitution
labels: ["constitution","setup","governance"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

```json
{
  "project_name": "Physical AI & Humanoid Robotics Book Project",
  "vision": "Create a unified AI-driven educational platform that combines an interactive book on Physical AI and Humanoid Robotics with a Retrieval-Augmented Generation (RAG) chatbot. Users can read the book online and interact with a chatbot that answers questions using only the book's content. The system leverages Docusaurus, Claude Code CLI with Qwen, Spec-Kit Plus, FastAPI, Neon Serverless Postgres, and Qdrant Cloud.",
  "mission": [
    "Produce a Docusaurus-based book that is fully readable online.",
    "Implement an embedded RAG chatbot capable of retrieving content from the book and providing contextual answers.",
    "Integrate Claude Code CLI + Qwen to optionally synthesize answers from retrieved content.",
    "Ensure the project is deployable on GitHub + Vercel with zero build errors.",
    "Allow team collaboration, ensuring code can be cloned, run locally, and deployed without dependency or configuration issues."
  ],
  "core_principles": [
    "Simplicity & Reliability — Must work on 'npm start' locally and 'npm run build' for deployment.",
    "Modularity — Book content, RAG backend, and chatbot frontend should be independent modules for easy updates.",
    "Extensibility — LLM integration (Claude Code/Qwen) should be optional for faster local testing.",
    "Reproducibility — Clear instructions for local setup, running, and deploying must exist.",
    "Hackathon-ready — Minimum viable features first, with optional extensions later."
  ],
  "non_goals": [
    "Full industrial-scale humanoid robotics integration.",
    "Complex authentication systems.",
    "Multi-language support beyond English/Urdu.",
    "Production-level LLM optimization (Qwen/Claude Code integration is minimal but functional)."
  ],
  "constraints": [
    "Project must be completed and deployable today.",
    "Must use Docusaurus + Spec-Kit Plus + Claude Code CLI.",
    "RAG chatbot must be embedded in the book site, but backend can be serverless or cloud-hosted (simplest working version preferred).",
    "Minimal external dependencies to avoid build errors on local dev and Vercel deployment.",
    "Team collaboration should be simple: 'git clone', 'npm install', 'npm start' should work for all developers."
  ],
  "success_criteria": [
    "Local launch: 'npm start' shows the book and the chatbot interface without errors.",
    "Build: 'npm run build' produces a deployable static site.",
    "Vercel Deployment: Site and chatbot work fully when deployed to Vercel.",
    "RAG Chatbot: Answers questions accurately from the book content.",
    "Optional LLM synthesis: Uses Claude Code CLI + Qwen correctly if enabled.",
    "Team collaboration: Other developers can clone the repo, install dependencies, and run the project without additional configuration."
  ]
}
```

## Response snapshot

Created the project constitution file at `.specify/memory/constitution.md` with the following content:

# Physical AI & Humanoid Robotics Book Project Constitution

## Core Principles

### I. Simplicity & Reliability
Simplicity & Reliability — Must work on 'npm start' locally and 'npm run build' for deployment. The system must be reliable and predictable in its behavior, with simple and clear operational procedures that ensure consistent performance across all environments.

### II. Modularity
Modularity — Book content, RAG backend, and chatbot frontend should be independent modules for easy updates. Components must be designed with clear interfaces and loose coupling to enable independent development, testing, and maintenance of each module.

### III. Extensibility
Extensibility — LLM integration (Claude Code/Qwen) should be optional for faster local testing. The system architecture must support optional advanced features that can be enabled or disabled without affecting core functionality, allowing for flexible deployment configurations.

### IV. Reproducibility
Reproducibility — Clear instructions for local setup, running, and deploying must exist. Every aspect of the system must be reproducible across different environments with well-documented procedures, ensuring consistent behavior and enabling seamless onboarding for new team members.

### V. Hackathon-ready
Hackathon-ready — Minimum viable features first, with optional extensions later. Prioritize delivering core functionality quickly with a focus on essential features, deferring non-critical enhancements to future iterations to ensure rapid prototyping and demonstration capabilities.

### VI. Team Collaboration
Team collaboration — Ensure code can be cloned, run locally, and deployed without dependency or configuration issues. The development workflow must support seamless collaboration among team members with minimal setup overhead and consistent behavior across all development environments.

## Mission and Vision
The mission is to create a unified AI-driven educational platform that combines an interactive book on Physical AI and Humanoid Robotics with a Retrieval-Augmented Generation (RAG) chatbot. Users can read the book online and interact with a chatbot that answers questions using only the book's content. The vision encompasses leveraging Docusaurus, Claude Code CLI with Qwen, Spec-Kit Plus, FastAPI, Neon Serverless Postgres, and Qdrant Cloud to deliver this educational platform.

## Development Constraints and Non-Goals
The project follows specific constraints to maintain focus and feasibility: completion and deployability today, using Docusaurus + Spec-Kit Plus + Claude Code CLI, embedding the RAG chatbot in the book site with simplest working backend, maintaining minimal external dependencies to avoid build errors, and ensuring simple team collaboration with 'git clone', 'npm install', 'npm start' workflow. Non-goals include full industrial-scale humanoid robotics integration, complex authentication systems, multi-language support beyond English/Urdu, and production-level LLM optimization.

## Governance
The constitution governs all development activities for the Physical AI & Humanoid Robotics Book Project. All code changes, architectural decisions, and feature implementations must align with the core principles outlined above. Any deviation from these principles requires explicit justification and team consensus. The project must maintain simplicity and reliability as primary concerns, with modularity enabling sustainable growth and extensibility supporting optional advanced features.

**Version**: 1.0.0 | **Ratified**: 2025-12-12 | **Last Amended**: 2025-12-12

## Outcome

- ✅ Impact: Created initial project constitution with 6 core principles aligned to user requirements
- 🧪 Tests: none
- 📁 Files: Updated .specify/memory/constitution.md with project-specific principles and governance
- 🔁 Next prompts: Proceed with feature specification and planning
- 🧠 Reflection: Constitution successfully captures the essential project principles and constraints from user input

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A