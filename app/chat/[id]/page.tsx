'use client';

import { useParams } from 'next/navigation';
import Sidebar from '../../components/Sidebar';
import { Menu } from 'lucide-react';
import MessageList from '../../components/MessageList';
import ChatInput from '../../components/ChatInput';
import { useState } from 'react';

export default function ChatPage() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen flex bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Sidebar */}
      {open && <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setOpen(false)} />}
      <div className={`fixed md:static z-50 h-full transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <Sidebar />
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white shadow-sm px-4 py-3 flex items-center justify-between">
          <h2 className="font-semibold text-lg">Conversation</h2>
        </div>

        {/* Messages + Input */}
        <div className="flex-1 overflow-hidden">
          <div className="flex flex-col h-full">
            <MessageList conversationId={id as any} />
            <ChatInput conversationId={id as any} />
          </div>
        </div>
      </div>
    </div>
  );
}