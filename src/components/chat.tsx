'use client';

import { useChat } from 'ai/react';

enum InputLanguage {
  Natural = 'Natural Language',
  YAML = 'yaml',
  JSON = 'json',
}

type OutputLanguage = string;

interface ChatProps {
  inputLanguage: InputLanguage;
  outputLanguage: OutputLanguage;
}

export default function Chat({ inputLanguage, outputLanguage }: ChatProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    body: {
      inputLanguage,
      outputLanguage,
    }
  });


  return (
    <div className="mx-auto w-full   max-w-md px-4 py-24 flex flex-col justify-between min-h-screen bg-gray-900 text-gray-50">
      <div className="overflow-y-auto no-scrollbar space-y-4">
        {messages.map((m) => (
          <div key={m.id} className={`font-medium text-lg ${m.role === 'user' ? 'text-pink-400' : 'text-green-400'}`}>
            <span className="font-bold">{m.role === 'user' ? 'User: ' : 'AI: '}</span>
            {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-4">
        <input
          className="w-full bg-gray-800 text-gray-200 border border-gray-700 rounded py-2 px-4 shadow-lg placeholder-gray-500 focus:outline-none focus:border-pink-400"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
