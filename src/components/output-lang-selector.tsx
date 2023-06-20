// src/components/output-lang-selector.tsx
'use client'
import { useState } from 'react';
import { Languages, LANGUAGES } from '@/types/languages'; 

type OutputLanguage = Languages; 

interface OutputLanguageSelectorProps {
    onLanguageChange: (selectedOption: OutputLanguage) => void;
}

export default function OutputLanguageSelector({ onLanguageChange }: OutputLanguageSelectorProps) {
    const [selectedOption, setSelectedOption] = useState<OutputLanguage>(Languages.Python); 

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value as OutputLanguage;
        setSelectedOption(selectedLanguage);
        onLanguageChange(selectedLanguage);
    };

    return (
        <select
            className="px-4 py-2 rounded border border-gray-500 bg-white text-black mb-4 transition-colors duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 hover:text-black focus:outline-none focus:bg-gray-300 focus:text-black"
            onChange={handleLanguageChange}
            value={selectedOption}
        >
            {
              LANGUAGES.map(({ value, label }) => (
                  <option key={value} value={value}>{label}</option>
              ))
            }
        </select>
    )
}
