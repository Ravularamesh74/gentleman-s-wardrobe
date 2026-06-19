import React from 'react';

interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}

interface ReviewListProps {
  reviews?: Review[];
}

export const ReviewList: React.FC<ReviewListProps> = ({ reviews = [] }) => {
  return <div className="review-list">{/* Review list implementation */}</div>;
};
