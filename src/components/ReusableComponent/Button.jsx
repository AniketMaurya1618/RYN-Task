import React from 'react';

function Button({ text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent py-1 min-w-40 rounded-full border border-white flex items-center justify-center cursor-pointer ${className}`}
    >
      <span className="text-sm font-semibold">{text}</span>
    </button>
  );
}

export default Button;
