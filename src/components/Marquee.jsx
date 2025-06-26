import React from 'react';
import { motion } from 'framer-motion';

const images = [
  [
    "./public/assets/dev.png",
    "./public/assets/Star.png",
    "./public/assets/designer.png",
    "./public/assets/Star.png",
    "./public/assets/wavefun.png",
    "./public/assets/Star.png",
    "./public/assets/figma.png",
  ],
  [
   "./public/assets/dev.png",
    "./public/assets/Star.png",
    "./public/assets/designer.png",
    "./public/assets/Star.png",
    "./public/assets/wavefun.png",
    "./public/assets/Star.png",
    "./public/assets/figma.png",
  ]
];

const Marquee = () => {
  return (
    <div className=" mx-auto overflow-hidden py-6 bg-black">
      <motion.div
        className="flex gap-6"
        animate={{ x: ['0%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {[...images, ...images].flat().map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`marquee-${index}`}
            className="w-32 h-auto inline-block"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
