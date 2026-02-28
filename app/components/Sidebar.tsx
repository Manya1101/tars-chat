// 'use client';

// import { useQuery } from "convex/react";
// import { api } from "@/convex/_generated/api";
// import Link from "next/link";
// import NewChatButton from "./NewChatButton";

// export default function Sidebar() {
//   const conversations = useQuery(api.conversations.getConversations);

//   return (
//     <div className="w-72 h-screen bg-gray-900 text-white p-6 flex flex-col">
//       {/* Header */}
//       <h2 className="text-xl font-semibold mb-6 tracking-wide">Chats</h2>

//       {/* Chat list */}
//       <div className="flex-1 space-y-3 overflow-y-auto">
//         {conversations?.length === 0 && (
//           <p className="text-gray-400 text-sm text-center">
//             No chats yet
//           </p>
//         )}

//         {conversations?.map((chat: any) => (
//           <Link
//             key={chat._id}
//             href={`/chat/${chat._id}`}
//             className="block bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg transition"
//           >
//             Chat {chat._id.slice(0, 6)}
//           </Link>
//         ))}
//       </div>

//       {/* New chat button */}
//       <div className="mt-6">
//         <NewChatButton />
//       </div>
//     </div>
//   );
// }
// app/components/Sidebar.tsx
'use client';

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Link from "next/link";
import NewChatButton from "./NewChatButton";

export default function Sidebar() {
  const conversations = useQuery(api.conversations.getConversations);

  return (
    <div className="w-72 h-screen bg-gray-900 text-white p-6 flex flex-col">

      {/* Header */}
      <h2 className="text-xl font-semibold mb-6 tracking-wide">Chats</h2>

      {/* Chat list */}
      <div className="flex-1 space-y-3 overflow-y-auto">
        {!conversations && (
          <p className="text-gray-400 text-sm text-center">Loading chats...</p>
        )}

        {conversations?.length === 0 && (
          <p className="text-gray-400 text-sm text-center">No chats yet</p>
        )}

        {conversations?.map((chat: any) => (
          <Link
            key={chat._id}
            href={`/chat/${chat._id}`}
            className="block bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg transition"
          >
            Chat {chat._id.slice(0, 6)}
          </Link>
        ))}
      </div>

      {/* New Chat button */}
      <div className="mt-6">
        <NewChatButton />
      </div>
    </div>
  );
}