import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Logo from '../assets/logo.png';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="md:hidden text-white px-4 py-4 flex items-center justify-between">
      <img src={Logo} alt="Logo" className="w-10" />

      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-6 z-50">
          {["Home", "About", "Project", "Contact"].map((item, idx) => (
            <a key={idx} href="#" className="text-sm">
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default MobileNav;
