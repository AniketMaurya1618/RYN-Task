import React from 'react';
import Card from '../components/ReusableComponent/Card.jsx';
import Star from '../components/ReusableComponent/Star.jsx';


const projects = [
  {
    title: 'Analysis Applicati/srcn',
    description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence',
    tags: ['FIGMA', 'UX'],
    image: "./public/assets/1.png",
    linkLabel: 'View Case Study',
    link: '#',
    vertical: false,
  },
  {
    title: 'Fortknox Application',
    description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
    tags: ['MOBILE', 'WEB'],
    image: "./public/assets/2.png",
    linkLabel: 'View Case Study',
    link: '#',
    vertical: false,
  },
  {
    title: 'Zenocide Application',
    description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
    tags: ['APP', 'WEB'],
    image:"./public/assets/3.png",
    linkLabel: 'View Case Study',
    link: '#',
    vertical: false,
  }
];

function Work() {
  return (
    <div className="max-w-screen-xl mx-auto mb-15 px-4">
      <div className="flex justify-between items-center">
        <Star text="Work" />
        <a className="text-white underline text-sm" href="#">View all</a>
      </div>

      <div className="py-10 ">
        {projects.map((project, index) => (
          <Card key={index} data={project} />
        ))}
      </div>
    </div>
  );
}

export default Work;
