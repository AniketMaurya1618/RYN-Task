import React from 'react';

const Footer = () => {
  return (
    <footer className="max-w-screen-xl mx-auto text-white text-center py-12 px-4">
      <h2 className="text-8xl md:text-7xl font-extrabold mb-6">LET’S TALK!</h2>
      <a href="mailto:rehanurraihan@gmail.com" className="underline text-lg">
        rehanurraihan@gmail.com ↗
      </a>
      <div className='flex justify-between items-center'>
        <div>
          <p className="text-xs mt-8">© Aniket Maurya - 2025</p>
        </div>
        <div className="mt-8 flex justify-center gap-6 text-sm text-gray-400">
          <a href="#">Dribbble</a>
          <a href="#">Behance</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
