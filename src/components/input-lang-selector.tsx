'use client'
import { useState } from 'react';

enum InputLanguage {
    Natural = 'Natural Language',
    YAML = 'yaml',
    JSON = 'json',
}

interface InputLanguageSelectorProps {
    onLanguageChange: (selectedOption: InputLanguage) => void;
}

export default function InputLanguageSelector({ onLanguageChange }: InputLanguageSelectorProps) {
    const [selectedOption, setSelectedOption] = useState<InputLanguage>(InputLanguage.JSON);

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value as InputLanguage;
        setSelectedOption(selectedLanguage);
        onLanguageChange(selectedLanguage);
    };

    return (
<select
    className="px-4 py-2 rounded border border-gray-500 bg-white text-black mb-4 transition-colors duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 hover:text-black focus:outline-none focus:bg-gray-300 focus:text-black"
    onChange={handleLanguageChange}
    value={selectedOption}
>
    <option value={InputLanguage.JSON}>{InputLanguage.JSON}</option>
    <option value={InputLanguage.YAML}>{InputLanguage.YAML}</option>
    <option value={InputLanguage.Natural}>{InputLanguage.Natural}</option>
</select>

    )
}
