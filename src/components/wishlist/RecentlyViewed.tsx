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
  onAddToWishlist?: (productId: string) => void;
}

export const RecentlyViewed: React.FC<RecentlyViewedProps> = ({ products = [], onAddToWishlist }) => {
  return <div className="recently-viewed">{/* Recently viewed implementation */}</div>;
};
