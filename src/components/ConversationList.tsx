/**
 * License: MIT
 * Author : Elias Josué HAJJAR LLAUQUEN <elias-josue.hajjar-llauquen@epitech.eu>
 * Date   : 11/12/2025
 */

import React from "react";

interface ConversationsListProps {
  conversations: Array<{
    id: string;
    title: string;
    lastMessage: string;
    timestamp: string;
  }>;
  onSelectConversation: (id: string) => void;
}
/*
const ConversationList: React.FC<ConversationsListProps> = ({ conversations, onSelectConversation }) => {
  return (
    <div className="w-64 border-r border-gray-300 h-full overflow-y-auto">
      {conversations.map((conversation) => (
        <div
          key={conversation.id}
          className="p-4 hover:bg-gray-100 cursor-pointer"
          onClick={() => onSelectConversation(conversation.id)}
        >
          <h3 className="font-semibold">{conversation.title}</h3>
          <p className="text-sm text-gray-600">{conversation.lastMessage}</p>
          <span className="text-xs text-gray-400">{conversation.timestamp}</span>
        </div>
      ))}
    </div>
  );
};

export default ConversationList;
*/
