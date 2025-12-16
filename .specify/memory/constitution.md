<!--
Sync Impact Report:
- Version change: N/A → 1.0.0 (initial version)
- List of modified principles: N/A (new constitution)
- Added sections: All sections (new constitution)
- Removed sections: None
- Templates requiring updates: N/A (new constitution)
- Follow-up TODOs: None
-->
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