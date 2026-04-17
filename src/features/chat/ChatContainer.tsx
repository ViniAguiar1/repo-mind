import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { useChat } from "../../hooks/useChat";

export function ChatContainer() {
  const { messages, isLoading, sendMessage } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-3 border-b border-border-primary">
        <h2 className="text-sm font-medium text-text-secondary">Chat</h2>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.length === 0 ? (
          <div className="flex-1 flex items-center justify-center h-full">
            <div className="text-center">
              <p className="text-text-muted text-sm">
                Ask anything about your codebase
              </p>
            </div>
          </div>
        ) : (
          <>
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-bg-tertiary px-3.5 py-2.5 rounded-xl text-sm text-text-muted">
                  Thinking...
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <ChatInput onSend={sendMessage} disabled={isLoading} />
    </div>
  );
}
