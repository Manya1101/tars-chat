"use client";

import { useParams } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import MessageList from "@/app/components/MessageList";
import ChatInput from "@/app/components/ChatInput";

export default function ChatPage() {
  const { id } = useParams();
  const { user } = useUser();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Responsive Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static z-40 h-full transition-transform duration-250
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <Sidebar />
      </div>

      {/* Main Chat */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <header className="bg-white border-b px-8 py-4 shadow-sm flex items-center justify-between">
          <button
            className="md:hidden text-xl font-semibold"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          <h2 className="text-xl font-semibold">Chat Room</h2>
          <span className="text-sm text-gray-600 truncate max-w-xs">
            {user?.fullName}
          </span>
        </header>

        {/* Chat Content */}
        <div className="flex-1 overflow-hidden">
          <div className="flex flex-col h-full">
            <MessageList conversationId={id as string} />
            <ChatInput conversationId={id as string} />
          </div>
        </div>

      </div>
    </div>
  );
}