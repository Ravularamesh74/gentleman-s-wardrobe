import React from 'react';

interface MobileBottomBarProps {
  price?: number;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  onShare?: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ 
  price, 
  onAddToCart, 
  onBuyNow, 
  onShare 
}) => {
  return <div className="mobile-bottom-bar">{/* Mobile bottom bar implementation */}</div>;
};
