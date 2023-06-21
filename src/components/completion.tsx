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
          <div className=" w-full md:w-3/5 h-1/2 md:h-full overflow-auto bg-[#21202e] shadow-xl mb-4 md:mb-0">
            <CodeBlock code={firstCodeBlockValue} onChange={handleFirstCodeBlockChange} />
          </div>
          <div className="flex flex-col justify-center mx-4">

            {!isLoading && (
              <button
                disabled={isLoading}
                type="submit"
                className='relative bg-[#f0f3f4] hover:bg-[#d5eaf0] text-[#312f2f] hover:text-[#302f2f] font-bold py-2 px-8 rounded transform transition duration-500 ease-in-out hover:scale-105'
              >
                <h3 className='flex flex-row justify-between'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                  </svg>
                  GENERATE</h3>
              </button>) || (
                <button
                  type="button"
                  onClick={stop}
                  className="relative bg-[#f0f3f4] hover:bg-[#d5eaf0] text-[#312f2f] hover:text-[#302f2f] font-bold py-2 px-4 rounded mb-4 transform duration-500 ease-in-out hover:scale-105"
                >
                                  <h3 className='flex flex-row justify-between'>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                  </svg>
                  STOP
                  </h3>
                </button>
              )}

          </div>
          <div className="w-full md:w-3/5 h-1/2 md:h-full overflow-auto bg-[#21202e] shadow-xl mt-4 md:mt-0">
            <CodeBlock code={secondCodeBlockValue} editable={false} showCopy={true} />
          </div>
        </div>
      </form>
    </div>
  )
}
