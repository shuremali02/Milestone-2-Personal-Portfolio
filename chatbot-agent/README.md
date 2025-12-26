---
title: Portfolio Chatbot
emoji: 🤖
colorFrom: green
colorTo: purple
sdk: docker
pinned: false
---

# Portfolio Chatbot Agent

AI-powered chatbot for the portfolio using OpenAI Agents SDK with Gemini LLM.

## Features

- FastAPI backend with async support
- OpenAI Agents SDK for conversational AI
- Gemini 2.0 Flash as the LLM provider
- UV package manager for fast dependency installation
- Docker support for HuggingFace Spaces deployment
- CORS enabled for frontend integration

## Setup (Local Development)

### 1. Install UV Package Manager

```bash
# Linux/macOS
curl -LsSf https://astral.sh/uv/install.sh | sh

# Windows
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

### 2. Create Virtual Environment & Install Dependencies

```bash
# Create virtual environment
uv venv .venv

# Activate virtual environment
# Linux/macOS:
source .venv/bin/activate
# Windows:
.venv\Scripts\activate

# Install dependencies with UV
uv pip install -r requirements.txt
```

### 3. Configure Environment

```bash
cp .env.example .env
# Edit .env and add your GEMINI_API_KEY
```

Get your Gemini API key from: https://aistudio.google.com/app/apikey

### 4. Run Locally

```bash
uvicorn main:app --reload --port 7860
```

Or:

```bash
python main.py
```

## API Endpoints

- `GET /` - Health check
- `GET /health` - Health check for monitoring
- `POST /chat` - Chat endpoint
- `GET /info` - Get portfolio owner info

### Chat Request Example

```json
POST /chat
{
  "message": "Tell me about your projects",
  "history": []
}
```

### Chat Response

```json
{
  "response": "I have worked on several exciting projects...",
  "success": true
}
```

## Deploy to HuggingFace Spaces

1. Create a new Space on HuggingFace (Docker type)
2. Upload all files from this directory
3. Add `GEMINI_API_KEY` as a secret in Space settings
4. The Space will automatically build and deploy

### HuggingFace Spaces Settings

- **Space hardware:** CPU Basic (free tier works)
- **Space type:** Docker
- **Secrets:** Add `GEMINI_API_KEY`

## Frontend Integration

Update your frontend `.env` file:

```env
NEXT_PUBLIC_CHATBOT_API_URL=https://your-username-your-space.hf.space/chat
```

## File Structure

```
chatbot-agent/
├── main.py           # FastAPI application
├── agent.py          # Portfolio chatbot agent
├── requirements.txt  # Python dependencies
├── Dockerfile        # Docker configuration (uses UV)
├── .env.example      # Environment template
├── .gitignore        # Git ignore rules
└── README.md         # This file
```

## Tech Stack

- **Framework:** FastAPI
- **AI SDK:** OpenAI Agents SDK
- **LLM:** Google Gemini 2.0 Flash
- **Package Manager:** UV (fast Python package installer)
- **Deployment:** Docker / HuggingFace Spaces
