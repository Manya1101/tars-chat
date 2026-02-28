"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

interface Props {
  conversationId: string;
}

export default function ChatInput({ conversationId }: Props) {
  const [text, setText] = useState("");
  const sendMessage = useMutation(api.messages.sendMessage);

  const handleSend = async () => {
    if (!text.trim()) return;

    await sendMessage({
      conversationId: conversationId as any,
      text,
    });

    setText("");
  };

  return (
    <div className="border-t px-6 py-4 bg-white flex gap-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message…"
        className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        onClick={handleSend}
        className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
      >
        Send
      </button>
    </div>
  );
}