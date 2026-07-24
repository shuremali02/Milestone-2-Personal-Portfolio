"use client";
import { useState, useRef, useEffect } from "react";
import { IoMdClose, IoMdSend } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

const CHATBOT_API_URL = process.env.NEXT_PUBLIC_CHATBOT_API_URL || "https://shurem-portfolio-chatbot.hf.space/chat";

interface Message {
  role: string;
  content: string;
}

/**
 * Themed chat robot mascot — white body, dark visor, teal eyes and speech
 * bubble dots. Designed to sit on a teal surface. Pure SVG, no third-party
 * branding, scales crisply and adapts to the theme via CSS vars.
 */
function RobotMascot({ size = 40 }: { size?: number }) {
  const WHITE = "#FFFFFF";
  const ACCENT = "#C7D3DC";
  const DARK = "#233240";
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      {/* speech bubble */}
      <rect x="43" y="5" width="19" height="14" rx="6" fill={WHITE} />
      <path d="M49 18 L49 25 L56 17 Z" fill={WHITE} />
      <circle cx="48.5" cy="12" r="1.5" fill="var(--primary)" />
      <circle cx="52.5" cy="12" r="1.5" fill="var(--primary)" />
      <circle cx="56.5" cy="12" r="1.5" fill="var(--primary)" />
      {/* antenna */}
      <path d="M32 10V5" stroke={ACCENT} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="32" cy="4" r="2.4" fill={ACCENT} />
      {/* headset ear cups */}
      <rect x="9" y="19" width="7" height="12" rx="3.5" fill={ACCENT} />
      <rect x="48" y="19" width="7" height="12" rx="3.5" fill={ACCENT} />
      {/* head */}
      <rect x="14" y="10" width="36" height="26" rx="12" fill={WHITE} />
      {/* visor */}
      <rect x="19" y="15" width="26" height="16" rx="8" fill={DARK} />
      {/* eyes */}
      <rect x="26" y="19" width="4" height="8" rx="2" fill="var(--primary)" />
      <rect x="34" y="19" width="4" height="8" rx="2" fill="var(--primary)" />
      {/* mic boom */}
      <path d="M52 30c1 4-3 5-9 4" stroke={DARK} strokeWidth="2" strokeLinecap="round" />
      <circle cx="43" cy="34.5" r="1.8" fill={DARK} />
      {/* arms */}
      <rect x="10" y="39" width="6.5" height="13" rx="3.25" fill={ACCENT} />
      <rect x="47.5" y="39" width="6.5" height="13" rx="3.25" fill={ACCENT} />
      {/* body */}
      <rect x="16" y="35" width="32" height="23" rx="11" fill={WHITE} />
      {/* belly speaker */}
      <circle cx="32" cy="47" r="5.5" fill={DARK} />
      <circle cx="32" cy="47" r="2.2" fill="var(--primary)" />
    </svg>
  );
}

