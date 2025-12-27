/**
 * License: MIT
 * Author : Elias Josué HAJJAR LLAUQUEN <elias-josue.hajjar-llauquen@epitech.eu>
 * Date   : 11/12/2025
 */
import React from "react";

interface MessageBubbleProps {
  message: string;
  isUser: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isUser }) => {
  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto px-4">
        <div className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
          {!isUser && (
            <div className="h-9 w-9 shrink-0 rounded-full bg-zinc-200 text-zinc-700 flex items-center justify-center text-xs font-semibold">
              AI
            </div>
          )}

          <div
            className={[
              "rounded-2xl px-4 py-2 text-sm leading-relaxed",
              "max-w-[75%]",
              isUser
                ? "bg-white text-zinc-900"
                : "bg-zinc-200 text-zinc-900",
            ].join(" ")}
          >
            {message}
          </div>

          {isUser && (
            <div className="h-9 w-9 shrink-0 rounded-full bg-zinc-200 text-zinc-700 flex items-center justify-center text-xs font-semibold">
              U
            </div>
          )}
        </div>

        <div className="h-4" />
      </div>
    </div>
  );
};

export default MessageBubble;

