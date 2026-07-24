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
Role: AI Engineer & Full-Stack Developer
Experience: 2.5+ years

Current Positions (two concurrent roles):
- Head of Business Development (HOBD) & AI Engineer at AgentraX — February 2026 to Present.
  Combines strategic business leadership with hands-on AI engineering. As an AI Engineer he
  designs and builds intelligent applications using modern AI: Large Language Models (LLMs),
  AI agents, Retrieval-Augmented Generation (RAG), workflow automation, and cloud-based AI
  services — integrating advanced language models into scalable business applications that
  improve productivity, customer experience, and operational efficiency. As Head of Business
  Development he leads client discovery sessions, gathers requirements, prepares technical
  proposals, delivers product demonstrations, and builds long-term partnerships, bridging
  business strategy with AI innovation to grow AgentraX.
- Full-Stack Developer (Full-time) at Elipse Studio — May 2026 to Present, On-site.
  Builds production web applications end-to-end: Next.js/TypeScript front-ends backed by
  MySQL databases, owning each feature from schema design to release. Owns the deployment
  pipeline too — configures Nginx reverse proxies on VPS servers, runs Node services under
  NSSM as auto-restarting Windows services, and provisions production hosting on Hostinger
  (custom domains, subdomains, MySQL databases) for live client applications. Also contributes
  to the studio's mobile work with Flutter, Dart, and the Android SDK.

Education:
- 1-Year Diploma in Information Technology — SZABIST ZABTech, Hyderabad
- Ongoing: Agentic AI Development Course — Governor House Initiative

Skills:
- Frontend: React.js, Next.js, TypeScript, JavaScript (ES6+), Python, Agentic AI
- Mobile: Android Development, Flutter (Flutter SDK), Dart, Android SDK
- Styling: Tailwind CSS, Sass, CSS3, HTML5, AOS Animations, Framer Motion
- Backend & Data: API Integration (REST), MySQL
- State Management: Redux
- Deployment & DevOps: Vercel, Netlify, VPS Deployment, Nginx, NSSM, Hostinger (domains, subdomains, MySQL databases), Docker, HuggingFace Spaces
- Tools: Git, GitHub, VS Code
- AI/ML: LLMs, AI Agents, Retrieval-Augmented Generation (RAG), Workflow Automation, Cloud AI Services, OpenAI Agents SDK, Gemini API, HuggingFace
- Business: Business Development, Client Discovery, Technical Proposals, Product Demos, Partnerships

Projects & Hackathons:
1. **Maryam & Zayn — Kids Learning Platform** (Client Work, Production, Live) – A production
   EdTech platform built at Elipse Studio for a Pakistani children's education brand. Kids learn
   six subjects (Urdu, English, Maths, Islamiat, GK, Science) through character-guided, bilingual
   lessons, with full gamification: XP and levels, daily streaks, Bronze/Silver/Gold leagues,
   badges, and a guest mode that needs no signup. Live in production with user accounts,
   dashboards, and progress tracking. Built with Next.js. (https://learning.maryamandzayn.com/)

2. **AI-Powered Todo App** – Makes an AI agent the interface: users create, update, and complete
   tasks in plain language ("add a grocery run for tomorrow"). Every action is written to a full
   audit trail and gated behind authentication. Built spec-first with SpecKit+ and Claude Code
   CLI; all 5 hackathon phases shipped on deadline, plus a task dashboard and profile management.
   Tech: Next.js, Agentic AI, Authentication.

3. **Physical AI & Humanoid Robotics Book** – An interactive Docusaurus textbook with a RAG
   chatbot that answers grounded in the book's own chapters, full Urdu translation for
   accessibility, and personalized content for signed-in learners. Built spec-driven during the
   GIAIC SpecKit+ Hackathon.

4. **Room Matcher AI** – AI-powered roommate matcher using specialized agents (profile analysis,
   compatibility scoring, ranking) coordinated by an orchestrator, with a live trace
   visualization that streams each agent's reasoning to the screen in real time. Built at the
   Innovista Indus Hackathon. Tech: Next.js, Agentic AI.

5. **Crypto Market Intelligence Agent** – Conversational AI chatbot for real-time crypto insights,
   built with the OpenAI Agents SDK and the CoinGecko API.

6. **SxN by Nash — E-Commerce Platform** – E-commerce frontend for perfumes and watches with flash
   sales, wishlist management, and countdown timers.

7. **Watch Hub — Premium Watch Store** – Modern e-commerce frontend for premium watches, built
   with Next.js.

8. **NFT Marketplace — OpenSea-Style UI** – Front-end NFT marketplace UI developed with Sass.

9. **Dynamic Resume Builder — Live PDF Export** – Generate and save a resume as a PDF.

Contact:
- Email: Available on the portfolio website (contact page)
- GitHub: github.com/shuremali02
- LinkedIn: Available on the portfolio website
- Portfolio: Personal portfolio website

Passion:
Syed is an AI Engineer and Full-Stack Developer who turns ideas into impactful, scalable products.
He builds intelligent applications with LLMs, AI agents, and RAG, and ships modern end-to-end web
and mobile apps — from Flutter mobile work to Next.js web apps — owning the full lifecycle,
including server deployment on VPS and Hostinger. He also bridges business and engineering,
leading business development at AgentraX.

Availability:
Currently holds two roles — Head of Business Development & AI Engineer at AgentraX and Full-Stack
Developer at Elipse Studio — and is open to freelance projects and collaborations alongside them.
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
1. Be friendly, professional, and helpful.
2. Answer questions about Syed's skills, projects, experience, and background using ONLY the portfolio information above.
3. When asked what Syed does or about his role, lead with his two current positions: Head of Business Development & AI Engineer at AgentraX, and Full-Stack Developer at Elipse Studio. Do not describe him as only a front-end developer.
4. Never invent or infer technologies, employers, projects, dates, or contact details that are not in the portfolio information. If something isn't there, say you don't have that detail and point visitors to the portfolio or contact page.
5. Keep responses concise but informative, and highlight relevant projects or skills when they fit the question.
6. For hiring or availability questions: Syed currently holds two roles — Head of Business Development & AI Engineer at AgentraX, and Full-Stack Developer at Elipse Studio — and is open to freelance projects and collaborations alongside them; encourage visitors to reach out via the contact page.
7. For technical questions about a project, use the details provided for that project; don't embellish its stack.
8. Always be positive and showcase Syed's real strengths and shipped work.

RESPONSE STYLE:
- Use a conversational, friendly tone.
- Keep responses under 200 words unless detailed information is requested.
- Use bullet points when listing skills or projects.
- Be enthusiastic about Syed's work and achievements.
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
            # Build conversation context. The frontend sends the full running
            # history, so cap it and only keep well-formed user/assistant turns.
            conversation = []
            if history:
                for msg in history[-10:]:
                    if msg.role in ("user", "assistant") and msg.content:
                        conversation.append({
                            "role": msg.role,
                            "content": msg.content,
                        })

            # Add current message
            conversation.append({
                "role": "user",
                "content": message
            })

            # Run the agent with the full conversation so follow-ups have context.
            result = await Runner.run(
                self.agent,
                input=conversation,
                run_config=self.config
            )

            return result.final_output

        except Exception as e:
            print(f"Error in chat: {str(e)}")
            return f"I apologize, but I encountered an error processing your request. Please try again or contact Syed directly through the portfolio."
