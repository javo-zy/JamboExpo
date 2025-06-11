'use client';

import React, { useState } from 'react';

// --- Definición de Tipos ---
interface Message {
  id: number;
  sender: 'me' | 'other';
  text: string;
}

interface Conversation {
  id: string;
  name: string;
  role: string;
}

// Array de colores para los avatares generados
const avatarColors = ['bg-blue-500', 'bg-emerald-500', 'bg-purple-500', 'bg-amber-500', 'bg-indigo-500'];

export default function MessagesPage() {
  // --- Estado ---
  const [selectedConversationId, setSelectedConversationId] = useState<string>('1');
  // Se restaura el mensaje del input para que coincida con la primera imagen
  const [currentMessage, setCurrentMessage] = useState<string>(
    'Hi mario, now I had a problem with the wall of my house.'
  );

  // --- Datos de la Maqueta (con todos los usuarios restaurados) ---
  const conversations: Conversation[] = [
    {
      id: '1',
      name: 'Mario Rivas',
      role: 'Bricklayer',
    },
    {
      id: '2',
      name: 'José Medina',
      role: 'Plumber',
    },
    {
      id: '3',
      name: 'Ramón Sanchez',
      role: 'Electrician',
    },
  ];

  const messages: { [key: string]: Message[] } = {
    '1': [
      {
        id: 1,
        sender: 'other',
        text: 'Hello my name is Mario Rivas. How can I help you today?',
      },
    ],
    // Se añaden arrays vacíos para los otros usuarios para que no de error al seleccionarlos
    '2': [],
    '3': [],
  };

  const currentConversationMessages = selectedConversationId ? messages[selectedConversationId] || [] : [];
  const currentConversation = conversations.find(conv => conv.id === selectedConversationId);
  const currentConversationIndex = conversations.findIndex(c => c.id === currentConversation?.id);


  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentMessage.trim() && selectedConversationId) {
      alert(`Simulando envío a ${currentConversation?.name}: ${currentMessage}`);
    }
  };

  return (
    <div className="flex h-screen bg-gray-200 font-sans">
      {/* Columna de Contactos (Sidebar) */}
      <aside className="w-[320px] bg-[#c02026] text-white p-6 flex flex-col flex-shrink-0">
        <h2 className="text-3xl font-normal mb-6">Messages</h2>
        
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Find your contact"
            className="w-full bg-[#c02026] border border-[#a01c20] rounded-full py-2.5 pl-4 pr-10 text-white placeholder-pink-200 focus:outline-none"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-pink-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <ul className="space-y-4">
          {conversations.map((conv, index) => (
            <li
              key={conv.id}
              className={`flex items-center p-2 rounded-lg cursor-pointer ${
                selectedConversationId === conv.id ? 'bg-black/20' : 'hover:bg-black/10'
              }`}
              onClick={() => setSelectedConversationId(conv.id)}
            >
              <div className={`flex-shrink-0 w-[50px] h-[50px] rounded-full mr-4 border-2 border-white flex items-center justify-center ${avatarColors[index % avatarColors.length]}`}>
                <span className="text-xl font-semibold text-white">
                  {conv.name.charAt(0)}
                </span>
              </div>
              <span className="font-medium text-lg">{conv.name}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Área de Chat Principal */}
      <main className="flex-1 bg-[#f7f7f7] flex flex-col">
        {currentConversation ? (
          <>
            {/* Encabezado del Chat */}
            <div className="p-4 border-b border-gray-300 bg-[#e0e0e0] flex items-center">
               <div className={`flex-shrink-0 w-[50px] h-[50px] rounded-full mr-4 flex items-center justify-center ${avatarColors[currentConversationIndex % avatarColors.length]}`}>
                  <span className="text-xl font-semibold text-white">
                      {currentConversation.name.charAt(0)}
                  </span>
               </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">{currentConversation.name}</h2>
                <p className="text-sm text-gray-600">{currentConversation.role}</p>
              </div>
            </div>

            {/* Cuerpo del Chat (mensajes) */}
            <div className="flex-1 p-8 overflow-y-auto flex flex-col items-start space-y-4">
              <div className="self-center bg-[#f8c8dc] text-white px-4 py-1 rounded-full text-sm my-4">
                Today
              </div>
              {currentConversationMessages.length > 0 ? (
                currentConversationMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className="max-w-[65%] p-3 px-4 rounded-2xl bg-[#e0e0e0] text-gray-800 rounded-bl-md"
                  >
                    <p>{msg.text}</p>
                  </div>
                ))
              ) : (
                <div className="self-center text-gray-500">No hay mensajes en esta conversación.</div>
              )}
            </div>

            {/* Formulario de envío de mensajes (restaurado) */}
            <form onSubmit={handleSendMessage} className="p-4 flex items-center gap-4">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                className="flex-grow px-5 py-3 border-none rounded-full bg-[#fce4ec] text-gray-700 focus:outline-none focus:ring-0"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#f8c8dc] text-white font-bold rounded-full hover:bg-[#f4b2d0] transition-colors"
              >
                Send
              </button>
            </form>
          </>
        ) : (
          <div className="flex-grow flex items-center justify-center text-gray-500">
            Selecciona una conversación para empezar a chatear.
          </div>
        )}
      </main>
    </div>
  );
}