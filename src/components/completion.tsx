'use client'

import { useEffect, useState } from 'react';
import { useCompletion } from 'ai/react';
import { CodeBlock } from "@/components/codeblock"
import { OPENAPI_JSON } from '../utils/const'


enum InputLanguage {
  Natural = 'Natural Language',
  YAML = 'yaml',
  JSON = 'json',
}

type OutputLanguage = string;


interface CompletionProps {
  inputLanguage: InputLanguage;
  outputLanguage: OutputLanguage;
}

export default function Completion({ inputLanguage, outputLanguage }: CompletionProps) {
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    setApiKey(localStorage.getItem('apiKey') || '');
  }, []);

  const {
    completion,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit
  } = useCompletion({
    api: '/api/completion',
    initialInput: OPENAPI_JSON,
    body: {
      inputLanguage: inputLanguage || 'json',
      outputLanguage: outputLanguage || 'python',
      apikey: apiKey,
    }
  })

  const [firstCodeBlockValue, setFirstCodeBlockValue] = useState(OPENAPI_JSON);
  const [secondCodeBlockValue, setSecondCodeBlockValue] = useState('');

  useEffect(() => {
    setSecondCodeBlockValue(completion || '');
  }, [completion]);

  const handleFirstCodeBlockChange = (newCode: string) => {
    setFirstCodeBlockValue(newCode);
    handleInputChange({ target: { value: newCode } });
  };

  return (
    <div className="mx-auto w-full flex flex-col h-screen pb-8">
      <form className="flex flex-grow overflow-hidden" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row justify-around w-full h-5/6">
          <div className="w-full md:w-3/5 h-1/2 md:h-full overflow-auto bg-[#21202e] mb-4 md:mb-0">
            <CodeBlock code={firstCodeBlockValue} onChange={handleFirstCodeBlockChange} />
          </div>
          <div className="flex flex-col justify-center mx-4">
            {isLoading && (
              <button type="button" onClick={stop} className="relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 transform transition duration-500 ease-in-out hover:scale-105">
                <svg className="absolute top-0 left-0 h-full w-full" viewBox="0 0 150 50">
                  <path className="stroke-current stroke-2" d="M5 5 H 145 V 45 H 5 Z" fill="transparent" strokeDasharray="300" strokeDashoffset="300">
                    <animate attributeName="stroke-dashoffset" from="300" to="0" dur="2s" repeatCount="indefinite" />
                  </path>
                </svg>
                STOP GENERATING
              </button>
            )}
            <button
              disabled={isLoading}
              type="submit"
              className={`relative bg-[#f0f3f4] hover:bg-[#d5eaf0] text-[#312f2f] hover:text-[#302f2f] font-bold py-2 px-12 rounded transform transition duration-500 ease-in-out ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
            >
              CONVERT
            </button>
          </div>
          <div className="w-full md:w-3/5 h-1/2 md:h-full overflow-auto bg-[#21202e] mt-4 md:mt-0">
            <CodeBlock code={secondCodeBlockValue} editable={false} showCopy={true} />
          </div>
        </div>
      </form>
    </div>
  )
}
