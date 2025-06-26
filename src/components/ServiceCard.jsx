import React from 'react';

function ServiceCard({ title, description }) {
  return (
    <div className="text-white ">
      <div className="flex items-center gap-2 mb-2">
        <span className="inline-block h-2 w-2  rounded-full bg-white"></span>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <div>

      <p className="text-md text-left text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
