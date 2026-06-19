import React from 'react';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

interface RecentlyViewedProps {
  products?: Product[];
}

export const RecentlyViewed: React.FC<RecentlyViewedProps> = ({ products = [] }) => {
  return <div className="recently-viewed">{/* Recently viewed implementation */}</div>;
};
