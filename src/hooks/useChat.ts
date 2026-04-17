import { useState, useCallback } from "react";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const MOCK_RESPONSES = [
  "I can see your project uses React with TypeScript and Tauri. The entry point is `src/main.tsx` which renders the `App` component.",
  "Based on the codebase structure, you have a standard Vite + React setup with Tauri for the desktop shell. The Rust backend is in `src-tauri/`.",
  "Looking at the dependencies, you're using React 19 with Tauri v2. The project is configured with TypeScript for type safety.",
  "The `src-tauri/src/main.rs` file contains your Tauri command handlers. You can invoke them from the frontend using `@tauri-apps/api/core`.",
];

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback((content: string) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const response: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)],
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, response]);
      setIsLoading(false);
    }, 800);
  }, []);

  return { messages, isLoading, sendMessage };
}
