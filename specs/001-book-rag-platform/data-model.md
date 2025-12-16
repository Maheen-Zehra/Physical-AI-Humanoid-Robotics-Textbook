# Data Model: Physical AI & Humanoid Robotics Book Platform

**Date**: 2025-12-12
**Feature**: 001-book-rag-platform

## Entity: Book Content
- **Fields**:
  - id: string (unique identifier for each content piece)
  - title: string (title of the section/module)
  - content: string (the actual text content in markdown format)
  - module: string (which module this belongs to: "ROS 2", "Gazebo", "NVIDIA Isaac", "VLA")
  - section: string (specific section within the module)
  - metadata: object (additional information like word count, reading time)
- **Relationships**: None (stored as MD/MDX files)
- **Validation**: Content must be in valid MD/MDX format

## Entity: User Query
- **Fields**:
  - id: string (unique identifier for the query)
  - question: string (the user's question text)
  - timestamp: datetime (when the query was submitted)
  - userId: string (optional, for tracking if implemented)
  - useLLM: boolean (whether to use LLM synthesis)
- **Relationships**: Links to Retrieved Context
- **Validation**: Question must be non-empty and less than 1000 characters

## Entity: Retrieved Context
- **Fields**:
  - id: string (unique identifier)
  - queryId: string (reference to the user query)
  - matches: array of objects (containing file, title, excerpt, score)
  - sourceContent: array of strings (the actual text content retrieved)
  - retrievalTimestamp: datetime (when retrieval was performed)
- **Relationships**: Linked to User Query
- **Validation**: Must contain at least one match with score > 0.1

## Entity: Response
- **Fields**:
  - id: string (unique identifier)
  - queryId: string (reference to the user query)
  - content: string (the response text)
  - type: string ("retrieval-only" or "llm-synthesized")
  - sources: array of strings (references to source content used)
  - generationTimestamp: datetime (when the response was created)
- **Relationships**: Linked to User Query and Retrieved Context
- **Validation**: Response must be non-empty and relevant to the query

## State Transitions

### Query Processing Flow:
1. **Query Submitted**: User Query entity created with status "pending"
2. **Content Retrieved**: Retrieved Context entity created with relevant book content
3. **Response Generated**: Response entity created with answer
4. **Response Delivered**: Response sent to user with status "completed"

### Optional LLM Synthesis:
- If useLLM=true: Response type is "llm-synthesized" using Claude Code CLI + Qwen
- If useLLM=false: Response type is "retrieval-only" with direct quotes from content