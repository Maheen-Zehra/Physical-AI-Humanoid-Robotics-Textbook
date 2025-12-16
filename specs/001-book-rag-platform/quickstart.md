# Quickstart Guide: Physical AI & Humanoid Robotics Book Platform

**Date**: 2025-12-12
**Feature**: 001-book-rag-platform

## Local Development Setup

### Prerequisites
- Node.js 18+ with npm
- Python 3.11+
- Git

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Install backend dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Verify Claude Code CLI and Qwen are installed:**
   ```bash
   claude-code --version
   # Ensure Qwen is available as specified in project requirements
   ```

5. **Set up environment variables:**
   ```bash
   # Create .env file with:
   LLM_PROVIDER='claude_qwen'
   MAX_MATCHES=3
   QDRANT_URL='<your-qdrant-url>'
   ```

6. **Run the development server:**
   ```bash
   npm start
   ```

### Running the RAG Backend Locally
```bash
cd api
uvicorn chat:app --reload
```

## Key Features

### Content Structure
- Book content is stored in the `docs/` directory in MD/MDX format
- Each module (ROS 2, Gazebo, NVIDIA Isaac, VLA) has its own subdirectory
- Navigation is controlled by `sidebars.js`

### Chat Functionality
- The chat widget is accessible as a floating component on all pages
- Questions are sent to the `/api/chat` endpoint
- Responses are generated using RAG (retrieval from book content)
- Optional LLM synthesis available via Claude Code CLI + Qwen

### Configuration Options
- Toggle LLM synthesis with the `use_llm` parameter
- Adjust number of matches with `max_matches` parameter
- Environment variables control LLM provider and other settings

## Deployment

### To Vercel
1. Push code to GitHub repository
2. Connect repository to Vercel dashboard
3. Set environment variables in Vercel dashboard
4. Build command: `npm run build`
5. Output directory: `build/`

### Environment Variables Required
- `LLM_PROVIDER`: Set to 'claude_qwen' for LLM synthesis
- `MAX_MATCHES`: Number of content matches to retrieve (default: 3)
- `QDRANT_URL`: URL for Qdrant vector database
- `QDRANT_API_KEY`: API key for Qdrant (if required)