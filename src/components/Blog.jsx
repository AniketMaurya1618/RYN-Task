import React from 'react';
import Card from '../components/ReusableComponent/Card.jsx';
import Star from '../components/ReusableComponent/Star.jsx';

const blogs = [
  {
    title: 'Designing with Purpose',
    description: 'How UX decisions shape product success.',
    tags: ['UX', 'Ui'],
    image: "./public/assets/1.png",
    linkLabel: 'Read Blog',
    link: '#',
    vertical: true,
  },
  {
    title: 'Modern Web Trends',
    description: 'Frontend tools and frameworks transforming the web.',
    tags: ['Design', 'Print'],
    image: "./public/assets/2.png",
    linkLabel: 'Read Blog',
    link: '#',
    vertical: true,
  },
  {
    title: 'Freelancing as a Designer',
    description: 'Tips and mindset shifts to thrive independently.',
    tags: ['Figma', 'Web'],
    image: "./public/assets/3.png",
    linkLabel: 'Read Blog',
    link: '#',
    vertical: true,
  }
];

function BlogCards() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-10">
        <Star text="Blog"/>
        <a className="text-white underline text-sm" href="#">View all</a>
      </div>

      <div className="flex flex-col gap-8">
        {blogs.map((blog, index) => (
          <Card key={index} data={blog} />
        ))}
      </div>
    </section>
  );
}

export default BlogCards;
