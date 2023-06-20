import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  text: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ onClick, text, type = 'button' }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="relative inline-block bg-black text-center py-3 px-10 w-auto rounded-full overflow-hidden transition-colors duration-500 ease-in-out hover:bg-white"
    >
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white transition-colors duration-500 ease-in-out hover:text-black">
        {text}
      </span>
      <svg
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48"
        viewBox="0 0 60 60"
        enableBackground="new 0 0 60 60"
      >
        <circle
          className="fill-current text-white transition-transform duration-500 ease-in-out transform scale-110 origin-center hover:scale-0"
          cx="30"
          cy="30"
          r="28.7"
        ></circle>
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-0.5 bg-white transition-all duration-500 ease-in-out">
        <div className="absolute top-0 left-0 w-1/2 h-full border-r border-white transition-all duration-500 ease-in-out transform translate-x-full border-opacity-0 hover:border-opacity-100 hover:translate-x-0"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full border-l border-white transition-all duration-500 ease-in-out transform -translate-x-full border-opacity-0 hover:border-opacity-100 hover:translate-x-0"></div>
      </div>
    </button>
  );
};

export default Button;