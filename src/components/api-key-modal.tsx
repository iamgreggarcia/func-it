// src/components/ApiKeyModal.tsx
import { FC } from 'react';
import Link from 'next/link';
import ApiKeyInput from './api-key-input';

type ApiKeyModalProps = {
  apiKey: string;
  onApiKeyChange: (value: string) => void;
};

const ApiKeyModal: FC<ApiKeyModalProps> = ({ apiKey, onApiKeyChange }) => (
  <div className="fixed inset-0 flex items-center justify-center z-20">
    <div className="bg-white rounded-lg p-8 shadow-lg text-black">
      <h2 className="text-xl mb-4">Welcome!</h2>
      <p className='mb-2'>Please enter your OpenAI API Key to start using the application.</p>
      <Link
        className='text-blue-500 text-sm hover:text-blue-700 italic'
        href="https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key"
      >Help: OpenAI API Key</Link>
      <div className="w-full mt-4">
        <ApiKeyInput apiKey={apiKey} onChange={onApiKeyChange} />
      </div>
    </div>
  </div>
);

export default ApiKeyModal;
