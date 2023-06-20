'use client'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Completion from '@/components/completion';
import InputLanguageSelector from '@/components/input-lang-selector';
import OutputLanguageSelector from '@/components/output-lang-selector';

enum InputLanguage {
    Natural = 'Natural Language',
    YAML = 'yaml',
    JSON = 'json',
}

type OutputLanguage = string;

export default function Home() {
    const [inputLanguage, setInputLanguage] = useState<InputLanguage>(InputLanguage.JSON);
    const [outputLanguage, setOutputLanguage] = useState<OutputLanguage>('Python');

    const handleInputLanguageChange = (selectedOption: InputLanguage) => {
        setInputLanguage(selectedOption);
    };

    const handleOutputLanguageChange = (selectedOption: OutputLanguage) => {
        setOutputLanguage(selectedOption);
    };

    return (
        <>
            <main className={`bg-gradient min-h-screen flex flex-col items-center py-12 px-6 md:px-12 lg:px-24 overflow-hidden flex-grow`}>
                <ToastContainer />
                <h1 className="text-5xl font-extrabold tracking-tight mb-6 font-mono">Func-it</h1>
<p className="text-white text-center text-lg mb-4">
    Generate a Chat Completions API <code className=" text-gray-300 font-semibold ">functions</code> parameter from your existing API.
</p>
<p className="text-white text-center text-sm mb-12">
    Quickly get started with <a href="https://platform.openai.com/docs/guides/gpt/function-calling" target="_blank" rel="noopener noreferrer" className=" hover:text-zinc-300 text-zinc-200 font-semibold ">
        function calling
        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4 ml-1 mb-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M15 5v6h-1V6H5v8h6v1H4V4h11z" />
        </svg>
    </a> enabled GPT models by pasting your API specification and converting it to a ready-to-use <code className="text-gray-300 font-semibold">functions</code> parameter in the language of your choice.
</p>
                <div className="w-full flex flex-col md:flex-row md:justify-between m-6">
                    <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                        <p className="text-sm text-white mb-2">Input language</p>
                        <InputLanguageSelector onLanguageChange={handleInputLanguageChange} />
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <p className="text-sm text-white mb-2">Output language</p>
                        <OutputLanguageSelector onLanguageChange={handleOutputLanguageChange} />
                    </div>
                </div>
                <Completion inputLanguage={inputLanguage} outputLanguage={outputLanguage} />
                <span className="text-sm">View on <a href="https://openai.com/" target="_blank" className="underline">GitHub</a></span>

            </main>

        </>
    );
}