"use client";
import { useState, useRef, useEffect } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { IoMdClose, IoMdSend } from "react-icons/io";
import { FaRobot, FaUser } from "react-icons/fa";

// Configure your HuggingFace Spaces URL here
const CHATBOT_API_URL = process.env.NEXT_PUBLIC_CHATBOT_API_URL || "https://shurem-portfolio-chatbot.hf.space/chat";

interface Message {
  role: string;
  content: string;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Welcome message on first open
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content: "Hi! I'm Shurem's AI assistant. Ask me anything about his skills, projects, or experience! 🚀",
        },
      ]);
    }
  }, [open, messages.length]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", content: input };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(CHATBOT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          history: updatedMessages.slice(0, -1), // Send history without current message
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      if (data.success && data.response) {
        const botMsg: Message = { role: "assistant", content: data.response };
        setMessages((prev) => [...prev, botMsg]);
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I'm having trouble connecting. Please try again later or contact Shurem directly!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      {/* Floating Chat Icon */}
      {!open && (
        <div
          className="fixed bottom-5 right-5 flex flex-col items-center z-50"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered && (
            <div className="mb-2 px-3 py-2 rounded-lg bg-gradient-to-r from-primary to-purple-600 text-white text-sm shadow-lg transition-all animate-fade-in">
              <span className="flex items-center gap-2">
                <FaRobot /> Ask me anything!
              </span>
            </div>
          )}
          <button
            onClick={() => setOpen(true)}
            className="bg-gradient-to-r from-primary to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 animate-pulse-slow"
            aria-label="Open chat"
          >
            <BiMessageDetail size={28} />
          </button>
        </div>
      )}

      {/* Chatbox */}
      {open && (
        <div className="fixed bottom-5 right-5 w-[350px] sm:w-[380px] bg-surface border border-border rounded-2xl shadow-2xl flex flex-col animate-slide-up z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-purple-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <FaRobot size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Portfolio Assistant</h3>
                <span className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online
                </span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <IoMdClose size={22} />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 flex-1 overflow-y-auto max-h-[400px] bg-background space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 ${
                  msg.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.role === "user"
                      ? "bg-primary text-white"
                      : "bg-purple-500/20 text-purple-500"
                  }`}
                >
                  {msg.role === "user" ? <FaUser size={14} /> : <FaRobot size={14} />}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                    msg.role === "user"
                      ? "bg-primary text-white rounded-tr-sm"
                      : "bg-surface border border-border text-textMain rounded-tl-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {loading && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center">
                  <FaRobot size={14} />
                </div>
                <div className="bg-surface border border-border px-4 py-3 rounded-2xl rounded-tl-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t border-border bg-surface/50 flex gap-2 overflow-x-auto">
            {["Skills", "Projects", "Experience", "Contact"].map((action) => (
              <button
                key={action}
                onClick={() => {
                  setInput(`Tell me about your ${action.toLowerCase()}`);
                }}
                className="px-3 py-1.5 text-xs bg-background border border-border rounded-full hover:border-primary hover:text-primary transition-colors whitespace-nowrap"
              >
                {action}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-3 border-t border-border bg-surface">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-3 bg-background border border-border rounded-xl text-textMain placeholder-textMuted focus:outline-none focus:border-primary transition-colors"
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              className={`p-3 rounded-xl transition-all ${
                loading || !input.trim()
                  ? "bg-gray-500/50 cursor-not-allowed"
                  : "bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:scale-105"
              } text-white`}
              disabled={loading || !input.trim()}
              aria-label="Send message"
            >
              <IoMdSend size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
