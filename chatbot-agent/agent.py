"""
Portfolio Chatbot Agent using OpenAI Agents SDK with Gemini LLM
"""
import os
from typing import List, Optional
from openai import AsyncOpenAI
from agents import Agent, Runner
from agents.models.openai_chatcompletions import OpenAIChatCompletionsModel
from agents.run import RunConfig
from pydantic import BaseModel

# Portfolio data for context
PORTFOLIO_DATA = """
Name: Syed Shurem Ali
Role: Front-End Developer
Experience: 2.5+ years

Education:
- 1-Year Diploma in Information Technology — SZABIST ZABTech, Hyderabad
- Ongoing: Agentic AI Development Course — Governor House Initiative

Skills:
- Frontend: React.js, Next.js, TypeScript, JavaScript (ES6+), Python, Agentic AI
- Styling: Tailwind CSS, Sass, CSS3, HTML5, AOS Animations, Framer Motion
- API Integration (REST)
- State Management: Redux
- Deployment: Vercel, Netlify, Docker, HuggingFace Spaces
- Tools: Git, GitHub, VS Code
- AI/ML: OpenAI Agents SDK, HuggingFace, Gemini API

Projects & Hackathons:
1. **Physical AI & Humanoid Robotics Book** – A comprehensive Docusaurus-based textbook on Physical AI & Humanoid Robotics with RAG-based chatbot, Urdu translation, personalized content for signed-in users, and interactive learning features. Built during GIAIC Spec-Driven SpecKit+ Hackathon.

2. **Room Matcher AI** – AI-powered roommate matcher with multi-agent orchestration and live trace visualization, built during Innovista Indus Hackathon.

3. **SXN-By-Nash Marketplace** – E-commerce platform featuring perfumes and watches with flash sales, wishlist management, and countdown timer.

4. **NFT Marketplace (OpenSea Clone)** – Front-end NFT marketplace UI developed using Sass.

5. **Simple Chatbot with Auth, Chainlit & Gemini** – AI-powered chatbot using Chainlit and Google's Gemini model with secure authentication.

6. **Crypto Market Conversational Chatbot** – Streamlit-based AI chatbot using OpenAI's agents SDK and CoinGecko API for real-time crypto insights.

7. **Watch-Hub** – Modern e-commerce frontend for premium watches built with Next.js.

8. **Dynamic Resume Builder** – Generate and save resume as PDF.

Contact:
- Email: Available on portfolio website
- GitHub: github.com/shuremali02
- LinkedIn: Available on portfolio website
- Portfolio: Personal portfolio website

Passion:
I am passionate about creating modern, responsive, and user-friendly interfaces. I enjoy experimenting with new technologies, building functional prototypes, and solving real-world problems through creative web solutions. Currently learning Agentic AI and Spec-Driven Development (SDD).

Availability: Open to freelance projects and collaborations
"""

class ChatMessage(BaseModel):
    role: str
    content: str


class PortfolioChatbot:
    """Portfolio Chatbot using OpenAI Agents SDK with Gemini LLM"""

    def __init__(self):
        self.gemini_api_key = os.getenv("GEMINI_API_KEY")
        if not self.gemini_api_key:
            raise ValueError("GEMINI_API_KEY environment variable is required")

        # Initialize Gemini client via OpenAI compatible endpoint
        self.external_provider = AsyncOpenAI(
            api_key=self.gemini_api_key,
            base_url="https://generativelanguage.googleapis.com/v1beta/openai"
        )

        # Create model configuration
        self.model = OpenAIChatCompletionsModel(
            openai_client=self.external_provider,
            model="gemini-2.5-flash",
        )

        # Run configuration
        self.config = RunConfig(
            model=self.model,
            model_provider=self.external_provider,
            tracing_disabled=True
        )

        # Create the agent
        self.agent = Agent(
            name="Portfolio Assistant",
            instructions=self._get_system_prompt(),
            model=self.model,
        )

    def _get_system_prompt(self) -> str:
        """Generate system prompt with portfolio context"""
        return f"""You are an AI assistant for Syed Shurem Ali's portfolio website. Your role is to help visitors learn about Syed's skills, experience, projects, and professional background.

PORTFOLIO INFORMATION:
{PORTFOLIO_DATA}

INSTRUCTIONS:
1. Be friendly, professional, and helpful
2. Answer questions about Syed's skills, projects, experience, and background
3. If asked about something not in the portfolio data, politely say you don't have that information
4. Keep responses concise but informative
5. Highlight relevant projects or skills when appropriate
6. Encourage visitors to explore the portfolio or reach out for collaborations
7. If asked about hiring or contact, mention that Syed is open to freelance projects and collaborations
8. Always be positive and showcase Syed's strengths
9. For technical questions about projects, provide details from the portfolio data
10. If asked something unrelated to the portfolio, politely redirect the conversation

RESPONSE STYLE:
- Use a conversational, friendly tone
- Keep responses under 200 words unless detailed information is requested
- Use bullet points for listing skills or projects when appropriate
- Be enthusiastic about Syed's work and achievements
"""

    async def chat(
        self,
        message: str,
        history: Optional[List[ChatMessage]] = None
    ) -> str:
        """
        Process a chat message and return response

        Args:
            message: User's message
            history: Optional conversation history

        Returns:
            Agent's response string
        """
        try:
            # Build conversation context
            conversation = []

            # Add history if provided
            if history:
                for msg in history:
                    conversation.append({
                        "role": msg.role,
                        "content": msg.content
                    })

            # Add current message
            conversation.append({
                "role": "user",
                "content": message
            })

            # Run the agent
            result = await Runner.run(
                self.agent,
                input=message,
                run_config=self.config
            )

            return result.final_output

        except Exception as e:
            print(f"Error in chat: {str(e)}")
            return f"I apologize, but I encountered an error processing your request. Please try again or contact Syed directly through the portfolio."
