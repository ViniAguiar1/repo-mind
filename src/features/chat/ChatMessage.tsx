import type { Message } from "../../hooks/useChat";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          max-w-[70%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed
          ${isUser
            ? "bg-user-bubble text-white"
            : "bg-bg-tertiary text-text-primary"
          }
        `}
      >
        {message.content}
      </div>
    </div>
  );
}
