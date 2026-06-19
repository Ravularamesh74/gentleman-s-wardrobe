import React from 'react';

interface StickyBuyBarProps {
  productName?: string;
  price?: number;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
}

export const StickyBuyBar: React.FC<StickyBuyBarProps> = ({ productName, price, onAddToCart, onBuyNow }) => {
  return <div className="sticky-buy-bar">{/* Sticky bar implementation */}</div>;
};
