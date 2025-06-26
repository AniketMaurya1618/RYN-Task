import React from 'react';
import Star from '../components/ReusableComponent/Star.jsx';
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="text-white py-12 max-w-screen-xl mx-auto px-4">
      <div>
        <Star text="What they say" />
      </div>

      <div className="flex flex-col justify-between mt-5 items-center">
        <div className="p-8 flex flex-col md:flex-row w-full rounded-2xl gap-6 items-start md:items-center">
          
          <div className="flex gap-4 min-w-[180px] w-1/2">
            <img
              src="./public/assets/pic.png"
              alt="User"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">Floyd Miles</h4>
              <p className="text-sm text-gray-400 mb-4">@eBay</p>
            </div>
          </div>

      
          <div className="flex-1 max-w-3xl relative">
            <p className="text-2xl font-light italic leading-relaxed">
              <span className="text-6xl text-gray-500 absolute -left-1.5 opacity-50 -top-6"><FaQuoteLeft /></span>
              Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.
            </p>
          </div>
        </div>

      
        <div className="flex gap-2 mt-4">
          <button className="w-8 h-8 rounded-full bg-white text-black text-sm">&larr;</button>
          <button className="w-8 h-8 rounded-full bg-white text-black text-sm">&rarr;</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
