// "use client";

// import { useQuery } from "convex/react";
// import { api } from "@/convex/_generated/api";
// import { useUser } from "@clerk/nextjs";

// interface Props {
//   conversationId: string;
// }

// export default function MessageList({ conversationId }: Props) {
//   const { user } = useUser();

//   const messages = useQuery(
//     api.messages.getMessages,
//     { conversationId: conversationId as any }
//   );

//   if (!messages)
//     return (
//       <div className="flex-1 grid place-items-center text-gray-500">
//         Loading…
//       </div>
//     );

//   return (
//     <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
//       {messages.map((msg) => {
//         const isMe = msg.senderId === user?.id;

//         return (
//           <div
//             key={msg._id}
//             className={`flex ${isMe ? "justify-end" : "justify-start"}`}
//           >
//             <div
//               className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm
//                 ${
//                   isMe
//                     ? "bg-indigo-600 text-white"
//                     : "bg-gray-200 text-gray-800"
//                 }
//               `}
//             >
//               {msg.text}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
'use client';

import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';

interface MessageListProps {
  conversationId: string; // explicitly declare prop
}

export default function MessageList({ conversationId }: MessageListProps) {
  const { user } = useUser();

  const messages = useQuery(api.messages.getMessages, {
    conversationId: conversationId as any, // Convex internal type workaround
  });

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      {messages?.map((msg) => {
        const isMe = msg.senderId === user?.id;
        return (
          <div
            key={msg._id}
            className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] px-5 py-3 rounded-2xl shadow-sm text-sm ${
                isMe
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-900 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}