# Research Summary: Physical AI & Humanoid Robotics Book Platform

**Date**: 2025-12-12
**Feature**: 001-book-rag-platform

## Decision: Docusaurus as Frontend Framework
**Rationale**: Docusaurus is the optimal choice for documentation-based sites with built-in features like search, versioning, and theming. It's specifically designed for content-heavy sites like educational books and provides excellent MD/MDX support. The framework also offers easy deployment to Vercel and supports custom React components for the chat widget.

**Alternatives considered**:
- Next.js with custom MDX handling: More complex setup, requires more custom code
- Gatsby: Similar functionality but less focused on documentation use cases
- Static site generators (Jekyll, Hugo): Less JavaScript-focused, harder to integrate with React components

## Decision: FastAPI for RAG Backend
**Rationale**: FastAPI provides excellent performance, automatic API documentation, and strong typing. It's ideal for serverless deployment and has great integration with Python ML/AI libraries. The framework also supports async operations which is important for RAG operations.

**Alternatives considered**:
- Flask: Less performant, no automatic documentation
- Node.js/Express: Would create stack inconsistency with Python ML libraries
- Django: Overkill for simple API endpoints

## Decision: Qdrant for Vector Storage
**Rationale**: Qdrant offers a robust vector database with good performance and cloud hosting options. It has excellent Python client libraries and supports semantic search which is essential for RAG functionality. The free tier supports the project requirements.

**Alternatives considered**:
- Pinecone: Commercial solution, more expensive
- Weaviate: Good alternative but Qdrant has simpler setup for this use case
- FAISS: Requires more infrastructure management
- In-memory solutions: Not scalable for production

## Decision: Claude Code CLI + Qwen for LLM Integration
**Rationale**: As specified in the project requirements, Claude Code CLI with Qwen provides local LLM capabilities for answer synthesis. This supports the extensibility principle by making LLM integration optional.

**Alternatives considered**:
- OpenAI API: Would require API keys and ongoing costs
- Local Ollama: Alternative but Claude Code + Qwen is specified in requirements
- Hugging Face models: More complex to set up locally

## Decision: Vercel for Deployment
**Rationale**: Vercel provides excellent support for Docusaurus sites and serverless functions. It offers easy CI/CD, global CDN, and good performance for web-based educational platforms.

**Alternatives considered**:
- Netlify: Good alternative but less serverless function support
- AWS/GCP: More complex setup for this use case
- GitHub Pages: Limited serverless function capabilities

## Decision: Component Structure for Chat Widget
**Rationale**: A floating chat widget component provides non-intrusive access to the RAG functionality while users read book content. This follows modern web application patterns and enhances the learning experience.

**Alternatives considered**:
- Separate chat page: Less convenient for users reading content
- Embedded chat per page: More complex implementation
- Modal dialog: Good alternative but floating widget allows continuous interaction