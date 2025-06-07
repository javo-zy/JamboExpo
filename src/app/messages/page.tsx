'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';

interface Message {
  id: number;
  sender: 'me' | 'other';
  text: string;
  time: string;
}

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  avatarUrl?: string;
}

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>('1');
  const [currentMessage, setCurrentMessage] = useState<string>('');

  const conversations: Conversation[] = [
    {
      id: '1',
      name: 'Mario Rivas',
      lastMessage: 'Ok, nos vemos el lunes a las 9 AM.',
      time: '10:30 AM',
      avatarUrl: '/images/professionals/mario-rivas.jpg',
    },
    {
      id: '2',
      name: 'José Medina',
      lastMessage: 'Sí, puedo revisar tu fuga hoy mismo.',
      time: 'Ayer',
      avatarUrl: '/images/professionals/jose-medina.jpg',
    },
    {
      id: '3',
      name: 'Ramón Sánchez',
      lastMessage: 'Necesito más detalles del trabajo.',
      time: '2 días',
      avatarUrl: '/images/professionals/ramon-sanchez.jpg',
    },
  ];

  const messages: { [key: string]: Message[] } = {
    '1': [
      { id: 1, sender: 'other', text: 'Hola Mario, ¿estás disponible el lunes por la mañana?', time: '10:00 AM' },
      { id: 2, sender: 'me', text: 'Sí, podría ir el lunes a las 9 AM. ¿Qué tipo de trabajo es?', time: '10:05 AM' },
      { id: 3, sender: 'other', text: 'Necesito que instales una lámpara de techo en la sala.', time: '10:10 AM' },
      { id: 4, sender: 'me', text: 'Ok, nos vemos el lunes a las 9 AM.', time: '10:30 AM' },
    ],
    '2': [
      { id: 1, sender: 'other', text: 'Hola José, tengo una fuga de agua en el baño.', time: 'Ayer 3:00 PM' },
      { id: 2, sender: 'me', text: 'Sí, puedo revisar tu fuga hoy mismo. ¿Cuál es tu dirección?', time: 'Ayer 3:15 PM' },
    ],
  };

  const currentConversationMessages = selectedConversation ? messages[selectedConversation] : [];
  const currentConversation = selectedConversation ? conversations.find(conv => conv.id === selectedConversation) : null;

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentMessage.trim() && selectedConversation) {
      const newMessage: Message = {
        id: currentConversationMessages.length + 1,
        sender: 'me',
        text: currentMessage,
        time: new Date().toLocaleTimeString('es-SV', { hour: '2-digit', minute: '2-digit' }),
      };

      alert(`Simulando envío de mensaje: ${currentMessage}`); 
      setCurrentMessage('');
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row h-[calc(100vh-16rem)]">
      {/* Columna de Conversaciones */}
      <aside className="w-full md:w-1/4 bg-white rounded-lg shadow-md overflow-y-auto mb-6 md:mb-0 md:mr-6 flex-shrink-0">
        <h2 className="text-xl font-bold text-gray-800 p-4 border-b">Conversaciones</h2>
        {conversations.map((conv) => (
          <div
            key={conv.id}
            className={`flex items-center p-4 border-b cursor-pointer ${
              selectedConversation === conv.id ? 'bg-red-50' : 'hover:bg-gray-50'
            }`}
            onClick={() => setSelectedConversation(conv.id)}
          >
            {conv.avatarUrl ? (
              <Image
                src={conv.avatarUrl}
                alt={conv.name}
                width={40}
                height={40}
                className="rounded-full mr-3 object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-semibold mr-3">
                {conv.name.charAt(0)}
              </div>
            )}
            <div>
              <p className="font-semibold text-gray-800">{conv.name}</p>
              <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
              <p className="text-xs text-gray-500">{conv.time}</p>
            </div>
          </div>
        ))}
      </aside>

      {/* Área de Chat */}
      <main className="w-full md:w-3/4 bg-white rounded-lg shadow-md flex flex-col">
        {currentConversation ? (
          <>
            {/* Encabezado del Chat */}
            <div className="p-4 border-b flex items-center">
              {currentConversation.avatarUrl ? (
                <Image
                  src={currentConversation.avatarUrl}
                  alt={currentConversation.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-3 object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-semibold mr-3">
                  {currentConversation.name.charAt(0)}
                </div>
              )}
              <h2 className="text-xl font-bold text-gray-800">{currentConversation.name}</h2>
            </div>

            {/* Cuerpo del Chat (mensajes) */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4">
              {currentConversationMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      msg.sender === 'me'
                        ? 'bg-red-700 text-white rounded-br-none'
                        : 'bg-gray-200 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <span className="text-xs opacity-80 mt-1 block text-right">
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Formulario de envío de mensajes */}
            <form onSubmit={handleSendMessage} className="p-4 border-t flex items-center">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-red-500 focus:border-red-500"
              />
              <Button type="submit" className="ml-4 px-6 py-2">
                Enviar
              </Button>
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