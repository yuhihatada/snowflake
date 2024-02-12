"use client";

import { Sidebar } from "components/Sidebar";
import { Chat } from "components/Chat";

export default function Home() {
  return (
    <main className="w-full flex">
      <Sidebar />
      <Chat />
    </main>
  );
}
