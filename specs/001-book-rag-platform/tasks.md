---
description: "Task list for Physical AI & Humanoid Robotics Book Platform implementation"
---

# Tasks: Physical AI & Humanoid Robotics Book Platform

**Input**: Design documents from `/specs/001-book-rag-platform/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `backend/src/`, `frontend/src/`
- **Project structure** follows the plan.md structure with docs/, src/, api/, etc.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create project structure with docs/, src/, api/ directories
- [ ] T002 Initialize package.json with Docusaurus dependencies
- [ ] T003 [P] Install Python dependencies: fastapi, uvicorn, qdrant-client, sentence-transformers, python-dotenv
- [ ] T004 [P] Verify Claude Code CLI and Qwen are installed and working
- [ ] T005 Create requirements.txt file with all Python dependencies

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T006 Setup Docusaurus project with basic configuration
- [ ] T007 [P] Configure docusaurus.config.js with site metadata and basic navigation
- [ ] T008 [P] Create initial sidebars.js structure for book navigation
- [ ] T009 Create .env file structure with LLM_PROVIDER, MAX_MATCHES, QDRANT_URL, QDRANT_API_KEY, QDRANT_COLLECTION
- [ ] T010 Setup Vercel deployment configuration in vercel.json
- [ ] T011 Configure basic error handling and logging infrastructure for backend

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Access Educational Book Content (Priority: P1) 🎯 MVP

**Goal**: Students can access and navigate the educational book content online with modules on ROS 2, Gazebo, NVIDIA Isaac, and Vision-Language-Action

**Independent Test**: Can be fully tested by accessing the Docusaurus-based book site and navigating through the content modules. Delivers the core educational value of the platform.

### Tests for User Story 1 (OPTIONAL - only if tests requested) ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T012 [P] [US1] Create integration test for book content navigation in tests/integration/test_book_navigation.py
- [ ] T013 [P] [US1] Create unit test for MD/MDX content parsing in tests/unit/test_content_parsing.py

### Implementation for User Story 1

- [ ] T014 [P] [US1] Create docs/index.mdx with Quarter Overview content
- [ ] T015 [P] [US1] Create docs/module-1-ros2/index.mdx with ROS 2 module content
- [ ] T016 [P] [US1] Create docs/module-2-gazebo/index.mdx with Gazebo module content
- [ ] T017 [P] [US1] Create docs/module-3-nvidia-isaac/index.mdx with NVIDIA Isaac module content
- [ ] T018 [P] [US1] Create docs/module-4-vla/index.mdx with VLA module content
- [ ] T019 [US1] Add Learning Outcomes section to appropriate documentation files
- [ ] T020 [US1] Add Weekly Breakdown content to documentation files
- [ ] T021 [US1] Update sidebars.js to include all book modules and proper navigation structure
- [ ] T022 [US1] Create homepage with book intro in src/pages/index.js
- [ ] T023 [US1] Verify MDX formatting works in local Docusaurus preview and fix any issues

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Interact with RAG Chatbot (Priority: P2)

**Goal**: Students can ask questions about the book content and receive relevant responses based on the educational material using RAG functionality

**Independent Test**: Can be tested by asking questions about the book content and receiving relevant responses based on the educational material.

### Tests for User Story 2 (OPTIONAL - only if tests requested) ⚠️

- [ ] T024 [P] [US2] Contract test for /api/chat endpoint in tests/contract/test_chat_endpoint.py
- [ ] T025 [P] [US2] Integration test for RAG question processing in tests/integration/test_rag_processing.py

### Implementation for User Story 2

- [ ] T026 [US2] Create api/chat.py with FastAPI app structure
- [ ] T027 [P] [US2] Implement Qdrant connection and collection setup in api/qdrant_client.py
- [ ] T028 [P] [US2] Create book content embedding function using sentence-transformers in api/embedding.py
- [ ] T029 [US2] Implement content indexing function to upsert book content into Qdrant in api/indexer.py
- [ ] T030 [US2] Implement /api/chat POST endpoint to receive question, search Qdrant, return top N matches
- [ ] T031 [US2] Create ChatWidget.jsx component in src/components/ChatWidget.jsx
- [ ] T032 [US2] Connect ChatWidget to /api/chat endpoint and handle responses
- [ ] T033 [US2] Display retrieved matches with file, title, excerpt, and score in the chat interface
- [ ] T034 [US2] Implement basic error handling for chat interactions

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Access Advanced LLM-Generated Responses (Priority: P3)

**Goal**: Students can optionally get synthesized answers from Claude Code CLI with Qwen that combine multiple concepts from the book for more comprehensive explanations

**Independent Test**: Can be tested by enabling the LLM synthesis feature and asking questions to see if it generates more comprehensive answers.

### Tests for User Story 3 (OPTIONAL - only if tests requested) ⚠️

- [ ] T035 [P] [US3] Contract test for LLM synthesis functionality in tests/contract/test_llm_synthesis.py
- [ ] T036 [P] [US3] Integration test for enhanced answer generation in tests/integration/test_enhanced_answers.py

### Implementation for User Story 3

- [ ] T037 [P] [US3] Create LLM service wrapper in api/llm_service.py to interface with Claude Code CLI
- [ ] T038 [US3] Implement Claude Code CLI integration for answer synthesis in api/llm_synthesis.py
- [ ] T039 [US3] Add optional LLM synthesis parameter to /api/chat endpoint
- [ ] T040 [US3] Update ChatWidget.jsx to support LLM synthesis toggle
- [ ] T041 [US3] Implement response type differentiation (retrieval-only vs llm-synthesized)
- [ ] T042 [US3] Add source tracking to responses to show which content was used
- [ ] T043 [US3] Update UI to display synthesized answers differently from retrieval-only answers

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T044 [P] Update README.md with project setup instructions from quickstart.md
- [ ] T045 [P] Add responsive styling for chat widget in src/css/custom.css
- [ ] T046 Add search bar functionality for book content in src/components/SearchBar.jsx
- [ ] T047 Implement concurrent user session handling to prevent interference
- [ ] T048 Add proper error messages when content cannot be retrieved or LLM service is unavailable
- [ ] T049 Run full site build test with npm run build to ensure no build errors
- [ ] T050 Test deployment pipeline and verify functionality on staging environment

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Depends on book content from US1 for RAG indexing
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Depends on both US1 content and US2 RAG functionality

### Within Each User Story

- Tests (if included) MUST be written and FAIL before implementation
- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 2

```bash
# Launch all tests for User Story 2 together (if tests requested):
Task: "Contract test for /api/chat endpoint in tests/contract/test_chat_endpoint.py"
Task: "Integration test for RAG question processing in tests/integration/test_rag_processing.py"

# Launch all foundational components for User Story 2 together:
Task: "Create api/chat.py with FastAPI app structure"
Task: "Implement Qdrant connection and collection setup in api/qdrant_client.py"
Task: "Create book content embedding function using sentence-transformers in api/embedding.py"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Book Content)
   - Developer B: User Story 2 (RAG Chatbot) - depends on US1 content
   - Developer C: User Story 3 (LLM Synthesis) - depends on US1 and US2
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence