"use client";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

export default function NewChatButton() {

  const router = useRouter();

  const createConversation = useMutation(
    api.conversations.getOrCreateConversation
  );

  const handleClick = async () => {

    const id = await createConversation();

    router.push(`/chat/${id}`);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 px-4 py-2 rounded"
    >
      New Chat
    </button>
  );
}