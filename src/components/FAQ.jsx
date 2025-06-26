import React from 'react';

import Star from '../components/ReusableComponent/Star';

const faqs = [
  {
    question: "What is your design process?",
    answer:
      "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
  },
  {
    question: "What tools and software do you use for UX design?",
  },
  {
    question: "How do you measure the success of your UX designs?",
  },
];

const FAQ = () => {
  return (
    <div className="text-white py-12 px-4 max-w-screen-xl mx-auto">
    <div>
        <Star text= "Frequently asked questions"/>
    </div>

      <div className="space-y-6 py-8">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h4 className="text-2xl font-semibold">{faq.question}</h4>
            {faq.answer && <p className="text-md text-gray-400 mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
