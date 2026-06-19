import React from 'react';

interface WishlistActionsProps {
  itemCount?: number;
  onMoveAllToCart?: () => void;
  onShareWishlist?: () => void;
  onClearWishlist?: () => void;
  onCreateCollection?: () => void;
}

export const WishlistActions: React.FC<WishlistActionsProps> = ({ 
  itemCount = 0, 
  onMoveAllToCart, 
  onShareWishlist, 
  onClearWishlist, 
  onCreateCollection 
}) => {
  return <div className="wishlist-actions">{/* Wishlist actions implementation */}</div>;
};
