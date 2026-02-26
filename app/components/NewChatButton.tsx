"use client";

import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function NewChatButton() {

  const createConversation = useMutation(
    api.conversations.createConversation
  );

  const handleNewChat = async () => {

    console.log("clicked"); // 👈 add this line

    const id = await createConversation();

    console.log("created:", id);

  };

  return (
    <button
      onClick={handleNewChat}
      className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
    >
      New Chat
    </button>
  );

}