/** Assistant avatar: the robot on a teal circle, for message rows. */
function AiAvatar({ size = 30 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, var(--primary), var(--primary-hover))",
      }}
    >
      <RobotMascot size={size * 0.82} />
    </div>
  );
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
          content: "Hi! I'm Shurem's AI assistant. Ask me about his experience, projects, or skills.",
        },
      ]);
    }
  }, [open, messages.length]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: "user", content: input };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(CHATBOT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.content, history: updatedMessages.slice(0, -1) }),
      });
      const data = await res.json();
      if (data.success && data.response) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
      } else {
        throw new Error("bad response");
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't reach the server. Please try again in a moment." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div>
      {/* Floating launcher */}
      {!open && (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {hovered && (
            <div
              style={{
                marginBottom: "12px",
                padding: "8px 16px",
                borderRadius: "9999px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text-main)",
                fontSize: "13px",
                fontWeight: 500,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.25)",
                animation: "slideUp 0.25s ease-out",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                whiteSpace: "nowrap",
              }}
            >
              <span>Ask me anything!</span>
            </div>
          )}

          <button
            onClick={() => setOpen(true)}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--primary), var(--primary-hover))",
              border: "none",
              boxShadow: "0 12px 30px -6px rgb(var(--primary-rgb) / 0.55)",
              cursor: "pointer",
              transition: "transform 0.25s ease",
              animation: "chatGlow 2.8s ease-in-out infinite",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.94)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            aria-label="Open chat"
          >
            <RobotMascot size={38} />
          </button>
        </div>
      )}

      {/* Chat window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 9999,
            width: "384px",
            maxWidth: "calc(100vw - 2rem)",
            height: "600px",
            maxHeight: "calc(100vh - 3rem)",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "20px",
            boxShadow: "0 30px 60px -15px rgba(0,0,0,0.35)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            animation: "slideUp 0.3s ease-out",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "16px 18px",
              background: "linear-gradient(135deg, var(--primary), var(--primary-hover))",
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <RobotMascot size={44} />
              <div>
                <h3 style={{ fontWeight: 700, fontSize: "16px", margin: 0, lineHeight: 1.2 }}>Portfolio Assistant</h3>
                <span style={{ fontSize: "12px", opacity: 0.9, display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
                  <span style={{ width: "7px", height: "7px", background: "#4ade80", borderRadius: "50%", animation: "pulse 2s infinite" }} />
                  Online
                </span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "none",
                color: "white",
                cursor: "pointer",
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.24)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
              aria-label="Close chat"
            >
              <IoMdClose size={20} />
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              padding: "18px 16px",
              flex: 1,
              overflowY: "auto",
              background: "var(--background)",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {messages.map((msg, i) => {
              const isUser = msg.role === "user";
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "8px",
                    flexDirection: isUser ? "row-reverse" : "row",
                    animation: "chatPop 0.25s ease-out",
                  }}
                >
                  {isUser ? (
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        color: "var(--text-muted)",
                      }}
                    >
                      <FaRegUser size={13} />
                    </div>
                  ) : (
                    <AiAvatar size={30} />
                  )}
                  <div
                    style={{
                      maxWidth: "76%",
                      padding: "11px 14px",
                      fontSize: "14px",
                      lineHeight: 1.55,
                      whiteSpace: "pre-wrap",
                      background: isUser ? "linear-gradient(135deg, var(--primary), var(--primary-hover))" : "var(--surface)",
                      color: isUser ? "white" : "var(--text-main)",
                      border: isUser ? "none" : "1px solid var(--border)",
                      borderRadius: "16px",
                      borderBottomRightRadius: isUser ? "4px" : "16px",
                      borderBottomLeftRadius: isUser ? "16px" : "4px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              );
            })}

            {loading && (
              <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", animation: "chatPop 0.25s ease-out" }}>
                <AiAvatar size={30} />
                <div
                  style={{
                    padding: "14px 16px",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                    borderBottomLeftRadius: "4px",
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                  }}
                >
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      style={{
                        width: "7px",
                        height: "7px",
                        background: "var(--primary)",
                        borderRadius: "50%",
                        animation: `chatDot 1.2s ${d * 0.18}s infinite ease-in-out`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick actions */}
          <div
            style={{
              padding: "10px 16px",
              borderTop: "1px solid var(--border)",
              background: "var(--surface)",
              display: "flex",
              gap: "8px",
              overflowX: "auto",
              flexShrink: 0,
            }}
          >
            {["Experience", "Projects", "Skills", "Contact"].map((action) => (
              <button
                key={action}
                onClick={() => setInput(`Tell me about Shurem's ${action.toLowerCase()}`)}
                style={{
                  padding: "7px 13px",
                  fontSize: "12px",
                  fontWeight: 500,
                  background: "var(--background)",
                  border: "1px solid var(--border)",
                  borderRadius: "9999px",
                  color: "var(--text-muted)",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--primary)";
                  e.currentTarget.style.color = "var(--primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text-muted)";
                }}
              >
                {action}
              </button>
            ))}
          </div>

          {/* Input */}
          <div
            style={{
              padding: "12px 16px 16px",
              background: "var(--surface)",
              display: "flex",
              gap: "8px",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flex: 1,
                padding: "12px 16px",
                background: "var(--background)",
                border: "1px solid var(--border)",
                borderRadius: "9999px",
                color: "var(--text-main)",
                fontSize: "14px",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              style={{
                width: "44px",
                height: "44px",
                flexShrink: 0,
                background: loading || !input.trim() ? "var(--border)" : "linear-gradient(135deg, var(--primary), var(--primary-hover))",
                border: "none",
                borderRadius: "50%",
                color: "white",
                cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
