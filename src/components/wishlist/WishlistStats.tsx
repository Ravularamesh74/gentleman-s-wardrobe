import React from 'react';

interface WishlistStatsProps {
  totalItems?: number;
  totalValue?: number;
  savedAmount?: number;
  lastUpdated?: string;
}

export const WishlistStats: React.FC<WishlistStatsProps> = ({ 
  totalItems = 0, 
  totalValue = 0, 
  savedAmount = 0, 
  lastUpdated 
}) => {
  return <div className="wishlist-stats">{/* Wishlist stats implementation */}</div>;
};
