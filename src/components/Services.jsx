import React from 'react';
import ServiceCard from './ServiceCard';

const items = [
  {
    title: "Branding",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
  },
  {
    title: "UI Design",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
  },
  {
    title: "UX Design",
    description:
      "I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements.",
  },
  {
    title: "Development",
    description:
      "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach. I employ it to produce safe, top-notch personalized websites.",
  },
];

function Services() {
  return (
    <div className="bg-black py-12 px-2 grid md:grid-cols-2 gap-10">
      {items.map((item, index) => (
        <ServiceCard
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default Services;
