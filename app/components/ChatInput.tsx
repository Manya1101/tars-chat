// // components/ChatInput.tsx
// "use client";

// import { useState } from "react";
// import { useMutation } from "convex/react";
// import { api } from "../../convex/_generated/api";

// interface Props {
//   conversationId: string;
//   userId: string;
// }

// export default function ChatInput({ conversationId, userId }: Props) {
//   const [text, setText] = useState("");
//   const sendMessage = useMutation(api.messages.addMessage);

//   const handleSend = async () => {
//     if (!text.trim()) return; // ignore empty messages
//     await sendMessage({ conversationId, userId, text });
//     setText(""); // clear input after sending
//   };

//   return (
//     <div className="flex gap-2 p-2 border-t">
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type a message..."
//         className="flex-1 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//         onKeyDown={(e) => e.key === "Enter" && handleSend()}
//       />
//       <button
//         onClick={handleSend}
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       >
//         Send
//       </button>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

interface Props {
  conversationId: string;
  userId: string;
}

export default function ChatInput({ conversationId, userId }: Props) {
  const [text, setText] = useState("");
  const sendMessage = useMutation(api.messages.addMessage);

  const handleSend = async () => {
    if (!text.trim()) return;
    await sendMessage({ conversationId, userId, text });
    setText("");
  };

  return (
    <div className="flex gap-2 p-2 border-t">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        onClick={handleSend}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
}