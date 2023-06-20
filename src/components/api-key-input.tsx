'use client'
import { useState } from 'react';
import { FiCheck, FiX, FiEdit2 } from 'react-icons/fi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  apiKey: string;
  onChange: (value: string) => void;
}

const ApiKeyInput: React.FC<Props> = ({ apiKey, onChange }) => {
  const [inputValue, setInputValue] = useState(apiKey);
  const [isEditable, setIsEditable] = useState(!apiKey);

  const handleSave = () => {
    if (inputValue) {
      onChange(inputValue);
      setInputValue('');
      toast.success('API key saved successfully!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  }

  const handleCancel = () => {
    setInputValue('');
  }

  return (
    <div>
      <input 
        className={`border border-gray-300 m-2 rounded-md p-2 w-64 text-black ${isEditable ? '' : 'opacity-50 cursor-not-allowed'}`}
        type="password" 
        placeholder="Enter OpenAI API key"
        value={inputValue} 
        onChange={e => setInputValue(e.target.value)} 
        disabled={!isEditable}
      />
      { isEditable && (
        <>
          <button className='m-2' onClick={handleSave} disabled={!inputValue}>
            <FiCheck />
          </button>
          <button onClick={handleCancel}>
            <FiX />
          </button>
        </>
      )}
      { !isEditable && (
        <button onClick={() => setIsEditable(true)}>
          <FiEdit2 />
        </button>
      )}
    </div>
  );  
};

export default ApiKeyInput;
