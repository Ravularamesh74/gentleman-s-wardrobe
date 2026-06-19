import React from 'react';

interface FreeShippingBannerProps {
  minimumAmount?: number;
  currentCartAmount?: number;
  onShop?: () => void;
}

export const FreeShippingBanner: React.FC<FreeShippingBannerProps> = ({ 
  minimumAmount = 0, 
  currentCartAmount = 0, 
  onShop 
}) => {
  return <div className="free-shipping-banner">{/* Free shipping banner implementation */}</div>;
};
