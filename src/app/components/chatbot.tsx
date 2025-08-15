"use client";
import { useState, useRef, useEffect } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

export default function Chatbot() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.content }),
      });

      const data = await res.json();
      const botMsg = { role: "assistant", content: data.reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error fetching reply." },
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
          className="fixed bottom-5 right-5 flex flex-col items-center"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered && (
            <div className="mb-2 px-3 py-1 rounded-lg bg-primary text-white text-sm shadow-lg transition-opacity">
              Ask a question
            </div>
          )}
          <button
            onClick={() => setOpen(true)}
            className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/80 transition transform hover:scale-110"
          >
            <BiMessageDetail size={24} />
          </button>
        </div>
      )}

      {/* Chatbox */}
      {open && (
        <div className="fixed bottom-5 right-5 w-80 bg-surface border border-border rounded-lg shadow-xl flex flex-col animate-slide-up">
          {/* Header */}
          <div className="bg-primary text-white p-3 flex justify-between items-center rounded-t-lg">
            <span className="font-semibold">AI Chatbot</span>
            <button onClick={() => setOpen(false)} className="hover:opacity-80">
              <IoMdClose size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="p-3 flex-1 overflow-y-auto max-h-80 text-textMain bg-surface">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 ${msg.role === "user" ? "text-primary" : "text-textMuted"}`}
              >
                <strong>{msg.role === "user" ? "You: " : "Bot: "}</strong>
                {msg.content}
              </div>
            ))}
            {loading && <div className="text-textMuted">Bot is typing...</div>}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="flex border-t border-border bg-surface">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 text-black"
              placeholder="Ask something..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-primary text-white px-4"
              disabled={loading}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
