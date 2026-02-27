"use client";

import { useParams } from "next/navigation";
import Sidebar from "../../components/Sidebar";

export default function ChatPage() {
  const { id } = useParams();

  return (
    <div className="flex">
      <Sidebar />
      <main className="p-10">
        Chat ID: {id}
      </main>
    </div>
  );
}