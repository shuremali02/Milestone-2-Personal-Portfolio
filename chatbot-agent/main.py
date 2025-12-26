"""
FastAPI Portfolio Chatbot with OpenAI Agents SDK and Gemini LLM
"""
import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from dotenv import load_dotenv

from agent import PortfolioChatbot

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI(
    title="Portfolio Chatbot API",
    description="AI-powered chatbot for Syed Shurem Ali's portfolio using OpenAI Agents SDK with Gemini LLM",
    version="1.0.0"
)

# CORS configuration for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure specific origins in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request/Response models
class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    message: str
    history: Optional[List[ChatMessage]] = []

class ChatResponse(BaseModel):
    response: str
    success: bool

# Initialize chatbot
chatbot = PortfolioChatbot()

@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "status": "online",
        "message": "Portfolio Chatbot API is running",
        "version": "1.0.0"
    }

@app.get("/health")
async def health_check():
    """Health check for deployment monitoring"""
    return {"status": "healthy"}

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """
    Chat endpoint for portfolio questions

    - **message**: User's question about the portfolio
    - **history**: Optional conversation history for context
    """
    try:
        # Get response from chatbot agent
        response = await chatbot.chat(
            message=request.message,
            history=request.history
        )

        return ChatResponse(
            response=response,
            success=True
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error processing chat: {str(e)}"
        )

@app.get("/info")
async def get_info():
    """Get portfolio owner information"""
    return {
        "name": "Syed Shurem Ali",
        "role": "Front-End Developer",
        "experience": "2.5+ years",
        "skills": [
            "React.js", "Next.js", "TypeScript", "Python",
            "OpenAI Agents SDK", "Agentic AI", "HuggingFace", "Docker"
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=int(os.getenv("PORT", 7860)),
        reload=True
    )
