import React from 'react';

interface ReviewSummaryProps {
  averageRating?: number;
  totalReviews?: number;
}

export const ReviewSummary: React.FC<ReviewSummaryProps> = ({ averageRating, totalReviews }) => {
  return <div className="review-summary">{/* Review summary implementation */}</div>;
};
