
// 'use client';

// import { api } from "@/convex/_generated/api";
// import { useMutation } from "convex/react";

// export default function NewChatButton() {
//   const createChat = useMutation(api.conversations.createConversation);

//   return (
//     <button
//       onClick={async () => {
//         await createChat({});
//       }}
//       className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md transition"
//     >
//       + New Chat
//     </button>
//   );
// }
'use client';

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";

export default function NewChatButton() {
  // Use the correct mutation name
  const createChat = useMutation(api.conversations.getOrCreateConversation);

  return (
    <button
      onClick={async () => {
        await createChat({});
      }}
      className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md transition"
    >
      + New Chat
    </button>
  );
}