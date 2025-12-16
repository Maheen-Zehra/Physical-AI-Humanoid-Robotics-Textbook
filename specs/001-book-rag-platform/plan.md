# Implementation Plan: Physical AI & Humanoid Robotics Book Platform

**Branch**: `001-book-rag-platform` | **Date**: 2025-12-12 | **Spec**: [link](spec.md)
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Create a Docusaurus-based educational platform for Physical AI & Humanoid Robotics with integrated RAG chatbot that retrieves information from book content to answer student questions. The system will include optional LLM integration using Claude Code CLI with Qwen for enhanced answer synthesis, deployed on Vercel with serverless functions for the RAG backend.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: JavaScript/TypeScript for frontend, Python 3.11 for backend
**Primary Dependencies**: Docusaurus, React, FastAPI, Qdrant, Claude Code CLI, Qwen
**Storage**: Qdrant Cloud for vector storage, MD/MDX files for content
**Testing**: Jest for frontend, pytest for backend or NEEDS CLARIFICATION
**Target Platform**: Web application (Vercel deployment)
**Project Type**: Web (frontend + backend with serverless API)
**Performance Goals**: <5 second response time for chat queries, <30 second page load
**Constraints**: <200ms p95 for internal API calls, must work with npm start locally
**Scale/Scope**: Support 100 concurrent users, handle book content of ~100 pages/modules

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Pre-Design Constitution Alignment Verification:**
- **Simplicity & Reliability**: Plan ensures 'npm start' works locally and 'npm run build' for deployment ✓
- **Modularity**: Design separates book content, RAG backend, and chatbot frontend into independent modules ✓
- **Extensibility**: LLM integration will be optional with toggle for local testing ✓
- **Reproducibility**: Plan includes comprehensive setup documentation ✓
- **Hackathon-ready**: Focus on MVP with core functionality first, optional features later ✓
- **Team Collaboration**: Workflow supports 'git clone', 'npm install', 'npm start' ✓

**GATE RESULT**: All constitution principles satisfied. Proceed to Phase 0.

**Post-Design Constitution Verification:**
- **Simplicity & Reliability**: Implementation uses Docusaurus (reliable), FastAPI (reliable), and clear deployment process ✓
- **Modularity**: Clear separation between content (docs/), frontend (src/), and backend (api/) ✓
- **Extensibility**: LLM integration is optional via environment variable and feature flag ✓
- **Reproducibility**: Complete quickstart guide and setup documentation created ✓
- **Hackathon-ready**: MVP approach with core RAG functionality prioritized ✓
- **Team Collaboration**: Clear setup process with npm/pip installation and git workflow ✓

**FINAL RESULT**: All constitution principles satisfied throughout design process.

## Project Structure

### Documentation (this feature)

```text
specs/001-book-rag-platform/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
docs/                    # Book content in MD/MDX
├── index.mdx            # Main book overview
├── module-1-ros2/
│   ├── index.mdx        # ROS 2 module content
│   └── topics.mdx       # Specific ROS 2 topics
├── module-2-gazebo/
│   ├── index.mdx        # Gazebo module content
│   └── topics.mdx       # Specific Gazebo topics
├── module-3-nvidia-isaac/
│   ├── index.mdx        # NVIDIA Isaac module content
│   └── topics.mdx       # Specific NVIDIA Isaac topics
└── module-4-vla/
    ├── index.mdx        # VLA module content
    └── topics.mdx       # Specific VLA topics

src/
├── components/
│   ├── ChatWidget.jsx   # Floating chat widget
│   ├── ChatMessage.jsx  # Chat message display
│   └── SearchBar.jsx    # Search functionality
├── pages/
│   ├── index.js         # Homepage with book intro and chat widget
│   └── about.js         # Optional about page
└── css/
    └── custom.css       # Custom styling

api/
└── chat.py              # FastAPI endpoint for RAG chat

package.json
docusaurus.config.js
sidebars.js
requirements.txt
vercel.json
README.md
```

**Structure Decision**: Web application with frontend (Docusaurus/React) and backend (FastAPI serverless functions) to support the RAG chatbot functionality while maintaining modularity between content, frontend, and backend components.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Multiple technology stacks | RAG functionality requires both JavaScript (frontend) and Python (backend) | Single-stack solution would limit functionality and performance |