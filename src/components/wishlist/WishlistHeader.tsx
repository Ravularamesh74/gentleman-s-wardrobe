import React from 'react';

interface WishlistHeaderProps {
  title?: string;
  itemCount?: number;
  onExport?: () => void;
}

export const WishlistHeader: React.FC<WishlistHeaderProps> = ({ title = 'Wishlist', itemCount = 0, onExport }) => {
  return <div className="wishlist-header">{/* Wishlist header implementation */}</div>;
};
