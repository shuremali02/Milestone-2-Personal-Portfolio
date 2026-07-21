"use client";

import dynamic from "next/dynamic";

// Load the (heavy, AI-SDK) chatbot on the client only, after hydration,
// so it stays out of the initial page bundle.
const ChatBot = dynamic(() => import("./chatbot"), { ssr: false });

export default function ChatBotLoader() {
  return <ChatBot />;
}
