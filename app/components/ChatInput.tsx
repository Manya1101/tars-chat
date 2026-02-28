'use client';

import { useState } from 'react';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

interface ChatInputProps {
  conversationId: string; // explicitly declare prop
}

export default function ChatInput({ conversationId }: ChatInputProps) {
  const [text, setText] = useState('');
  const sendMessage = useMutation(api.messages.sendMessage);

  const handleSend = async () => {
    if (!text.trim()) return;
    await sendMessage({ conversationId: conversationId as any, text }); // Convex workaround
    setText('');
  };

  return (
    <div className="bg-white border-t p-4 flex gap-3">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Type a message..."
      />
      <button
        onClick={handleSend}
        className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
      >
        Send
      </button>
    </div>
  );
}