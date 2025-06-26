import React from 'react';
import Button from './ReusableComponent/Button';


const NavDesktop = () => {
  return (
    <header className="hidden md:flex text-white max-w-screen-xl mx-auto py-6 items-center justify-between px-4">
      <div className="flex items-center gap-20">
        <img src="./public/assets/logo.png" alt="Brand Logo" className="w-20" />
        <nav className="flex gap-10 text-sm">
          {["Home", "About", "Project", "Contact"].map((elem, index) => (
            <a
              key={index}
              href="#"
              className="hover:bg-white hover:text-black px-3 py-1 rounded-full transition"
            >
              {elem}
            </a>
          ))}
        </nav>
      </div>
      <Button text="HERE ME" className='bg-white text-black' />
    </header>
  );
};

export default NavDesktop;
