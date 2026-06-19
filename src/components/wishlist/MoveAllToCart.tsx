import React from 'react';

interface MoveAllToCartProps {
  itemCount?: number;
  totalPrice?: number;
  onMoveAll?: () => void;
  isLoading?: boolean;
}

export const MoveAllToCart: React.FC<MoveAllToCartProps> = ({ 
  itemCount = 0, 
  totalPrice = 0, 
  onMoveAll, 
  isLoading = false 
}) => {
  return <div className="move-all-to-cart">{/* Move all to cart implementation */}</div>;
};
