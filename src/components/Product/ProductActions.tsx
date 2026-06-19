import React from 'react';

interface ProductActionsProps {
  onAddToCart?: () => void;
  onBuyNow?: () => void;
}

export const ProductActions: React.FC<ProductActionsProps> = ({ onAddToCart, onBuyNow }) => {
  return <div className="product-actions">{/* Actions implementation */}</div>;
};
