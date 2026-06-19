import React from 'react';

interface RecentProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  viewedAt: string;
}

interface RecentlyViewedProps {
  products?: RecentProduct[];
}

export const RecentlyViewed: React.FC<RecentlyViewedProps> = ({ products = [] }) => {
  return <div className="recently-viewed">{/* Recently viewed implementation */}</div>;
};
