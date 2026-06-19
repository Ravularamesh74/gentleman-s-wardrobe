import React from 'react';

interface RatingBreakdownProps {
  breakdown?: Record<string, number>;
}

export const RatingBreakdown: React.FC<RatingBreakdownProps> = ({ breakdown = {} }) => {
  return <div className="rating-breakdown">{/* Rating breakdown implementation */}</div>;
};
