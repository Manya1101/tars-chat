"use client";

import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

interface Props {
  conversationId: string;
}

export default function MessageList({ conversationId }: Props) {
  const messages = useQuery(api.messages.getMessagesByConversation, { conversationId });

  return (
    <div className="flex-1 overflow-y-auto p-2 space-y-2">
      {messages?.map((msg) => (
        <div key={msg.id} className="flex flex-col">
          <span className="font-bold text-sm">{msg.userId}</span>
          <span className="text-md">{msg.text}</span>
        </div>
      )) ?? <div>Loading messages...</div>}
    </div>
  );
}