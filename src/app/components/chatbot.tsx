"use client";
import { useState, useRef, useEffect } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { IoMdClose, IoMdSend } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";

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

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content: "Hi! I'm Shurem's AI assistant. Ask me anything! 🚀",
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
        body: JSON.stringify({ message: input, history: updatedMessages.slice(0, -1) }),
      });
      const data = await res.json();
      if (data.success && data.response) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
      }
    } catch (error) {
      console.error("Chat error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      {!open && (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {hovered && (
            <div style={{
              marginBottom: '12px',
              padding: '8px 16px',
              borderRadius: '9999px',
              background: 'linear-gradient(to right, var(--primary), #9333ea)',
              color: 'white',
              fontSize: '14px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              animation: 'slideUp 0.3s ease-out',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <SiOpenai style={{ animation: 'pulse 2s infinite' }} />
              <span style={{ fontWeight: 500 }}>Ask me anything!</span>
            </div>
          )}
          
          <button
            onClick={() => setOpen(true)}
            style={{
              position: 'relative',
              width: '64px',
              height: '64px',
              borderRadius: '9999px',
              background: 'linear-gradient(to bottom right, var(--primary), #9333ea)',
              border: 'none',
              boxShadow: '0 25px 50px -12px rgba(0, 163, 140, 0.4)',
              cursor: 'pointer',
              transition: 'transform 0.3s',
              animation: 'aiGlow 3s ease-in-out infinite',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Open chat"
          >
            <BiMessageDetail size={32} color="white" />
          </button>
          
          <div style={{
            marginTop: '12px',
            padding: '6px 12px',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '9999px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              background: '#22c55e',
              borderRadius: '9999px',
              animation: 'pulse 2s infinite'
            }} />
            <span style={{ color: 'var(--text-muted)', fontSize: '12px', fontWeight: 500 }}>AI Online</span>
          </div>
        </div>
      )}

      {open && (
        <div style={{
          position: 'fixed',
          bottom: '100px',
          right: '20px',
          zIndex: 9999,
          width: '380px',
          maxWidth: 'calc(100vw - 2rem)',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'slideUp 0.3s ease-out'
        }}>
          {/* Header */}
          <div style={{
            padding: '16px',
            background: 'linear-gradient(to right, var(--primary), #9333ea)',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexShrink: 0
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'aiGlow 3s ease-in-out infinite'
              }}>
                <SiOpenai size={24} color="white" />
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '18px', margin: 0 }}>Portfolio Assistant</h3>
                <span style={{ fontSize: '12px', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '8px', height: '8px', background: '#4ade80', borderRadius: '9999px', animation: 'pulse 2s infinite' }} />
                  Online - AI Powered
                </span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '8px',
                transition: 'background 0.2s'
              }}
              aria-label="Close chat"
            >
              <IoMdClose size={22} />
            </button>
          </div>

          {/* Messages */}
          <div style={{
            padding: '16px',
            flex: 1,
            overflowY: 'auto',
            background: 'var(--background)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            minHeight: '250px',
            maxHeight: '350px'
          }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  flexDirection: msg.role === "user" ? 'row-reverse' : 'row'
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  background: msg.role === "user" 
                    ? 'linear-gradient(to bottom right, var(--primary), #9333ea)'
                    : 'linear-gradient(to bottom right, rgba(147, 51, 234, 0.2), rgba(0, 163, 140, 0.2))',
                  border: msg.role !== "user" ? '1px solid rgba(147, 51, 234, 0.3)' : 'none',
                  animation: 'aiGlow 3s ease-in-out infinite'
                }}>
                  {msg.role === "user" ? <FaUser size={14} color="white" /> : <SiOpenai size={14} color="#a855f7" />}
                </div>
                <div style={{
                  maxWidth: '75%',
                  padding: '12px 16px',
                  borderRadius: '16px',
                  background: msg.role === "user"
                    ? 'linear-gradient(to bottom right, var(--primary), #9333ea)'
                    : 'var(--surface)',
                  color: msg.role === "user" ? 'white' : 'var(--text-main)',
                  border: msg.role !== "user" ? '1px solid var(--border)' : 'none',
                  fontSize: '14px',
                  lineHeight: 1.5,
                  whiteSpace: 'pre-wrap'
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '9999px',
                  background: 'rgba(147, 51, 234, 0.2)',
                  border: '1px solid rgba(147, 51, 234, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <SiOpenai size={14} color="#a855f7" />
                </div>
                <div style={{
                  padding: '12px 16px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  display: 'flex',
                  gap: '4px'
                }}>
                  <span style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '9999px', animation: 'bounce 1s infinite' }} />
                  <span style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '9999px', animation: 'bounce 1s 0.15s infinite' }} />
                  <span style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '9999px', animation: 'bounce 1s 0.3s infinite' }} />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Actions */}
          <div style={{
            padding: '12px 16px',
            borderTop: '1px solid var(--border)',
            background: 'rgba(255, 255, 255, 0.05)',
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            flexShrink: 0
          }}>
            {["Skills", "Projects", "Experience", "Contact"].map((action) => (
              <button
                key={action}
                onClick={() => setInput(`Tell me about your ${action.toLowerCase()}`)}
                style={{
                  padding: '8px 12px',
                  fontSize: '12px',
                  background: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '9999px',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s'
                }}
              >
                {action}
              </button>
            ))}
          </div>

          {/* Input */}
          <div style={{
            padding: '16px',
            borderTop: '1px solid var(--border)',
            background: 'var(--surface)',
            display: 'flex',
            gap: '8px',
            flexShrink: 0
          }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flex: 1,
                padding: '12px 16px',
                background: 'var(--background)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                color: 'var(--text-main)',
                fontSize: '14px',
                outline: 'none',
                transition: 'all 0.2s'
              }}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              style={{
                padding: '12px',
                background: loading || !input.trim() 
                  ? 'rgba(107, 114, 128, 0.5)' 
                  : 'linear-gradient(to right, var(--primary), #9333ea)',
                border: 'none',
                borderRadius: '12px',
                color: 'white',
                cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                opacity: loading || !input.trim() ? 0.5 : 1
              }}
              aria-label="Send message"
            >
              <IoMdSend size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
