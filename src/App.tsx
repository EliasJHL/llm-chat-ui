/**
 * License: MIT
 * Author : Elias Josué HAJJAR LLAUQUEN <elias-josue.hajjar-llauquen@epitech.eu>
 * Date   : 11/12/2025
 */

import { useState } from 'react'
//import ModelLogo from './assets/logo.svg'
import Header from './components/Header'
//import ConversationList from './components/ConversationList.tsx'
import InputComposer from './components/InputComposer.tsx'
import MessageBubble from './components/MessageBubble.tsx'

function App() {
  return (
    <div className="min-h-screen text-white relative">
      { /*
      <ConversationList
        conversations={[
          {
            id: 'x',
            title: 'xxxx',
            lastMessage: 'xxxxx',
            timestamp: 'xxxxxx',
          },
          {
            id: 'x',
            title: 'xxxx',
            lastMessage: 'xxxxx',
            timestamp: 'xxxxxx',
          },
        ]}
        onSelectConversation={(id) => console.log('Selected conversation ID:', id)}
      />
      */ }
      <header className="px-6 pt-6">
        <Header ModelName="MyModel" ModelTag="v1.0.0" />
      </header>
      <main className="mt-8">
          <MessageBubble message="Hi there! How can I assist you?" isUser={false} />
      </main>
      <InputComposer />
    </div>
  )
}

export default App
