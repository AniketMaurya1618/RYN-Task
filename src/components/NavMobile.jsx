import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

import Button from '../components/ReusableComponent/Button';

const NavMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="md:hidden text-white px-4 py-4 flex justify-between items-center">
      <img src="./public/assets/logo.png" alt="Brand Logo" className="w-16" />

      <button onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black text-white px-6 py-4 flex flex-col gap-4 shadow-md z-50">
          {["Home", "About", "Project", "Contact"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-sm border-b border-gray-800 pb-2"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button text="HERE ME" className="mt-4 w-full" />
        </div>
      )}
    </header>
  );
};

export default NavMobile;
