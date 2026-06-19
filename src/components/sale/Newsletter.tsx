import React from 'react';

interface NewsletterProps {
  onSubscribe?: (email: string) => void;
  placeholder?: string;
}

export const Newsletter: React.FC<NewsletterProps> = ({ onSubscribe, placeholder = 'Enter your email' }) => {
  return <div className="newsletter">{/* Newsletter implementation */}</div>;
};
