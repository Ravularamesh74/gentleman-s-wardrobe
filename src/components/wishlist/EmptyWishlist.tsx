import React from 'react';

interface EmptyWishlistProps {
  onStartShopping?: () => void;
  onBrowseRecommendations?: () => void;
}

export const EmptyWishlist: React.FC<EmptyWishlistProps> = ({ onStartShopping, onBrowseRecommendations }) => {
  return <div className="empty-wishlist">{/* Empty wishlist implementation */}</div>;
};
