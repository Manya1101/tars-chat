"use client";

import NewChatButton from "./NewChatButton";

export default function Sidebar() {

  return (

    <div className="w-64 bg-gray-900 text-white p-5">

      <h2 className="text-xl mb-4">
        Your Chats
      </h2>

      <NewChatButton />

    </div>

  );
}