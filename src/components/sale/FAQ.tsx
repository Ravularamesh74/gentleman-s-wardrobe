import React from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  faqs?: FAQItem[];
}

export const FAQ: React.FC<FAQProps> = ({ faqs = [] }) => {
  return <div className="faq">{/* FAQ implementation */}</div>;
};
